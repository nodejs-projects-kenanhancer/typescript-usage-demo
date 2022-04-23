{
    function concat(arr1: readonly any[], arr2: readonly any[]) {
        return [...arr1, ...arr2];
    }

    const a1 = [1, 2] as const;

    const a2 = ['a', 'b'];

    const a3 = concat(a1, a2);
}

{
    function concat(arr1: any[], arr2: any[]) {
        return [...arr1, ...arr2];
    }

    const myTuple = [1, 2] as const;

    const myArray = ['a', 'b'];

    const r1 = concat(myTuple, myArray);
}

{
    const myTuple = [1, 2] as const;

    const myArray = ['a', 'b', true];

    const r1 = [...myTuple, ...myArray];
}

{
    const myTuple = ['kenan', 39] as [name: string, age: number];

    const myArray = ['kenan', 39];

    const r1 = [...myTuple, ...myArray];
}

{
    const myTuple1: [string, number] = ['kenan', 38];

    const myTuple2: ['kenan', 38] = ['kenan', 38];

    const myTuple3 = ['kenan', 38] as [string, number];

    const myTuple4 = ['kenan', 38] as ['kenan', 38];
}

{
    const myTuple1: readonly [string, number] = ['kenan', 38];

    const myTuple2: readonly ['kenan', 38] = ['kenan', 38];

    const myTuple3 = ['kenan', 38] as readonly [string, number];

    const myTuple4 = ['kenan', 38] as readonly ['kenan', 38];

    const myTuple5 = ['kenan', 38] as const;
}

{
    const myTuple1: [name: string, age: number] = ['kenan', 38];

    const myTuple2: [name: 'kenan', age: 38] = ['kenan', 38];

    const myTuple3 = ['kenan', 38] as [name: string, age: number];

    const myTuple4 = ['kenan', 38] as [name: 'kenan', age: 38];

}

{
    const myTuple1: readonly [name: string, age: number] = ['kenan', 38];

    const myTuple2: readonly [name: 'kenan', age: 38] = ['kenan', 38];

    const myTuple3 = ['kenan', 38] as readonly [name: string, age: number];

    const myTuple4 = ['kenan', 38] as readonly [name: 'kenan', age: 38];
}

{
    const myTuple1: [string, number, ...boolean[]] = ['kenan', 38, true, false, false, true, true];

    const [name, age, ...input] = myTuple1;
}

{
    //[string, ...boolean[], number]
    const myTuple1: [string, ...boolean[], number] = ['kenan', true, false, 11];

    // const [name, age, ...cc, ddd] = myTuple1;

    // const akd = aa
}

{
    const a = [12, 23, 132, 12, 3];
    // const [...rest, last] = a;
}

{
    type Student = [string, ...number[], boolean];

    const bob: Student = ['Bob', true];
    const sally: Student = ['Sally', 100, true];
    const jane: Student = ['Jane', 80, 90, 100, true];

    const [a, b, c, d] = sally;
}

{
    function foo(...arg: [string, ...number[], boolean]) {

        const [first, last, rest] = [arg[0], arg[arg.length - 1] as boolean, arg.slice(1, - 1) as number[]];
    }

    foo('', 1, 2, 3, 4, false);
}

{
    function bar(...arg: [name: string, scores: number[], passed: boolean]) {

        const [name, scores, passed] = [arg[0], (arg.slice(1, -1) as any) as number[], arg[arg.length - 1] as boolean];
    }

    bar('', [1, 2, 3, 4], false);
}

{
    function greet(firstName: string, lastName: string) {
        return `${firstName} ${lastName}`;
    }

    type Prepend<I extends unknown[], T extends unknown[]> = [...I, ...T];

    type NewGreetParams = Prepend<[title: string], Parameters<typeof greet>>;

    function greetV2(...args: NewGreetParams) {

        const [title, firstName, lastName] = args;

        return `${title} ${firstName} ${lastName}`;
    }

    const r1 = greet('Kenan', 'Hancer');

    const r2 = greetV2('Mr', 'Kenan', 'Hancer');
}

{
    type Title = [title: string];
    type FirstName = [first: string];
    type LastName = [last: string];
    type MiddleName = [middle: string];

    type Name =
        | [...FirstName, ...LastName]
        | [...FirstName, ...LastName, ...MiddleName]
        | [...FirstName, ...LastName, ...MiddleName, ...Title];

    function greet(...args: Name) {

        let [firstName, lastName, middleName, title] = args;

        return `Hello ${title} ${firstName} ${middleName} ${lastName}`;
    }

    const r1 = greet('Kenan', 'Hancer');

    const r2 = greet('Kenan', 'Hancer', '', 'Mr');

}

{
    type ArgumentTypes<T extends (...a: any) => any> = T extends (...a: infer A) => any ? A : never;

    type QWE<T extends [number, string]> = [boolean, ...T];
}

{
    let foo: [...string[], number];

    foo = [123];
    foo = ["hello", 123];
    foo = ["hello!", "hello!", "hello!", 123];

    const a1 = foo[0];
    // const [a1, a2] = ["hello!", "hello!", "hello!", 123] as [...string[], number];
}

