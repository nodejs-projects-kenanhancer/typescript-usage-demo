// https://stackoverflow.com/questions/64932525/is-it-possible-to-use-mapped-types-in-typescript-to-change-a-types-key-names

interface SnakePerson {
  firstName: string;
  lastName: string;
}

type CamelToSnake<T extends string, P extends string = ""> = string extends T
  ? string
  : T extends `${infer C0}${infer R}`
  ? CamelToSnake<
      R,
      `${P}${C0 extends Lowercase<C0> ? "" : "_"}${Lowercase<C0>}`
    >
  : P;

type CamelToSnake2<T extends string> = string extends T
  ? string
  : T extends `${infer C0}${infer R}`
  ? `${C0 extends Lowercase<C0> ? "" : "_"}${Lowercase<C0>}${CamelToSnake<R>}`
  : "";

type CamelKeysToSnake<T> = {
  [K in keyof T as CamelToSnake<Extract<K, string>>]: T[K];
};

type T1 = CamelToSnake<"helloWorld">;
// type T1 = "hello_world"

type T2 = CamelToSnake2<"helloWorld">;
// type T2 = "hello_world"

type T3 = CamelKeysToSnake<SnakePerson>;
// type T3 = {
//     first_name: string;
//     last_name: string;
// }

export {};
