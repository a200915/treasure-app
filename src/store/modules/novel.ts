import { defineStore } from "pinia";
import { useRouter } from "vue-router";
interface MenuItem {
  name: string;
  title: string;
  routerPath: string;
  roleGroup: string[];
}
export const useNovelStore = defineStore({
  id: "novel",
  state: () => ({
    // 小说模块二级菜单页面
    leftItemList: [
      {
        name: "推荐",
        title: "novelPage.recommend",
        routerPath: "recommend",
        roleGroup: ["super_administrator", "admin", "super_user", "user"],
      },
      {
        name: "分类",
        title: "novelPage.category",
        routerPath: "category",
        roleGroup: ["super_administrator", "admin", "super_user", "user"],
      },
      {
        name: "书架",
        title: "novelPage.bookshelf",
        routerPath: "bookshelf",
        roleGroup: ["super_administrator", "admin", "super_user", "user"],
      },
      {
        name: "收藏",
        title: "novelPage.collect",
        routerPath: "collect",
        roleGroup: ["super_administrator", "admin", "super_user", "user"],
      },
    ],
  }),
  getters: {},
  actions: {
    jumpRouter(item: MenuItem) {
      const router = useRouter();
      router.push({
        path: item.routerPath,
      });
    },
  },
});
