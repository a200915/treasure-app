import { login } from '@/apis/login';
import { defineStore } from 'pinia';
import { store } from '@/store';

interface userState {
  role: string[];
  token: string;
}
export const useUserStore = defineStore({
  id: 'user',
  state: (): userState => ({
    role: [],
    token: '',
  }),
  getters: {
    getRole(): string[] {
      return this.role;
    },
  },
  actions: {
    toLogin(params: any) {
      return new Promise((resolve, reject) => {
        login(params)
          .then((res) => {
            if (res.code === 200) {
              this.setToken(res.data.token);
              this.setRole(res.data.role);
              sessionStorage.setItem('token', res.data.token);
              sessionStorage.setItem('role', JSON.stringify(res.data.role));
              resolve(true);
            } else {
              reject({ message: res.message });
            }
          })
          .catch(() => {
            reject({});
          });
      });
    },
    setToken(val: string) {
      this.token = val;
    },
    setRole(val: string[]) {
      this.role = val;
    },
  },
  // 开启数据持久化
  persist: true,
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
