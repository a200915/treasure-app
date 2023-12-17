<template>
  <div>{{ $t("langDemo.title") }}</div>
  <el-button type="primary" @click="changeLang">点击切换语言</el-button>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLocaleStore } from "@/store/modules/locales";
const localeStore = useLocaleStore();
const locale = localeStore.locale;

const { t } = useI18n();

const changeLang = () => {
  console.log(t("langDemo.title"), "---", locale);
  localeStore.changLang("zh");
};
</script>
<style scoped lang="less"></style>
