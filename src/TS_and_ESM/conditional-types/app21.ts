type MessageOf<T> = T extends { message: infer MessageType } ? MessageType : never;

const getMessage = <T extends { message: unknown }>(obj: T): MessageOf<T> => obj.message as any;



const sms = { phone: '07733838', message: ['Hello World', 'Merhaba Dunya'] };

const smsMessage = getMessage(sms); // string[]

const email = { from: 'kh@kh.com', to: 'kkkk@kkkk.com', message: 'Hello World' };

const emailMessage = getMessage(email); // string

export { };