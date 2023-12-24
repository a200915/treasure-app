import type { RouteRecordRaw } from "vue-router";
const demos: RouteRecordRaw[] = [
  {
    path: "/novel",
    name: "novel",
    component: () => import("@/views/novel-page/index.vue"),
  },
];
export default demos;
