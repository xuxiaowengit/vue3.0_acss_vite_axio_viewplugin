import { createRouter, createWebHistory, routerKey } from 'vue-router';
import mainApp from '@/layout/mainApp.vue';
import login from '@/view/login.vue';
import userlogin from '@/view/userlogin.vue';
import UserManageRouter from './modules/UserManage';
import roleListRouter from './modules/RoleList';

//私有路由
export const privateRoutes = [UserManageRouter, roleListRouter];
//共有路由
export const publicRoutes = [
  
  {
    path: '/userlogin',
    component: userlogin,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/',
    component: mainApp,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'Discount',
    },
    children: [
      {
        path: '/index',
        component: () => import('@/view/index.vue'),
        meta: {
          title: '架构信息',
          icon: 'Document',
        },
      },
    ],
  },
  {
    path: '/instance',
    component: mainApp,
    redirect: '/instance/rate',
    meta: {
      title: '组件',
      icon: 'Tools',
    },
    children: [
      {
        path: '/instance/rate',
        component: () => import('@/view/demo/rate.vue'),
        meta: {
          title: '评分组件',
          icon: 'Star',
        },
      },
      {
        path: '/instance/favicon',
        component: () => import('@/view/demo/favicon.vue'),
        meta: {
          title: '图标',
          icon: 'ColdDrink',
        },
      },
    ],
  },
  {
    path: '/arti',
    component: mainApp,
    redirect: '/arti/list',
    meta: {
      title: '文章',
      icon: 'Tools',
    },
    children: [
      {
        path: '/arti/list',
        component: () => import('@/view/article-ranking/index.vue'),
        meta: {
          title: '文章列表',
          icon: 'Star',
        },
      },
      {
        path: '/arti/:id',
        component: () => import('@/view/article-detail/index.vue'),
      },
      {
        path: '/arti/create',
        component: () => import('@/view/article-create/index.vue'),
        meta: {
          title: '创建文章',
          icon: 'Star',
        },
      },
      {
        path: '/arti/editor/:id',
        component: () => import('@/view/article-create/index.vue'),
        meta: {
          title: 'articleEditor',
        },
      },
    ],
  },
];

// Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHistory(),
  routes: publicRoutes, // short for `routes: routes`
});

export default router;
