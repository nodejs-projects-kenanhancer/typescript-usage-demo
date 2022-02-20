type Flip<T> = T extends [infer A, infer B] ? [B, A] : never;

type Flipped = Flip<[string, number]>;

type WrongFlipped = Flip<[string, number, boolean]>;


type Union<T> = T extends [infer A, infer A] ? A : never;

type Unioned = Union<[number, boolean]>;

type WrongUnioned = Union<[number, boolean, string]>;


type Flatten<T> = T extends (infer A)[] ? A : T;

type Unioned2 = Flatten<[number, boolean]>;

type Unioned3 = Flatten<[number, boolean, string]>;


type FlattenV2<T> = T extends any[] ? T[number] : T;

type Unioned4 = FlattenV2<[number, boolean]>;

type Unioned5 = FlattenV2<[number, boolean, string]>;


type FlattenV3<T> = T extends any[] ? T[2] | T[1] | T[0] : T;

type Unioned6 = FlattenV3<[number, boolean, string]>;


type FlattenV4<T> = T extends [infer A, infer B, infer C] ? B | A | C : T;

type Unioned7 = FlattenV4<[number, boolean, string]>;

export { };