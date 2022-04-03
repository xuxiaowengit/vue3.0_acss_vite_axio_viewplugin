import { ref } from 'vue';
import Sortable from 'sortablejs';
import { ElMessage } from 'element-plus';
import { articleSort } from '@/api/article';
export const tableRef = ref(null);

export const initSortable = (tableData, cb) => {
  const el = tableRef.value.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
  Sortable.create(el, {
    ghostClass: 'sortable-ghost',
    async onEnd(event) {
      const { newIndex, oldIndex } = event;
      await articleSort({
        initRanking: tableData.value[oldIndex].ranking,
        finalRanking: tableData.value[newIndex].ranking,
      });
      ElMessage.success({
        message: '拖动排序成功',
        type: 'success',
      });
      //重新获取数据无刷新table
      //tableData.value = [];
      cb && cb();
    },
  });
};
