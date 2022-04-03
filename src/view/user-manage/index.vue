<template>
  <div class="user-manage-container">
    <el-card class="header">
      <div>
        <el-button type="primary" v-permission="['distributeRole']" @click="onImportExcel"
          >导入</el-button
        >
        <el-button type="success" @click="onToExcelClick">导出</el-button>
      </div>
    </el-card>
    <el-card>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column prop="username" label="username"></el-table-column>
        <el-table-column prop="mobile" label="mobile"> </el-table-column>
        <el-table-column prop="avatar" label="image" align="center">
          <template v-slot="{ row }">
            <el-image class="avatar" :src="row.avatar" :preview-src-list="[row.avatar]"> </el-image>
          </template>
        </el-table-column>
        <el-table-column label="role">
          <template #default="{ row }">
            <div v-if="row.role && row.role.length > 0">
              <el-tag v-for="item in row.role" :key="item.id" size="mini">{{ item.title }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="time">
          <template #default="{ row }">
            {{ $filters.dateFilter(row.openTime) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="260">
          <template #default>
            <el-button type="primary" size="mini">查看</el-button>
            <el-button type="info" size="mini">角色</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="size"
        layout="total,sizes,prev,pager,next,jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <export-to-excel v-model="ExportToExcelVisible"></export-to-excel>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ExportToExcel from '@/components/Export2Excel.vue';
import { getUserManageList } from '@/api/user';
const ExportToExcelVisible = ref(false);
const onToExcelClick = () => {
  ExportToExcelVisible.value = true;
};

const tableData = ref([]);
const total = ref(0);
const page = ref(1);
const size = ref(2);
const router = useRouter();

const getListData = async () => {
  const result = await getUserManageList({
    page: page.value,
    size: size.value,
  });
  tableData.value = result.list;
  total.value = result.total;
  //console.log(result);
};
getListData();
const handleSizeChange = (currentSize) => {
  size.value = currentSize;
  getListData();
};
const handleCurrentChange = (currentPage) => {
  page.value = currentPage;
  getListData();
};
const onImportExcel = () => {
  router.push('/user/import');
};
</script>
<style lang="scss" scoped>
.user-manage-container {
  .header {
    margin-bottom: 22px;
    text-align: right;
  }
  ::v-deep(.avatar) {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  ::v-deep(.el-tag) {
    margin-right: 6px;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
