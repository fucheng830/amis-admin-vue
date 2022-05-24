import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'amis/lib/helper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require('./registerServiceWorker')
Vue.config.productionTip = false
Vue.use(ElementUI)
import store from './store'
import router from './router'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
