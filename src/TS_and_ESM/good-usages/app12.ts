import { Context as AzureContext } from '@azure/functions';
import { Context as AwsContext, APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

type MiddlewareServices<T = {}> = T & {
    elapsedMilliseconds?: number;
    validateRequest?: boolean;
    validateResponse?: boolean;
};

// Azure Function Middleware
{
    type MiddlewareParameters = [context: AzureContext, inputData: any, cosmosDbData: any];

    type NextMiddleware<TResult = any> = (...args: MiddlewareParameters) => void | Promise<void> | Promise<TResult>;

    type Middleware<TServices = {}> = (...args: [...MiddlewareParameters, ...[services: MiddlewareServices<TServices>, next: NextMiddleware]]) => ReturnType<NextMiddleware>;


    const errorMiddleware: Middleware = async (context, inputData, cosmosDbData, services, next) => {

        return await next(context, inputData, cosmosDbData);
    };

    const corsMiddleware: Middleware = async (context, inputData, cosmosDbData, _, next) => {

        return await next(context, inputData, cosmosDbData);
    };

    const logMiddleware: Middleware = async (context, inputData, cosmosDbData, services, next) => {

        return await next(context, inputData, cosmosDbData);
    };

    const timingMiddleware: Middleware = async (context, inputData, cosmosDbData, services, next) => {

        return await next(context, inputData, cosmosDbData);
    };

    const jsonParser: Middleware = async (context, inputData, cosmosDbData, services, next) => {

        return await next(context, inputData, cosmosDbData);
    };

    const azureFunctionMiddleware: Middleware = async (context, inputData) => {

        return { status: 200, body: 'Hello world!' };
    };
}

// Aws Lambda Function Middleware
{
    type MiddlewareParameters<TEvent = APIGatewayProxyEventV2> = [event: TEvent, context: AwsContext];

    type NextMiddleware<TEvent = APIGatewayProxyEventV2, TResult = APIGatewayProxyStructuredResultV2> = (...args: MiddlewareParameters<TEvent>) => Promise<TResult>;

    type Middleware<TEvent = APIGatewayProxyEventV2, TServices = {}, TResult = APIGatewayProxyStructuredResultV2> = (...args: [...MiddlewareParameters<TEvent>, ...[services: MiddlewareServices<TServices>, next: NextMiddleware<TEvent, TResult>]]) => ReturnType<NextMiddleware<TEvent, TResult>>;


    const errorMiddleware: Middleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const corsMiddleware: Middleware = async (event, context, _, next) => {

        return await next(event, context);
    };

    const logMiddleware: Middleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const timingMiddleware: Middleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const jsonParser: Middleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const awsLambdaFunctionMiddleware: Middleware = async (event, context) => {

        return { statusCode: 200, body: 'Hello world!' };
    };
}

export { };