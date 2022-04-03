<template>
  <div class="">
    <el-card>
      <el-table :data="allRoles" border style="width: 100%">
        <el-table-column label="index" type="index" width="120"></el-table-column>
        <el-table-column label="title" prop="title"></el-table-column>
        <el-table-column label="describe" prop="describe"></el-table-column>
        <el-table-column label="action" #default="{ row }">
          <el-button type="primary" size="mini" @click="onDistribute(row)">查看</el-button>
        </el-table-column>
      </el-table>
    </el-card>
    <distribute v-model="distributeVisible" :roleId="selectRoleId"></distribute>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { roleList } from '@/api/user';
import distribute from '@/components/distribute.vue';
const allRoles = ref([]);
const getRoleList = async () => {
  allRoles.value = await roleList();
};

getRoleList();

const distributeVisible = ref(false);
const selectRoleId = ref('');
const onDistribute = (row) => {
  distributeVisible.value = true;
  selectRoleId.value = row.id;
};
</script>

<style lang="scss" scoped></style>
