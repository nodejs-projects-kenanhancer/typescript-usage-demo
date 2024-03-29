{
  type HasNames = { names: readonly string[] };
  function getNamesExactly<T extends HasNames>(arg: T): T["names"] {
    return arg.names;
  }

  // Inferred type: string[]
  const names = getNamesExactly({ names: ["Alice", "Bob", "Eve"] });

  // Inferred type: readonly ["Alice", "Bob", "Eve"]
  const namesInferred = getNamesExactly({
    names: ["Alice", "Bob", "Eve"],
  } as const);
}

{
  type HasNames = { names: readonly string[] };
  function getNamesExactly<const T extends HasNames>(arg: T): T["names"] {
    return arg.names;
  }

  // Inferred type: readonly ["Alice", "Bob", "Eve"]
  // Note: Didn't need to write 'as const' here
  const names = getNamesExactly({ names: ["Alice", "Bob", "Eve"] });
}

{
  type Colors = "red" | "green" | "blue";
  type RGB = [red: number, green: number, blue: number];

  const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255],
  } satisfies Record<Colors, string | RGB>;

  const palette3 = {
    red: "red",
    green: "#00ff00",
    blue: [0, 0, 255],
  } satisfies Record<Colors, string | RGB>;

  const palette2 = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255],
  } as const;

  const palette4 = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255],
    pink: "",
  } satisfies Record<Colors, string | RGB>;

  const palette5 = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0],
  } satisfies Record<Colors, string | RGB>;

  let palette6 = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0],
  } as const;

  palette6.green = '';
}

{
  /*
    Note that the const modifier doesn’t reject mutable values, and doesn’t require immutable constraints. 
    Using a mutable type constraint might give surprising results. 
    For example:
  */
  function fnBad<const T extends string[]>(args: T): T {
    return args;
  }

  // 'T' is still 'string[]' since 'readonly ["a", "b", "c"]' is not assignable to 'string[]'
  const result = fnBad(["a", "b", "c"]);
}

{
  function fnGood<const T extends readonly string[]>(args: T): T {
    return args;
  }

  // T is readonly ["a", "b", "c"]
  const result = fnGood(["a", "b", "c"]);
}

{
  /*
    Similarly, remember to keep in mind that the const modifier only affects inference of object, 
    array and primitive expressions that were written within the call, so arguments which wouldn’t (or couldn’t) be modified 
    with as const won’t see any change in behavior:
    */

  function fnBad<const T extends readonly string[]>(args: T): T {
    return args;
  }
  const arr = ["a", "b", "c"];

  // 'T' is still 'string[]'-- the 'const' modifier has no effect here
  const result = fnBad(arr);
}

{
  function fnGood<const T extends readonly string[]>(args: T): T {
    return args;
  }
  const arr = ["a", "b", "c"] as const;

  // T is readonly ["a", "b", "c"]
  const result = fnGood(arr);
}

{
  type Person = {
    firstName: string;
    lastName: string;
    hobbies: readonly string[];
  };

  function getHobbies<const T extends Person>(arg: T): T["hobbies"] {
    return arg.hobbies;
  }

  // Inferred type: readonly ["Cinema", "Music", "Coloring"]
  const hobbies = getHobbies({
    firstName: "Kenan",
    lastName: "Hancer",
    hobbies: ["Cinema", "Music", "Coloring"],
  });
}

{
  type Person = {
    firstName: string;
    lastName: string;
    hobbies: readonly string[];
    age: number;
  };

  type ArrayTypeFields<T> = {
    [K in keyof T]: T[K] extends ReadonlyArray<any> ? K : never;
  }[keyof T];

  type FilterType<Type, FieldType> = {
    [index in keyof Type]: Type[index] extends FieldType ? index : never;
  }[keyof Type];

  type SubType<Type, FieldType> = Pick<Type, FilterType<Type, FieldType>>;

  type ArrayFieldsFromPerson1 = Pick<Person, ArrayTypeFields<Person>>;

  type ArrayFieldsFromPerson2 = SubType<Person, ReadonlyArray<any> | number>;
}

{
  type Person = {
    firstName: string;
    lastName: string;
    hobbies: string[];
    age: number;
  };

  type FieldsOfType<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
  }[keyof T];

  type StringArrayFieldsFromPerson = Pick<
    Person,
    FieldsOfType<Person, string[] | number>
  >;
}

export {};
