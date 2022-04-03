import request from '@/utils/request.js';
export const roleList = () => {
  return request({
    url: '/role/list',
    method: 'GET',
  });
};

export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data,
  });
};

export const userlogin = (data) => {
  return request({
    url: '/sys/userlogin',
    method: 'POST',
    data,
  });
};
export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    method: 'GET',
    params: data,
  });
};
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
  });
};
/**
 * 获取指定角色的权限
 */
export const rolePermission = (roleId) => {
  return request({
    url: `/role/permission/${roleId}`,
  });
};
export const permissionList = () => {
  return request({
    url: '/permission/list',
  });
};
