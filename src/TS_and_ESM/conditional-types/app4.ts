type MessageOf<T> = T extends { message: infer messageType } ? messageType : never;

type Email = { from: string, to: string, message: string };

type EmailMessageContent = MessageOf<Email>

export { };