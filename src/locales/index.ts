import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";

let currentLanguage = navigator.language.replace(/-(\S*)/, "");

// 如果本地缓存记录了语言环境，则使用本地缓存
let lsLocale = localStorage.getItem("treasureLocale") || "";
if (lsLocale) {
  currentLanguage = lsLocale;
}

// 国际化语言缩写
const messages = {
  zh,
  en,
};
export default createI18n({
  locale: currentLanguage,
  legacy: false, // 修复组件引入i18n时vite脚手架报错的问题
  globalInjection: true, // 全局注册 $t
  messages,
});

export const langs = [
  { key: "zh", title: "中文" },
  { key: "en", title: "English" },
];
