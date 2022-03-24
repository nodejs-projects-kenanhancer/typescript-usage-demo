type BaseEvent = {
    timeStamp?: number;
    componentName: string;
    componentVersion: string;
    operationId: string;
    correlationId: string;
    data: any;
};

type StartEvent = Partial<BaseEvent> & {
    source: string;
    trigger: string;
};

type EndEvent = Partial<BaseEvent> & {
    destination: 'Event Grid' | 'Http Response' | 'Cosmos DB';
};

type InfoEvent = Pick<EndEvent, keyof EndEvent>;

type Event = StartEvent | InfoEvent | EndEvent;

type EventType = {
    LogStart: StartEvent;
    LogInfo: InfoEvent;
    LogEnd: EndEvent;
};

type EventTypes = keyof EventType;

interface EventGridMessage<TEventType extends EventTypes = EventTypes> {
    id: string;
    topic: string;
    subject: string;
    eventTime: Date;
    eventType: TEventType;
    data: EventType[TEventType];
    dataVersion: string;
    metadataVersion: string;
}

type EventGridMessageParameters<TEventType extends EventTypes = EventTypes> = Pick<EventGridMessage<TEventType>, 'data' | 'eventType' | 'subject' | 'topic'>;

const createEventGridMessage = <TEventType extends EventTypes>({ eventType, data, subject, topic }: EventGridMessageParameters<TEventType>): EventGridMessage<TEventType> => ({
    id: '',
    topic,
    subject,
    eventType,
    eventTime: new Date(),
    data: {
        ...data,
        timeStamp: new Date().getTime()
    },
    dataVersion: '1.0',
    metadataVersion: '1.0',
});



const isEventGridMessageParameters = (obj: any): obj is EventGridMessageParameters => {
    if (typeof obj !== 'function') {
        const fields = ['data', 'eventType', 'subject', 'topic'];

        return Object.keys(obj).every(item => fields.some(i => i === item));
    }

    return false;
};

type ExistingMessageBuilderType<TEventType extends EventTypes> = (parameters: EventGridMessageParameters<TEventType>) => EventGridMessageParameters<TEventType>;

type EventGridMessageParametersUnion<TEventType extends EventTypes = EventTypes> = EventGridMessageParameters<TEventType> | ExistingMessageBuilderType<TEventType>;

type PublishMessageType =
    (
        (<TEventType extends EventTypes>(parameters: EventGridMessageParametersUnion<TEventType>) => EventGridMessage<TEventType> | undefined) &
        (<TEventType extends EventTypes>(eventType: TEventType, parameters: EventGridMessageParametersUnion<TEventType>) => EventGridMessage<TEventType> | undefined)
    ) |
    undefined;


const publishMessage = <TEventType extends EventTypes>(parameters: EventGridMessageParameters<TEventType>, eventGridMessages: Array<EventGridMessage>, baseEvent: BaseEvent): EventGridMessage<TEventType> => {
    parameters.data = { ...baseEvent, ...(parameters.data as any) };

    const eventMessage = createEventGridMessage<TEventType>(parameters);

    if (parameters.eventType === 'LogStart' && eventGridMessages.some(item => item.eventType === 'LogStart')) {
        eventGridMessages[0] = eventMessage;
    } else if (parameters.eventType === 'LogEnd') {
        if (!eventGridMessages.some(item => item.eventType === 'LogEnd')) {
            eventGridMessages.push(eventMessage);
        }
    } else {
        eventGridMessages.push(eventMessage);
    }

    return eventMessage;
}

const getPublishMessageFunction = (eventGridMessages: Array<EventGridMessage>, baseEvent: BaseEvent): PublishMessageType =>
    <TEventType extends EventTypes>(...args: any[]) => {
        const [arg1, arg2] = args;

        const eventType: EventTypes = arg2 && arg1;

        const parameters: EventGridMessageParametersUnion<TEventType> = arg2 || arg1;

        let eventMessage: EventGridMessage<TEventType> | undefined = undefined;

        if (isEventGridMessageParameters(parameters)) {
            eventMessage = publishMessage<TEventType>(parameters, eventGridMessages, baseEvent);
        } else {
            if (eventType === 'LogStart' || eventType === 'LogEnd') {
                const existingEventMessage = eventGridMessages.find(item => item.eventType === eventType);

                if (existingEventMessage) {
                    const newParameters = parameters(existingEventMessage! as EventGridMessage<TEventType>);

                    eventMessage = publishMessage<TEventType>(newParameters, eventGridMessages, baseEvent);
                }
            } else {
                throw { statusCode: 500, message: "LogInfo can't be overwritten." };
            }
        }

        return eventMessage;
    };


export { };