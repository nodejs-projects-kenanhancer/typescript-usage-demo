interface Car {
    manufacturer: string;
    model: string;
    year: number;
}

class Toyota implements Car {
    manufacturer: string;
    model: string;
    year: number;

    constructor(manufacturer: string, model: string, year: number) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
    }
}

class Test {
    x: number = 4;
}

function createInstance<T>(type: new (...constructorArgs: any[]) => T): T {
    return new type();
}

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map(n => o[n]);
}

function getProperties<T, K extends keyof T>(obj: T, propertyNames: K[]): T[K][] {
    return propertyNames.map(n => obj[n]);
}

function getProperty<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
    return obj[propertyName];
}


let taxi: Car = { manufacturer: "Toyota", model: "Camry", year: 2014 };

let person1: any = { personId: 1, firstName: "kenan", lastName: "hancer" };

let person2: any = Object.create(person1);

let person3: any = Object.create({});
person3.personId = 2;
person3.firstName = "John";
person3.lastName = "fox";


type constructorType = new (...constructorArgs: any[]) => any;
const testType: constructorType = Test;

let test: Test = createInstance(Test);

let vehicle1: Car = createInstance(Toyota);

let makeModelYear: (string | number)[] = pluck(taxi, ["manufacturer", "model"]);

let makeAndModel: string[] = getProperties(taxi, ["manufacturer", "model"]);

let modelYear: (string | number)[] = getProperties(taxi, ["model", "year"]);

let manufacturer: string = getProperty(taxi, "manufacturer");

let firstName: string = getProperty(person1, "firstName");

let lastName: string = getProperty(person2, "lastName");

let personId: number = getProperty(person3, "personId");

console.log();

export { };