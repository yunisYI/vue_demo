<template>
  <div class="success">
    <p>
      <svg t="1679404243965" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4491" width="38" height="38"><path d="M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384m0-832C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64" fill="#f9b600" p-id="4492"></path><path d="M432 618.752l-121.376-121.376-45.248 45.248 166.624 166.624 326.624-326.624-45.248-45.248z" fill="#f9b600" p-id="4493"></path></svg>
      成功加入购物车！
    </p>
    <div class="bookInfo-wrap">
      <div class="bookInfo-left">
        <img :src="bookInfo.coverImg">
        <div>
          <p>{{ bookInfo.bookName }} - {{ bookInfo.author }}</p>
          <p>数量：1</p>
        </div>
      </div>
      <div class="bookInfo-right">
        <button @click="toDetail(bookInfo.id)">查看商品详情</button>
        <button @click="toShopCart">去购物车结算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'successaddtocart',
  data() {
    return {
      bookInfo: []
    }
  },
  mounted() {
    // 使用传递的id 获取书籍信息
    this.$store.dispatch('getBookInfoById', this.$route.query.bookId).then(res => {
      this.bookInfo = res[0]
    }).catch(err => {
      alert(err)
    })
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        name: 'detail',
        params: { id }
      })
    },
    toShopCart() {
      this.$router.push({
        name: 'shopcart'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.success {
  height: 200px;
  width: 1175px;
  margin: 0 auto;

  p {
    font-size: 20px;
    color: #4c4c4a;

    svg {
      position: relative;
      top: 15px;
    }
  }

  .bookInfo-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .bookInfo-left {
      display: flex;
      align-items: center;

      img {
        height: 120px;
        margin: 20px 40px 0 5px;
        filter: drop-shadow(0px 0px 5px rgba(150, 150, 150, 0.8));
      }

      div p {
        font-size: 16px;
        color: black;

        &:last-of-type {
          margin-top: 10px;
          color: #8f8f8f;
        }
      }
    }

    .bookInfo-right {
      button {
        border: 1px solid #e1e1e1;
        background-color: #f3f3f3;
        font-size: 16px;
        color: #3f3f3f;
        height: 45px;
        width: 150px;

        &:hover {
          background-color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>