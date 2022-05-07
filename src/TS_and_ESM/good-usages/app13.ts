import { Context as AzureContext } from '@azure/functions';
import { Context as AwsContext, EventBridgeEvent, APIGatewayProxyEvent, APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2, APIGatewayProxyHandlerV2, SQSEvent, SNSEvent, SESEvent, S3Event, S3BatchEvent, SecretsManagerRotationEvent, DynamoDBStreamEvent, MSKEvent, ALBEvent, KinesisStreamEvent } from 'aws-lambda';

type MiddlewareServices<T = {}> = T & {
    elapsedMilliseconds?: number;
    validateRequest?: boolean;
    validateResponse?: boolean;
};

type Append<A extends unknown[], B extends unknown[]> = A extends [...infer Params] ? [...Params, ...(B extends [...infer Params2] ? Params2 : [])] : never;
type NonOptionalKeys<T> = T extends never ? never : { [k in keyof T]-?: undefined extends T[k] ? never : k }[keyof T];
type ElementOf<T> = T extends (infer E)[] ? E : T;

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
    type AwsEvent<TEvent = never> = APIGatewayProxyEvent | APIGatewayProxyEventV2 | EventBridgeEvent<string, any> | SQSEvent | SNSEvent | SESEvent | S3Event | S3BatchEvent | SecretsManagerRotationEvent | DynamoDBStreamEvent | MSKEvent | ALBEvent | KinesisStreamEvent | TEvent;

    type MiddlewareParameters<TEvent = AwsEvent> = [event: TEvent, context: AwsContext];

    type NextMiddleware<TParameters extends unknown[] = MiddlewareParameters<AwsEvent>, TResult = APIGatewayProxyStructuredResultV2> = (...args: TParameters) => Promise<TResult>;

    type Middleware<TParameters extends unknown[] = MiddlewareParameters<AwsEvent>, TServices = {}, TResult = APIGatewayProxyStructuredResultV2> = (...args: Append<TParameters, [services: MiddlewareServices<TServices>, next: NextMiddleware<TParameters, TResult>]>) => ReturnType<NextMiddleware<TParameters, TResult>>;

    const isAwsEvent = <TEvent extends AwsEvent>(event: AwsEvent, fieldName: NonOptionalKeys<TEvent>): event is TEvent => fieldName in event;


    const isAwsEventV2 = <TEvent extends AwsEvent>(event: AwsEvent, fieldName: NonOptionalKeys<TEvent>): event is TEvent => fieldName in event;

    type LL = ElementOf<NonOptionalKeys<APIGatewayProxyEvent>>;


    type NewMiddlewareType = Middleware<[event: AwsEvent]>;

    const errorMiddleware: NewMiddlewareType = async (event, services, next) => {

        return await next(event);
    };

    const corsMiddleware: NewMiddlewareType = async (event, _, next) => {

        return await next(event);
    };

    const jsonParser: NewMiddlewareType = async (event, _, next) => {

        if (isAwsEvent<APIGatewayProxyEvent>(event, 'path') || isAwsEvent<APIGatewayProxyEventV2>(event, 'rawPath')) {
            let parsedBody;
            try { parsedBody = event.body && JSON.parse(event.body); }
            catch (error: any) { throw new Error('invalid body, expected JSON'); }

            return await next(parsedBody);
        } else if (isAwsEvent<EventBridgeEvent<string, any>>(event, 'detail-type')) {

        }

        return await next(parsedBody);
    };

    const awsLambdaFunctionMiddleware: Middleware<[event: { firstName: string, lastName: string }]> = async (event) => {

        const { firstName, lastName } = event;

        const fullName = `${firstName} ${lastName}`;

        return { statusCode: 200, body: `Hello, ${fullName}` };
    };
}

export { };