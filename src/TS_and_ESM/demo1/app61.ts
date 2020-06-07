interface Person {
    name: string;
    age: number;
}

type NullablePerson = { [P in keyof Person]: Person[P] | null }

const person1: Person = { name: "kenan", age: 37 };

const person2: NullablePerson = person1;



console.log();

export { };