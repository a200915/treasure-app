import { defineStore } from "pinia";
import i18n from "@/locales/index";
const { locale } = i18n.global;
export const useLocaleStore = defineStore({
  id: "locale",
  state: () => ({
    locale,
  }),
  getters: {},
  actions: {
    changLang(lang: any) {
      this.locale = lang === true ? "zh" : "en";

      localStorage.setItem("treasureLocale", this.locale);
    },
  },
});
