import Vue from 'vue'
import Router from 'vue-router'
// @始终是src路径的别名 webpack配置的 
//                src/components/login/login.vue
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
     {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
})
