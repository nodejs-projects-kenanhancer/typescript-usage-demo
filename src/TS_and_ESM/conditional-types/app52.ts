{
    function concat(arr1: Array<any>, arr2: Array<any>) {
        return [...arr1, ...arr2];
    }

    function tail(arr: Array<any>) {
        const [_, ...result] = arr;

        return result;
    }
}

{
    function concat<T, U>(arr1: T[], arr2: U[]): Array<T | U> {
        return [...arr1, ...arr2];
    }

    concat([1, 2, 3], ['a', 'b', 'c']);
}

{
    function concat<T, U extends string>(arr1: Array<T>, arr2: Array<U>) {
        return [...arr1, ...arr2];
    }
}

{
    function tail<T extends any[]>(arr: readonly [any, ...T]) {
        const [_ignored, ...rest] = arr;

        return rest;
    }

    const myTuple1 = [1, 2, 3, 4] as const;

    const myTuple2: readonly [11, 22, 33, 44] = [11, 22, 33, 44];

    const myTuple3: [55, 66, 77, 88] = [55, 66, 77, 88];

    const myTuple4: [number, number, number, number] = [1, 2, 3, 4];

    const myArray = ['hello', 'world'];

    const r1 = tail(myTuple1);

    const r2 = tail(myTuple2);

    const r3 = tail(myTuple3);

    const r4 = tail(myTuple4);

    const r5 = tail([...myTuple1, ...myArray]);
}

{
    {
        const [name, age] = ['kenan', 38];
    }
    {
        const [name, age]: [string, number] = ['kenan', 38];
    }
    {
        type PersonProps = [string, number];

        const [name, age]: PersonProps = ['kenan', 38];
    }
    {
        const params = ['kenan', 38];

        function foo(...args: any[]) {

            const [a, b] = args;

            console.log(a, b);
        }

        function bar(...args: [string, number]) {

            const [a, b] = args;

            console.log(a, b);
        }

        function baz(...args: [name: string, age: number]) {

            const [a, b] = args;

            console.log(a, b);
        }

        foo('kenan', 38);

        bar('kenan', 38);

        baz('kenan', 38);
    }
    {
        function foo(...args: [first: string, second: number, ...rest: any[]]) {

            const [a, b, ...c] = args;

            console.log(a, b);
        }
    }
    {
        type Name =
            | [first: string, last: string]
            | [first: string, middle: string, last: string];

        function createPerson(...name: Name) {

            let [first, middle, last] = name;

            [middle, last] = [last ?? '', middle];

            const fullName = `${first} ${middle} ${last}`;

            console.log(fullName);
        }

        createPerson('kenan', 'hancer');
    }
}

export { };