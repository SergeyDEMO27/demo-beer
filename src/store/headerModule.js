export default {
  state: () => ({
    isHeaderShow: true,
  }),
  mutations: {
    setHeaderState(state, value) {
      console.log(value);
      state.isHeaderShow = value;
    },
  },

  namespaced: true,
};
