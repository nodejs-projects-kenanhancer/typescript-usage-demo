const ORIGIN = {
    x: 0,
    y: 0
} as const;



const ORIGIN1: {
    readonly x: 0;
    readonly y: 0;
} = {
    x: 0,
    y: 0
};



// Type: readonly [0, 0]
const ORIGIN2 = [0, 0] as const;

// Type: number[]
const ORIGIN3 = [0, 0];


export { };