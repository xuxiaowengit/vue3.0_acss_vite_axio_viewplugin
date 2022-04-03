<template>
  <div>
    <h1>您的评分是 {{ score }}</h1>
    <Rate :value="score" theme="blue" @update-rate="update">评分：</Rate>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Rate from '../../components/rate.vue';
let score = ref(3.5);
function update(num) {
  score.value = num;
}
</script>
