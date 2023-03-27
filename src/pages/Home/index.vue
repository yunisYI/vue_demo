<template>
  <div class="main-wrap">
    <homeSwiper :swiperData="swiperData"></homeSwiper>
    <Category></Category>
    <Recommend :recommendData="recommendData"></Recommend>
    <Ranking :rankingData="rankingData"></Ranking>
  </div>
</template>
<script>
// 引入swiper
import homeSwiper from './HomeSwiper'
import Recommend from './Recommend'
import Ranking from './Ranking'
export default {
  name: 'Home',
  data() {
    return {
      // 轮播图数据
      swiperData: [],
      // 推荐书单数据
      recommendData: {},
      // 排行书单数据
      rankingData: []
    }
  },
  components: {
    homeSwiper,
    Recommend,
    Ranking
  },
  mounted() {
    this.$bus.$emit('pathChange', '/')
    this.getSwiperData()
    this.getRecommendData()
    this.getRankingData()
  },
  methods: {
    // 调用store内获取swiper数据的函数
    getSwiperData() {
      this.$store.dispatch('getSwiperDataList').then(res => {
        // 保存数据
        this.swiperData = res
      }).catch(err => {
        alert(err)
      })
    },
    // 获取推荐的数据
    getRecommendData() {
      this.$store.dispatch('getRecommendDataList').then(res => {
        this.recommendData = res
      }).catch(err => {
        alert(err)
      })
    },
    // 获取排行数据
    getRankingData() {
      this.$store.dispatch('getRankingDataList').then(res => {
        this.rankingData = res
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>
<style lang="less" scoped></style>>
