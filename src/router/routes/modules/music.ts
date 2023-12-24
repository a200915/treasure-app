import type { RouteRecordRaw } from "vue-router";
const demos: RouteRecordRaw[] = [
  {
    path: "/music",
    name: "music",
    component: () => import("@/views/music-page/index.vue"),
  },
];
export default demos;
