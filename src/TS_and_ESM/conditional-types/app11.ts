type FunctionParametersTypeAsUnion<T> = T extends (...args: infer P) => any
    ? (P extends Array<infer PItem> ? PItem : P)
    : never;

type FuncParameters = FunctionParametersTypeAsUnion<(x: string, y: number, z: boolean) => void>;

export { };