type UnionToIntersection<T> =
    (T extends any ? (p1: T) => void : never) extends (p1: infer I) => void ? I : never;

type FunctionUnion = (() => void) | ((p1: string) => void);

type FunctionIntersection = (() => void) & ((p1: string) => void);

type SynthesizedFunctionIntersection = UnionToIntersection<FunctionUnion>;

type Weird = UnionToIntersection<string | number>;


type T01<T> = T extends (p: infer I) => void ? I : never;

type T02 = T01<T1>;














type T1 = ((p1: string) => void) | ((p1: number) => void) | ((p1: boolean) => void);

type T2<T> = T extends (p1: infer I) => void ? I : never;

type T3 = T2<T1>;

type T4<T> = T extends (...args: [infer I]) => void ? I : never;

type T5 = T4<T1>;

type T6 = T2<number | boolean>;

type T7<T> = T extends any ? ((p: T) => void) extends ((p: infer I) => void) ? I : never : never;

type T8 = T7<T1>;

type T9<T> =
    (T extends any ? (p: T) => void : never) extends ((p: infer I) => void) ? I : never;

type T10 = T9<number | boolean>;



export { };