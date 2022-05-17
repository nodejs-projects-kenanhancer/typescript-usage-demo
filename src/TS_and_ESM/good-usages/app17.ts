import { AzureDefaultMiddleware } from 'nut-pipe';

type MiddlewareServices<T = {}> = T & {
    elapsedMilliseconds?: number;
    validateRequest?: boolean;
    validateResponse?: boolean;
};

// Azure Function AzureDefaultMiddleware
{
    const errorMiddleware: AzureDefaultMiddleware = async (context, event, services, next) => {

        return await next(context, event);
    };

    const corsMiddleware: AzureDefaultMiddleware = async (context, event, _, next) => {

        return await next(context, event);
    };

    const logMiddleware: AzureDefaultMiddleware<[], MiddlewareServices> = async (context, event, services, next) => {

        console.log(services.elapsedMilliseconds);

        return await next(context, event);
    };

    const timingMiddleware: AzureDefaultMiddleware = async (context, event, services, next) => {

        return await next(context, event);
    };

    const jsonParser: AzureDefaultMiddleware = async (context, event, services, next) => {

        return await next(context, event);
    };

    const azureFunctionMiddleware: AzureDefaultMiddleware = async (context, event) => {

        return { status: 200, body: 'Hello world!' };
    };
}

export { };