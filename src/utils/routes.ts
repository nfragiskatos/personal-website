interface MyRoute {
  path: string;
  title: string;
}

interface MyRoutes {
  home: MyRoute;
  blog: MyRoute;
  projects: MyRoute;
  resume: MyRoute;
}

export const routes: MyRoutes = {
  home: {
    path: "/",
    title: "home",
  },
  blog: {
    path: "/blog",
    title: "blog",
  },
  projects: {
    path: "/projects",
    title: "projects",
  },
  resume: {
    path: "/resume",
    title: "resume",
  },
};
