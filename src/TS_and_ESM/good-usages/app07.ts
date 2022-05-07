{
    type WhiteSpace = ' ' | '\n' | '\t' | '\r';

    type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer R}` ? TrimLeft<R> : S;

    type TrimRight<S extends string> = S extends `${infer R}${WhiteSpace}` ? TrimRight<R> : S;

    type Trim<S extends string> = TrimLeft<TrimRight<S>>;


    type T1 = TrimLeft<'  GET   '>;

    type T2 = TrimRight<'   GET   '>;

    type T3 = Trim<'   GET   '>;

    type T4 = Trim<'GET'>;

    const a1: T1 = 'GET   ';

    const a2: T2 = '   GET';

    const a3: T3 = 'GET';

    const a4: T4 = 'GET';
}

{
    type Split<S extends string, D extends string> =
        string extends S ? string[] :
        S extends '' ? [] :
        S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

    type TupleToUnion<T extends any[]> = T[number];

    type T1 = Split<'Kenan Hancer', ' '>; // ["Kenan", "Hancer"]

    type T2 = Split<'Hello Kenan Hancer', ' '>; // ["Hello", "Kenan", "Hancer"]

    type T3 = Split<'Hello Mr Kenan Hancer', ' '>; // ["Hello", "Mr", "Kenan", "Hancer"]

    type T4 = TupleToUnion<T3>; // "Hello" | "Mr" | "Kenan" | "Hancer"

    type T5 = Split<string, '.'>; // string[]

    type T6 = Split<'', ''>; // []

    type T7 = Split<' ', ' '>; // [""]


    const a1: T4 = 'Hancer';

    function test(...arg: T3) { }

    test('Hello', 'Mr', 'Kenan', 'Hancer');



    const HTTP_METHODS = 'GET POST PUT DELETE';

    type T8 = Split<typeof HTTP_METHODS, ' '>; // ["GET", "POST", "PUT", "DELETE"]

    type T9 = TupleToUnion<T8>; // "GET" | "POST" | "PUT" | "DELETE"

    const a2: T9 = 'POST';
}

{
    type SplitAsUnion<S extends string, D extends string> =
        string extends S ? never :
        S extends '' ? never :
        S extends `${infer T}${D}${infer T}` ? SplitAsUnion<T, D> : S;

    type T1 = SplitAsUnion<'Kenan Hancer', ' '>; // "Kenan" | "Hancer"

    type T2 = SplitAsUnion<'Hello Kenan Hancer', ' '>; // "Hello" | "Kenan" | "Hancer"

    type T3 = SplitAsUnion<'Hello Mr Kenan Hancer', ' '>; // "Hello" | "Mr" | "Kenan" | "Hancer"


    const a1: T1 = 'Kenan';

    const a2: T2 = 'Hello';

    const a3: T3 = 'Mr';
}

{
    type Replace<S extends string, From extends string, To extends string> =
        string extends S ? never :
        From extends '' ? S :
        S extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : S;

    type T1 = Replace<'Hello World', 'Hello', 'Hi'>; // "Hi World"

    type T2 = Replace<'Hi World', 'Hi', 'Hello'>; // "Hello World"

    type T3 = Replace<'Hello Mr Kenan Hancer', 'Hello', 'Hi'>; // "Hi Mr Kenan Hancer"


    const a1: T1 = 'Hi World';

    const a2: T2 = 'Hello World';

    const a3: T3 = 'Hi Mr Kenan Hancer';
}

{
    type WhiteSpace = ' ' | '\n' | '\t' | '\r';

    type SplitAsUnion<S extends string, D extends string> =
        string extends S ? never :
        S extends '' ? S :
        S extends `${infer T}${D}${infer T}` ? SplitAsUnion<T, D> : S;

    type Replace<S extends string, From extends SplitAsUnion<S, WhiteSpace>, To extends string> =
        string extends S ? never :
        From extends '' ? S :
        S extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : S;

    type T1 = Replace<'Hello World', 'Hello', 'Hi'>; // "Hi World"

    type T2 = Replace<'Hi World', 'Hi', 'Hello'>; // "Hello World"

    type T3 = Replace<'Hello Mr Kenan Hancer', 'Hello', 'Hi'>; // "Hi Mr Kenan Hancer"


    const a1: T1 = 'Hi World';

    const a2: T2 = 'Hello World';

    const a3: T3 = 'Hi Mr Kenan Hancer';
}

{
    type ReplaceAll<S extends string, From extends string, To extends string> =
        string extends S ? never :
        S extends '' ? S :
        S extends `${infer Prefix}${From}${infer Suffix}` ? `${ReplaceAll<Prefix, From, To>}${To}${ReplaceAll<Suffix, From, To>}` : S;

    type T1 = ReplaceAll<'foobazfoobarbaz', 'bar', 'foo'>; // "foobazfoofoobaz"

    type T2 = ReplaceAll<'forbarfoobazbaz', 'foo', 'baz'>; // "forbarbazbazbaz"


    const a1: T1 = 'foobazfoofoobaz';

    const a2: T2 = 'forbarbazbazbaz';
}


export { };