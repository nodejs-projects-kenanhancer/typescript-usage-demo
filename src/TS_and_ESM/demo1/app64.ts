// interface Car {
//     manufacturer: string;
//     model: string;
//     year: number;
// }

// const given = {
//     bye: {
//         info: 'bye',
//         t: false
//     },
//     hello: {
//         info: 'hello',
//         t: true
//     },
//     lol: {
//         info: 'lol',
//         x: true
//     }
// };

// type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];

// type ReadonlyType<T> = {
//     readonly [p in keyof T]: T[p];
// }

// type PartialType<T> = {
//     [p in keyof T]?: T[p];
// };


// type NullableCar = { [index in keyof Car]: index extends "manufacturer" | "year" ? Car[index] : never }

// const vehicle1: Car = { manufacturer: "Toyota", model: "Corolla", year: 1996 };

// // const vehicle2: NullableCar = vehicle1;

// function pluck<T, K extends keyof T>(obj: T, propertyNames: K[]): T[K][] {

//     const kk: any = obj.reduce((res, key) => {
//         res[key] = key;
//         return res;
//     }, Object.create(null));
//     return propertyNames.map(n => obj[n]);
// }


// function strEnum<T extends string>(obj: Array<T>): { [K in T]: K } {
//     return obj.reduce((res, key) => {
//         res[key] = key;
//         return res;
//     }, Object.create(null));
// }


// /** Create a K:V */
// const Direction = strEnum(['North', 'South', 'East', 'West']);

// console.log();

// export { };