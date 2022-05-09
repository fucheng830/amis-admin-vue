const state = () => ({
  config: {},
});
const getters = {
  config: (state) => state.config,
};
const mutations = {
  setProtocol(state, config) {
    state.config = config;
  },
};
const actions = {
  setProtocol({ commit }, config) {
    commit("config", config);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
