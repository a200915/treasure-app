import type { RouteRecordRaw } from "vue-router";
const demos: RouteRecordRaw[] = [
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/demo.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/auth.vue"),
    meta: {
      title: '权限测试',
      // roles:['admin1'],
      roles:['admin'],
    }
  }
];
export default demos;
