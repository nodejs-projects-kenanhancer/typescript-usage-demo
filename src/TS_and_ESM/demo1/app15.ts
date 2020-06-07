interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string, area: number } {
    return { color: config.color || "red", area: config.width || 20 };
}

// let mySquare = createSquare({ colour: "red", width: 100 });
// Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
// Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?

let mySquare = createSquare({ color: "red", width: 100 });

let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

console.log();

export { };