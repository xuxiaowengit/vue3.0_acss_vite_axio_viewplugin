import { TAGS_VIEW } from '@/utils/constant.js';
import { localStorageSet, localStorageGet } from '@/utils/tools.js';
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    tagsViewList: localStorageGet(TAGS_VIEW) || [],
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened;
    },
    addTagsViewList(state, tag) {
      const isFind = state.tagsViewList.find((item) => {
        return item.path === tag.path;
      });
      if (!isFind) {
        state.tagsViewList.push(tag);
        localStorageSet(TAGS_VIEW, state.tagsViewList);
      }
    },
    removeTagsViewList(state, payload) {
      if (payload.type === 'index') {
        state.tagsViewList.splice(payload.index, 1);
        return;
      } else if (payload.type === 'other') {
        state.tagsViewList.splice(payload.index + 1, state.tagsViewList.length - payload.index + 1);
        state.tagsViewList.splice(0, payload.index);
      } else if (payload.type === 'right') {
        state.tagsViewList.splice(payload.index + 1, state.tagsViewList.length - payload.index + 1);
      }
      localStorageSet(TAGS_VIEW, state.tagsViewList);
    },
  },
};
