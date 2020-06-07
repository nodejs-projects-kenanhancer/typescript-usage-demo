interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

let square2: Square = {} as Square;
square2.color = "red";
square2.sideLength = 20;

console.log();

export { };