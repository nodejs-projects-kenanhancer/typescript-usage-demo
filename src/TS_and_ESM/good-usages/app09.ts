
{
    type WhiteSpace = ' ' | '\n' | '\t' | '\r';

    type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer R}` ? TrimLeft<R> : S;

    type TrimRight<S extends string> = S extends `${infer R}${WhiteSpace}` ? TrimRight<R> : S;

    type Trim<S extends string> = TrimLeft<TrimRight<S>>;

    type Split<S extends string, D extends string> =
        string extends S ? string[] :
        S extends '' ? [] :
        S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

    type TupleToUnion<T extends readonly any[]> = T[number];

    type SplitAsUnion<S extends string, D extends string> =
        string extends S ? never :
        S extends '' ? S :
        S extends `${infer T}${D}${infer T}` ? SplitAsUnion<T, D> : S;

    type Replace<S extends string, From extends SplitAsUnion<S, WhiteSpace>, To extends string> =
        string extends S ? never :
        From extends '' ? S :
        S extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : S;

    type ReplaceAll<S extends string, From extends string, To extends string> =
        string extends S ? never :
        S extends '' ? S :
        S extends `${infer Prefix}${From}${infer Suffix}` ? `${ReplaceAll<Prefix, From, To>}${To}${ReplaceAll<Suffix, From, To>}` : S;




    type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };

    type Head<TStr extends string> = TStr extends `${infer THead}${string}` ? THead : never;

    type Tail<TStr extends string> = TStr extends `${string}${infer TTail}` ? TTail : never;

    type Flip<T> = T extends [infer A, infer B] ? [B, A] : never;


    const formatsTuple = ['JSON', 'CSV', 'XML'] as const;

    type Formats = TupleToUnion<typeof formatsTuple>;

    const httpRequestMethodTuple = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'] as const;

    type HttpMethods = TupleToUnion<typeof httpRequestMethodTuple>;

    const appEventsTuple = ['click', 'keypress', 'mouseover', 'drag', 'focus'] as const;

    type AppEvents = TupleToUnion<typeof appEventsTuple>;
}

{
    type Append<A, B> = A extends [...infer Params] ? [...Params, ...(B extends [...infer Params2] ? Params2 : [])] : never;
}

export { };