<template>
  <div class="detail-wrap">
    <div class="detail">
      <div class="detail-left">
        <img :src="bookDetailInfo.coverImg" alt="">
        <img :src="bookDetailInfo.coverImg" alt="">
        <img src="./imgs/bookdetail2.png" alt="">
        <img src="./imgs/bookdetail3.jpg" alt="">
      </div>
      <div class="detail-right">
        <p>{{ bookDetailInfo.bookName }}</p>
        <p>{{ bookDetailInfo.author }}&nbsp;著&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出版社：{{ bookDetailInfo.publishingSociety }}</p>
        <p>大众评分：⭐⭐⭐⭐⭐</p>
        <p>{{ bookDetailInfo.briefly }}
        </p>
        <p>{{ bookDetailInfo.price }}￥</p>
        <button @click="addToCart(bookDetailInfo.id)">加入购物车</button>
        <button>立即购买</button>
        <div>
          <a href=""><svg t="1677837807180" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3298" width="32" height="32"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" fill="#696969" p-id="3299"></path></svg>
            加入收藏</a>
          <a href=""><svg t="1677837760549" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2856" width="32" height="32"><path d="M853.333333 533.333333a32 32 0 0 1 64 0v266.666667c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V256c0-64.8 52.533333-117.333333 117.333333-117.333333h277.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v544a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V533.333333z m-42.058666-277.333333l-89.792-95.402667a32 32 0 0 1 46.613333-43.861333l140.544 149.333333C927.861333 286.485333 913.376 320 885.333333 320H724.704C643.029333 320 576 391.210667 576 480v192a32 32 0 1 1-64 0V480c0-123.296 94.784-224 212.704-224h86.570667z" fill="#696969" p-id="2857"></path></svg>
            分享</a>
        </div>
      </div>
    </div>
    <Introduce :bookDetailInfo="bookDetailInfo"></Introduce>
  </div>
</template>

<script>
import Introduce from './Introduce'
export default {
  name: 'Detail',
  data() {
    return {
      bookDetailInfo: {}
    }
  },
  components: {
    Introduce
  },
  mounted() {
    // 如果有id 获取详情页数据
    if (this.$route.params.id) {
      this.getDetailBookInfo()
    }
  },
  watch: {
    // 监听路由 解决同页面下不刷新的问题
    $route() {
      if (this.$route.params.id) {
        this.getDetailBookInfo()
      }
    }
  },

  methods: {
    // 获取详情页数据
    getDetailBookInfo() {
      this.$store.dispatch('getDetailBookInfoData', this.$route.params.id).then(res => {
        this.bookDetailInfo = res
      }).catch(err => {
        alert(err.msg)
      })
    },
    // 添加到购物车的回调
    addToCart(bookId) {
      // 获取账号
      let { usernumber } = this.$store.state.user.userInfo
      this.$store.dispatch('addToCart', { usernumber, bookId, quantity: 1 }).then(() => {
        this.$router.push({
          name: 'successaddtocart',
          query: { bookId }
        })
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.detail-wrap {
  width: 100%;
  height: 2376px;
  // background-image: url('./imgs/bgi3.jpg');
  background: url('./imgs/bookstore-bg.jpg.png');
  overflow: hidden;

  .detail {
    width: 800px;
    height: 522px;
    margin: 0 auto;
    margin-top: 84px;
    display: flex;

    .detail-left {
      width: 280px;
      height: 429px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-left: 90px;

      img {
        width: 76px;
        height: 76px;
      }

      img:nth-of-type(1) {
        height: 310px;
        width: auto;
        filter: drop-shadow(0px 0px 20px rgba(150, 150, 150, 0.8));
      }

      img:nth-of-type(2) {
        border: 1px solid black;
      }
    }

    .detail-right {
      width: 350px;
      height: 522px;
      margin-top: 64px;
      margin-left: 80px;
      font-size: 14px;
      color: #656565;

      p {
        margin: 10px 0;
      }

      p:nth-of-type(1) {
        margin: 0;
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #333432;
      }

      p:nth-last-of-type(1) {
        font-size: 20px;
        color: #f7b700;
        margin: 15px 0;
      }

      button {
        background-color: #f7b700;
        border: none;
        height: 35px;
        width: 124px;
        border-radius: 5px;
        color: white;
        font-size: 14px;
        margin-right: 20px;
        margin-bottom: 15px;
      }

      a {
        font-size: 14px;
        color: #696969;
        margin-right: 40px;

        svg {
          position: relative;
          top: 7px;
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>