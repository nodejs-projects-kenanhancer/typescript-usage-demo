function addV1(x: number, y: number): number {
    return x + y;
}

let addV2 = function (x: number, y: number): number {
    return x + y;
};



// Function Types
let addV3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// Inferring the types
let addV4: (x: number, y: number) => number = function (x, y) {
    return x + y;
};

export { };