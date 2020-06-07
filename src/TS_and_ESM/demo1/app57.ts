enum Color {
    Red, Green
}

interface Car {
    manufacturer: string;
    model: string;
    year: number;
}

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map(n => o[n]);
}

function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName]; // o[propertyName] is of type T[K]
}

let colorProps: keyof Color = "valueOf";
let enumColorField: keyof typeof Color = "Green";
let enumColorFields: (keyof typeof Color)[] = ["Green", "Red"];
let carProp: keyof Car = "model";
let carProp2: 'manufacturer' | 'model' | 'year' = "manufacturer";
let carProps: (keyof Car)[] = ["year", "manufacturer"];

let taxi: Car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014
};



// Manufacturer and model are both of type string,
// so we can pluck them both into a typed string array
let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model']);

// If we try to pluck model and year, we get an
// array of a union type: (string | number)[]
let modelYear = pluck(taxi, ['model', 'year'])

export { };