const addAward = {
  path: `/project-v2/:projectId/award/:opportunityId/:opportunityLotId/add/:awardType`,
  title: "Add an award",
} as const;

const editAward = {
  path: `/project-v2/:projectId/award/:opportunityId/:opportunityLotId/edit/:awardType`,
  title: "Edit an award",
} as const;

type ExtractParam<Path> = Path extends `:${infer A}` ? A : never;

type ExtractRouteParams<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? ExtractParam<PartA> | ExtractRouteParams<PartB>
  : Path extends string
  ? ExtractParam<Path>
  : never;

type RouteParams<Path> = Record<ExtractRouteParams<Path>, string>;

type T3 = RouteParams<typeof addAward.path>;

const a1: T3 = {
  awardType: "",
  opportunityId: "",
  opportunityLotId: "",
  projectId: "",
};

const projectDashboardV2Routes = [
  {
    path: "/project-v2/:projectId/project-overview",
    title: "Project Overview",
    // component: ProjectDashboard,
    exact: true,
    isPrivate: true,
    inSideBar: true,
  },
  {
    path: "/project-v2/:projectId/tasks",
    title: "Tasks",
    // component: TaskWrapper,
    exact: true,
    isPrivate: true,
    inSideBar: true,
  },
  {
    path: "/project-v2/:projectId/project-inbox",
    title: "Project inbox",
    // component: ProjectInboxContainer,
    exact: true,
    isPrivate: true,
    inSideBar: true,
  },
] as const;

type CamelToSnake<T extends string> = string extends T
  ? string
  : T extends `${infer C0}${infer R}`
  ? `${C0 extends " " ? "_" : ""}${Uppercase<
      Exclude<C0, " "> extends never ? "" : C0
    >}${CamelToSnake<R>}`
  : "";

type T6 = CamelToSnake<"Project inbox">;

type T7 = CamelToSnake<"Project Inbox">;

type T8 = typeof projectDashboardV2Routes[number];

type T9<T extends T8> = T extends any ? Pick<T, "path" | "title"> : never;

type T10 = T9<typeof projectDashboardV2Routes[number]>;

const a10: T10 = {
  path: "/project-v2/:projectId/project-overview",
  title: "Project Overview",
};

export {};
