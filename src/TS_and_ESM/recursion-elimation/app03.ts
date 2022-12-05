export type CamelToSnake<
  T extends string,
  P extends string = ""
> = string extends T
  ? string
  : T extends `${infer C0}${infer R}`
  ? CamelToSnake<
      R,
      `${P}${C0 extends Lowercase<C0> ? "" : "_"}${Lowercase<C0>}`
    >
  : P;

type ToAction_<T> = {
  [P in keyof T as `set${Capitalize<Extract<P, string>>}`]-?: (value: T[P]) => {
    type: `SET_${Uppercase<CamelToSnake<Extract<P, string>>>}`;
    value: string;
  };
};

type ToAction<T> = {
  [P in keyof T]-?: {
    type: `SET_${Uppercase<CamelToSnake<Extract<P, string>>>}`;
    value: T[Extract<P, string>];
  };
}[keyof T];

type ProjectDetailsEditState = {
  loading: boolean;
  editState?: boolean;
  isProjectNameUnique: boolean;
  projectDetailsEditModal: boolean;
  tagFieldValue: string;
};

type T3 = ToAction<ProjectDetailsEditState>;

type T4 = ToAction_<ProjectDetailsEditState>;

export {};
