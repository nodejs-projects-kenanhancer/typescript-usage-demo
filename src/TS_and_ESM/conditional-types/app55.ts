interface Person {
    firstName: string;
    lastName: string;
    dob: Date;
    hasCats: false;
}

{
    class BHAAL { private isBhaal = true; }

    type UnionToTuple<T> = (
        (
            (
                T extends any
                ? (t: T) => T
                : never
            ) extends infer U
            ? (U extends any
                ? (u: U) => any
                : never
            ) extends (v: infer V) => any
            ? V
            : never
            : never
        ) extends (_: any) => infer W
        ? [...UnionToTuple<Exclude<T, W>>, W]
        : []
    );

    type T1 = 2 | 1 | 3 | 5 | 10 | -9 | 100 | 1001 | 102 | 123456 | 100000000 | "alice" | [[[BHAAL]]] | "charlie";

    type T2 = UnionToTuple<T1>;

    type T3 = UnionToTuple<keyof Person>;
}

{
    type TupleUnion<U extends string, R extends string[] = []> = {
        [S in U]: Exclude<U, S> extends never ? [...R, S] : TupleUnion<Exclude<U, S>, [...R, S]>;
    }[U] & string[];

    type keys = TupleUnion<keyof Person>;
}

{
    type ValueTuple<O, T extends keyof O = keyof O> = (
        (
            (
                T extends any
                ? (t: T) => T
                : never
            ) extends infer U
            ? (U extends any
                ? (u: U) => any
                : never
            ) extends (v: infer V) => any
            ? V
            : never
            : never
        ) extends (_: any) => infer W
        ? [...ValueTuple<O, Exclude<T, W>>, O[Extract<W, keyof O>]]
        : []
    );

    type MyArgs = {
        arg1: string;
        arg2: number;
        arg3: string;
    };

    type F = (...args: ValueTuple<MyArgs>) => void;
}

{
    class BHAAL { private isBhaal = true; }

    type UnionToTuple<T> = (
        (
            (
                T extends any
                ? (t: T) => T
                : never
            ) extends infer U
            ? (U extends any
                ? (u: U) => any
                : never
            ) extends (v: infer V) => any
            ? V
            : never
            : never
        ) extends (_: any) => infer W
        ? [...UnionToTuple<Exclude<T, W>>, W]
        : []
    );

    type T1 = UnionToTuple<2 | 1 | 3 | 5 | 10 | -9 | 100 | 1001 | 102 | 123456 | 100000000 | "alice" | [[[BHAAL]]] | "charlie">;
}

{
    type Input = 1 | 2;

    type UnionToIntersection<U> = (U extends any ? (arg: U) => any : never) extends (arg: infer I) => void ? I : never;

    type UnionToTuple<T> = UnionToIntersection<(T extends any ? (t: T) => T : never)> extends (_: any) => infer W ? [...UnionToTuple<Exclude<T, W>>, W] : [];

    type T1 = UnionToTuple<Input>;
}

{
    type UnionToIntersection<U> = (U extends never ? never : (arg: U) => never) extends (arg: infer I) => void ? I : never;

    type UnionToTuple<T> = UnionToIntersection<T extends never ? never : (t: T) => T> extends (_: never) => infer W ? [...UnionToTuple<Exclude<T, W>>, W] : [];

    type T1 = UnionToTuple<'firstName' | 'lastName'>;
}

{
    type UnionToIntersection<T extends (arg: any) => any> = (T extends any ? (p1: T) => void : never) extends (arg: infer I) => void ? I : never;

    type UnionToTuple<T> = UnionToIntersection<T extends never ? never : (t: T) => T> extends (_: never) => infer W ? [...UnionToTuple<Exclude<T, W>>, W] : [];

    type T1 = UnionToTuple<'firstName' | 'lastName'>;
}

{
    type UnionToTuple<T> = (
        (
            (
                T extends any
                ? (t: T) => T
                : never
            ) extends infer U
            ? (U extends any
                ? (u: U) => any
                : never
            ) extends (v: infer V) => any
            ? V
            : never
            : never
        ) extends (_: any) => infer W
        ? [...UnionToTuple<Exclude<T, W>>, W]
        : []
    );

    type T1 = UnionToTuple<'firstName' | 'lastName'>;

    const a1: T1 = ['firstName', 'lastName'];
}

{
    // credits goes to https://stackoverflow.com/a/50375286
    type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
        k: infer I
    ) => void
        ? I
        : never;

    // Converts union to overloaded function
    type UnionToOvlds<U> = UnionToIntersection<
        U extends any ? (f: U) => void : never
    >;

    type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;

    type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

    // Finally me)
    type UnionToArray<T, A extends unknown[] = []> = IsUnion<T> extends true
        ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
        : [T, ...A];

    interface Person {
        name: string;
        age: number;
        surname: string;
        children: number;
    }

    type Result = UnionToArray<keyof Person>; // ["name", "age", "surname", "children"]

    const func = <T,>(): UnionToArray<keyof T> => null as any;

    const result = func<Person>(); // ["name", "age", "surname", "children"]

    console.log(result);

    type T1 = keyof Person
}
export { };