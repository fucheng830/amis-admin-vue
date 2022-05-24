const state = () => ({
  config: {},
  enableAMISDebug: false,
  theme: 'default',
  component: 'AmisView'
})
const getters = {
  config: state => state.config,
  theme: state => state.theme,
  component: state => state.component,
  enableAMISDebug: state => state.enableAMISDebug
}
const mutations = {
  setComponent(state, component) {
    state.component = component
  },
  setTheme(state, theme) {
    state.theme = theme
  },
  setProtocol(state, config) {
    state.config = config
  },
  enableAMISDebug(state, enable) {
    state.enableAMISDebug = enable
  }
}
const actions = {
  setComponent(state, component) {
    state.commit('setComponent', component)
  },
  setTheme(state, theme) {
    state.commit('setTheme', theme)
  },
  enableAMISDebug({ commit }, enable) {
    commit('enableAMISDebug', enable)
  },
  setProtocol({ commit }, config) {
    commit('config', config)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
