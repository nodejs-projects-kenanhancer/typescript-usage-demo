{
    const foo = <T>(p: T) => p;

    foo(41);

    foo({ a: 41 });

    foo({ a: 41 } as const);
}

{
    const foo = <T extends { a: K }, K>(p: T) => p;

    foo({ a: 41 });

    foo({ a: 41 } as const);
}

{
    const foo = <T extends { a: K }, K extends number>(p: T) => p;

    foo({ a: 41 });

    foo({ a: 41 } as const);
}

{
    const foo = <Key extends PropertyKey, Value extends number | string, T extends Record<Key, Value>>(a: T) => a;

    foo({ a: 42, b: 'hello' });
}

{
    type Json = null | string | number | boolean | Array<Json> | { [prop: string]: Json };

    const foo = <Key extends PropertyKey, Value extends Json, T extends Record<Key, Value>>(p: T) => p;

    foo({ a: 41, b: 'hello' });
}

{
    type Json = null | string | number | boolean | Array<Json> | { [prop: PropertyKey]: Json };

    const foo = <Key extends PropertyKey, Value extends Json, T extends Record<Key, Value>[]>(p: T) => p;

    foo([{ a: 41, b: 'hello', c: true }, { a: 42 }]);
}

{
    type Json = null | string | number | boolean | Array<Json> | { [prop: PropertyKey]: Json };

    const foo = <T extends Record<PropertyKey, Value>, Value extends Json>(p: T) => p;

    foo({ a: 41, b: 'Hello' });
}

{
    type Json = null | string | number | boolean | Array<Json> | { [prop: PropertyKey]: Json };

    const foo = <T extends Record<PropertyKey, K>[], K extends Json>(p: T) => p;

    foo([{ a: 41, b: 'Hello' }, { c: true, d: false }]);
}

{
    const foo = <V extends number, A extends { a: V }[]>(p: [...A]) => p;

    foo([{ a: 33 }, { a: 44 }]);

    // foo()
}

{
    const foo = <V extends number, A extends { a: V }>(p: [A]) => p;

    foo([{ a: 11 }]);
}

{
    const foo = <T extends Array<{ a: V }>, V extends number>(p: T) => p;

    foo([{ a: 11 }, { a: 12 }]);

    foo([{ a: 33 }, { a: 44 }]);
}

{
    const foo = <T extends { a: U }[], U extends number, >(p: [...T]) => p;
}

export { };