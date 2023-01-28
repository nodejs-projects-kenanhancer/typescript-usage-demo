const addAward = {
  path: `/project-v2/:projectId/award/:opportunityId/:opportunityLotId/add/:awardType`,
  title: "Add an award",
};

const editAward = {
  path: `/project-v2/:projectId/award/:opportunityId/:opportunityLotId/edit/:awardType`,
  title: "Edit an award",
};

type T1<T> = T extends `/${infer A}/${infer B}`
  ? A extends `:${infer C}`
    ? C
    : number
  : never;

type T2 = T1<"/project-v2/:projectId">;

type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

type ExtractRouteParams<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? Extract<Exclude<PartA, "">, `:${string}`> | ExtractRouteParams<PartB>
  : Path extends string
  ? Path
  : never;

type T3 =
  ExtractRouteParams<"/project-v2/:projectId/award/:opportunityId/:opportunityLotId/edit/:awardType">;

type T4 = Record<T3, string>;

const a1: T4 = {
  ":opportunityId": "",
  ":opportunityLotId": "",
  ":projectId": "",
  ":awardType": "",
};

// export type ExtractRouteParams<
//   T extends string,
//   U = string | number | boolean
// > = string extends T
//   ? { [k in string]?: U }
//   : T extends `${infer _Start}:${infer ParamWithOptionalRegExp}/${infer Rest}`
//   ? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})`
//     ? ExtractRouteOptionalParam<Param, U> & ExtractRouteParams<Rest, U>
//     : ExtractRouteOptionalParam<ParamWithOptionalRegExp, U> &
//         ExtractRouteParams<Rest, U>
//   : T extends `${infer _Start}:${infer ParamWithOptionalRegExp}`
//   ? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})`
//     ? ExtractRouteOptionalParam<Param, U>
//     : ExtractRouteOptionalParam<ParamWithOptionalRegExp, U>
//   : {};

export {};
