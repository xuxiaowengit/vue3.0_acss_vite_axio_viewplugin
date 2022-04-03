<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
    <div :class="$style.success">{{ style }} - {{ $style.success }}</div>
  </div>
</template>
<script setup>
import { ref, useCssModule } from 'vue';
let count = ref(1);
let color = ref('red');
function add() {
  count.value++;
  color.value = Math.random() > 0.5 ? 'blue' : 'red';
}

const style = useCssModule().success;
</script>
<style module>
.success {
  color: #090;
}
h1 {
  color: v-bind(color);
}
</style>
