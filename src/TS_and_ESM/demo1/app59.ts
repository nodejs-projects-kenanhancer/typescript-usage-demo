interface Person {
    name: string;
    age: number;
}

type ReadonlyType<T> = {
    readonly [p in keyof T]: T[p];
}

type PartialType<T> = {
    [p in keyof T]?: T[p];
};

type PersonReadonly = ReadonlyType<Person>;
type PersonPartial = PartialType<Person>;

let person1: Person = { name: "kenan", age: 37 };
let person2: ReadonlyType<Person> = person1;
let person3: PartialType<Person> = person1;

person1.age = 38;
// person1.name = undefined;
// person2.age = 38;

person3.name = undefined;

console.log();

export { };