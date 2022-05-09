import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Vue from "vue";
Vue.use(Vuex);
const files = require.context("./modules", false, /\.js$/);
const modules = {};
files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
Object.keys(modules).forEach((key) => {
  modules[key]["namespaced"] = true;
});
const store = new Vuex.Store({
  modules,
  plugins: [createPersistedState()],
});
export default store;
