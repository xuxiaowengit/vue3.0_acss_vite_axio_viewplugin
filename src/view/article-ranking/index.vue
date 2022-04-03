<template>
  <div class="article-ranking-container">
    <el-card class="header">
      <div class="dynamic-box">
        <span class="title">筛选</span>
        <el-checkbox-group v-model="selectDynamicLabel">
          <el-checkbox v-for="(item, index) in dynamicData" :label="item.label" :key="index">{{
            item.label
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>

    <el-card>
      <el-table ref="tableRef" :data="tableData" border>
        <el-table-column
          v-for="(item, index) in tableColumns"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        >
          <template #default="{ row }" v-if="item.prop === 'publicDate'">
            {{ $filters.relativeTime(row.publicDate) }}
          </template>
          <template #default="{ row }" v-else-if="item.prop === 'action'">
            <el-button type="primary" size="mini" @click="onShowClick(row)">查看</el-button>
            <el-button type="danger" size="mini" @click="onRemoveClick(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[5, 10, 50, 100, 200]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onActivated, onMounted } from 'vue';
import { getArticleList, deleteArticle } from '@/api/article';
import { dynamicData, selectDynamicLabel, tableColumns } from './DataIndex';
import { tableRef, initSortable } from './Sortable';
import { useRouter } from 'vue-router';
import { ElMessageBox, ElMessage } from 'element-plus';
const tableData = ref([]);
const total = ref(0);
const page = ref(1);
const size = ref(10);

const getListData = async () => {
  const result = await getArticleList({
    page: page.value,
    size: size.value,
  });
  tableData.value = result.list;
  total.value = result.total;
};

getListData();
//处理不重新加载的问题
onActivated(getListData);

const handleSizeChange = (currentSize) => {
  size.value = currentSize;
  getListData();
};

const handleCurrentChange = (currentPage) => {
  page.value = currentPage;
  getListData();
};

onMounted(() => {
  initSortable(tableData, getListData);
});

const router = useRouter();
const onShowClick = (row) => {
  router.push(`/arti/${row._id}`);
};

// 删除用户
const onRemoveClick = (row) => {
  ElMessageBox.confirm('你确定要删除吗？')
    .then(async () => {
      await deleteArticle(row._id);
      ElMessage.success('删除成功！');
      // 重新渲染数据
      getListData();
    })
    .catch(() => {
      ElMessage({
        type: '提示',
        message: '删除取消',
      });
    });
};
</script>

<style lang="scss" scoped>
.article-ranking-container {
  .header {
    margin-bottom: 20px;
    .dynamic-box {
      display: flex;
      align-items: center;
      .title {
        margin-right: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  ::v-deep(.el-table__row) {
    cursor: pointer;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
  ::v-deep .sortable-ghost {
    opacity: 0.6;
    color: #fff !important;
    background: #409eff !important;
  }
}
</style>
