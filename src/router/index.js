import Vue from 'vue'
import Router from 'vue-router'

import cookie from "../../static/js/cookie";

const HelloWorld = () =>import ('@/components/HelloWorld')


Vue.use(Router)


  const routes=[
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {  }
    }
  ]


const router = new Router({
  routes
})
// router.beforeEach((to, from, next) => {
//   var userInfo = cookie.get('_auth') //router.app.$cookie.get('_auth') //JSON.parse(localStorage.getItem('userInfoStorage'));
//   //
//   //
//   if (to.meta.auth) { //判断需不需要登录验证
//     if (userInfo) { //有没有用户信息
//       next()
//     } else { //没有跳到登录页
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else if (to.name === 'login') { //判断进入的地址是不是登录页
//     if (userInfo) { //有没有用户信息 有就返回首页 没有就进
//       next()
//     } else {
//       next()
//     }
//   } else {
//     //
//     next()
//   }
//   //
// })

export default router