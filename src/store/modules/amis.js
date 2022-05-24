const state = () => ({
  config: {},
  enableAMISDebug: false,
  theme: 'default',
  component: 'AmisView',
  editor: { isMobile: false, isPreview: false, theme: 'antd' }
})
const getters = {
  config: state => state.config,
  theme: state => state.theme,
  component: state => state.component,
  enableAMISDebug: state => state.enableAMISDebug,
  editor: state => state.editor
}
const mutations = {
  setEditor(state, config) {
    state.editor = config
  },
  changeMobile(state, Mobile) {
    state.editor.isMobile = Mobile
  },
  changePreview(state, Preview) {
    state.editor.isPreview = Preview
  },
  changeTheme(state, theme) {
    // import (`amis/lib/themes/${theme}.css`)
    state.editor.theme = theme
  },
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
  setEditor(state, config) {
    state.commit('setEditor', config)
  },
  changeMobile(state, Mobile) {
    state.commit('changeMobile', Mobile)
  },
  changePreview(state, Preview) {
    state.commit('changePreview', Preview)
  },
  changeTheme({ commit }, Theme) {
    commit('changeTheme', Theme)
  },
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
