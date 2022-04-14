type UnionToIntersection<T> =
    (T extends any ? (p1: T) => void : never) extends (p1: infer I) => void ? I : never;

type FunctionUnion = (() => void) | ((p1: string) => void);

type FunctionIntersection = (() => void) & ((p1: string) => void);

type SynthesizedFunctionIntersection = UnionToIntersection<FunctionUnion>;

type Weird = UnionToIntersection<string | number>;


type T01 = ((p1: string) => void) | ((p1: number) => void) | ((p1: boolean) => void);

type T02 = (() => void) | ((p1: string) => void);

type T03<T> = T extends (p: infer I) => void ? I : never;

type T04 = T03<T01>;

type T05 = T03<T02>;



type T06<T> = (p: T) => void;

type T07<T> = T extends any ? T06<T> : never;

type T08<T> = T07<T> extends (p: infer I) => void ? I : never;

type T09 = T08<T01>;

type T10 = T08<string | number>;

type T11<T> = T extends any ? (p: T) => void : never;

type T12 = T11<string | number>;

type T13 = T11<T01>;

type T14 = T11<string | boolean>;

type T15<T> = T11<T> extends (p: infer I) => void ? I : never;

type T16 = T15<string | number | boolean>;

type T17 = T15<T01>;

type T18<T> = T extends any ? (p: T) => void : never;

type T19 = T18<string | number>;

type T20 = string & number & boolean;

export { };