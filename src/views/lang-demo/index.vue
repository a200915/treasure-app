<template>
  <div>{{ $t("langDemo.title") }}</div>
  <el-button type="primary" @click="changeLang">点击切换语言</el-button>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const changeLang = () => {
  console.log(t("langDemo.title"), "---");
  locale.value = ["zh", "en"][Math.floor(Math.random() * 2)];
};
</script>
<style scoped lang="less"></style>
