import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 注册全局组件
import Header from './components/Header'
Vue.component(Header.name, Header)
import Category from '@/components/Category'
Vue.component(Category.name, Category)
import Footer from '@/components/Footer'
Vue.component(Footer.name, Footer)
import Book from '@/pages/Home/Ranking/Book'
Vue.component(Book.name, Book)
// 引入router实例
import router from './router'

import 'swiper/css/swiper.min.css'   //全局引入swiper的样式

// 引入表单验证插件
import vueFormCheck from 'vue-form-check'
Vue.use(vueFormCheck)

// 引入element
// import { MessageBox } from 'element-ui';
// Vue.prototype.$message = MessageBox
// Vue.prototype.$alert = MessageBox.alert

import store from '@/store'
new Vue({
  router,
  render: h => h(App),
  store,
  beforeCreate() {
    // 配置事件总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')
