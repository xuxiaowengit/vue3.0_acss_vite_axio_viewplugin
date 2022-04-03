export default [
  {
    url: '/permission/list',
    method: 'get',
    response: () => {
      return {
        success: true,
        code: 200,
        data: [
          {
            id: '1',
            permissionName: '员工管理',
            permissionMark: 'userManage',
            permissionDesc: '员工管理菜单',
            children: [
              {
                id: '1-1',
                permissionName: '分配角色',
                permissionMark: 'distributeRole',
                permissionDesc: '为员工分配角色',
              },
              {
                id: '1-2',
                permissionName: '导入员工',
                permissionMark: 'importUser',
                permissionDesc: '通过 excel 导入员工',
              },
              {
                id: '1-3',
                permissionName: '删除员工',
                permissionMark: 'removeUser',
                permissionDesc: '删除员工',
              },
            ],
          },
          {
            id: '2',
            permissionName: '角色列表',
            permissionMark: 'roleList',
            permissionDesc: '角色列表菜单',
            children: [
              {
                id: '2-1',
                permissionName: '分配权限',
                permissionMark: 'distributePermission',
                permissionDesc: '为角色分配权限',
              },
            ],
          },
          {
            id: '3',
            permissionName: '权限列表',
            permissionMark: 'permissionList',
            permissionDesc: '权限列表菜单',
            children: [],
          },
          {
            id: '4',
            permissionName: '文章排名',
            permissionMark: 'articleRanking',
            permissionDesc: '文章排名菜单',
            children: [],
          },
          {
            id: '5',
            permissionName: '创建文章',
            permissionMark: 'articleCreate',
            permissionDesc: '创建文章页面',
            children: [],
          },
        ],
        message: '获取资料成功',
      };
    },
  },
  {
    url: '/role/permission/:roleId',
    method: 'get',
    response: () => {
      return {
        success: true,
        code: 200,
        data: ['1', '1-1', '1-2', '2', '2-1', '3', '5'],
        message: '获取资料成功',
      };
    },
  },
  {
    url: '/role/list',
    method: 'get',
    response: () => {
      return {
        success: true,
        code: 200,
        data: [
          {
            id: '1',
            title: '超级管理员',
            describe: '唯一账号，可以操作系统所有功能',
          },
          {
            id: '2',
            title: '管理员',
            describe: '由超管指定，可以为多个，协助超管管理系统',
          },
          {
            id: '3',
            title: '人事经理',
            describe: '主管人事相关业务',
          },
          {
            id: '4',
            title: '销售经理',
            describe: '主管销售相关业务',
          },
          {
            id: '5',
            title: '保安队长',
            describe: '主管安保相关业务',
          },
          {
            id: '6',
            title: '员工',
            describe: '普通员工',
          },
        ],
        message: '获取资料成功',
      };
    },
  },
];
