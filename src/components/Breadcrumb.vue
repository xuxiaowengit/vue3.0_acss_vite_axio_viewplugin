<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumData" :key="item.path">
        <span v-if="index === breadcrumData.length - 1" class="no-redirect">{{
          item.meta.title
        }}</span>
        <a v-else class="redirect" @click.prevent="onLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const breadcrumData = ref([]);
const getBreadcrumbData = () => {
  breadcrumData.value = route.matched.filter((item) => item.meta && item.meta.title);
};
const onLink = (item) => {
  router.push(item.path);
};
watch(
  route,
  () => {
    getBreadcrumbData();
  },
  {
    immediate: true,
  },
);
</script>
<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
  }
  .redirect:hover {
    color: #000;
  }
}
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}
.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.breadcrumb-leave-active {
  position: absolute;
}
</style>
