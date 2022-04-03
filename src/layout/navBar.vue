<template>
  <div class="navbar">
    <hamburger class="hamburger-container"></hamburger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
      <guide class="right-menu-item hover-effect"></guide>
      <header-search class="headerSearch-container"></header-search>
      <screenfull class="right-menu-item hover-effect" />
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="avatar"></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/index">
              <el-dropdown-item> 首页 </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="logout"> 退出登录 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import avatar from '@/static/img/avatar.jpeg';
import Hamburger from '@/components/hanburger.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Screenfull from '@/components/Screenfull.vue';
import HeaderSearch from '@/components/headerSearch.vue';
import Guide from '@/components/Guide.vue';
import { useStore } from 'vuex';
const store = useStore();
const logout = () => {
  store.dispatch('user/logout');
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 10px 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 35px;
    height: 100%;
    float: left;
    cursor: pointer;
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    display: flex;
    height: 50px;
    line-height: 50px;
    align-items: center;
    float: right;
    padding-right: 16px;
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 14px 0 0;
      font-size: 24px;
      color: #5a5e66;
      cursor: pointer;
    }
    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
    .headerSearch-container {
      height: 50px;
      margin-right: 15px;
    }
  }
}
</style>
