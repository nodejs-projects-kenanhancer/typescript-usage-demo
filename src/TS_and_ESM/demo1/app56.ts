interface Car {
    manufacturer: string;
    model: string;
    year: number;
}

let carProps: keyof Car = "manufacturer";

console.log(carProps);


enum Color {
    Red, Green
}

console.log(typeof Color);

let typedColor: Color = Color.Green;
let typedColorString: keyof Color = "toString";

console.log(typedColorString);

export { };