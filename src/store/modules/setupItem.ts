import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
interface MenuItem {
  name: string;
  title: string;
  routerPath: string;
  roleGroup: string[];
}
export const useSetupItemStore = defineStore({
  id: 'setupItem',
  state: () => ({
    active: '/home',
  }),
  getters: {},
  actions: {
    jumpRouter(item: MenuItem) {
      const router = useRouter();
      router.push({
        path: item.routerPath,
      });
    },
  },
});
