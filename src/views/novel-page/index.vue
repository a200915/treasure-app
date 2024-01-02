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
import { storeToRefs } from "pinia";
import SetupMenu from "@/common/components/setup-menu/index.vue";
import { useNovelStore } from "@/store/modules/novel";

const novelStore = useNovelStore();
const { leftItemList } = storeToRefs(novelStore);
const router = useRouter();
const menuOptions = reactive({
  showMoreFlag: false,
  bgdColor: "#2cc4e0",
});
// 菜单左侧ItemList

const showTabBarFn = (item: any) => {
  router.push({
    path: item.routerPath,
  });
};
</script>
<style scoped lang="less">
.home-page {
  background-color: #e5e3dc;
}
</style>
