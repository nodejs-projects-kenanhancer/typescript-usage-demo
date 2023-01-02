type ToArray<T> = T[];

type T1 = ToArray<string | number | Date>;

type ToDistributiveArray<T> = T extends any ? T[] : never;

type T2 = ToDistributiveArray<string | number | Date>;

type ToNonDistributiveArray<T> = [T] extends [any] ? T[] : never;

type T3 = ToNonDistributiveArray<string | number | Date>;

export {};
