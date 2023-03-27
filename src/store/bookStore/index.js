
import { getCategorySelectList, getBookStoreBooks } from '@/api/bookInfo'
const state = {
}
const actions = {
  // 获取图书分类选择数据
  async getCategorySelectListData() {
    let result = await getCategorySelectList()
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error('获取分类数据失败'))
    }
  },
  // 获取图书商城页书籍的数据
  async getBookStoreBooksData() {
    let result = await getBookStoreBooks()
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error('获取书籍信息失败'))
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