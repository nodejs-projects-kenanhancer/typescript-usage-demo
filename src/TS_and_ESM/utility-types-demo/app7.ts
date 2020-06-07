//Type inference
type First<T> = T extends [infer U, ...unknown[]] ? U : never;

type SomeTupleType = [string, number, boolean];

type FirstElementType = First<SomeTupleType>;




type ConstructorParameterType1 = ConstructorParameters<ErrorConstructor>; // [(string | undefined)?]

type ConstructorParameterType2 = ConstructorParameters<FunctionConstructor>; // string[]

type ConstructorParameterType3 = ConstructorParameters<RegExpConstructor>; // [string | RegExp, (string | undefined)?]




type InstanceType1 = InstanceType<ErrorConstructor>; // Error

type InstanceType2 = InstanceType<FunctionConstructor>; // Function

type InstanceType3 = InstanceType<RegExpConstructor>; // RegExp

type InstanceType4 = ReturnType<RegExpConstructor>; // RegExp

type InstanceType5 = ReturnType<ErrorConstructor>; // Error




type ReturnType1 = ReturnType<() => string>; // string

type ReturnType2 = ReturnType<() => () => any[]>; // () => any[]

type ReturnType3 = ReturnType<typeof Math.random>; // number

type ReturnType4 = ReturnType<typeof Array.isArray>; // boolean

type ReturnType5 = ReturnType<RegExpConstructor>; // RegExp




type ParametersType1 = Parameters<() => void>; // []

type ParametersType2 = Parameters<typeof Array.isArray>; // [any]

type ParametersType3 = Parameters<typeof parseInt>; // [string, (number | undefined)?]

type ParametersType4 = Parameters<typeof Math.max>; // number[]

type ParametersType5 = Parameters<typeof Math.pow>; // [number, number]




type NonNullableType1 = NonNullable<boolean>; // boolean

type NonNullableType2 = NonNullable<number | null>; // number

type NonNullableType3 = NonNullable<string | undefined>; // string

type NonNullableType4 = NonNullable<null | undefined>; // never




type ExtractType1 = Extract<string | string[], any[]>; // string[]

type ExtractType2 = Extract<(() => void) | null, Function>; // () => void

type ExtractType3 = Extract<200 | 400, 200 | 201>; // 200

type ExtractType4 = Extract<number, boolean>; // never




type ExcludeType1 = Exclude<string | string[], any[]>; // string

type ExcludeType2 = Exclude<(() => void) | null, Function>; // null

type ExcludeType3 = Exclude<200 | 400, 200 | 201>; // 400

type ExcludeType4 = Exclude<number, boolean>; // number




interface Person {
    firstName: string;
    lastName: string;
    email: string | null;
}



type PersonWithoutEmail1 = Pick<Person, "firstName" | "lastName">;

type PersonWithoutEmail2 = Pick<Person, "firstName" | "lastName" | never>;

type PersonWithoutEmail3 = Pick<Person, Exclude<"firstName" | "lastName" | "email", "email">>;

type PersonWithoutEmail4 = Pick<Person, Exclude<keyof Person, "email">>;

type PersonWithoutEmail5 = Omit<Person, "email">;

type PersonWithoutEmail6 = {
    [P in "firstName" | "lastName"]: Person[P];
}

type PersonWithoutEmail7 = {
    firstName: Person["firstName"];
    lastName: Person["lastName"];
}

type PersonWithoutEmail8 = {
    firstName: string;
    lastName: string;
}


export { };