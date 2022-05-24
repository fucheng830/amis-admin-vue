import Vue from 'vue'
import Router from 'vue-router'
import View from '@/views/amis/View'
import Editor from '@/views/amis/Editor'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'View',
      component: View
    },
    {
      path: '/Editor',
      name: 'Editor',
      component: Editor
    }
  ]
})
