type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

type Email = { from: string, to: string, message: string };

type EmailMessageContent = MessageOf<Email>;

export { };