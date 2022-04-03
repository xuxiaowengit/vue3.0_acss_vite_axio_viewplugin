<template>
<remote-css ref="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></remote-css>
    <remote-css ref="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css"></remote-css>
  <div class="login-container">

    
    <!-- 加载等待效果页面 -->
    <div id="loading" class=" fade  isabled" disabled></div>
    <!--轮播开始-->
    <!--设置position-absolute或position-fixed使得背景位于登录表单下方-->
    <div id="mySlider" class="carousel slide h-100 position-fixed" data-ride="carousel">
        <ol class="carousel-indicators position-fixed">
            <li data-target="#mySlider" data-slide-to="0"></li>
            <li data-target="#mySlider" data-slide-to="1" class="active"></li>
            <li data-target="#mySlider" data-slide-to="2"></li>
            <li data-target="#mySlider" data-slide-to="3"></li>
            <li data-target="#mySlider" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="slide-img" src="/image/2 (1).jpg" />
            </div>
            <div class="carousel-item">
                <img class="slide-img" src="/image/2 (2).jpg" />
            </div>
            <div class="carousel-item">
                <img class="slide-img" src="/image/2 (3).jpg" />
            </div>
            <div class="carousel-item">
                <img class="slide-img" src="/image/2 (4).jpg" />
            </div>
            <div class="carousel-item">
                <img class="slide-img" src="/image/2 (5).jpg" />
            </div>
        </div>
        <a class="carousel-control-prev position-fixed" href="#mySlider" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">上一个</span>
        </a>
        <a class="carousel-control-next position-fixed" href="#mySlider" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">下一个</span>
        </a>
    </div>
    <!--轮播结束-->

    <!--表单开始 -->
    <div class="d-flex justify-content-center login-wrapper">
        <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 p-4   align-self-center login" id="loginfm">
            <div class="card-header text-center bg-transparent">
                <h3 class="" style="padding: 0;margin: 0;">系统登录</h3>
            </div>
            <div class="card-body">
                <form action="/loginapi" method="get" id="loginForm">
                    <div class="form-group text-left flexd " style="text-align: center;">
                        <label>账户:</label>
                        <!-- <span class="glyphicon glyphicon-user"></span> -->
                        <input type="text" class="form-control required" placeholder="输入账户名" autocomplete="off"
                            name="username" autofocus="autofocus" maxlength="32">
                    </div>
                    <div class="form-group text-left flexd ">
                        <!-- <span class="glyphicon glyphicon-lock"></span> -->
                        <label>密码:</label>
                        <input type="password" class="form-control required" name="password" placeholder="输入密码"
                            maxlength="32">
                    </div>
                    <div class="form-group  text-left flexd ">
                        <input type="checkbox" class="form-check-input  " id="remember-me" name="rememberme"
                            checked="checked" value="true"> <label class="form-check-label  " for="remember-me"
                            style="font-size: 12px;margin-left: 25px;">记住我</label>
                    </div>
                    <div class="form-group btnDiv " style="text-align: center; bottom: 0;">
                        <button type="button" class="btn btn-mybg btn-block " id="login"
                            style="font-weight: bold;font-size: 24px;text-align: center;">登&nbsp;&nbsp;录</button>
                    </div>
                    <!-- <p class="none" style="display: none;visibility:hidden;">登录</p> -->
                </form>
            </div>
        </div>
    </div>

    <div class="footer copyright">
        <div class="chat-tools">
            <span style="font-weight: bold;">核价报价系统V1.0</span> <i class="ri-copyright-fill">-20220307</i>
            <span style=" margin-left: 20px;  ">技术支持：Jeking.xu 13128755602</span>
        </div>
    </div>


   <!--  <video poster="../static/img/video-cover.jpeg" loop autoplay muted>
      <source src="../static/img/night.mp4" />
    </video>
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="iconfont icon-weibiaoti562"></span>
        <el-input
          v-model="loginForm.username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="iconfont icon-mima"></span>
        <el-input
          v-model="loginForm.password"
          name="password"
          tabindex="2"
          @keyup.enter="handleLogin"
          type="password"
        ></el-input>
      </el-form-item>
      <el-button :loading="loading" type="primary" class="login-btn" @click.prevent="handleLogin"
        >登录</el-button
      >
    </el-form>-->
   </div> 

</template>
<script setup>
import { ref } from 'vue';

import { useStore } from 'vuex';
import { isValidPassword } from '@/utils/validate';
const loading = ref(false);
const loginFormRef = ref(null);
const store = useStore();

const loginForm = ref({
  username: 'admin',
  password: '123456',
});
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空',
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: isValidPassword(),
    },
  ],
});
function handleLogin() {
  loginFormRef.value.validate((valid) => {
    if (!valid) {
      return;
    }
    loading.value = true;
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false;
      })
      .catch((err) => {
        loading.value = false;
      });
  });
}
</script>
<style lang="scss">
@supports (-webkit-mask: none) and (not (cater-color: $loginCursorColor)) {
  .login-container .el-input {
    input {
      color: $loginCursorColor;
    }
    input::first-line {
      color: $lightGray;
    }
  }
}
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      height: 47px;
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $lightGray;
      caret-color: $loginCursorColor;
      -webkit-appearance: none;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $loginBg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  // background-color: $loginBg;
  video {
    position: absolute;
    /* Vertical and Horizontal center*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $lightGray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .icon-weibiaoti562,
  .icon-mima {
    padding-left: 15px;
    color: $darkGray;
    vertical-align: middle;
    width: 30px;
    font-size: 18px;
    display: inline-block;
  }
  .login-btn {
    width: 100%;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>

<style scoped>
 @import '@/static/css/login.css';
</style>

<style scoped>
 @import '@/static/css/login.css';
</style>