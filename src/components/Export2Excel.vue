<template>
  <el-dialog title="导出" :model-value="modelValue" @close="closed" width="30%">
    <el-input placeholder="数据表" v-model="excelName"></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">关闭</el-button>
        <el-button type="primary" @click="onConfirm" :loading="loading">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { getUserManageList } from '@/api/user.js';
import { dateFormater } from '@/utils/tools.js';
const excelName = ref('');
const USER_RELATIONS = {
  姓名: 'username',
  联系方式: 'mobile',
  角色: 'role',
  开通时间: 'openTime',
};

// 该方法负责将数组转化成二维数组
const formatJson = (headers, rows) => {
  // 首先遍历数组
  // [{ username: '张三'},{},{}]  => [[’张三'],[],[]]
  return rows.map((item) => {
    return Object.keys(headers).map((key) => {
      // 角色特殊处理
      if (headers[key] === 'role') {
        const roles = item[headers[key]];
        return JSON.stringify(roles.map((role) => role.title));
      }
      if (headers[key] === 'openTime') {
        return dateFormater('YYYY-MM-DD', item[headers[key]] * 1);
      }
      return item[headers[key]];
    });
  });
};

const loading = ref(false);
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(['update:modelValue']);
const onConfirm = async () => {
  loading.value = true;
  const allUser = (await getUserManageList()).list;
  const data = formatJson(USER_RELATIONS, allUser);
  const excel = await import('@/utils/Export2Excel');
  excel.export_json_to_excel({
    // excel 表头
    header: Object.keys(USER_RELATIONS),
    // excel 数据（二维数组结构）
    data,
    // 文件名称
    filename: excelName.value || '表格数据',
    // 是否自动列宽
    autoWidth: true,
    // 文件类型
    bookType: 'xlsx',
  });
  loading.value = false;
  closed();
};
const closed = () => {
  emits('update:modelValue', false);
};
</script>
<style lang="scss" scoped></style>
