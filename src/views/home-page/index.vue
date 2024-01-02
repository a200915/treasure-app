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
      <el-main>main </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import SetupMenu from "@/common/components/setup-menu/index.vue";
import { reactive } from "vue";
const router = useRouter();
const menuOptions = reactive({
  showMoreFlag: true,
  bgdColor: "#33e0bd",
});
// 菜单左侧ItemList
const leftItemList = reactive([
  {
    name: "小说",
    title: "homePage.novel",
    routerPath: "/novel",
    roleGroup: ["super_administrator", "admin", "super_user", "user"],
  },
  {
    name: "图片",
    title: "homePage.picture",
    routerPath: "/picture",
    roleGroup: ["super_administrator", "admin", "super_user", "user"],
  },
  {
    name: "音乐",
    title: "homePage.music",
    routerPath: "/music",
    roleGroup: ["super_administrator", "admin", "super_user", "user"],
  },
  {
    name: "视频",
    title: "homePage.video",
    routerPath: "/video",
    roleGroup: ["super_administrator", "admin", "super_user", "user"],
  },
]);
const showTabBarFn = (item: any) => {
  if (item.routerPath === "/novel") {
    router.push({
      path: item.routerPath + "/recommend",
    });
  } else {
    router.push({
      path: item.routerPath,
    });
  }
};
</script>
<style scoped lang="less"></style>
