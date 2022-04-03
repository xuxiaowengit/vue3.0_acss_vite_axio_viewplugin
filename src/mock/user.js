// 通过GET请求返回一个名字数组
export default [
  {
    url: '/user-manage/list',
    method: 'get',
    response: () => {
      return {
        success: true,
        code: 200,
        data: {
          list: [
            {
              role: [
                {
                  id: '1',
                  title: '超级管理员',
                },
              ],
              _id: '612710a0ec87aa543c9c341d',
              id: '0',
              openTime: '1433088000000',
              username: 'super-admin',
              mobile: '188xxxx0001',
              avatar: 'https://p1-dy.bytexservice.com/img/user-avatar/a510fc57805308e46b6c41c71f3d687a~300x300.image',
            },
            {
              role: [
                {
                  id: '2',
                  title: '管理员',
                },
              ],
              _id: '612710a0ec87aa543c9c341e',
              id: '1',
              username: 'admin',
              openTime: '1559318400000',
              mobile: '188xxxx0002',
              avatar: 'https://p1-dy.bytexservice.com/img/user-avatar/a510fc57805308e46b6c41c71f3d687a~300x300.image',
            },
            {
              role: [
                {
                  id: '3',
                  title: '超级管理员',
                },
              ],
              _id: '612710a0ec87aa543c9c341d',
              id: '0',
              openTime: '1433088000000',
              username: 'super-admin',
              mobile: '188xxxx0001',
              avatar: 'https://p1-dy.bytexservice.com/img/user-avatar/a510fc57805308e46b6c41c71f3d687a~300x300.image',
            },
            {
              role: [
                {
                  id: '4',
                  title: '管理员',
                },
              ],
              _id: '612710a0ec87aa543c9c341e',
              id: '1',
              username: 'admin',
              openTime: '1559318400000',
              mobile: '188xxxx0002',
              avatar: 'https://p1-dy.bytexservice.com/img/user-avatar/a510fc57805308e46b6c41c71f3d687a~300x300.image',
            },
            {
              role: [
                {
                  id: '5',
                  title: '超级管理员',
                },
              ],
              _id: '612710a0ec87aa543c9c341d',
              id: '0',
              openTime: '1433088000000',
              username: 'super-admin',
              mobile: '188xxxx0001',
              avatar: 'https://p1-dy.bytexservice.com/img/user-avatar/a510fc57805308e46b6c41c71f3d687a~300x300.image',
            },
            {
              role: [
                {
                  id: '6',
                  title: '管理员',
                },
              ],
              _id: '612710a0ec87aa543c9c341e',
              id: '1',
              username: 'admin',
              openTime: '1559318400000',
              mobile: '188xxxx0002',
              avatar: 'https://p1-dy.bytexservice.com/img/user-avatar/a510fc57805308e46b6c41c71f3d687a~300x300.image',
            },
            {
              role: [
                {
                  id: '7',
                  title: '超级管理员',
                },
              ],
              _id: '612710a0ec87aa543c9c341d',
              id: '0',
              openTime: '1433088000000',
              username: 'super-admin',
              mobile: '188xxxx0001',
              avatar: 'https://p1-dy.bytexservice.com/img/user-avatar/a510fc57805308e46b6c41c71f3d687a~300x300.image',
            },
          ],
          total: 7,
          page: '1',
          size: '2',
        },
        message: 'success',
      };
    },
  },
];
