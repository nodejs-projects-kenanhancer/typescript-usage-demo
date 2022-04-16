{
    type A = Awaited<Promise<string>>;

    type B = Awaited<Promise<Promise<number>>>;

    type C = Awaited<boolean | Promise<number>>;

    type D = Awaited<boolean | Promise<Promise<number>>>;
}

{
    type MaybePromise = <T>(value: T) => T | Promise<T> | PromiseLike<T>;

    const maybePromise: MaybePromise = (value) => value;

    async function doSomething(): Promise<[number, number]> {

        const result = await Promise.all([maybePromise(100), maybePromise(200)]);

        return result;
    }
}

{
    function concat1(arr1: Array<any>, arr2: Array<any>) {
        return [...arr1, ...arr2];
    }

    function tail(arg: Array<any>) {
        const [_, ...result] = arg;
        return result;
    }

    function concat(arr1: [], arr2: []): [];
    function concat<A>(arr1: [A], arr2: []): [A];
    function concat<A, B>(arr1: [A, B], arr2: []): [A, B];
    function concat<A, B, C>(arr1: [A, B, C], arr2: []): [A, B, C];
    function concat<A, B, C, D>(arr1: [A, B, C, D], arr2: []): [A, B, C, D];
    function concat<A, B, C, D, E>(arr1: [A, B, C, D, E], arr2: []): [A, B, C, D, E];
    function concat<A, B, C, D, E, F>(arr1: [A, B, C, D, E, F], arr2: []): [A, B, C, D, E, F];
    function concat<A2>(arr1: [], arr2: [A2]): [A2];
    function concat<A1, A2>(arr1: [A1], arr2: [A2]): [A1, A2];
    function concat<A1, B1, A2>(arr1: [A1, B1], arr2: [A2]): [A1, B1, A2];
    function concat<A1, B1, C1, A2>(arr1: [A1, B1, C1], arr2: [A2]): [A1, B1, C1, A2];
    function concat<A1, B1, C1, D1, A2>(arr1: [A1, B1, C1, D1], arr2: [A2]): [A1, B1, C1, D1, A2];
    function concat<A1, B1, C1, D1, E1, A2>(arr1: [A1, B1, C1, D1, E1], arr2: [A2]): [A1, B1, C1, D1, E1, A2];
    function concat<A1, B1, C1, D1, E1, F1, A2>(arr1: [A1, B1, C1, D1, E1, F1], arr2: [A2]): [A1, B1, C1, D1, E1, F1, A2];
    function concat(arr1: any, arr2: any): any {

    }

    function test1<A>(arr1: [A], arr2: []): [A] {
        return arr1;
    }

    test1(['hello'], []);
}


export { };