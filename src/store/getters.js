const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}';
  },
  userInfo: (state) => state.user.userInfo,
  sidebarOpened: (state) => state.app.sidebarOpened,
  tagsViewList: (state) => state.app.tagsViewList,
};
export default getters;
