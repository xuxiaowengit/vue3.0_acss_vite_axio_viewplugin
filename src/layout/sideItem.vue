<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <el-icon :size="16" class="icon">
        <component :is="route.meta.icon" />
      </el-icon>
      <span>{{ route.meta.title }}</span>
    </template>
    <side-item v-for="item in route.children" :key="item.path" :route="item"></side-item>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <el-icon :size="16" class="icon">
      <component :is="route.meta.icon" />
    </el-icon>
    <template #title>{{ route.meta.title }}</template>
  </el-menu-item>
</template>

<script setup>
defineProps({
  route: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.icon {
  margin-right: 5px;
  line-height: 16px;
  height: 20px;
  color: #666;
}
</style>
