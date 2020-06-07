enum Color {
    Red,
    Green,
    Blue,
    Yellow,
    Brown,
    White,
    Pink,
    Purple
}

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

const red_number: number = Color.Red;

const green_number: number = Color.Green;

const red_string: string = Color[Color.Red];

const green_string: string = Color[Color.Green];

const red_enum: Color = Color.Red;

const green_enum: Color = Color.Green;

let blue: keyof typeof Color = "Blue";

blue = "Green";

const yellow: Color = Color["Yellow"];

const white: Color = Color["White" as "Red" | "Green" | "Blue" | "Yellow" | "Brown" | "White" | "Pink"];

const brown: Color = Color["Blue" as keyof typeof Color];

type ColorTypeAlias = "Red" | "Green" | "Blue" | "Yellow" | "Brown" | "White" | "Pink";

const pink: ColorTypeAlias = "Pink";

const pinkColor: Color = Color[pink];


console.log("Color.Red ", Color.Red);
console.log("Color.Blue ", Color.Blue);
console.log("yellow ", yellow);
console.log("pink ", pink);
console.log(`Color["Yellow"]`, Color["Yellow"]);
console.log("Color[Color.Purple]", Color[Color.Purple]);
console.log(Color);



export { };