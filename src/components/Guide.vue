<template>
  <div>
    <el-tooltip content="这个是导引功能">
      <span id="guide-start" class="iconfont icon-map-indicator" @click="onClick"></span>
    </el-tooltip>
  </div>
</template>
<script setup>
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import { onMounted } from 'vue';
let driver = null;
onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    closeBtnText: '关闭',
    nextBtnText: '下一个',
    prevBtnText: '上一个',
  });
});
const onClick = () => {
  driver.defineSteps([
    {
      element: '#guide-start',
      popover: {
        className: 'first-step-popover-class',
        title: '这是指引功能',
        description: '如果你第一次使用看下主要功能吧',
        position: 'left',
      },
    },
    {
      element: '#guide-sidebar',
      popover: {
        title: '这里是左侧菜单',
        description: '菜单可以展开折叠哦',
        position: 'right',
      },
    },
    {
      element: '#guide-tagsview',
      popover: {
        title: '这里是标签菜单',
        description: '可以记录你最近的访问信息',
        position: 'bottom',
      },
    },
  ]);
  driver.start();
};
</script>

<style></style>
