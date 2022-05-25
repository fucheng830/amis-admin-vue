import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
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
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
