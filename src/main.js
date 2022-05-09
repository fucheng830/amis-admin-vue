import Vue from "vue";
import App from "./App.vue";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "amis/lib/helper.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
import store from "./store";
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
