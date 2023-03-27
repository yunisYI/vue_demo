import Vue from 'vue'
import routes from './routes'
// 引入routes规则
import VueRouter from 'vue-router'
// Vue要使用VurRouter插件
Vue.use(VueRouter)

import store from '@/store'

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  //确保方法的调用者为this
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior() {
    // return 期望滚动到哪个的位置
    return { y: 0 }
  }
})


router.beforeEach((to, from, next) => {
  let token = store.state.user.token
  let usernumber = store.state.user.userInfo.usernumber

  if (token) {
    if (to.path == '/login' || to.path == '/signup') {
      next('/')
    } else {
      if (usernumber) {
        // userInfo存在
        next()
      } else {
        store.dispatch('getUserInfoDataByToken').then(() => {
          console.log("重新获取到用户信息")
          let { usernumber } = store.state.user.userInfo
          console.log(usernumber)
          store.dispatch('getShopCartListData', { usernumber }).then(() => {
            console.log('重新获取用户购物车信息')
          }).catch(err => {
            console.log(err)
            next()
          })
          next()
        }).catch(err => {
          console.log('token失效', err)
          // 清除用户信息  跳转至login  重新登陆
          store.dispatch('logOut').then(() => {
            // 清除用户信息成功
            next('/login')
          }).catch(err => {
            console.log(err)
          })
        })
      }
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to) => {
  document.title = to.name;
})
export default router