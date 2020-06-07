type Gender = "Female" | "Male";

type AddressType = "Business" | "Home";

type BloodGroup = "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";

interface Contact {
    phone: string;
    mail: string;
    linkedIn: string;
    github: string;
    webPage: string;
}

interface Address {
    addressType: AddressType;
    country: string;
    city: string;
    street: string;
    postCode: string;
}

interface Person {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
    bloodGroup: BloodGroup;
    contacts: Array<Contact>,
    address: Address[],
    sayHello: () => Promise<string>;
}

const person1: Person = {
    id: 1,
    firstName: "Kenan",
    lastName: "Hancer",
    age: 36,
    gender: "Male",
    bloodGroup: "A+",
    contacts: [{
        phone: "111-1111",
        mail: "kenanhancer@hotmail.com",
        linkedIn: "",
        github: "",
        webPage: "www.kenanhancer.com"
    }],
    address: [
        {
            addressType: "Home",
            country: "",
            city: "",
            street: "",
            postCode: ""
        }
    ],
    sayHello() {

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello '), 1000);
        });
    }
};

person1.sayHello().then(console.log);


type FilterType<Type, FieldType> = {
    [index in keyof Type]: Type[index] extends FieldType ? index : never;
}[keyof Type];

type SubType<Type, FieldType> = Pick<Type, FilterType<Type, FieldType>>



type AsyncReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer U> ? U : T extends (...args: any) => infer U ? U : any

type T0 = AsyncReturnType<() => Promise<string>>;




type PersonWithOnlyString = SubType<Person, string>;


const person2: PersonWithOnlyString = {
    firstName: "Kenan",
    lastName: "Hancer",
    gender: "Male",
    bloodGroup: "AB+"
};

console.log({} instanceof Object);

// console.log(person2);


export { }; 