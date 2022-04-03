<template>
  <div class="excel-container">
    <upload-excel :onSuccess="onSuccess"></upload-excel>
  </div>
</template>

<script setup>
import {} from 'vue';
import UploadExcel from '@/components/UploadExcel.vue';
const onSuccess = (excelData) => {
  console.log(JSON.stringify(excelData) + '~~~~');
};
</script>

<style lang="scss" scoped></style>
