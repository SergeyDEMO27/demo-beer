export default {
  state: () => ({
    isHeaderShow: true,
  }),
  mutations: {
    setHeaderState(state, value) {
      state.isHeaderShow = value;
    },
  },

  namespaced: true,
};
