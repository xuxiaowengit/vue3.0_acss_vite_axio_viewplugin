import request from '@/utils/request.js';
export const getArticleList = (data) => {
  return request({
    url: '/article/list',
    method: 'GET',
    params: data,
  });
};

/**
 * 修改排序
 */
export const articleSort = (data) => {
  return request({
    url: '/article/sort',
    method: 'POST',
    data,
  });
};

/**
 * 创建文章
 */
export const createArticle = (data) => {
  return request({
    url: '/article/create',
    method: 'POST',
    data,
  });
};
/**
 * 获取文章详情
 */
export const articleDetail = (articleId) => {
  return request({
    url: `/article/${articleId}`,
  });
};
/**
 * 删除文章
 */
export const deleteArticle = (articleId) => {
  return request({
    url: `/article/delete/${articleId}`,
  });
};
/**
 * 编辑文章详情
 */
export const articleEdit = (data) => {
  return request({
    url: '/article/edit',
    method: 'POST',
    data,
  });
};
