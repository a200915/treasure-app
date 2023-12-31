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
        <component :is="componentId" />
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { reactive, shallowRef } from "vue";
import SetupMenu from "@/common/components/setup-menu/index.vue";
import RecommendPage from "./RecommendPage.vue";
import Third from "./third.vue";
import Fourth from "./fourth.vue";
import Second from "./second.vue";
const menuOptions = reactive({
  routerOpenFlag: false,
  bgdColor: "#2cc4e0",
});
const componentId = shallowRef(RecommendPage);
// 菜单左侧ItemList
const leftItemList = reactive([
  {
    name: "推荐",
    title: "novelPage.recommend",
    componentId: shallowRef(RecommendPage),
    roleGroup: ["super_administrator", "admin", "super_user", "user"],
  },
  {
    name: "分类",
    title: "novelPage.category",
    componentId: shallowRef(Second),
    roleGroup: ["super_administrator", "admin", "super_user", "user"],
  },
  {
    name: "书架",
    title: "novelPage.bookshelf",
    componentId: shallowRef(Third),
    roleGroup: ["super_administrator", "admin", "super_user", "user"],
  },
  {
    name: "收藏",
    title: "novelPage.collect",
    componentId: shallowRef(Fourth),
    roleGroup: ["super_administrator", "admin", "super_user", "user"],
  },
]);
const showTabBarFn = (item: any) => {
  componentId.value = item.componentId;
};
</script>
<style scoped lang="less">
.home-page {
  background-color: #e5e3dc;
}
</style>
