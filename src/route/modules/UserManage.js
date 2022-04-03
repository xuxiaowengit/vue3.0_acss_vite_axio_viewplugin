import layout from '@/layout/mainApp.vue';
export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'userManage',
  meta: {
    title: '权限控制',
    icon: 'Key',
  },
  children: [
    {
      path: '/user/manage',
      component: () => import('@/view/user-manage/index.vue'),
      meta: {
        title: '用户中心',
        icon: 'UserFilled',
      },
    },
  ],
};
