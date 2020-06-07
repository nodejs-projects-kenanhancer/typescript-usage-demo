function createInstance1<T>(constructor: new () => T): T {
    return new constructor();
}

function createInstance2<T>(constructor: new (...args: any[]) => T, ...args: any[]): T {
    return new constructor(...args);
}

function createInstance3<R, T extends { new(...constructorArgs: any[]): R }>(constructor: T, ...args: any[]): R {
    return new constructor(...args);
}

function getProperties<T, K extends keyof T>(obj: T, propertyNames: K[]): T[K][] {
    return propertyNames.map(n => obj[n]);
}

function getProperty<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
    return obj[propertyName];
}


class Vehicle {
    manufacturer: string = "";
    make: string = "";
    model: string = "";
    year: number = 0;
    color: string = "";
}

class Toyota extends Vehicle {
    constructor(manufacturer: string, make: string, model: string, year: number, color: string) {
        super();
        this.manufacturer = manufacturer;
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

let vehicle1: Vehicle = createInstance1(Vehicle);

let vehicle2: Vehicle = createInstance2(Toyota, "Toyota", "Toyota", "Camry", 2014, "Red");

let vehicle3: Vehicle = createInstance3(Toyota, "Toyota", "Toyota", "Corolla", 1996, "Grey");

let makeAndModel: string[] = getProperties(vehicle1, ["make", "model"]);

let manufacturerAndYear: (string | number)[] = getProperties(vehicle2, ["manufacturer", "year"]);

let manufacturer: string = getProperty(vehicle3, "manufacturer");

console.log();

export { };