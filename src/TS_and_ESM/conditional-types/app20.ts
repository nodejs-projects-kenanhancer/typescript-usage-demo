// const foo = <T extends { x: number }>(b: T) => b;

const foo = <Value extends unknown, T extends { x: Value }>(a: T) => a.x;

const a2 = foo({ x: 42 });



export { };