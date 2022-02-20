type Prm1 = Parameters<() => void>; // []

type Prm2 = Parameters<typeof Array.isArray>; // [arg: any]

type Prm3 = Parameters<typeof parseInt>; // [string: string, radix?: number | undefined]

type Prm4 = Parameters<typeof Math.max>; // number[]

export { };