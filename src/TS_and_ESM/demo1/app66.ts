const given = {
    bye: {
        info: 'bye',
        t: false
    },
    hello: {
        info: 'hello',
        t: true
    },
    lol: {
        info: 'lol',
        x: true
    }
};


const tuple = <T extends Array<unknown>>(...args: T): T => args;

const keys1 = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[];

const keys2 = <T extends object, K extends keyof T>(obj: T) => Object.keys(obj) as K[];

const keys3 = <T extends object>(obj: T) => Object.keys(obj) as Array<keyof T>;

const keys4 = <T extends object, K extends keyof T>(obj: T) => Object.keys(obj) as Array<K>;

const entries1 = <K extends string, V>(obj: Record<K, V>) => keys1(obj).map(key => tuple(key, obj[key]));

const a1 = keys4(given);

const a2 = entries1(given)

console.log();

export { };