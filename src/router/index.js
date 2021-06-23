import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/page/layout/container'
import Login from '@/page/login/login'
import Index from '@/page/index'
import MenuResource from '@/page/menu/menuResource'

Vue.use(Router)

export default new Router({
  mode: 'history', //去掉路由地址上的#
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '',
      name: 'Container',
      component: Container,
      children:[
        {
          path: '/',
          name: 'Index',
          component: Index,
        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
        },
        {
          path: '/menuresource',
          name: 'MenuResource',
          component: MenuResource,
      }
      ]
    },
  ]
})
