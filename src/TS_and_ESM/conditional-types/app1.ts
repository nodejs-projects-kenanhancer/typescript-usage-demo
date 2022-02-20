// Wrong usage
// type MessageOf<T> = T['message'];

// Wrong usage
// type MessageOf<T extends any> = T['message'];

// Wrong usage
// type MessageOf<T extends unknown> = T['message'];

type MessageOf<T extends { message: unknown }> = T['message'];

type Email = { message: string };

type EmailMessageContent = MessageOf<Email>;

export { };