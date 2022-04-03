<template>
  <div class="header-search" :class="{ show: isShow }">
    <div class="search-icon" @click.stop="onShowClick">
      <span class="iconfont icon-sousuo"></span>
    </div>
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      placeholder="Search"
      :remote-method="querySearch"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title.join('>')"
        :value="option.item"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { filterRouters } from '@/utils/router.js';
import { generateRoutes } from '@/utils/FuseData.js';

import Fuse from 'fuse.js';
const isShow = ref(false);
const headerSearchSelectRef = ref(null);

//检索数据源
const router = useRouter();
const searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes());
  return generateRoutes(filterRoutes);
});

/**
 * 搜索库相关
 */

const fuse = new Fuse(searchPool.value, {
  // 是否按优先级进行排序
  shouldSort: true,
  // 匹配长度超过这个值的才会被认为是匹配的
  minMatchCharLength: 1,
  // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
  // name：搜索的键
  // weight：对应的权重
  keys: [
    {
      name: 'title',
      weight: 0.7,
    },
    {
      name: 'path',
      weight: 0.3,
    },
  ],
});

const onShowClick = () => {
  isShow.value = !isShow.value;
  headerSearchSelectRef.value.focus();
};
const search = ref('');
const searchOptions = ref([]);
const querySearch = (query) => {
  if (query !== '') {
    searchOptions.value = fuse.search(query);
  } else {
    searchOptions.value = [];
  }
};
const onSelectChange = (val) => {
  router.push(val.path);
};
const onClose = () => {
  headerSearchSelectRef.value.blur();
  isShow.value = false;
  searchOptions.value = [];
};
watch(isShow, (val) => {
  if (val) {
    document.body.addEventListener('click', onClose);
  } else {
    document.body.removeEventListener('click', onClose);
  }
});
</script>
<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    color: #666;
    font-size: 22px;
    vertical-align: middle;
    display: inline-block;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
