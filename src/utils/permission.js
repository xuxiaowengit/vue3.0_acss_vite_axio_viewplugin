import router from '@/route';
import store from '@/store';
//白名单
const whiteList = ['/login','/userlogin'];

router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/');
    } else 
    if (to.path === '/userlogin') {
      next('/userlogin');
    } else {
      if (!store.getters.hasUserInfo) {
        // 触发获取用户信息的 action，并获取用户当前权限
        const { permission } = await store.dispatch('user/getUserInfo');
        // 处理用户权限，筛选出需要添加的权限
        const filterRoutes = await store.dispatch('permission/filterRoutes', permission.menus);
        console.log(filterRoutes);
        // 利用 addRoute 循环添加
        filterRoutes.forEach((item) => {
          router.addRoute(item);
        });
        // 添加完动态路由之后，需要在进行一次主动跳转
        return next(to.path);
      }
      next();
    }


  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next('/login');
      // next('/userlogin');
    }
  }
});
