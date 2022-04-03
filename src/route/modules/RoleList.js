import layout from '@/layout/mainApp.vue';
export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'roleList',
  meta: {
    title: '权限控制',
    icon: 'Key',
  },
  children: [
    {
      path: '/user/role',
      component: () => import('@/view/role-list/index.vue'),
      meta: {
        title: '用户角色',
        icon: 'View',
      },
    },
    {
      path: '/user/import',
      component: () => import('@/view/import/index.vue'),
    },
  ],
};
