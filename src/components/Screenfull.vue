<template>
  <div class="screen">
    <span
      :class="isFullscreen ? 'iconfont icon-tuichuquanping' : 'iconfont icon-quanping'"
      @click="onToggle"
    ></span>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import screenfull from 'screenfull';
const isFullscreen = ref(false);
const change = () => {
  isFullscreen.value = screenfull.isFullscreen;
};
const onToggle = () => {
  screenfull.toggle();
};
onMounted(() => {
  screenfull.on('change', change);
});
onUnmounted(() => {
  screenfull.off('change', change);
});
</script>
<style lang="scss" scoped>
.iconfont {
  font-size: 22px;
}
</style>
