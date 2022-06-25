{
    type Merge<T extends object> = (T extends object ? (p: T) => void : never) extends (p: infer U) => void ? (U extends object ? U : object) : object;

    type UnionTuple<T extends any[]> = T extends { [n: number]: infer U } ? U extends object ? U : never : never;

    type MergeTuple<T extends any[]> = Merge<UnionTuple<T>>;

    type T1 = Merge<{ firstName: string; lastName: string; } | { age: number }>;

    const a1: T1 = {
        firstName: '',
        lastName: '',
        age: 1
    };

    type T2 = UnionTuple<[{ firstName: string, lastName: string }, { age: number }]>;

    const a2: T2 = {
        firstName: '',
        lastName: '',
    };

    const a3: T2 = {
        firstName: '',
        lastName: '',
        age: 1
    };

    type T3 = MergeTuple<[{ firstName: string, lastName: string }, { age: number }]>;

    const a4: T3 = {
        firstName: '',
        lastName: '',
        age: 1
    };
}

{
    type CompareLength<Left extends any[], Right extends any[]> = {
        fitBoth: 'equal'
        fitLeft: 'shorterLeft'
        fitRight: 'shorterRight'
        unfit: ((..._: Left) => any) extends ((_: any, ..._1: infer LeftRest) => any) ?
        ((..._: Right) => any) extends ((_: any, ..._1: infer RightRest) => any) ?
        CompareLength<LeftRest, RightRest>
        : never
        : never
    };

    type T1 = CompareLength<[firstName: string], [lastName: string]>;

    type T2 = CompareLength<[firstName: string, age: number], [lastName: string]>;
}

{
    type CompareLength<Left extends any[], Right extends any[]> = {
        fitBoth: 'equal'
        fitLeft: 'shorterLeft'
        fitRight: 'shorterRight'
        unfit: ((..._: Left) => any) extends ((_: any, ..._1: infer LeftRest) => any) ?
        ((..._: Right) => any) extends ((_: any, ..._1: infer RightRest) => any) ?
        CompareLength<LeftRest, RightRest>
        : never
        : never
    }[
        Left['length'] extends Right['length'] ? 'fitBoth' :
        Left extends [] ? 'fitLeft' :
        Right extends [] ? 'fitRight' :
        'unfit'
    ];

    type T1 = CompareLength<[firstName: string, age: number], [lastName: string]>;

    const a1: T1 = 'shorterRight';
}

{
    type CompareLength<Left extends any[], Right extends any[]> =
        Left['length'] extends Right['length'] ? 'fitBoth' :
        Left extends [] ? 'fitLeft' :
        Right extends [] ? 'fitRight' :
        'unfit';

    type T1 = CompareLength<[firstName: string, age: number], [lastName: string]>;

    const a1: T1 = 'unfit';
}

{
    type CompareLength<Left extends any[], Right extends any[]> = {
        fitBoth: 'equal',
        fitLeft: 'shorterLeft',
        fitRight: 'shorterRight',
        unfit: (..._: Left) => any
    }[
        Left['length'] extends Right['length'] ? 'fitBoth' :
        Left extends [] ? 'fitLeft' :
        Right extends [] ? 'fitRight' :
        'unfit'
    ];

    type T1 = CompareLength<[firstName: string, age: number], [lastName: string]>;

    const a1: T1 = (firstName, age) => { };
}

{
    type CompareLength<Left extends any[]> = Left extends any[] ? (..._: Left) => any : never;

    type T1 = CompareLength<[firstName: string, age: number]>;

    const a1: T1 = (firstName, age) => { };
}

{
    type CompareLength<Left extends any[], Right extends any[]> =
        Left['length'] extends Right['length'] ? 'equal' :
        Left extends [] ? 'shorterLeft' :
        Right extends [] ? 'shorterRight' :
        Left extends [any, ...infer L] ?
        Right extends [any, ...infer R] ?
        CompareLength<L, R> :
        never :
        never;

    type T1 = CompareLength<[firstName: string], [lastName: string]>;

    const a1: T1 = 'equal';

    type T2 = CompareLength<[firstName: string], [lastName: string, age: number]>;

    const a2: T2 = 'shorterLeft';

    type T3 = CompareLength<[firstName: string, age: number], [lastName: string]>;

    const a3: T3 = 'shorterRight';
}

{
    type CompareLength<Left extends any[], Right extends any[]> =
        Left['length'] extends Right['length'] ? 'equal' :
        Left extends [] ? 'shorterLeft' :
        Right extends [] ? 'shorterRight' :
        ((..._: Left) => any) extends ((_: any, ..._1: infer LeftRest) => any) ?
        ((..._: Right) => any) extends ((_: any, ..._1: infer RightRest) => any) ?
        CompareLength<LeftRest, RightRest> :
        never :
        never;

    type T1 = CompareLength<[firstName: string], [lastName: string]>;

    const a1: T1 = 'equal';

    type T2 = CompareLength<[firstName: string], [lastName: string, age: number]>;

    const a2: T2 = 'shorterLeft';

    type T3 = CompareLength<[firstName: string, age: number], [lastName: string]>;

    const a3: T3 = 'shorterRight';
}

{
    type CompareLength<Left extends any[]> = Left['at'];

    type T1 = CompareLength<[firstName: string]>;

    const a1: T1 = (index) => ""
}

export { };
