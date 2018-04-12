import Vue from 'vue'
import Router from 'vue-router'
// @始终是src路径的别名 webpack配置的 
//                src/components/login/login.vue
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'

Vue.use(Router)

const router =  new Router({
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

// 1 添加路由拦截（导航狗子 守卫）
// 所有的视图导航都必须经过路由这里的关卡
// 一旦进入关卡，我得告诉路由守卫
// to 要去哪里
// from从来哪的
// next用来放行
router.beforeEach((to, from, next) => {
  // 拿到当前要请求大的路径标识，如果是登陆组件 直接放行
  // 如果不是登陆组件 其他的都要拦截 要检查token令牌

  // 如果to.name 是login 放行
    if(to.name==='login'){
      next()
    }else{
      // 如果不是
      // 检查令牌登陆状态
      const token = window.localStorage.getItem('admin-token')
          // 如果没有令牌 让其去登录页登陆（取反）
      if(!token){
        next({
          name:'login'
        })
      }else{
        // 否则就是有令牌 登陆成功 放行
        next()
      }
    }

})
export default router