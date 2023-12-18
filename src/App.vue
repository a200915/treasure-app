<template>
  <el-config-provider :locale="elLang">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useLocaleStore } from "@/store/modules/locales";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
const elLang = computed(() => {
  return useLocaleStore().locale === "zh" ? zhCn : en;
});
</script>

<style scoped></style>
