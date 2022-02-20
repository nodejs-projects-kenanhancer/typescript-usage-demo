type MessageOf<T extends { message: unknown }> = T['message'];

type Dog = { bark(): void };

// type DogMessageContent = MessageOf<Dog>;

export { };