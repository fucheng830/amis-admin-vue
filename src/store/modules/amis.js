const state = () => ({
  config: {},
  enableAMISDebug: false,
});
const getters = {
  config: (state) => state.config,
  enableAMISDebug: (state) => state.enableAMISDebug,
};
const mutations = {
  setProtocol(state, config) {
    state.config = config;
  },
  enableAMISDebug(state, enable) {
    state.enableAMISDebug = enable;
  },
};
const actions = {
  enableAMISDebug({ commit }, enable) {
    commit("enableAMISDebug", enable);
  },
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
