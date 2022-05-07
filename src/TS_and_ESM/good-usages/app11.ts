import { Context as AzureContext } from "@azure/functions";
// import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { APIGatewayProxyEventV2, Context as AwsContext, APIGatewayProxyStructuredResultV2 } from "aws-lambda";

type MiddlewareServices<T = {}> = T & {
    elapsedMilliseconds?: number;
    validateRequest?: boolean;
    validateResponse?: boolean;
};

{
    type MiddlewareParameters = [context: AzureContext, inputData: any, cosmoDbData: any];

    type NextMiddleware<TResult = any> = (...args: MiddlewareParameters) => void | Promise<void> | Promise<TResult>;

    type Middleware<TServices = {}> = (...args: [...MiddlewareParameters, ...[services: MiddlewareServices<TServices>, next: NextMiddleware]]) => ReturnType<NextMiddleware>;


    const errorMiddleware: Middleware = async (context, inputData, cosmosDbData, services, next) => {

        let result;
        try {

            result = await next(context, inputData, cosmosDbData);

        } catch (error) {

            const { executionContext: { functionName, invocationId } } = context;

            const log = { functionName, invocationId };
            const logJson = JSON.stringify(log);

            context.log.error(`ERROR: ${logJson}`, error);

            throw error;
        }

        return result;
    };

    const corsMiddleware: Middleware = async (context, inputData, cosmosDbData, _, next) => {

        const response = await next(context, inputData, cosmosDbData);

        const { type = '' } = context.bindingDefinitions.find(def => def.direction === 'in') || {};

        if (type === 'httpTrigger') {
            context.res = { status: 200, body: response, headers: { 'Access-Control-Allow-Origin': "*", "Access-Control-Allow-Credentials": false } };
        }

        return response;
    };

    const logMiddleware: Middleware = async (context, inputData, cosmosDbData, services, next) => {

        const { executionContext: { functionName, invocationId } } = context;

        const log = { functionName, invocationId };

        let logJson = JSON.stringify(log);

        context.log.info(`ENTRY: ${logJson}`);

        const result = await next(context, inputData, cosmosDbData);

        logJson = JSON.stringify({ ...log, duration: `${services.elapsedMilliseconds}ms` });

        context.log.info(`SUCCESS: ${logJson}`);

        return result;
    };

    const timingMiddleware: Middleware = async (context, inputData, cosmosDbData, services, next) => {

        const startDate: Date = new Date();

        const result: any = await next(context, inputData, cosmosDbData);

        services.elapsedMilliseconds = new Date().getTime() - startDate.getTime();

        return result;
    };

    const jsonParser: Middleware = async (context, inputData, cosmosDbData, services, next) => {

        // let { executionContext: { functionName } } = context;
        // const [azureFunctionName, triggerType] = functionName.split('-');
        // const { handlers } = services;
        // const handle = handlers[azureFunctionName];
        // if (!handle) {
        //     throw new Error(`${functionName} function can not be find.`);
        // }

        const { type = '' } = context.bindingDefinitions.find(def => def.direction === 'in') || {};

        let handleData;

        if (type === 'httpTrigger') {
            handleData = { ...inputData.body, ...inputData.headers, ...inputData.params, ...inputData.query }
        }
        else if (type === 'eventGridTrigger') {
            let { data } = inputData;
            handleData = JSON.parse(data);
        }
        else if (type === 'queueTrigger') {
            handleData = inputData;
        }
        else if (type === 'blobTrigger') {
            handleData = JSON.parse(inputData.toString('utf8'));
        }
        else if (type === 'eventHubTrigger') {
            handleData = inputData;
        }

        return await next(context, handleData, cosmosDbData);
    };


    const azureFunctionMiddleware: Middleware = async (context, inputData, cosmosDbData, services) => {

        const { firstName, lastName } = inputData;

        const response = `Hello ${firstName} ${lastName}`;

        return { body: response, statusCode: 200 };
    };
}

{
    type MiddlewareParameters<TEvent = APIGatewayProxyEventV2> = [event: TEvent, context: AwsContext];

    type NextMiddleware<TEvent = APIGatewayProxyEventV2> = (...args: MiddlewareParameters<TEvent>) => Promise<APIGatewayProxyStructuredResultV2>;

    type Middleware<TEvent = APIGatewayProxyEventV2, TServices = {}> = (...args: [...MiddlewareParameters<TEvent>, ...[services: MiddlewareServices<TServices>, next: NextMiddleware]]) => ReturnType<NextMiddleware>;


    const errorMiddleware: Middleware = async (event, context, services, next) => {

        let result: APIGatewayProxyStructuredResultV2;
        try {

            result = await next(event, context);

        } catch (error) {

            const { functionName } = context;

            const log = { functionName };
            const logJson = JSON.stringify(log);

            console.error(`ERROR: ${logJson}`, error);

            throw error;
        }

        return result;
    };

    const corsMiddleware: Middleware = async (event, context, _, next) => {

        const response = await next(event, context);

        if (!response.headers) {
            response.headers = {};
        }

        response.headers['Access-Control-Allow-Origin'] = '*';
        response.headers['Access-Control-Allow-Credentials'] = true;

        return response;
    };

    const logMiddleware: Middleware = async (event, context, services, next) => {

        const { functionName } = context;

        const log = { functionName };

        let logJson = JSON.stringify(log);

        console.log(`ENTRY: ${logJson}`);

        const result = await next(event, context);

        logJson = JSON.stringify({ ...log, duration: `${services.elapsedMilliseconds}ms` });

        console.log(`SUCCESS: ${logJson}`);

        return result;
    };

    const timingMiddleware: Middleware = async (event, context, services, next) => {

        const startDate: Date = new Date();

        const result: any = await next(event, context);

        services.elapsedMilliseconds = new Date().getTime() - startDate.getTime();

        return result;
    };

    const jsonParser: Middleware = async (event, context, services, next) => {

        let parsedBody;

        try {
            console.debug(`jsonParserMiddleware: parsing JSON in ${context.functionName}`, event);

            parsedBody = event.body && JSON.parse(event.body);
        } catch (e) {
            console.error(`jsonParserMiddleware: failed to parse JSON in ${context.functionName}`, {}, e);

            throw new Error('invalid body, expected JSON');
        }

        return next(parsedBody, context);
    };


    const lambdaMiddleware: Middleware<{ firstName: string; lastName: string; }> = async (event, context, services) => {

        const { firstName, lastName } = event;

        const response = `Hello ${firstName} ${lastName}`;

        return { body: response, statusCode: 200 };
    };
}
export { };