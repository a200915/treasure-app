import type { RouteRecordRaw } from "vue-router";
const novelView: RouteRecordRaw[] = [
  {
    path: "/novelView",
    name: "novelView",
    alias: "/",
    component: () => import("/@/views/novelView.vue"),
  },
];
export default novelView;
