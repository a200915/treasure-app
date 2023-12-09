import type { RouteRecordRaw } from "vue-router";
const mainView: RouteRecordRaw[] = [
  {
    path: "/mainView",
    name: "mainView",
    alias: "/",
    component: () => import("/@/views/mainView.vue"),
  },
];
export default mainView;
