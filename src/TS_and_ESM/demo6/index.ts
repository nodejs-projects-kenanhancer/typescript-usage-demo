const projectDashboardV2AwardsRoute = [
  {
    path: `/project-v2/:projectId/award/:opportunityId/:opportunityLotId/add/:awardType`,
    title: "Add an award",
    exact: true,
    isPrivate: true,
  },
  {
    path: `/project-v2/:projectId/award/:opportunityId/:opportunityLotId/edit/:awardType`,
    title: "Edit an award",
    exact: true,
    isPrivate: true,
  },
  {
    path: "/project-v2/:projectId/project-overview",
    title: "Project Overview",
    exact: true,
    isPrivate: true,
    inSideBar: true,
  },
] as const;

const projectDashboardV2Routes = [
  {
    path: "/project-v2/:projectId/project-overview",
    title: "Project Overview",
    exact: true,
    isPrivate: true,
    inSideBar: true,
  },
  {
    path: "/project-v2/:projectId/tasks",
    title: "Tasks",
    exact: true,
    isPrivate: true,
    inSideBar: true,
  },
  {
    path: "/project-v2/:projectId/project-inbox",
    title: "Project inbox",
    exact: true,
    isPrivate: true,
    inSideBar: true,
  },
] as const;

type ExtractParam<Path> = Path extends `:${infer A}` ? A : never;

type ExtractRouteParams<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? ExtractParam<PartA> | ExtractRouteParams<PartB>
  : Path extends string
  ? ExtractParam<Path>
  : never;

type RouteParams<Path> = Record<ExtractRouteParams<Path>, string>;

type CamelToSnake<T extends string> = string extends T
  ? string
  : T extends `${infer C0}${infer R}`
  ? `${C0 extends " " ? "_" : ""}${Uppercase<
      Exclude<C0, " "> extends never ? "" : C0
    >}${CamelToSnake<R>}`
  : "";

type T3 =
  RouteParams<"/project-v2/:projectId/award/:opportunityId/:opportunityLotId/add/:awardType">;

const a1: T3 = {
  awardType: "",
  opportunityId: "",
  opportunityLotId: "",
  projectId: "",
};

type T6 = CamelToSnake<"Project inbox">;

type T7 = CamelToSnake<"Project Inbox">;

type GenerateRoute<T extends { path: string; title: string }> = T extends {
  path: infer TP extends string;
  title: infer TT extends string;
}
  ? { [P in CamelToSnake<TT>]: TP }
  : never;

type T11<T extends { path: string; title: string }> = T extends {
  path: infer TP extends string;
  title: infer TT extends string;
}
  ? CamelToSnake<TT>
  : never;

type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;

type T10 = UnionToIntersection<
  GenerateRoute<typeof projectDashboardV2AwardsRoute[number]>
>;

const ll: T10 = {
  ADD_AN_AWARD:
    "/project-v2/:projectId/award/:opportunityId/:opportunityLotId/add/:awardType",
  EDIT_AN_AWARD:
    "/project-v2/:projectId/award/:opportunityId/:opportunityLotId/edit/:awardType",
  PROJECT_OVERVIEW: "/project-v2/:projectId/project-overview",
};

type T12 = T11<typeof projectDashboardV2AwardsRoute[number]>;

const route = <
  T extends keyof T10,
  K extends RouteParams<T10[T]>,
  L extends T10[T]
>(
  name: T,
  value: K
) => {};

route("ADD_AN_AWARD", {
  awardType: "",
  opportunityId: "",
  opportunityLotId: "",
  projectId: "",
});

route("PROJECT_OVERVIEW", { projectId: "" });

export {};
