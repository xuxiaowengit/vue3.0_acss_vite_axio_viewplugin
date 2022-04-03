import axios from 'axios';
import { ElMessage } from 'element-plus';
import store from '@/store';
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer${store.getters.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data;
    if (success) {
      return data;
    } else {
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
  },
  (error) => {
    if (error.response && error.response.data && error.response.data.code === 401) {
      store.dispatch('user/logout');
    }
    ElMessage.error(error.message);
    return Promise.reject(error);
  },
);

export default service;
