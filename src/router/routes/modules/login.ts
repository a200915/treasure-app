import type { RouteRecordRaw } from "vue-router";
const demos: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  }
];
export default demos;
