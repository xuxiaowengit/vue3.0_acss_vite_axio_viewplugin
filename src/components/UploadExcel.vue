<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="handleUpload">上传</el-button>
    </div>
    <input
      type="file"
      ref="excelUploadInput"
      class="excel-upload-input"
      accept=".xlsx,.xls"
      @change="handleChange"
    />
    <div
      class="drop"
      @drop.stop.prevent="handleDrop"
      @dragover.stop.prevent="handleDragover"
      @dragenter.stop.prevent="handleDragenter"
    >
      <span class="iconfont icon-yunshangchuan_o"></span>
      拖拽上传
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import XLSX from 'xlsx';
import { getHeaderRow } from '@/utils/getHeaderRow.js';
import { isExcel } from '@/utils/is_vali.js';
import { ElMessage } from 'element-plus';

const loading = ref(false);
const excelUploadInput = ref(null);

const props = defineProps({
  beforeUpload: Function,
  onSuccess: Function,
});

const handleUpload = () => {
  excelUploadInput.value.click();
};
const handleChange = (e) => {
  const files = e.target.files;
  const rawFile = files[0];
  if (!rawFile) return;
  upload(rawFile);
};

const upload = (rawFile) => {
  excelUploadInput.value.value = null;
  if (!props.beforeUpload) {
    readerData(rawFile);
    return;
  }
  const before = props.beforeUpload(rawFile);
  if (before) {
    readerData(rawFile);
  }
};

const readerData = (rawFile) => {
  loading.value = true;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const header = getHeaderRow(worksheet);
      const results = XLSX.utils.sheet_to_json(worksheet);
      generateData({ header, results });
      loading.value = false;
      resolve();
    };
    reader.readAsArrayBuffer(rawFile);
  });
};

const generateData = (excelData) => {
  props.onSuccess && props.onSuccess(excelData);
};

const handleDrop = (e) => {
  if (loading.value) return;
  const files = e.dataTransfer.files;
  if (files.length !== 1) {
    ElMessage.error('必须要有一个文件');
    return;
  }
  const rawFile = files[0];
  if (!isExcel(rawFile)) {
    ElMessage.error('文件必须是.xlsx,.xls.csv格式');
    return;
  }
  upload(rawFile);
};
const handleDragover = (e) => {
  e.dataTransfer.dropEffect = 'copy';
};
const handleDragenter = () => {};
</script>
<style lang="scss" scoped>
.upload-excel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  .excel-upload-input {
    display: none;
    z-index: -9999;
  }
  .btn-upload,
  .drop {
    border: 1px dashed #bbb;
    width: 350px;
    height: 160px;
    text-align: center;
    line-height: 160px;
  }
  .drop {
    line-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #bbb;
    .iconfont {
      font-size: 40px;
      display: block;
    }
  }
}
</style>
