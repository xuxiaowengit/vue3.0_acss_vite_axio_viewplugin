# <Vue3.0 + element-plus + vite2.0>

#管理后台前端脚手架

@author:司达叔
@date:2021-12-08
@问题咨询：关注头条号“司达叔讲前端”

@默认登陆账号：
username: 'admin',
password: '123456',

##架构信息：

nodejs 版本 v14.15.4
vue 版本 ^3.2.23
npm 版本 6.14.10
vuex 版本 ^4.0.2
md5 版本 ^2.3.0
vue-router 版本 ^4.0.11
jest 版本 ^27.4.3
axios 版本 ^0.21.1
icon 版本 0.1
vite-plugin-mock 2.9.6
eslint 版本 ^8.3.0
sass 版本 ^1.43.4
prettierrc.js --
echarts 版本 5.0

##注意事项：

1.  package.json 里的插件版本不要升级，目前用的都是稳定版本
2.  如果新增安装插件后项目启动不起来（vite 的 bug），请删除 node_modules，重新安装就可以了，建议使用淘宝镜像
3.  vite 里不能使用 nodejs 里的 path 模块，如果要用需要使用 path-browserify，目前已经安装兼容
4.  图标默认使用 element-plus 自带的，如果满足不来需求，建议用阿里的 iconfont 扩展，直接替换 src/static/icon

<img width="800" alt="Element Plus" src="https://user-images.githubusercontent.com/10731096/97282764-0726eb80-187a-11eb-9658-6dc98ccb8f8d.png">

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
    "dev": "vite --mode sit",
    "dev:sit": "vite --mode sit",
    "dev:uat": "vite --mode uat",
    "dev:staging": "vite --mode staging",
    "dev:prod": "vite --mode production",
```

### Compiles and minifies for production

```
    "build:sit": "vite build --mode sit",
    "build:uat": "vite build --mode uat",
    "build:staging": "vite build --mode staging",
    "build:prod": "vite build --mode production",
```
