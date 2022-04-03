import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import * as Icons from '@element-plus/icons';
import router from './route/index';
import store from './store/index';
import './static/icon/iconfont.css';
import './utils/permission';
import installFilter from '@/filters/index.js';
import installDirective from '@/directives';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');

installFilter(app);
installDirective(app);
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});
