<template>
  <div class="ranking-wrap">
    <!-- 上边框区域 -->
    <div class="ranking-top">
    </div>
    <div class="prompt-wrap">
      <img src="./imgs/prompt.png" alt="">
    </div>
    <!-- 书籍排行区域 -->
    <div class="ranking-main">
      <div class="ranking-main-top">
        <ul>
          <li @click="prevOrNext(-1)">
            <svg t="1677640642771" class="icon" viewBox="0 0 1024 1024" version="1.1"  xmlns="http://www.w3.org/2000/svg" p-id="3522" 
            width="40" height="40">
            <path d="M384 512L731.733333 202.666667c17.066667-14.933333 19.2-42.666667 4.266667-59.733334-14.933333-17.066667-42.666667-19.2-59.733333-4.266666l-384 341.333333c-10.666667 8.533333-14.933333 19.2-14.933334 32s4.266667 23.466667 14.933334 32l384 341.333333c8.533333 6.4 19.2 10.666667 27.733333 10.666667 12.8 0 23.466667-4.266667 32-14.933333 14.933333-17.066667 14.933333-44.8-4.266667-59.733334L384 512z" 
            fill="#999999" p-id="3523"></path></svg>
          </li>
          <li>
            <p>{{ mainBook.bookName }}</p>
            <p>{{ mainBook.author }} 著</p>
            <p>{{ mainBook.price }}￥</p>
          </li>
          <li>
            <img :src="mainBook.coverImgUrl" alt="">
          </li>
          <li>
            <p>{{ mainBook.introduction }}</p>
            <a href="index.html">查看更多 >></a>
          </li>
          <li @click="prevOrNext(1)">
            <svg t="1677640676661" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3820" 
            width="40" height="40"><path d="M731.733333 480l-384-341.333333c-17.066667-14.933333-44.8-14.933333-59.733333 4.266666-14.933333 17.066667-14.933333 44.8 4.266667 59.733334L640 512 292.266667 821.333333c-17.066667 14.933333-19.2 42.666667-4.266667 59.733334 8.533333 8.533333 19.2 14.933333 32 14.933333 10.666667 0 19.2-4.266667 27.733333-10.666667l384-341.333333c8.533333-8.533333 14.933333-19.2 14.933334-32s-4.266667-23.466667-14.933334-32z"
             fill="#999999" p-id="3821"></path></svg>
          </li>
        </ul>
      </div>
      <div class="ranking-main-footer">
        <Book :rankingData="rankingData"></Book>
      </div>
    </div>
  </div>
</template>

<script>
import Book from './Book'
export default {
  name: "Ranking",
  props: ['rankingData'],
  data() {
    return {
      bookIndex: 0,
      mainBook: {}
    }
  },
  components: {
    Book
  },
  watch: {
    rankingData() {
      this.mainBook = this.rankingData[this.bookIndex]
    },
    bookIndex(newIndex) {
      this.mainBook = this.rankingData[newIndex]
    },
  },
  methods: {
    // prev和next的+和-
    prevOrNext(num) {
      if (num == -1) this.bookIndex == 0 ? this.bookIndex = 4 : this.bookIndex--
      if (num == 1) this.bookIndex == 4 ? this.bookIndex = 0 : this.bookIndex++
      // 为触发本组件indexChanged方法，通知子组件传入ref数组
      this.$children[0].handleIndexChanged(this.bookIndex + 1)
    },
    indexChanged(newIndex, ref) {
      // 获取最新的坐标
      this.bookIndex = newIndex
      // 排他
      for (let k in ref) {
        ref[k][0].style = 'height:236px;width:180'
      }

      // 通过ref的id标识单独修改样式
      ref[this.bookIndex + 1][0].style = 'height:266px;width:auto'
    },
    initialize() {
      this.$children[0].handleIndexChanged(this.bookIndex + 1)
    }
  }
}
</script>
<style lang="less" scoped>
.ranking-wrap {
  width: 100%;
  height: 1048px;
  overflow: hidden;
  background-image: url('./imgs/rank-磨砂背景.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .ranking-top {
    width: 100%;
    height: 200px;
    background-image: url('./imgs/ranking.jpg');
    background-size: 100% 200px;
  }

  .prompt-wrap {
    position: absolute;
    text-align: center;
    top: 25px;
    height: 101px;
    width: 100%;

    img {
      height: 101px;
    }
  }

  .ranking-main {
    height: 848px;
    width: 1175px;
    margin: 0 auto;

    .ranking-main-top {
      height: 450px;

      img {
        height: 380px;
        width: 264px;
        box-shadow: 5px 5px 5px rgba(150, 150, 150, 0.4);
      }

      ul {
        display: flex;
        justify-content: space-around;
        height: 450px;

        li:nth-of-type(4) p {
          line-height: 22px;
        }

        li:first-child,
        li:last-child {
          height: 450px;
          line-height: 450px;
          text-align: center;
        }

        li:nth-of-type(2) {
          width: 330px;
          height: 270px;
          text-align: right;
          margin-right: 35px;
          margin-top: 155px;

          p:first-child {
            font-weight: bold;
            font-size: 20px;
          }

          p:nth-of-type(2) {
            margin: 5px 0 40px;
            font-size: 20px;
            color: #656661;
          }

          p:last-child {
            font-size: 20px;
          }
        }

        li:nth-of-type(3) {
          margin-top: -40px;
        }

        li:nth-of-type(4) {
          height: 250px;
          width: 310px;
          margin-left: 45px;
          margin-top: 145px;
          font-size: 14px;
          padding-right: 190px;
          position: relative;

          p {
            word-break: break-all;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow-y: hidden;
          }

          a {
            position: absolute;
            left: 200px;
            bottom: 65px;
            color: #9a9a98;
          }
        }
      }
    }

    .ranking-main-footer {
      height: 398px;
      width: 1175px;
    }
  }
}
</style>