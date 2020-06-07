let normalArray: number[] = [1, 2, 3, 4];

let readonlyArray: ReadonlyArray<number> = normalArray;

// readonlyArray[0] = 12; // error!
// Index signature in type 'readonly number[]' only permits reading.

// readonlyArray.push(5); // error!
// Property 'push' does not exist on type 'readonly number[]'.

// readonlyArray.length = 100; // error!
// Cannot assign to 'length' because it is a read-only property.

// normalArray = readonlyArray; // error!
// The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.

// overriding readonly array with a type assertion
normalArray = readonlyArray as number[];

export { };