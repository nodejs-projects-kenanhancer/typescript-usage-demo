// This is related with Covariance and Contravariance.

type GreetingType<T> =
    T extends {
        sayHello: (firstName: infer TFirstName, lastName: infer TLastName) => string,
        sayGoodbye: (firstName: infer TFirstName, lastName: infer TLastName) => string
    }
    ? (firstName: TFirstName, lastName: TLastName) => string
    : never;


type TurkishGreeting = GreetingType<{
    sayHello: (firstName: string, lastName: string) => string,
    sayGoodbye: (firstName: number, lastName: string) => string
}>;


export { };