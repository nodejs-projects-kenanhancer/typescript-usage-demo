type Flatten<T> = T extends Array<infer TItem> ? TItem : T;

type FuncParametersAsArray = Parameters<(x: string, y: number, z: boolean) => void>;

type FuncParameters = Flatten<FuncParametersAsArray>;

export { };