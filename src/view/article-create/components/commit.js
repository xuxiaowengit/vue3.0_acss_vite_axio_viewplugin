import { createArticle, articleEdit } from '@/api/article';
import { ElMessage } from 'element-plus';

export const commitArticle = async (data) => {
  const res = await createArticle(data);
  ElMessage.success('createSuccess');
  return res;
};
export const editArticle = async (data) => {
  const res = await articleEdit(data);
  ElMessage.success('editorSuccess');
  return res;
};
