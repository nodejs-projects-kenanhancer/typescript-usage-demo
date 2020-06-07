interface Person {
    id: number;
    name: string;
    lastName: string;
    load: () => Promise<Person>;
}

type FilterFlags = {
    [Key in keyof Person]: Person[Key] extends string ? Key : never;
};


const a1: Pick<Person, "id" | "name"> = { id: 1, name: "" };

type Pick2<T, K extends keyof T> = {
    [P in K]: T[P];
};

type a2 = FilterFlags;

type a3 = Exclude<keyof Person, "load" | "id">;

type a4 = keyof Person;




type FilterFlags2<Base, Condition> = {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type AllowedNames<Base, Condition> = FilterFlags2<Base, Condition>[keyof Base];

type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

const aak: AllowedNames<Person, string | number> = "id";

type EmailAddress = string | string[] | null | undefined;

const mail1: EmailAddress = "kenanhancer@hotmail.com";
const mail2: EmailAddress = ["kh@kh.com", "dd@kk.com"];
const mail3: EmailAddress = null;


const kdkdkd: NonNullable<string> = "";


// type JsonPrimitive = SubType<Person, number | string>;
// // equals to:
// type JsonPrimitive = {
//     id: number;
//     name: string;
//     lastName: string;
// }
// // Let's assume Person has additional address key
// type JsonComplex = SubType<Person, object>;
// // equals to:
// type JsonComplex = {
//     address: {
//         street: string;
//         nr: number;
//     };
// }

// interface PersonLoader {
//     loadAmountOfPeople: () => number;
//     loadPeople: (city: string) => Person[];
//     url: string;
// }
// type Callable = SubType<PersonLoader, (_: any) => any>

// // equals to:
// type Callable = {
//     loadAmountOfPeople: () => number;
//     loadPeople: (city: string) => Person[];
// }



console.log(a1);

export { };