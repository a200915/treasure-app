<template>
  <div>{{ $t("langDemo.title") }}</div>
  <el-button type="primary" @click="changeLang">点击切换语言</el-button>
  <hr />
  <el-time-picker
    v-model="value"
    is-range
    range-separator="To"
    :start-placeholder="$t('langDemo.start')"
    :end-placeholder="$t('langDemo.end')"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useLocaleStore } from "@/store/modules/locales";
const localeStore = useLocaleStore();
const locale = localeStore.locale;

const { t } = useI18n();

const changeLang = () => {
  console.log(t("langDemo.title"), "---", locale);
  localeStore.changLang("zh");
};
const value = ref();
</script>
<style scoped lang="less">
</style>
