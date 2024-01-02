<template>
  <div class="home-page">
    <el-container>
      <el-header>
        <setup-menu
          :leftItemList="leftItemList"
          :menuOptions="menuOptions"
          @showTabBar="showTabBarFn"
        />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import SetupMenu from "@/common/components/setup-menu/index.vue";
const router = useRouter();
const menuOptions = reactive({
  showMoreFlag: false,
  bgdColor: "#2cc4e0",
});
// 菜单左侧ItemList
const leftItemList = reactive([
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
]);
const showTabBarFn = (item: any) => {
  router.push({
    path: item.routerPath,
  });
  console.log(item);
};
</script>
<style scoped lang="less">
.home-page {
  background-color: #e5e3dc;
}
</style>
