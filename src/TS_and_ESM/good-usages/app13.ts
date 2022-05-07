import { Context as AzureContext } from '@azure/functions';
import { Context as AwsContext, APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

type MiddlewareServices<T = {}> = T & {
    elapsedMilliseconds?: number;
    validateRequest?: boolean;
    validateResponse?: boolean;
};

type Append<A extends unknown[], B extends unknown[]> = A extends [...infer Params] ? [...Params, ...(B extends [...infer Params2] ? Params2 : [])] : never;

// Azure Function Middleware
{
    type MiddlewareParameters = [context: AzureContext, inputData: any, cosmosDbData: any];

    type NextMiddleware<TParameters extends unknown[] = MiddlewareParameters, TResult = any> = (...args: TParameters) => void | Promise<void> | Promise<TResult>;

    type Middleware<TParameters extends unknown[] = MiddlewareParameters, TServices = {}> = (...args: Append<TParameters, [services: MiddlewareServices<TServices>, next: NextMiddleware<TParameters>]>) => ReturnType<NextMiddleware<TParameters>>;



    type NewMiddlewareType = Middleware<[context: AzureContext, inputData: any]>;

    const errorMiddleware: NewMiddlewareType = async (context, inputData, services, next) => {

        return await next(context, inputData);
    };

    const corsMiddleware: NewMiddlewareType = async (context, inputData, services, next) => {

        return await next(context, inputData);
    };

    const azureTriggerParser: NewMiddlewareType = async (context, inputData, _, next) => {

        const { type } = context.bindingDefinitions.find(def => def.direction === 'in')!;

        let newData;

        if (type === 'httpTrigger') {

            const { method, body, headers, params, query } = context.req || {};

            if (method === 'POST' && headers?.['content-type'] === 'application/json' && typeof body === 'string') {
                throw { message: "Request body is not json Object", statusCode: 400 };
            }

            newData = { ...body, ...headers, ...params, ...query };
        } else if (['eventGridTrigger', 'queueTrigger', 'eventHubTrigger'].includes(type)) {
            newData = inputData.data
        } else if (type === 'blobTrigger') {
            const jsonObj = inputData && JSON.parse(inputData.toString('utf8')) || { data: {} };

            newData = jsonObj.data;
        }


        return await next(newData, inputData);
    };

    const azureFunctionMiddleware: Middleware<[context: { firstName: string, lastName: string }]> = async (context) => {

        return { status: 200, body: 'Hello world!' };
    };
}

// Aws Lambda Function Middleware
{
    type MiddlewareParameters<TEvent = APIGatewayProxyEventV2> = [event: TEvent, context: AwsContext];

    type NextMiddleware<TParameters extends unknown[] = MiddlewareParameters<APIGatewayProxyEventV2>, TResult = APIGatewayProxyStructuredResultV2> = (...args: TParameters) => Promise<TResult>;

    type Middleware<TParameters extends unknown[] = MiddlewareParameters<APIGatewayProxyEventV2>, TServices = {}, TResult = APIGatewayProxyStructuredResultV2> = (...args: Append<TParameters, [services: MiddlewareServices<TServices>, next: NextMiddleware<TParameters, TResult>]>) => ReturnType<NextMiddleware<TParameters, TResult>>;


    type NewMiddlewareType = Middleware<[event: APIGatewayProxyEventV2]>;

    const errorMiddleware: NewMiddlewareType = async (event, services, next) => {

        return await next(event);
    };

    const corsMiddleware: NewMiddlewareType = async (event, _, next) => {

        return await next(event);
    };

    const jsonParser: NewMiddlewareType = async (event, _, next) => {

        let parsedBody;
        try { parsedBody = event.body && JSON.parse(event.body); }
        catch (error: any) { throw new Error('invalid body, expected JSON'); }

        return await next(parsedBody);
    };

    const awsLambdaFunctionMiddleware: Middleware<[event: { firstName: string, lastName: string }]> = async (event) => {

        const { firstName, lastName } = event;

        const fullName = `${firstName} ${lastName}`;

        return { statusCode: 200, body: `Hello, ${fullName}` };
    };
}

export { };