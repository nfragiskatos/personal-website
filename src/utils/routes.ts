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

// const prefix = "/personal-website"
const prefix = ""
export const routes: MyRoutes = {
  home: {
    path: prefix + "/",
    title: "home",
  },
  blog: {
    path: prefix + "/blog",
    title: "blog",
  },
  projects: {
    path: prefix + "/projects",
    title: "projects",
  },
  resume: {
    path: prefix + "/resume",
    title: "resume",
  },
};
