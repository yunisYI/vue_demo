import { getShopCartList, updateShopCartItemStatusById, reqUpdateBookQuantity, reqDeleteBookById, reqDeleteAllBooks } from '@/api/bookInfo'
const state = {
  cartList: []
}
const actions = {
  // 获取购物车数据
  async getShopCartListData({ commit }, usernumber) {
    let result = await getShopCartList(usernumber)
    if (result.status == 200) {
      commit('SAVECARTLIST', result.data)
      return result.data
    } else {
      return Promise.reject(new Error(result.data))
    }
  },
  // 修改对应id的商品的状态
  async updateShopCartItemStatus(_, data) {
    let result = await updateShopCartItemStatusById(data)
    if (result.status == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error(result.data))
    }
  },
  // 修改对应id的商品的数量
  async updateBookQuantity(_, data) {
    let result = await reqUpdateBookQuantity(data)
    if (result.status == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error(result.data))
    }
  },
  async deleteBookById(_, data) {
    let result = await reqDeleteBookById(data)
    console.log(result)
  },
  // 删除全部勾选的商品
  async deleteAllBooks(_, data) {
    let result = await reqDeleteAllBooks(data)
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error(result.data))
    }
  }
}
const mutations = {
  SAVECARTLIST(state, cartList) {
    state.cartList = cartList
  }
}
const getters = {
  shopCartInfo(state) {
    return state.cartList || []
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}