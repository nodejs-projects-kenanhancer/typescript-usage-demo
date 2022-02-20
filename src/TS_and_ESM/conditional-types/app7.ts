type Flatten<T> = T extends (infer ItemType)[] ? ItemType : T;

type StrType = Flatten<string[]>;

type NumType = Flatten<number>;

type ObjType = Flatten<{ name: string }>;

export { };