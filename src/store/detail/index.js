import { getBookDetailInfo, getLikeBooks, reqAddToCart } from '@/api/bookInfo'
const state = {
}
const actions = {
  async getDetailBookInfoData(_, id) {
    const result = await getBookDetailInfo(id)
    if (result.status == 200) {
      return result.data[0]
    } else {
      return Promise.reject(new Error(result.data))
    }
  },
  async getLikeBooksData() {
    const result = await getLikeBooks()
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error(result.data))
    }
  },
  // 添加购物车
  async addToCart(_, params) {
    const result = await reqAddToCart(params)
    if (result.status == 200) {
      return '添加购物车成功！'
    } else {
      return Promise.reject(new Error('添加购物车失败！'))
    }
  }
}
const mutations = {
}
const getters = {
}
export default {
  state,
  actions,
  mutations,
  getters
}