declare function foo<const T>(x: T): T;
declare function bar<const T>(obj: [T, T]): T;
declare function baz<const T extends readonly unknown[]>(...args: T): T;
declare function qux<T>(obj: [T, T]): T;

const x1 = foo("a");
const x2 = foo(["a", ["b", "c"]]);
const x3 = foo({ a: 1, b: "c", d: ["e", 2, true, { f: "g" }] });
const x4 = bar([
  { a: 1, b: "x" },
  { a: 2, b: "y" },
]);

const x5 = qux([
  { a: 1, b: "x" },
  { a: 2, b: "y" },
]);
const x6 = bar([{ a: 1, b: "x" } as const, { a: 2, b: "y" } as const]);

// readonly [1, "b", { readonly a: 1; readonly b: "x"; }]
const z = baz(1, "b", { a: 1, b: "x" });

export {};
