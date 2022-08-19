import { AwsDefaultMiddleware, isAwsEvent } from 'nut-pipe';

type MiddlewareServices = {
    elapsedMilliseconds?: number;
    validateRequest?: boolean;
    validateResponse?: boolean;
};

// Aws Lambda Function Middleware
{
    const errorMiddleware: AwsDefaultMiddleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const corsMiddleware: AwsDefaultMiddleware = async (event, context, _, next) => {

        return await next(event, context);
    };

    const logMiddleware: AwsDefaultMiddleware<'All', [], MiddlewareServices> = async (event, context, services, next) => {

        console.log(services.elapsedMilliseconds);

        return await next(event, context);
    };

    const timingMiddleware: AwsDefaultMiddleware = async (event, context, services, next) => {

        return await next(event, context);
    };

    const jsonParser: AwsDefaultMiddleware = async (event, context, services, next) => {

        let data;

        if (isAwsEvent<'APIGatewayProxyEvent'>(event, 'path')
            || isAwsEvent<'APIGatewayProxyEventV2'>(event, 'rawPath')
            || isAwsEvent<'ALBEvent'>(event, 'body')) {

            let parsedBody;
            try { parsedBody = event.body && JSON.parse(event.body); }
            catch (error: any) { throw new Error('invalid body, expected JSON'); }

            data = parsedBody;

        } else if (isAwsEvent<'EventBridgeEvent'>(event, 'detail-type')) {

            data = event.detail;

        } else if (isAwsEvent<'SQSEvent'>(event, 'Records')
            || isAwsEvent<'SNSEvent'>(event, 'Records')
            || isAwsEvent<'SESEvent'>(event, 'Records')
            || isAwsEvent<'S3Event'>(event, 'Records')
            || isAwsEvent<'DynamoDBStreamEvent'>(event, 'Records')
            || isAwsEvent<'KinesisStreamEvent'>(event, 'Records')) {

            data = event.Records;

        } else if (isAwsEvent<'MSKEvent'>(event, 'records')) {

            data = event.records;
        }

        return await next(data, context);
    };

    const awsLambdaFunctionTriggeredByEventBridgeMiddleware: AwsDefaultMiddleware<'EventBridgeEvent'> = async (event, context, a1) => {

        const message = `Event detail-type is ${event['detail-type']}`;

        return { statusCode: 200, body: message };
    };
}

export { };