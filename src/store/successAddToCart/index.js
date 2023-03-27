
import { getBookInfoDataById } from '@/api/bookInfo'
const state = {
}
const actions = {
  async getBookInfoById(_, id) {
    let result = await getBookInfoDataById(id)
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error(result.data))
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