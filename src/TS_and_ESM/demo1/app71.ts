type SelectedEvent = "Click"; // string literal type

const buttonEvent: SelectedEvent = "Click";


type Color = "Red" | "Green" | "Blue"; // string literal type with union type

const buttonForeColor: Color = "Red";


type Dictionary = {
    [index: string]: any;
};

const person: Dictionary = {
    "firstName": "Kenan",
    "lastName": "Hancer",
    "age": 36
};

console.log();

export { };