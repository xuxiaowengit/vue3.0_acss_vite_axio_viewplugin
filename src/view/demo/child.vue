<template>
  <button @click="handlClick">{{ text }}</button>
  <div class="test">我是子页面</div>
  <el-button type="success">Success</el-button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
  setup(props, context) {
    const { attrs, slots, emit } = context;
    console.log(attrs.name);
    console.log(slots.default());
    console.log(props.text);
    function handlClick() {
      emit('change');
    }
    return {
      handlClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.test {
  color: red;
}
</style>
