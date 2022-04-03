<template>
  <button @click="loading">点击切换图标ico</button>
</template>
<script setup>
import useFavicon from '../../utils/useFavicon';
let { favicon } = useFavicon();
function loading() {
  favicon.value = 'https://devops.longhu.net/favicon.ico';
}
</script>

<style></style>
