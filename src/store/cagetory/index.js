
import { getSearchList } from "@/api/bookInfo"
const state = {
}
const actions = {
  // 获取搜索信息
  async getSearchListData(_, keyWord) {
    let result = await getSearchList(keyWord)
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(result.data)
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