{
    type Prepend<I, T extends unknown[]> = [I, ...T];

    type Append<I, T extends unknown[]> = [...T, I];

    type AddBetween<I, T extends unknown[], U extends unknown[]> = [...T, I, ...U];

    type T1 = Prepend<Date, [string, boolean]>;

    type T2 = Append<Date, [string, boolean]>;

    type T3 = AddBetween<Date, [string], [boolean]>;

    const a1 = [new Date(), '', true] as T1;
}

{
    type Prepend<I extends unknown[], T extends unknown[]> = [...I, ...T];

    type Append<I extends unknown[], T extends unknown[]> = [...T, ...I];

    type AddBetween<I extends unknown[], T extends unknown[], U extends unknown[]> = [...T, ...I, ...U];

    type T1 = Prepend<[Date], [string, boolean]>;

    type T2 = Append<[Date], [string, boolean]>;

    type T3 = AddBetween<[Date], [string], [boolean]>;

    const a1 = [new Date(), 'hello', false] as T1;

    const a2 = ['hello', false, new Date()] as T2;

    const a3 = ['hello', new Date(), false] as T3;
}

{
    const a1 = [1, 2, 3, 4] as const;

    const a2 = [...[1], ...[2], ...[3], ...[4]] as const;

    const a3 = [...[1], ...['hello'], ...[new Date()]];
}

{
    const a1 = [1, 2] as const;

    const a2 = [3, 4] as const;

    const a3 = ['a', ...a1, ...a2, 'b'] as const;

    const a4 = ['a', ...[1, 2], ...[3, 4], 'b'] as const;

    const a5 = ['a', ...[1, 2, 3, 4], 'b'] as const;

    const a6 = ['a', 1, 2, 3, 4, 'b'] as const;
}

{
    const a3 = [1, 'a', 2, 'b'] as const;

    const a4 = [1, ...['a', 2], 'b'] as const;

    const a5 = [...[1], ...['a'], ...[2], ...['b']] as const;

    const arr1 = [1];
    const arr2 = [2];
    const arr3 = [3];

    const a55 = [...arr1, ...arr2, ...arr3] as const;

    const a6 = [...[1], ...arr1, ...['a']] as const;
}

{
    const a1 = [1, 2, 3, 4] as const;

    const a2 = [1, 2, 3, ...[4]] as const;

    const a3 = [1, 2, ...[3, 4]] as const;

    const a4 = [1, ...[2, 3, 4]] as const;

    const a5 = [...[1, 2, 3, 4]] as const;

    const a6 = [...[1], 2, 3, 4] as const;

    const a7 = [...[1, 2], 3, 4] as const;

    const a8 = [...[1, 2, 3], 4] as const;

    const a9 = [...[1, 2, 3, 4]] as const;

    const a10 = [1, ...[2, 3], 4] as const;
}

{
    const Student_roll = [1001, 1002, 1003, 1004] as const;

    const [...stud3] = Student_roll;

    const [a, b, c, d] = Student_roll;

    const [x, ...y] = Student_roll;

    const [j, ...k] = Student_roll;
}

{
    type Foo<T extends unknown[]> = [string, ...T, number];

    type T1 = Foo<[boolean]>;  // [string, boolean, number]
    type T2 = Foo<[number, number]>;  // [string, number, number, number]
    type T3 = Foo<[]>;  // [string, number]
}

{
    const myTuple1: [string, number] = ['kenan', 38];

    const myTuple2 = ['kenan', 38] as [string, number];

    const myTuple3: readonly [string, number] = ['kenan', 38];

    const myTuple4: readonly ['kenan', 38] = ['kenan', 38];

    const myTUple5 = ['kenan', 38] as readonly [string, number];

    const myTUple6 = ['kenan', 38] as readonly ['kenan', 38];

    const myTuple7 = ['kenan', 38] as const;

    const myTuple8: ['kenan', 38] = ['kenan', 38];

    const myTuple9 = ['kenan', 38] as ['kenan', 38];





    const myTuple10: [name: string, age: number] = ['kenan', 38];

    const myTupl11 = ['kenan', 38] as [name: string, age: number];

    const myTuple12: [name: 'kenan', age: 38] = ['kenan', 38];

    const myTuple13 = ['kenan', 38] as [name: 'kenan', age: 38];








    const [name, age] = ['kenan', 38];

}

{
    const myTuple1: [string, number] = ['kenan', 38];

    const myTuple2 = ['kenan', 38] as [string, number];
}

{
    function concat<T extends readonly any[], U extends readonly any[]>(arr1: T, arr2: U): [...T, ...U] {
        return [...arr1, ...arr2];
    }

    const a1 = [1, 2] as const;

    const a2 = ['a', 'b'] as const;

    const a3 = [...a1, ...a2];

    const a4 = concat(a1, a2);

    const [a5, a6, a7, a8] = a4;

    const [a9, a10] = a3;
}


export { };