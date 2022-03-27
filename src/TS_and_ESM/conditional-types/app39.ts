
// do not use this option
{
    function foo(val: string | number): string | number {
        return val;
    }

    const a1 = foo(0); // equivalent: const a1: string | number = foo(0);
    const a2 = foo(""); // equivalent: const a2: string | number = foo("");
    const a3 = foo(Math.random() ? "" : 0); // equivalent: const a3: string | number = foo(Math.random() ? "" : 0);
}

// do not use this option
{
    function foo<T extends number | string>(val: T): T {
        return val;
    }

    const a1: 0 = foo(0); // equivalent: const a1: 0 = foo(0);
    const a2: "" = foo(""); // equivalent: const a2: "" = foo("");
    const a3: "" | 0 = foo(Math.random() ? "" : 0); // equivalent: const a3: "" | 0 = foo(Math.random() ? "" : 0);
}

// good usage
{
    function foo(val: number): number;
    function foo(val: string): string;
    function foo(val: number | string): number | string;
    function foo(val: any): any {
        return val;
    }

    const a1 = foo(0); // equivalent: const a1: number = foo(0);
    const a2 = foo(""); // equivalent: const a2: string = foo("");
    const a3 = foo(Math.random() ? 0 : ""); // equivalent: const a3: string | number = foo(Math.random() ? 0 : "");
}

// good usage
{
    function foo(val: number): number;
    function foo(val: string): string;
    function foo(val: number | string): number | string;
    function foo<T extends number | string>(val: T): T {
        return val;
    }

    const a1 = foo(0); // equivalent: const a1: number = foo(0);
    const a2 = foo(""); // equivalent: const a2: string = foo("");
    const a3 = foo(Math.random() ? "" : 0); // equivalent: const a3: string | number = foo(Math.random() ? 0 : "");
}

// good usage
{
    function foo<T extends number | string>(val: T): T extends number ? number : string {
        return val as any;
    }

    const a1 = foo(0); // equivalent: const a1: number = foo(0);
    const a2 = foo(""); // equivalent: const a2: string = foo("");
    const a3 = foo(Math.random() ? "" : 0); // equivalent: const a3: string | number = foo(Math.random() ? "" : 0);
}

// good usage
{
    type StringOrNumber<T> = T extends number ? number : string;

    function foo<T extends string | number>(val: T): StringOrNumber<T> {
        return val as StringOrNumber<T>;
    }

    const a1 = foo(0); // equivalent: const a1: number = foo(0);
    const a2 = foo(""); // equivalent: const a2: string = foo("");
    const a3 = foo(Math.random() ? "" : 0); // equivalent: const a3: string | number = foo(Math.random() ? "" : 0);
}

// good usage
{
    type StringOrNumber<T> = T extends number ? number : string;

    function foo<T extends number | string, R extends StringOrNumber<T>>(val: T): R {
        return val as any;
    }

    const a1 = foo(0); // equivalent: const a1: number = foo(0);
    const a2 = foo(""); // equivalent: const a2: string = foo("");
    const a3 = foo(Math.random() ? "" : 0); // equivalent: const a3: string | number = foo(Math.random() ? "" : 0);
}


export { };