<template>
  <div class="recommend-wrap">
    <div class="prompt-img">
      <img src="./imgs/prompt.png" alt="">
    </div>
    <div class="recommend-main">
      
      <!-- 介绍页作者信息 -->
      <div class="recommend-left">
        <p>{{ recommendData[0] ? recommendData[0].author.name : '' }}</p>
        <p>
          {{ recommendData[0] ? recommendData[0].author.introduction : '' }}
        </p>
        <a href="index.html">
          进入专栏 >>
        </a>
      </div>
      <!-- 介绍页作者图片 -->
      <div class="recommend-center">
        <img :src="recommendData[0] ? recommendData[0].author.picUrl : ''" >
      </div>
      <!-- 介绍页右边代表作 -->
      <div class="recommend-right">
        <bookDetail :opus=opus></bookDetail>
      </div>
    </div>
  </div>
</template>

<script>
import bookDetail from './book-detail'
export default {
  name: 'Recommend',
  props: ['recommendData'],
  components: {
    bookDetail
  },
  computed: {
    opus() {
      // 去除第一个对象
      return this.recommendData[0] ? this.recommendData.slice(1) : []
    }
  }
}
</script>
<style lang="less" scoped>
.recommend-wrap {
  width: 100%;
  height: 618px;
  background-image: url('./imgs/横-磨砂-带背景.png');
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;

  .prompt-img {
    position: absolute;
    text-align: center;
    top: 25px;
    height: 101px;
    width: 100%;

    img {
      height: 101px;
    }
  }

  .recommend-main {
    max-width: 1175px;
    height: 100%;
    margin: 0 auto;
    padding-top: 146px;
    display: flex;
    justify-content: space-evenly;

    .recommend-left {
      width: 345px;
      height: 148px;
      padding-top: 120px;
      position: relative;
      font-size: 14px;

      p:first-child {
        color: #333;
        font-size: 24px;
        margin-bottom: 5px;
      }

      p:nth-of-type(2) {
        line-height: 22px;
      }

      a {
        position: absolute;
        right: 0;
        bottom: -90px;
      }
    }


    .recommend-right {
      width: 345px;
      height: 148px;
    }

    img {
      width: 290px;
      height: 405px;
    }
  }
}
</style>