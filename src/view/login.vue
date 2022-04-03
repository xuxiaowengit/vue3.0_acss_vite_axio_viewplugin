<template>
  <div class="login-container">
    <video poster="../static/img/video-cover.jpeg" loop autoplay muted>
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
        <h3 class="title">系统登录</h3>
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
    </el-form>
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
