import { AzureDefaultMiddleware } from 'nut-pipe';

type MiddlewareServices = {
    elapsedMilliseconds?: number;
    validateRequest?: boolean;
    validateResponse?: boolean;
};


// Aws Lambda Function Middleware
{
    const errorMiddleware: AzureDefaultMiddleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const corsMiddleware: AzureDefaultMiddleware = async (event, context, _, next) => {

        return await next(event, context);
    };

    const logMiddleware: AzureDefaultMiddleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const timingMiddleware: AzureDefaultMiddleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const jsonParser: AzureDefaultMiddleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const awsLambdaFunctionMiddleware: AzureDefaultMiddleware = async (event, context) => {

        return { statusCode: 200, body: 'Hello world!' };
    };
}

export { };