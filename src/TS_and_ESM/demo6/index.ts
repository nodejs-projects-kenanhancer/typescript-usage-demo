const addAward = {
  path: `/project-v2/:projectId/award/:opportunityId/:opportunityLotId/add/:awardType`,
  title: "Add an award",
};

const editAward = {
  path: `/project-v2/:projectId/award/:opportunityId/:opportunityLotId/edit/:awardType`,
  title: "Edit an award",
};

type ExtractParam<Path> = Path extends `:${infer A}` ? A : never;

type ExtractRouteParams<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? ExtractParam<PartA> | ExtractRouteParams<PartB>
  : Path extends string
  ? ExtractParam<Path>
  : never;

type T3 =
  ExtractRouteParams<"/project-v2/:projectId/award/:opportunityId/:opportunityLotId/edit/:awardType">;

type T4 = Record<T3, string>;

const a1: T4 = {
  awardType: "",
  opportunityId: "",
  opportunityLotId: "",
  projectId: "",
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
