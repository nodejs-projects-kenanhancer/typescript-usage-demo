type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;

type Num = Flatten<number>;

export { };