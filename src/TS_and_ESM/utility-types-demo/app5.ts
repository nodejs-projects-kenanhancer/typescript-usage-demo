type NonNullablePropertyKeys<T> = {
    [P in keyof T]: null extends T[P] ? never : P;
}[keyof T];

type NonNullableProperties<T> = Pick<T, NonNullablePropertyKeys<T>>;

interface Person {
    firstName: string;
    lastName: string;
    email: string | null;
}

type NonNullablePersonProperties = NonNullableProperties<Person>;

const person1: NonNullablePersonProperties = {
    firstName: "Kenan",
    lastName: "Hancer"
};

console.log(person1);

export { };