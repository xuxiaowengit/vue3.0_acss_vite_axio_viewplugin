<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    :collapse="!$store.getters.sidebarOpened"
    router
  >
    <side-item v-for="item in routes" :key="item.path" :route="item"></side-item>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { filterRouters, generateMenus } from '@/utils/router.js';
import sideItem from './sideItem.vue';

const router = useRouter();
const route = useRoute();
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes());
  return generateMenus(filterRoutes);
});
const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: 0px;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #409eff !important;
}

.el-submenu__title:focus,
.el-submenu__title:hover {
  outline: 0 !important;
  color: #fff !important;
  background: #435ebe !important;
  border-radius: 8px !important;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #fff !important;
  background: #435ebe !important;
  border-radius: 8px !important;
}
</style>
