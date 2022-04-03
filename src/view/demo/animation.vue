<template>
  <div class="box" :style="{ width: width + 'px' }"></div>
  <button @click="change">click</button>
  <button @click="toggle">切换</button>
  <transition name="fade">
    <h1 v-if="showTitle">你好 vue</h1>
  </transition>
</template>
<script setup>
import { ref } from 'vue';
let width = ref(30);
function change() {
  width.value += 30;
}

let showTitle = ref(true);
function toggle() {
  showTitle.value = !showTitle.value;
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.box {
  width: 30px;
  height: 30px;
  position: relative;
  background: red;
  animation: move 2s linear infinite;
  /* transition: width 1s linear;*/
}
@keyframes move {
  0% {
    left: 0px;
  }
  50% {
    left: 200px;
  }
  100% {
    left: 0;
  }
}
</style>
