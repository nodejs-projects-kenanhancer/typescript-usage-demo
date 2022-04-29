{
    const formats = ['JSON', 'CSV', 'XML'] as const;

    type Format = typeof formats[number];

    function isFormat(x: string): x is Format {
        // widen formats to string[] so indexOf(x) works
        return (formats as readonly string[]).includes(x);
    }

    const format: Format = 'CSV';

    if (isFormat(format)) {

    }
}

{
    type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;

    type MainID = ASCIICacheKey<"my_app">;


    type Head<StrT extends string> = StrT extends `${infer HeadT}${string}` ? HeadT : never;

    type Tail<StrT extends string> = StrT extends `${string}${infer TailT}` ? TailT : never;

    type T1 = Head<'kenan'>;

    type T2 = Tail<'kenan'>;

    type TLD = 'com' | 'net' | 'org';
    type Domain = `${string}.${TLD}`;
    type Url = `${'http' | 'https'}://${Domain}`;

    const success: Url = 'https://example.com';
    const fail: Url = 'example.com';
    const domain: Domain = 'example.com';


    type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };

    type T3 = Tuple<string, 3>;

    type T4<T extends string, L extends number> = [T, ...T[]] & { length: L };

    type T5 = T4<'kenand', 5>;



}

{
    type TruncateToOne<T extends string> = T extends
        `${infer AA}${infer R}` ?
        T extends `${infer F}${R}` ? F : never : T;

    const atMostOne = <T extends string>(str: TruncateToOne<T>) => str;

    const test1 = atMostOne('a');
    // const test2 = atMostOne('ab');
    // const test3 = atMostOne('abcd');
}

export { };