<template>
  <div class="parent">我是父页面</div>
  <child text="点击" name="sichaoyun" @change="fn">hello word</child>
</template>
<script>
import Child from './child.vue';
export default {
  setup() {
    function fn() {
      console.log('被子组件调用了');
    }
    return {
      fn,
    };
  },
  components: { Child },
};
</script>
<style scoped>
.parent {
  color: #ff0000;
}

::deep(.parent) {
  color: #ff0000;
}
</style>
