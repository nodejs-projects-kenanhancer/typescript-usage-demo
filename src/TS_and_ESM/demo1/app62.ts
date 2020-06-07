let errors: { [index: string]: { message: string } } = {};

interface Person {
    name: string;
    age: number;
}


type ErrorType1 = { [index: string]: { message: string } };

type ErrorType2 = { [index in "NOT_FOUND" | "UNDEFINED"]: { message: string } };

type ErrorIndex = "NOT_FOUND" | "UNDEFINED";
type ErrorType3 = { [index in ErrorIndex]: { message: string } };

type PersonProps = 'firstName' | 'lastName' | 'age';
type Person1 = { [index in PersonProps]: string | number };

type Person2 = {
    firstName: string;
    lastName: string;
    age: number;
};

type ReadonlyType1<T> = { readonly [index in keyof T]: T[index] };

type GenericErrorType1<T extends "NOT_FOUND" | "UNDEFINED"> = {
    [index in T]: { message: string }
};

type GenericErrorType2<T extends ErrorIndex> = { [index in T]: { message: string } };




const obj1: ErrorType1 = {
    "NOT_FOUND": { message: "Not found" },
    "UNDEFINED": { message: "Undefined" }
};

const obj2: ErrorType2 = {
    "NOT_FOUND": { message: "Not found" },
    "UNDEFINED": { message: "Undefined" }
};

const obj3: ErrorType3 = {
    "NOT_FOUND": { message: "Not found" },
    "UNDEFINED": { message: "Undefined" }
};



const obj4: GenericErrorType1<"NOT_FOUND"> = {
    "NOT_FOUND": { message: "Not found" }
};

const obj5: GenericErrorType2<"UNDEFINED"> = {
    "UNDEFINED": { message: "Undefined" }
};

const obj6: GenericErrorType1<ErrorIndex> = {
    "NOT_FOUND": { message: "Not found" },
    "UNDEFINED": { message: "Undefined" }
};

const obj7: GenericErrorType2<ErrorIndex> = {
    "NOT_FOUND": { message: "Not found" },
    "UNDEFINED": { message: "Undefined" }
};

let obj8: Person1 = {
    firstName: 'kenan',
    lastName: 'hancer',
    age: 37
};

let obj9: Person2 = {
    firstName: "kenan",
    lastName: "hancer",
    age: 37
};

let obj10: ReadonlyType1<Person1> = obj8;


console.log();

export { };