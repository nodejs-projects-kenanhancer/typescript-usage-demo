interface Dictionary<T> {
    [key: string]: T;
}

let keys: keyof Dictionary<number>; // string | number
let value: Dictionary<number>['foo']; // number

console.log();

export { };