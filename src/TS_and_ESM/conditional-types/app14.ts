type FunctionSecondParameterType<T> = T extends (firstPrm: any, secondPrm: infer PSecond, ...args: any[]) => any ? PSecond : never;

type SecondParameterType = FunctionSecondParameterType<(firstName: string, age: number) => string>;

type SecondParameterType2 = FunctionSecondParameterType<(port: number, host: string) => void>;

export { };