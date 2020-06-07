type NonNullableProperties<T> = {
    [P in keyof T]: NonNullable<T[P]>;
};

interface Person {
    firstName: string;
    lastName: string;
    email: string | null;
}

type NonNullablePersonProperties = NonNullableProperties<Person>;

const person1: NonNullablePersonProperties = {
    firstName: "Kenan",
    lastName: "Hancer",
    email: "kenanhancer@hotmail.com"
}

console.log(person1);

export { }
