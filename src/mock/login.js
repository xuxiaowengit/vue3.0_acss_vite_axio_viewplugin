// 通过GET请求返回一个名字数组
export default [
  {
    url: '/sys/login',
    method: 'post',
    response: () => {
      return {
        success: true,
        code: 200,
        data: { token: 'a56680fd-8233-4662-bcc4-ba45d0792979sichaoyun' },
        message: '登录成功',
      };
    },
  },
  {
    url: '/sys/profile',
    method: 'get',
    response: () => {
      return {
        success: true,
        code: 200,
        data: {
          role: [
            {
              id: '1',
              title: '超级管理员',
            },
          ],
          _id: '612710a0ec87aa543c9c341d',
          id: '0',
          username: 'super-admin',
          title: '超级管理员',
          avatar: 'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
          permission: {
            menus: ['roleList', 'userManage'],
            points: ['importUser', 'removeUser', 'distributePermission'],
          },
        },
        message: '获取资料成功',
      };
    },
  },
];
