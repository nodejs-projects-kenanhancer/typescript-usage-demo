interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

interface NotOkay {
    [x: number]: Animal;

    // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
    // [x: string]: Dog;
}

console.log();

export { };