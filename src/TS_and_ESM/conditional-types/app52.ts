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

    const myTuple = [1, 2, 3, 4] as const;
    const myArray = ['hello', 'world'];

    const r1 = tail(myTuple);

    const r2 = tail([...myTuple, ...myArray]);
}

export { };