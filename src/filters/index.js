import dayjs from 'dayjs';

// 时间转换成“几天前”
import rt from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn'; // 语言包

dayjs.extend(rt);
function relativeTime(val) {
  if (!isNaN(val)) {
    val = parseInt(val);
  }
  return dayjs().locale('zh-cn').to(dayjs(val));
}

//格式化时间
const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val);
  }
  return dayjs(val).format(format);
};

export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter,
    relativeTime,
  };
};
