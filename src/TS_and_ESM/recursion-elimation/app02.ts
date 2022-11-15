type UpperAlphabetic =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

/**
 * Convert string literal type to snake_case
 */
type Snakecase<S extends string> = ToSnakecase<S, "">;
type ToSnakecase<
  S extends string,
  Previous extends string
> = S extends `${infer First}${infer Second}${infer Rest}`
  ? `${SnakeUnderscore<Previous, First>}${Lowercase<First>}${SnakeUnderscore<
      First,
      Second
    >}${Lowercase<Second>}${ToSnakecase<Rest, First>}`
  : S extends `${infer First}`
  ? `${SnakeUnderscore<Previous, First>}${Lowercase<First>}`
  : "";
/**
 * Return underscore if it is allowed between provided characters,
 * trail and lead underscore are allowed, empty string is considered
 * as the beginning of a string.
 */
type SnakeUnderscore<
  First extends string,
  Second extends string
> = First extends UpperAlphabetic | "" | "_"
  ? ""
  : Second extends UpperAlphabetic
  ? "_"
  : "";

type Numbers = Snakecase<"camelCaseWithNumbers123">; // camel_case_with_numbers123
type CamelCase = Snakecase<"regularCamelCase">; // regular_camel_case
type PascalCase = Snakecase<"RegularPascalCase">; // regular_pascal_case
type ConsecutiveCapitals = Snakecase<"NodeJS">; // node_js
type SnakeCase = Snakecase<"snake_case">; // snake_case
type AllCaps = Snakecase<"ALL_CAPS_CONSTANT_NAME">; // all_caps_constant_name
type LeadingAndTrailingUnderscore = Snakecase<"_MyVariableName_">; // _my_variable_name_

export {};
