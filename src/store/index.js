import Vue from "vue";
import vuex from 'vuex'

import home from './home'
import bookStore from './bookStore'
import user from './user'
import category from './cagetory'
import detail from './detail'
import successAddToCart from './successAddToCart'
import shopCart from './shopCart'

Vue.use(vuex)

export default new vuex.Store({
  namespaced: true,
  modules: {
    home,
    bookStore,
    user,
    category,
    detail,
    successAddToCart,
    shopCart
  }
})