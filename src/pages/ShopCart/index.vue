<template>
  <div class="shopcart-wrap">
    <p class="title">全部商品</p>
    <div class="shopcart-top">
      <p>全部</p>
      <p>商品</p>
      <p>单元（元）</p>
      <p>数量</p>
      <p>小计（元）</p>
      <p>操作</p>
    </div>
    <div class="shopcart-item" v-for="shopCartItem in shopCartInfo" :key="shopCartItem.bookId">
      <!-- checkbox发生变化  携带最终状态传递event事件  使用target.checked来获取状态  -->
      <input class="checkbox" type="checkbox" :checked="shopCartItem.isChecked == 0" @change="updateBookStatus($event, shopCartItem.bookId)">
      <div class="shopcart-good">
        <img :src="shopCartItem.coverImg">
        <div class="shopcart-good-name">
          <p>{{ shopCartItem.bookName }}</p>
          <p>{{ shopCartItem.author }}</p>
        </div>
      </div>
      <p class="price">{{ shopCartItem.price }}</p>
      <div class="addorreduce">
        <a @click="handler('main', -1, shopCartItem)">-</a>
        <input @change="handler('change', $event.target.value, shopCartItem)" type="number" v-model="shopCartItem.quantity">
        <a @click="handler('plus', 1, shopCartItem)">+</a>
      </div>
      <!-- 小数点后两位 -->
      <p class="subtotal">{{ (shopCartItem.quantity * shopCartItem.price).toFixed(2) }}</p>
      <div class="good-eidt">
        <a @click="deleteBook(shopCartItem.bookId)">删除</a>
        <a>移到收藏</a>
      </div>
    </div>
    <div class="shopcart-bottom">
      <div class="shopcart-bottom-left">
        <input type="checkbox" @click="updateShopCartItemStatus" :checked="isCheckedAll && shopCartInfo.length > 0">全选
        <a @click="deleteAllBooks">删除选中的商品</a>
        <a>移到我的关注</a>
      </div>
      <div class="shopcart-bottom-right">
        <p>已选中{{ bookCount }}件商品</p>
        <p>总价（不含运费）：<span>{{ totalPrice }}</span></p>
        <p @click="$router.push({ name: 'settlement' })">结算</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
  data() {
    return {
      shopCartInfo: [],
    }
  },
  mounted() {
    this.getShopCartList()
  },
  computed: {
    // 计算出全选checkbox的状态
    isCheckedAll() {
      return this.shopCartInfo.every(item => {
        return item.isChecked == 0
      })
    },
    // 计算出勾选的数量
    bookCount() {
      let sum = 0
      this.shopCartInfo.forEach(item => {
        item.isChecked == 0 && sum++
      })
      return sum
    },
    // 计算所有勾选商品的价格总和
    totalPrice() {
      let sum = 0
      this.shopCartInfo.forEach(item => {
        if (item.isChecked == 0) {
          sum += item.quantity * item.price
        }
      })
      return sum
    },
  },
  methods: {
    // 删除全部商品
    deleteAllBooks() {
      if (!confirm("是否删除选中商品?")) return
      let { usernumber } = this.$store.state.user.userInfo
      this.$store.dispatch('deleteAllBooks', { usernumber }).then(() => {
        this.getShopCartList()
      }).catch(err => {
        alert(err)
      })
    },
    // 删除选中商品
    deleteBook(bookId) {
      if (!confirm("是否删除当前商品?")) return
      let { usernumber } = this.$store.state.user.userInfo
      this.$store.dispatch('deleteBookById', { usernumber, bookId }).then(() => {
        this.getShopCartList()
      }).catch(err => {
        alert(err)
      })
    },
    // 获取购物车信息
    getShopCartList() {
      let { usernumber } = this.$store.state.user.userInfo
      this.$store.dispatch('getShopCartListData', { usernumber }).then(res => {
        this.shopCartInfo = res
      }).catch(err => {
        console.log(err)
      })
    },
    // 修改商品勾选状态
    updateBookStatus(event, bookId,) {
      let isChecked = event.target.checked ? '0' : '1'
      // 修改服务器上对应的商品的状态
      this.$store.dispatch('updateShopCartItemStatus', { bookId, isChecked }).then(() => {
        // 修改后重新获取数据
        this.getShopCartList()
      }).catch(err => {
        alert(err)
      })
    },
    // 通过全选checkbox修改全部商品的状态
    updateShopCartItemStatus(event) {
      let { usernumber } = this.$store.state.user.userInfo
      let isChecked = event.target.checked ? '0' : '1'
      this.$store.dispatch('updateShopCartItemStatus', { usernumber, isChecked }).then(() => {
        // 修改后重新获取数据
        this.getShopCartList()
      }).catch(err => {
        alert(err)
      })
    },
    // 修改商品数量
    handler(type, num, book) {
      let { usernumber } = this.$store.state.user.userInfo
      let { bookId, quantity } = book
      let count = quantity
      if (type == 'change') {
        // change事件
        if (isNaN(num) || num < 1) {
          count = 1
        } else {
          count = parseInt(num)
        }
      }
      if (type == 'main') {
        // 减少
        if (count > 1) {
          count--
        } else {
          count = 0
        }
      }
      if (type == 'plus') {
        count++
      }
      this.$store.dispatch('updateBookQuantity', { usernumber, bookId, count }).then(() => {
        this.getShopCartList()
      }).catch(err => {
        alert(err)
      })
    },

  }
}
</script>
<style lang="less" scoped>
.shopcart-wrap {
  max-width: 1175px;
  margin: 0 auto;

  .title {
    font-size: 15px;
    font-weight: bold;
    margin: 10px 0;
  }

  .shopcart-top {
    display: flex;
    padding: 10px;
    font-size: 12px;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    background-color: #f5f5f5;
    margin-bottom: 10px;

    p:nth-of-type(1) {
      width: 25%;
    }

    p:nth-of-type(2) {
      width: 25%;
    }

    p:nth-of-type(3) {
      width: 12.5%;
    }

    p:nth-of-type(4) {
      width: 12.5%;
    }

    p:nth-of-type(5) {
      width: 12.5%;
    }
  }

  .shopcart-item {
    padding: 10px;
    height: 110px;
    margin-bottom: 5px;
    line-height: 88px;
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border: 1px solid #dddddd;

    .checkbox {
      margin-right: 16%;
    }

    .shopcart-good {
      display: flex;
      align-items: center;
      line-height: 15px;
      width: 34%;


      img {
        width: 70px;
        margin: 0 20px;
      }

      .shopcart-good-name {
        p:nth-of-type(1) {
          margin-bottom: 5px;
          font-size: 15px;
        }

        p:nth-last-of-type(1) {
          font-size: 14px;
          color: #a3a3a3;
        }


      }
    }

    .price {
      width: 9.5%;
    }

    .subtotal {
      width: 12%;
    }

    .addorreduce {
      width: 14%;

      input {
        width: 30px;
        height: 19px;
        height: 23px;
        text-align: center;
        line-height: 19px;
        border: 1px solid #ddd;
      }

      a {
        display: inline-block;
        border: 1px solid black;
        width: 20px;
        height: 23px;
        text-align: center;
        line-height: 19px;
        border: 1px solid #ddd;
        color: rgb(197, 197, 197);

        &:active {
          color: black;
        }
      }
    }

    .good-eidt {
      display: flex;
      flex-direction: column;
      line-height: 0px;
      align-items: center;
      justify-content: space-evenly;

      a {
        color: #646464;
        font-size: 12px;
      }
    }
  }

  .shopcart-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    height: 50px;
    line-height: 55px;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-bottom: none;

    .shopcart-bottom-left {
      input {
        position: relative;
        top: 1px;
      }

      a {
        margin: 0 10px;
      }
    }

    .shopcart-bottom-right {
      display: flex;
      justify-content: space-around;

      p {
        margin: 0 15px;
      }

      p:nth-of-type(2) {
        span {
          color: #f1b600;
        }
      }

      p:nth-last-child(1) {
        margin: 0;
        display: inline-block;
        height: 50px;
        width: 90px;
        background-color: #f1b600;
        text-align: center;
        font-size: 17px;
        color: #fff;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>