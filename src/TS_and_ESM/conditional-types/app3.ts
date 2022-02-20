type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

type Dog = { bark(): void };

type DogMessageContent = MessageOf<Dog>;

export { };