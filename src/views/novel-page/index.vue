<template>
  <div class="home-page">
    <el-container>
      <el-header>
        <setup-menu
          :leftItemList="leftItemList"
          :routerOpenFlag="routerOpenFlag"
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
import { ref, reactive, shallowRef } from "vue";
import SetupMenu from "@/common/components/setup-menu/index.vue";
import First from "./first.vue";
import Third from "./third.vue";
import Fourth from "./fourth.vue";
import Second from "./second.vue";
const routerOpenFlag = ref(false);
const componentId = shallowRef(First);
// 菜单左侧ItemList
const leftItemList = reactive([
  {
    name: "推荐",
    title: "推荐",
    routerPath: shallowRef(First),
    hasIcon: {
      hasFlag: false,
    },
  },
  {
    name: "分类",
    title: "分类",
    routerPath: shallowRef(Second),
    hasIcon: {
      hasFlag: false,
    },
  },
  {
    name: "书架",
    title: "书架",
    routerPath: shallowRef(Third),
    hasIcon: {
      hasFlag: false,
    },
  },
  {
    name: "收藏",
    title: "收藏",
    routerPath: shallowRef(Fourth),
    hasIcon: {
      hasFlag: false,
    },
  },
]);
const showTabBarFn = (item: any) => {
  componentId.value = item.routerPath;
};
</script>
<style scoped lang="less"></style>
