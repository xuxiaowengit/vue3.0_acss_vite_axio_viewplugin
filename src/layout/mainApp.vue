<template>
  <el-container :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
    <el-aside :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
      <logo />
      <side-bar id="guide-sidebar" />
    </el-aside>
    <el-container>
      <div class="fixed-header">
        <navBar />
        <tags-view></tags-view>
      </div>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="route.path" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import sideBar from './sideBar.vue';
import Logo from './logo.vue';
import navBar from './navBar.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { isTags } from '@/utils/tags.js';
import TagsView from '@/components/TagsView.vue';
const route = useRoute();
const getTitle = (route) => {
  let title = '';
  if (!route.meta) {
    const pathArr = route.path.split('/');
    title = pathArr[pathArr.length - 1];
  } else {
    title = route.meta.title;
  }
};
const store = useStore();
watch(
  route,
  (to, from) => {
    if (!isTags) {
      return;
    }
    const { fullPath, meta, name, params, path, query } = to;
    store.commit('app/addTagsViewList', {
      fullPath,
      meta,
      name,
      path,
      query,
      title: getTitle(to),
    });
  },
  {
    immediate: true,
  },
);
</script>
<style lang="scss" scoped>
.el-container {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.el-aside {
  width: $sideBarWidth;
  transition: width 0.28s;
}
.hideSidebar .el-aside {
  width: $hideSideBarWidth;
}
.el-main {
  position: relative;
  height: 94%;
  width: 100%;
  margin-top: 80px;
  background-color: #f2f7ff;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
