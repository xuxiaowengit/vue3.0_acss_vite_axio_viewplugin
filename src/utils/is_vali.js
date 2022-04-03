/* 校验是否是excel */
export const isExcel = (file) => {
  return /\.(xlsx|xls|csv)$/.test(file.name);
};
/* 校验身份证号码 */
export const checkCardNo = (value) => {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(value);
};

/* 校验是否包含中文 */
export const haveCNChars = (value) => {
  return /[\u4e00-\u9fa5]/.test(value);
};

/* 校验是否为邮箱地址 */
export const isEmail = (value) => {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
};

/* 校验是否为中国大陆手机号 */
export const isTel = (value) => {
  return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString());
};

/* 校验是否包含emoji表情 */
export const isEmojiCharacter = (value) => {
  value = String(value);
  for (let i = 0; i < value.length; i++) {
    const hs = value.charCodeAt(i);
    if (0xd800 <= hs && hs <= 0xdbff) {
      if (value.length > 1) {
        const ls = value.charCodeAt(i + 1);
        const uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
        if (0x1d000 <= uc && uc <= 0x1f77f) {
          return true;
        }
      }
    } else if (value.length > 1) {
      const ls = value.charCodeAt(i + 1);
      if (ls == 0x20e3) {
        return true;
      }
    } else {
      if (0x2100 <= hs && hs <= 0x27ff) {
        return true;
      } else if (0x2b05 <= hs && hs <= 0x2b07) {
        return true;
      } else if (0x2934 <= hs && hs <= 0x2935) {
        return true;
      } else if (0x3297 <= hs && hs <= 0x3299) {
        return true;
      } else if (
        hs == 0xa9 ||
        hs == 0xae ||
        hs == 0x303d ||
        hs == 0x3030 ||
        hs == 0x2b55 ||
        hs == 0x2b1c ||
        hs == 0x2b1b ||
        hs == 0x2b50
      ) {
        return true;
      }
    }
  }
  return false;
};

/* 判断是移动还是PC设备 */
export const isMobile = () => {
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i,
    )
  ) {
    return 'mobile';
  }
  return 'desktop';
};

/* 判断是否是苹果还是安卓移动设备 */
export const isAppleMobileDevice = () => {
  let reg = /iphone|ipod|ipad|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
};

/* 判断是否是安卓移动设备 */
export const isAndroidMobileDevice = () => {
  return /android/i.test(navigator.userAgent.toLowerCase());
};

/* 判断是Windows还是Mac系统 */
export const osType = () => {
  const agent = navigator.userAgent.toLowerCase();
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  const isWindows =
    agent.indexOf('win64') >= 0 ||
    agent.indexOf('wow64') >= 0 ||
    agent.indexOf('win32') >= 0 ||
    agent.indexOf('wow32') >= 0;
  if (isWindows) {
    return 'windows';
  }
  if (isMac) {
    return 'mac';
  }
};

/* 判断是否是微信/QQ内置浏览器 */
export const broswer = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return 'weixin';
  } else if (ua.match(/QQ/i) == 'qq') {
    return 'QQ';
  }
  return false;
};

/* 浏览器型号和版本 */
export const getExplorerInfo = () => {
  let t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf('msie')
    ? {
        //ie < 11
        type: 'IE',
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
    : !!t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: 'IE',
        version: 11,
      }
    : 0 <= t.indexOf('edge')
    ? {
        type: 'Edge',
        version: Number(t.match(/edge\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf('firefox')
    ? {
        type: 'Firefox',
        version: Number(t.match(/firefox\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf('chrome')
    ? {
        type: 'Chrome',
        version: Number(t.match(/chrome\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf('opera')
    ? {
        type: 'Opera',
        version: Number(t.match(/opera.([\d]+)/)[1]),
      }
    : 0 <= t.indexOf('Safari')
    ? {
        type: 'Safari',
        version: Number(t.match(/version\/([\d]+)/)[1]),
      }
    : {
        type: t,
        version: -1,
      };
};

/* 滚动到页面顶部 */
export const scrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, height - height / 8);
  }
};

/* 滚动到页面底部 */
export const scrollToBottom = () => {
  window.scrollTo(0, document.documentElement.clientHeight);
};

/* 滚动到指定元素区域 */
export const smoothScroll = (element) => {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
  });
};

/* 获取可视窗口高度 */
export const getClientHeight = () => {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
};

/* 获取可视窗口宽度 */
export const getPageViewWidth = () => {
  return (document.compatMode == 'BackCompat' ? document.body : document.documentElement)
    .clientWidth;
};

/* 打开浏览器全屏 */
export const toFullScreen = () => {
  let element = document.body;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
};

/* 退出浏览器全屏 */
export const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
