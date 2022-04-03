import router from '@/route/index.js';
import { login, getUserInfo } from '@/api/user.js';
import md5 from 'md5';
import { TOKEN } from '@/utils/constant.js';
import { localStorageSet, localStorageGet, localStorageRemoveAll } from '@/utils/tools.js';
import { resetRouter } from '@/utils/resetRouter.js';
export default {
  namespaced: true,
  state: () => ({
    token: localStorageGet(TOKEN) || '',
    userInfo: {},
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorageSet(TOKEN, token);
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            this.commit('user/setToken', data.token);
            router.push('/index');
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    async getUserInfo(context) {
      const res = await getUserInfo();
      this.commit('user/setUserInfo', res);
      return res;
    },
    logout() {
      resetRouter();
      this.commit('user/setToken', '');
      this.commit('user/setUserInfo', {});
      localStorageRemoveAll();
      router.push('/userlogin');
      // router.push('/login');
    },
  },
};
