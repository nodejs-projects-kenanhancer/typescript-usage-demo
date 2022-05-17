// https://github.com/lieene/typescript-utility/blob/master/src/index.ts

// https://github.com/microsoft/TypeScript/issues/26058

{
    type Merge<U extends object> = (U extends object ? (k: U) => void : never) extends (k: infer T) => void ? (T extends object ? T : object) : object;
    type UnionTupleType<A extends any[]> = A extends { [n: number]: infer T } ? T extends object ? T : never : never;
    type MergeTupleType<A extends any[]> = Merge<UnionTupleType<A>>;




    type T1 = UnionTupleType<[{ context: any, event: any }, { firstName: string; lastName: string }]>;

    type T2 = MergeTupleType<[{ context: any, event: any }, { firstName: string; lastName: string }]>;
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

    type T2 = CompareLength<[firstName: string], [lastName: string, age: number]>;

    const a1: T1 = 'shorterRight';

    type Omit2<T, K extends keyof T> = T extends { [Symbol.iterator]: infer U } ? { [Symbol.iterator]: U } & Omit<T, K> : Omit<T, K>;

}

export { };