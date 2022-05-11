import { Context as AzureContext } from '@azure/functions';
import { Context as AwsContext, EventBridgeEvent, APIGatewayProxyEvent, APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2, APIGatewayProxyHandlerV2, SQSEvent, SNSEvent, SESEvent, S3Event, S3BatchEvent, SecretsManagerRotationEvent, DynamoDBStreamEvent, MSKEvent, ALBEvent, KinesisStreamEvent } from 'aws-lambda';

type MiddlewareServices<T = unknown> = T & {
    elapsedMilliseconds?: number;
    validateRequest?: boolean;
    validateResponse?: boolean;
};

interface Services {
    googleBearerToken: string;
    microsoftBearerToken: string;
    appleBearerToken: string;
};

type Append<A extends unknown[], B extends unknown[]> = A extends [...infer Params] ? [...Params, ...(B extends [...infer Params2] ? Params2 : [])] : never;
type NonOptionalKeys<T> = T extends never ? never : { [k in keyof T]-?: undefined extends T[k] ? never : k }[keyof T];

type NextMiddleware<TParameters extends unknown[], TResult = any> = (...args: TParameters) => void | Promise<void> | Promise<TResult>;

type Middleware<TParameters extends unknown[], TServices = unknown> = (...args: Append<TParameters, [services: MiddlewareServices<TServices>, next: NextMiddleware<TParameters>]>) => ReturnType<NextMiddleware<TParameters>>;

type MiddlewareType<T extends (...args: any[]) => any> = T extends (...args: [...infer I, infer _, infer K]) => any ? K extends (...a: any[]) => any ? I extends Parameters<K> ? T : never : never : never;


// Aws Lambda Function Middleware
{
    type AwsEvent<TEvent = never> = TEvent | APIGatewayProxyEvent | APIGatewayProxyEventV2 | EventBridgeEvent<string, any> | SQSEvent | SNSEvent | SESEvent | S3Event | S3BatchEvent | SecretsManagerRotationEvent | DynamoDBStreamEvent | MSKEvent | ALBEvent | KinesisStreamEvent;

    type AwsMiddlewareParameters<TEvent = AwsEvent> = [event: TEvent, context: AwsContext];

    type AwsMiddleware<TServices = unknown> = Middleware<AwsMiddlewareParameters, TServices>;

    type CustomBusinessMiddleware<TEvent = any, TServices = unknown, TResult = any> = NextMiddleware<[event: TEvent, context: AwsContext, services: MiddlewareServices<TServices>], TResult>;

    const isAwsEvent = <TEvent extends AwsEvent>(event: AwsEvent, fieldName: NonOptionalKeys<TEvent>): event is TEvent => fieldName in event;


    const errorMiddleware: AwsMiddleware = async (event, context, services, next) => {

        console.log(services.elapsedMilliseconds);

        return await next(event, context);
    };

    const corsMiddleware: AwsMiddleware = async (event, context, services, next) => {

        console.log(services.elapsedMilliseconds);

        return await next(event, context);
    };

    const azureTriggerParser: AwsMiddleware = async (event, context, _, next) => {

        return await next(event, context);
    };

    const authMiddleware: Middleware<AwsMiddlewareParameters, Services> = async (event, context, services, next) => {

        console.log(services.appleBearerToken);

        return await next(event, context);
    };

    const awsLambdaFunctionMiddleware: Middleware<[event: { firstName: string, lastName: string }]> = async (event) => {


        const { firstName, lastName } = event;

        const fullName = `${firstName} ${lastName}`;

        return { statusCode: 200, body: `Hello, ${fullName}` };
    };

    const notifyUser: CustomBusinessMiddleware<{ userName: string; email: string; isAdmin: boolean }> = async function (notifyUserData, context, services) {

        console.log(services.validateRequest);
    };

    const notifyCustomer: CustomBusinessMiddleware<any, Services> = async function (_, context, services) {

        console.log(services.appleBearerToken);
    };

    const buildAzureFunction = <T extends (...args: any[]) => any>(businessMiddlewares: Record<string, CustomBusinessMiddleware<any, any>>, middlewares?: Record<string, MiddlewareType<T>>) => {

    };


    const handle = buildAzureFunction({ notifyUser, notifyCustomer }, { errorMiddleware, corsMiddleware, azureTriggerParser, awsLambdaFunctionMiddleware });
}

// Azure Function Middleware
{
    type AzureMiddlewareParameters = [context: AzureContext, inputData: any, cosmosDbData: any];

    type AzureMiddleware<TServices = unknown> = Middleware<AzureMiddlewareParameters, TServices>;

    type CustomBusinessMiddleware<TInput = any, TServices = unknown, TResult = any> = NextMiddleware<[inputData: TInput, context: AzureContext, services: MiddlewareServices<TServices>], TResult>;


    const errorMiddleware: AzureMiddleware = async (context, inputData, cosmosDbData, services, next) => {

        return await next(context, inputData, cosmosDbData);
    };

    const corsMiddleware: AzureMiddleware = async (context, inputData, cosmosDbData, services, next) => {

        return await next(context, inputData, cosmosDbData);
    };

    const azureTriggerParser: AzureMiddleware = async (context, inputData, cosmosDbData, _, next) => {

        return await next(context, inputData, cosmosDbData);
    };

    const authMiddleware: Middleware<AzureMiddlewareParameters, Services> = async (context, inputData, cosmosDbData, services, next) => {

        console.log(services.appleBearerToken);

        return await next(context, inputData, cosmosDbData);
    };

    const azureFunctionMiddleware: Middleware<[context: { firstName: string, lastName: string }]> = async (context) => {

        return { status: 200, body: 'Hello world!' };
    };

    const notifyUser: CustomBusinessMiddleware<{ userName: string; email: string; isAdmin: boolean }> = async function (notifyUserData, context, services) {

        console.log(services.validateRequest);
    };

    const notifyCustomer: CustomBusinessMiddleware<any, Services> = async function (_, context, services) {

        console.log(services.appleBearerToken);
    };

    const buildAzureFunction = <T extends (...args: any[]) => any>(businessMiddlewares: Record<string, CustomBusinessMiddleware<any, any>>, middlewares?: Record<string, MiddlewareType<T>>) => {

    };


    const handle = buildAzureFunction({ notifyUser, notifyCustomer }, { errorMiddleware, corsMiddleware, azureTriggerParser, azureFunctionMiddleware });
}

export { };