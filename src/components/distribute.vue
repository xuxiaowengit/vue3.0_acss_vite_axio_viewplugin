<template>
  <el-dialog title="分配权限" :model-value="modelValue" @close="closed">
    <el-tree
      ref="treeRef"
      :data="allPermission"
      show-checkbox
      check-strictly
      node-key="id"
      default-expand-all
      :props="defaultProps"
    >
    </el-tree>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">取消</el-button>
        <el-button type="primary" @click="onConfirm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import { permissionList, rolePermission } from '@/api/user.js';

const props = defineProps({
  roleId: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const treeRef = ref(null);
const getRolePermssion = async () => {
  const checkedKeys = await rolePermission(props.roleId);
  treeRef.value.setCheckedKeys(checkedKeys);
};

watch(
  () => props.roleId,
  (val) => {
    if (val) {
      getRolePermssion();
    }
  },
);

const defaultProps = {
  children: 'children',
  label: 'permissionName',
};

// 所有权限
const allPermission = ref([]);
const getPermissionList = async () => {
  allPermission.value = await permissionList();
};

getPermissionList();

const emits = defineEmits(['update:modelValue']);

/**
  确定按钮点击事件
 */
const onConfirm = async () => {
  closed();
};

/**
 * 关闭
 */
const closed = () => {
  emits('update:modelValue', false);
};
</script>
