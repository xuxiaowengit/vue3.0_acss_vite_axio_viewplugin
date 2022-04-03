<template>
  <div class="tags-view-container" id="guide-tagsview">
    <el-scrollbar class="tags-view-wrapper">
      <router-link
        class="tags-view-item"
        :class="isActive(tag) ? 'active' : ''"
        v-for="(tag, index) in $store.getters.tagsViewList"
        :key="tag.fullPath"
        :to="{ path: tag.fullPath }"
        @contextmenu.prevent="openMenu($event, index)"
        >{{ tag.meta.title }}
        <span
          class="iconfont icon-guanbi"
          v-show="!isActive(tag)"
          @click.prevent.stop="onCloseClick(index)"
        ></span>
      </router-link>
    </el-scrollbar>
    <context-menu v-show="visible" :style="menuStyle" :index="selectIndex"></context-menu>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ContextMenu from '@/components/ContextMenu.vue';
const route = useRoute();
const store = useStore();
const isActive = (tag) => {
  return tag.path === route.path;
};
const onCloseClick = (index) => {
  store.commit('app/removeTagsViewList', {
    type: 'index',
    index: index,
  });
};
const visible = ref(false);
const selectIndex = ref(0);
const menuStyle = reactive({
  left: 0,
  top: 0,
});
const openMenu = (e, index) => {
  const { x, y } = e;
  menuStyle.left = x + 'px';
  menuStyle.top = y + 'px';
  visible.value = true;
  selectIndex.value = index;
};
const closeMenu = () => {
  visible.value = false;
};
watch(visible, (val) => {
  if (val) {
    document.body.addEventListener('click', closeMenu);
  } else {
    document.body.removeEventListener('click', closeMenu);
  }
});
</script>
<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 10px 1px 4px rgb(0 21 41 / 8%);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 23px;
    border: 1px solid #e3e6ec;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    border-radius: 5px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      background: #409eff;
      border: 1px solid #e3e6ec;
      padding: 0 8px;
    }
    // close 按钮
    .icon-guanbi {
      width: 18px;
      height: 18px;
      font-size: 22px;
      vertical-align: -2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        width: 18px;
        height: 18px;
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        width: 18px;
        height: 18px;
        font-size: 22px;
        color: #666;
      }
    }
  }
}
</style>
