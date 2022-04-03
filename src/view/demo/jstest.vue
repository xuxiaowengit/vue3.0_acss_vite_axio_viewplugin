<template>
  <div id="test" class="test">
    <el-icon :size="20"><edit /></el-icon>
    {{ obj }} - {{ double }}
    {{ api }}
  </div>
</template>
<script>
import { reactive, computed, watchEffect } from 'vue';
export default {
  setup() {
    let obj = reactive({
      count: 1,
    });
    let api = import.meta.env.VITE_APP_BASE_API;

    let double = computed(() => obj.count * 2);
    obj.count = 2;
    watchEffect(() => {
      console.log(obj.count, double.value);
    });
    return {
      obj,
      double,
      api,
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
