type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type FunctionReturnTypeV2<T> = T extends (...args: any[]) => infer R
  ? R
  : never;

type T8<T> = [T] extends any ? (...args: any[]) => T : never;

// type ToArray<Type> = Type extends any ? Type[] : never;

type Str = FunctionReturnType<() => string>;

type Num = FunctionReturnType<(x: number) => number>;

type Bools = FunctionReturnType<(a: boolean, b: boolean) => boolean[]>;

type Unions = FunctionReturnType<(x: string | number) => string | number>;

type NonUnions = FunctionReturnTypeV2<(x: string | number) => string | number>;

type T9<T> = T extends any ? T[] : never;

type T10 = T9<string | number>;

type T11<T> = [T] extends any ? T[] : never;

type T12 = T11<string | number>;

type ToArray<T> = T[];

type T2 = ToArray<string | number>;

type ToDistributiveArray<T> = T extends any ? T[] : never;

type T3 = ToDistributiveArray<string | number>;

type ToObjectKeys<T> = keyof T;

type T4 = ToObjectKeys<
  { firstName: string; age: number } | { birthDate: Date }
>;

type ToDistributiveObjectKeys<T> = T extends any ? keyof T : never;

type T5 = ToDistributiveObjectKeys<
  { firstName: string; age: number } | { birthDate: Date }
>;

type ToObjectFieldTypes<T> = T[keyof T];

type T6 = ToObjectFieldTypes<
  { firstName: string; age: number } | { birthDate: Date }
>;

type ToDistributiveObjectFieldTypes<T> = T extends any ? T[keyof T] : never;

type T1 = ToDistributiveObjectFieldTypes<
  { firstName: string; age: number } | { birthDate: Date }
>;

export {};
