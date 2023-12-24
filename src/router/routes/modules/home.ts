import type { RouteRecordRaw } from "vue-router";
const demos: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home-page/index.vue"),
  },
];
export default demos;
