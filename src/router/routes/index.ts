import type { RouteRecordRaw } from "vue-router";

const modules: any = import.meta.glob("./modules/**/*.ts", { eager: true });
const routes: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  let mod = modules[key].default || [];
  let list = Array.isArray(mod) ? mod : [mod];
  routes.push(...list);
});

const baseRoute: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/NoPermission",
    name: "NoPermission",
    component: () => import("@/views/common-page/noPermission.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/common-page/notFound.vue"),
  },
];

routes.push(...baseRoute);

export { routes };
