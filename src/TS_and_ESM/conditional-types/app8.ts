type Flatten<T> = T extends Array<infer ItemType> ? ItemType : T;

type StrType = Flatten<string[]>;

type NumType = Flatten<number>;

type Union = Flatten<[string, number, boolean]>;

type ObjType = Flatten<{ name: string }>;

export { };