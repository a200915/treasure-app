<template>
  <div class="home-page">
    <el-container>
      <el-header>
        <setup-menu
          :leftItemList="leftItemList"
          :routerOpenFlag="routerOpenFlag"
        />
      </el-header>
      <el-main>main </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import SetupMenu from "@/common/components/setup-menu/index.vue";
import { ref, reactive } from "vue";
const routerOpenFlag = ref(true);
// 菜单左侧ItemList
const leftItemList = reactive([
  {
    name: "小说",
    title: "setupMenu.novel",
    routerPath: "/novel",
    hasIcon: {
      hasFlag: false,
    },
  },
  {
    name: "图片",
    title: "setupMenu.picture",
    routerPath: "/picture",
    hasIcon: {
      hasFlag: false,
    },
  },
  {
    name: "音乐",
    title: "setupMenu.music",
    routerPath: "/music",
    hasIcon: {
      hasFlag: false,
    },
  },
  {
    name: "视频",
    title: "setupMenu.video",
    routerPath: "/video",
    hasIcon: {
      hasFlag: false,
    },
  },
]);
</script>
<style scoped lang="less"></style>
