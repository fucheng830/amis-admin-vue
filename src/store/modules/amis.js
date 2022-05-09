const state = () => ({
  config: {},
  enableAMISDebug: false,
  theme: "default",
});
const getters = {
  config: (state) => state.config,
  theme: (state) => state.theme,
  enableAMISDebug: (state) => state.enableAMISDebug,
};
const mutations = {
  setTheme(state, theme) {
    state.theme = theme;
  },
  setProtocol(state, config) {
    state.config = config;
  },
  enableAMISDebug(state, enable) {
    state.enableAMISDebug = enable;
  },
};
const actions = {
  setTheme(state, theme) {
    state.commit("setTheme", theme);
  },
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
