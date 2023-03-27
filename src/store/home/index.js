
import { getSwiperData, getRecommendData, getRankingData, getCategoryList } from '@/api/bookInfo'
const state = {
}
const actions = {
  async getSwiperDataList() {
    let result = await getSwiperData()
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error('获取轮播图信息失败'))
    }
  },
  async getRecommendDataList() {
    let result = await getRecommendData()
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error('获取推荐书单信息失败！'))
    }
  },
  async getRankingDataList() {
    let result = await getRankingData()
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error('获取排行数据失败！'))
    }
  },
  async getCategoryListData() {
    let result = await getCategoryList()
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error('获取分类数据失败!'))
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