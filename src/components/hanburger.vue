<template>
  <div id="guide-hamburger" class="hamburger-container" @click="toggleClick">
    <span :class="icon"></span>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const toggleClick = () => {
  store.commit('app/triggerSidebarOpened');
};
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'iconfont icon-zhedie1' : 'iconfont icon-zhedie2';
});
</script>
<style lang="scss" scoped>
.hamburger-container {
  padding: 0 10px;
  span {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
