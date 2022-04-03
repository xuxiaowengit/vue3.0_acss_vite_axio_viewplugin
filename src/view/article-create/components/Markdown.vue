<template>
  <div class="markdown-container">
    <!-- 渲染区 -->
    <div id="markdown-box"></div>
    <div class="bottom">
      <el-button type="primary" @click="onSubmitClick">提交</el-button>
    </div>
  </div>
</template>

<script setup>
import MkEditor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { onMounted, watch } from 'vue';
import { commitArticle, editArticle } from './commit';

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  detail: {
    type: Object,
  },
});

// Editor实例
let mkEditor;

let el;
onMounted(() => {
  el = document.querySelector('#markdown-box');
  initEditor();
});

const initEditor = () => {
  mkEditor = new MkEditor({
    el,
    height: '500px',
    previewStyle: 'vertical',
    language: 'zh-CN',
  });

  mkEditor.getMarkdown();
};
const emits = defineEmits(['onSuccess']);
const onSubmitClick = async () => {
  if (props.detail && props.detail._id) {
    await editArticle({
      id: props.detail._id,
      title: props.title,
      content: mkEditor.getHTML(),
    });
  } else {
    await commitArticle({
      title: props.title,
      content: mkEditor.getHTML(),
    });
  }

  mkEditor.reset();
  emits('onSuccess');
};

watch(
  () => props.detail,
  (val) => {
    if (val && val.content) {
      mkEditor.setHTML(val.content);
    }
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.markdown-container {
  .bottom {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
