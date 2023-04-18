{
  // this usage doesn't let usage of union type in tuple first element
  type FirstStringCheck<T> = T extends [string, ...unknown[]] ? T[0] : never;

  // string
  type T1 = FirstStringCheck<[string, number, number]>;

  // "TypeScript"
  type T2 = FirstStringCheck<["TypeScript", number, boolean]>;

  // "TypeScript" | "Java"
  type T3 = FirstStringCheck<["TypeScript" | "Java", number, number]>;

  // never
  type T4 = FirstStringCheck<["TypeScript" | 11, number, number]>;
}

{
  type FirstStringCheck<T> = T extends [infer S, ...unknown[]]
    ? S extends string
      ? S
      : never
    : never;

  // string
  type T1 = FirstStringCheck<[string, number, number]>;

  // "TypeScript"
  type T2 = FirstStringCheck<["TypeScript", number, boolean]>;

  // "TypeScript" | "Java"
  type T3 = FirstStringCheck<["TypeScript" | "Java", number, number]>;

  // "TypeScript"
  type T4 = FirstStringCheck<["TypeScript" | 11, number, number]>;
}

{
  type FirstStringCheck<T> = T extends [infer S, ...unknown[]]
    ? Extract<S, string>
    : never;

  // string
  type T1 = FirstStringCheck<[string, number, number]>;

  // "TypeScript"
  type T2 = FirstStringCheck<["TypeScript", number, boolean]>;

  // "TypeScript" | "Java"
  type T3 = FirstStringCheck<["TypeScript" | "Java", number, number]>;

  // "TypeScript"
  type T4 = FirstStringCheck<["TypeScript" | 11, number, number]>;
}

{
  // Extends constraints on infer type variables
  type FirstStringCheck<T> = T extends [infer S extends string, ...unknown[]]
    ? S
    : never;

  // string
  type T1 = FirstStringCheck<[string, number, number]>;

  // "TypeScript"
  type T2 = FirstStringCheck<["TypeScript", number, boolean]>;

  // "TypeScript" | "Java"
  type T3 = FirstStringCheck<["TypeScript" | "Java", number, number]>;

  // never
  type T4 = FirstStringCheck<["TypeScript" | 11, number, number]>;
}

{
  type UnionToIntersection<U> = (
    U extends any ? (arg: U) => void : never
  ) extends (arg: infer R) => void
    ? R
    : never;

  type T1 = UnionToIntersection<{ a: "a" } | { b: "b" }>;
}

{
  type UnionToIntersection<U> = (
    U extends any ? (arg: U) => void : never
  ) extends (arg: infer R) => void
    ? R
    : never;

  type T1 = UnionToIntersection<{ a: "a" } | { b: "b" }>;
}

{
  // Generic types are covariant(Subtype can be assigned to supertype)

  type List<T> = T[];

  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  type SubtypeOf<T, U> = T extends U ? true : false;

  type T4 = SubtypeOf<Dog, Animal>; // true
  type T5 = SubtypeOf<List<Dog>, List<Animal>>; // true
  type T6 = SubtypeOf<List<Animal>, List<Dog>>; // false
}

{
  // Function parameter`s is contravariant(supertype can be assigned to subtype) but return type is covariant

  type PrintFn<T> = (arg: T) => void;

  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  type SubtypeOf<T, U> = T extends U ? true : false;

  type T9 = SubtypeOf<PrintFn<Dog>, PrintFn<Animal>>; // false
  type T10 = SubtypeOf<PrintFn<Animal>, PrintFn<Dog>>; // true
}

{
  // Function return type is covariant
  type Instance<T> = () => T;

  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  type SubtypeOf<T, U> = T extends U ? true : false;

  type T11 = SubtypeOf<Instance<Dog>, Instance<Animal>>; // true
  type T12 = SubtypeOf<Instance<Animal>, Instance<Dog>>; // false
}

export {};
