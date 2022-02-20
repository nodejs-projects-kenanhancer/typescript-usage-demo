type FunctionFirstParameterType<T> = T extends (firstPrm: infer PFirst, ...args: any[]) => any ? PFirst : never;

type FirstParameterType = FunctionFirstParameterType<(firstName: string, age: number) => string>;

type FirstParameterType2 = FunctionFirstParameterType<(port: number, host: string) => void>;

export { };