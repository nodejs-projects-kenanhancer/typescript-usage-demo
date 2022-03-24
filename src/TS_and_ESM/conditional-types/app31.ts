type BaseEventData = {
    appName: string;
    appVersion: string;
    correlationId: string;
    operationId: string;
    businessId: string;
};

type EventSuccess = Partial<BaseEventData> & {
    emailSubject: string;
    emailMessage: string;
}

type EventError = Partial<BaseEventData> & {
    message: string;
};

type SignUp = Partial<BaseEventData> & {
    userName: string;
    hashedPassword: string;
};

type SignUp_Success = Pick<EventSuccess, keyof EventSuccess> & {
    registrationVerificationCode: string;
};

type SignUp_Failure = Pick<EventError, keyof EventError>;

type ForgotPassword = Partial<BaseEventData> & {
    userName: string;
};

type ForgotPassword_Success = Pick<EventSuccess, keyof EventSuccess> & {
    resetPasswordVerificationCode: string;
};

type ForgotPassword_Failure = Pick<EventError, keyof EventError>;

type ChangePassword = Partial<BaseEventData> & {
    userName: string;
    oldPassword: string;
    newPassword: string;
};

type ChangePassword_Success = Pick<EventSuccess, keyof EventSuccess>;

type ChangePassword_Failure = Pick<EventError, keyof EventError>;

type ResetPassword = Partial<BaseEventData> & {
    userName: string;
    newPassword: string;
    resetPasswordVerificationCode: string;
};

type ResetPassword_Success = Pick<EventSuccess, keyof EventSuccess>;

type ResetPassword_Failure = Pick<EventError, keyof EventError>;

type ResendConfirmationCode = Partial<BaseEventData> & {
    userName: string;
};

type ResendConfirmationCode_Success = Pick<EventSuccess, keyof EventSuccess>;

type ResendConfirmationCode_Failure = Pick<EventError, keyof EventError>;

type EventTypes = {
    SignUp: SignUp;
    SignUp_Success: SignUp_Success;
    SignUp_Failure: SignUp_Failure;
    ChangePassword: ChangePassword;
    ChangePassword_Success: ChangePassword_Success;
    ChangePassword_Failure: ChangePassword_Failure;
    ForgotPassword: ForgotPassword;
    ForgotPassword_Success: ForgotPassword_Success;
    ForgotPassword_Failure: ForgotPassword_Failure;
    ResetPassword: ResetPassword;
    ResetPassword_Success: ResetPassword_Success;
    ResetPassword_Failure: ResetPassword_Failure;
    ResendConfirmationCode: ResendConfirmationCode;
    ResendConfirmationCode_Success: ResendConfirmationCode_Success;
    ResendConfirmationCode_Failure: ResendConfirmationCode_Failure;
};

type EventTypeNames = keyof EventTypes;

interface EventGridMessage<TEventType extends EventTypeNames = EventTypeNames> {
    id: string;
    topic: string;
    subject: string;
    eventTime: string;
    eventType: TEventType;
    data: EventTypes[TEventType];
    dataVersion: string;
    metadataVersion: string;
}

type EventGridMessageRequiredParams<TEventType extends EventTypeNames = EventTypeNames> = Pick<EventGridMessage<TEventType>, 'data' | 'eventType' | 'subject' | 'topic'>;

type ExistingMessageBuilder<TEventType extends EventTypeNames = EventTypeNames> = (parameters: EventGridMessageRequiredParams<TEventType>) => EventGridMessageRequiredParams<TEventType>;

type PublishMessageType =
    (
        & (<TEventType extends EventTypeNames>(parameters: EventGridMessageRequiredParams<TEventType>) => EventGridMessage<TEventType> | undefined)
        & (<TEventType extends EventTypeNames>(eventType: TEventType, parameters: EventGridMessageRequiredParams<TEventType> | ExistingMessageBuilder<TEventType>) => EventGridMessage<TEventType> | undefined)
    ) |
    undefined;

type EventGridMessageParamsUnion<TEventType extends EventTypeNames = EventTypeNames> = EventGridMessageRequiredParams<TEventType> | ExistingMessageBuilder<TEventType>;

const createEventGridMessage = <TEventType extends EventTypeNames>({ eventType, data, topic, subject }: EventGridMessageRequiredParams<TEventType>): EventGridMessage<TEventType> => ({
    id: '',
    topic,
    subject,
    eventType,
    eventTime: new Date().toString(),
    data,
    dataVersion: '1.0',
    metadataVersion: '1.0',
});

const isEventGridMessageRequiredParams = (obj: any): obj is EventGridMessageRequiredParams => {
    if (typeof obj !== 'function') {
        const fields = ['data', 'eventType', 'subject', 'topic'];

        return Object.keys(obj).every(item => fields.some(i => i === item));
    }

    return false;
};

const publishMessage = <TEventType extends EventTypeNames>(eventGridMessages: Array<EventGridMessage>, parameters: EventGridMessageRequiredParams<TEventType>, baseEventData: BaseEventData): EventGridMessage<TEventType> => {

    parameters.data = { ...baseEventData, ...(parameters.data) };

    const newEventGridMessage = createEventGridMessage<TEventType>(parameters);

    const existingEventGridMessage = eventGridMessages.find(item => item.eventType === parameters.eventType);

    if (existingEventGridMessage) {
        Object.assign(existingEventGridMessage, newEventGridMessage);
    } else {
        eventGridMessages.push(newEventGridMessage);
    }

    return newEventGridMessage;
}

const getPublishMessageFunction = (eventGridMessages: Array<EventGridMessage>, baseEventData: BaseEventData): PublishMessageType =>
    <TEventType extends EventTypeNames>(...args: any[]) => {
        const [arg1, arg2] = args;

        const eventType: EventTypeNames = arg2 && arg1;

        const parameters: EventGridMessageParamsUnion<TEventType> = arg2 || arg1;

        let eventMessage: EventGridMessage<TEventType> | undefined;

        if (isEventGridMessageRequiredParams(parameters)) {

            eventMessage = publishMessage<TEventType>(eventGridMessages, parameters, baseEventData);
        }
        else {
            const existingEventGridMessage = eventGridMessages.find(item => item.eventType === eventType);

            if (existingEventGridMessage) {
                const newParameters = parameters(existingEventGridMessage as EventGridMessage<TEventType>);

                eventMessage = publishMessage(eventGridMessages, newParameters, baseEventData);
            }
        }

        return eventMessage;
    };


const main = () => {
    const eventGridMessages: Array<EventGridMessage> = [];

    const baseEventData: BaseEventData = {
        appName: '',
        appVersion: '1.0',
        businessId: '111',
        correlationId: '111',
        operationId: '111',
    };

    const publishMessage = getPublishMessageFunction(eventGridMessages, baseEventData);

    const msg1 = publishMessage?.({
        eventType: 'ChangePassword',
        data: {
            userName: '',
            oldPassword: '',
            newPassword: ''
        },
        subject: '',
        topic: '',
    });

    const msg2 = publishMessage?.({
        eventType: 'ChangePassword_Success',
        data: {
            emailSubject: 'Password Verification code is ######',
            emailMessage: ''
        },
        subject: '',
        topic: '',
    });

};


export { };