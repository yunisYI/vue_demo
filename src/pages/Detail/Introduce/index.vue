<template>
  <div class="introduce-wrap">
    <!-- 详情页中间导航栏 -->
    <div class="detail-middle-nav-wrap">
      <div class="detail-middle-nav">
        <p>
          <a href="javascript:;">商品介绍</a>
          <a href="javascript:;">产品参数</a>
          <a href="javascript:;">商品评论</a>
        </p>
      </div>
    </div>
    <!-- 详情页主页面 -->
    <div class="detail-main-wrap">
      <div class="detail-main">
        <div class="detail-main-top">
          <p>{{ bookDetailInfo.author }} 著</p>
          <p>{{ bookDetailInfo.authorFullName }}</p>
        </div>
        <div class="detail-main-body">
          <div class="detail-main-body-left">
            <img :src="bookDetailInfo.coverImg" alt="">
          </div>
          <div class="detail-main-body-right">
            <p v-for="(field, index) in bookDetailField" :key="index">
              {{ field }}
            </p>
          </div>
        </div>
        <!-- 书籍详情页 -->
        <div class="detail-main-footer">
          <div class="detail-main-footer-img">
            <img src="./imgs/detail-bg.jpg" alt="">
          </div>
          <div class="detail-main-footer-wrap">
            <!-- 作者简介 -->
            <div class="detail-main-footer-left">
              <div class="zuozhe">
                <img :src="bookDetailInfo.authorImg" alt="">
              </div>
              <p>{{ bookDetailInfo.author }}</p>
              <p>( {{ bookDetailInfo.authorFullName }} )</p>
              <p>{{ bookDetailInfo.authorIntroduce }}</p>
            </div>
            <!-- 书籍简介 -->
            <div class="detail-main-footer-right">
              <div class="yanyuan">
                <img src="./imgs/detail-yanyuan.jpg" alt="">
              </div>
              <p>徐富贵</p>
              <p>在大时代背景下，随着内战、三反五反、大跃进、“文化大革命”等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-like">
      <p>猜你喜欢</p>
      <Like :likeBooks="likeBooks"></Like>
    </div>
  </div>  
</template>

<script>
import Like from './Like'
export default {
  name: 'Introduce',
  components: { Like },
  data() {
    return {
      bookDetailField: [],
      likeBooks: []
    }
  },
  props: ['bookDetailInfo'],
  watch: {
    bookDetailInfo() {
      this.$nextTick(() => {
        this.bookDetailField = this.bookDetailInfo.field.split('|')
      })
    }
  },
  mounted() {
    // 获取猜你喜欢的数据
    this.$store.dispatch('getLikeBooksData').then(res => {
      this.likeBooks = res
    }).catch(err => {
      alert(err)
    })
  }
}
</script>
<style lang="less" scoped>
.introduce-wrap {
  height: 1770px;
  width: 100%;

  .detail-middle-nav-wrap {
    width: 100%;
    height: 45px;
    background-color: #454545;

    .detail-middle-nav {
      width: 1175px;
      margin: 0 auto;
    }

    p {
      height: 45px;
      line-height: 45px;
    }

    p a {
      color: #fefefe;
      font-size: 17px;
      padding: 10px 17px;

      &:first-child {
        border-bottom: 2px solid #fefefe;
      }
    }

  }

  .detail-main-wrap {
    height: 1206px;
    width: 100%;

    .detail-main {
      width: 1175px;
      margin: 0 auto;

      .detail-main-top {
        width: 1055px;
        padding: 0 60px;
        height: 120px;
        color: #4f504e;
        font-size: 20px;
        overflow: hidden;

        p:first-of-type {
          margin-top: 30px;
          font-weight: 600;
        }

        p:nth-of-type(2) {
          margin: 10px 0 0 12px;
          font-weight: 300;
        }
      }

      .detail-main-body {
        width: 1175px;
        // padding: 0 70px;
        height: 480px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .detail-main-body-left {
          img {
            height: 450px;
            width: auto;
          }
        }

        .detail-main-body-right {
          padding-top: 27px;
          border-top: 2px solid #c5c4bc;
          border-bottom: 2px solid #c5c4bc;
          height: 183px;
          width: 525px;
          font-size: 15px;
          font-weight: 400;

          p {
            margin-bottom: 25px;
            text-align: center;
          }

          p:last-of-type {
            padding-bottom: 34px;
            border-bottom: 2px solid #8b8b86;
          }
        }
      }

      .detail-main-footer {
        height: 588px;
        width: 100%;
        overflow: hidden;

        .detail-main-footer-img {
          margin-top: 45px;
          width: 100%;

          img {
            width: 100%;
            height: 100px;
          }
        }

        .detail-main-footer-wrap {
          margin-top: -125px;
          display: flex;
          margin-left: 40px;
          overflow: hidden;

          .detail-main-footer-left,
          .detail-main-footer-right {
            width: 510px;

            p {
              margin-left: 10px;
            }

            p:first-of-type {
              font-size: 22px;
              font-weight: 500;
              margin: 18px 0 18px 8px;
            }
          }

          .detail-main-footer-left {
            p:nth-of-type(2) {
              font-weight: 500;
              margin-bottom: 8px;
            }

            p:last-of-type {
              font-size: 15px;
              line-height: 28px;
            }
          }

          .detail-main-footer-right {
            margin-left: 35px;

            p:last-of-type {
              font-size: 15px;
              line-height: 28px;
            }
          }

          .zuozhe,
          .yanyuan {
            height: auto;
            width: auto;

            img {
              height: auto;
              width: 223.5px;
              border: 6px solid #fff;
              box-shadow: 2px 2px 2px rgba(150, 150, 150, 0.3);
            }
          }
        }
      }
    }
  }

  .detail-like {
    width: 1175px;
    margin: 0 auto;
    overflow: hidden;

    p {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #2f2308;
      margin-bottom: 60px;
    }
  }
}
</style>