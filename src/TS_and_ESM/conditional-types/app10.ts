type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Str = FunctionReturnType<() => string>;

type Num = FunctionReturnType<(x: number) => number>;

type Bools = FunctionReturnType<(a: boolean, b: boolean) => boolean[]>;

type Unions = FunctionReturnType<(x: string | number) => string | number>;

export { };