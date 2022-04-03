import router from '@/route/index.js';
import store from '@/store';
/**
 * 初始化路由表
 */
export function resetRouter() {
  if (
    store.getters.userInfo &&
    store.getters.userInfo.permission &&
    store.getters.userInfo.permission.menus
  ) {
    const menus = store.getters.userInfo.permission.menus;
    menus.forEach((menu) => {
      router.removeRoute(menu);
    });
  }
}
