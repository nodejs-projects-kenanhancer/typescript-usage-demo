type NotArrayType<T> = T extends Array<any> ? never : T;

const NotArray = <T>(arg: NotArrayType<T>) => arg;

const a1 = NotArray(33); // works
// const a2 = NotArray(['']); // type error



interface Json {
    [key: string]: string | number | boolean | Json | Json[]
}

const a3: Json = {} // works
// const a4: Json = [] // type error

export { };