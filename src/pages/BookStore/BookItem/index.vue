<template>
  <div class="bookitem-wrap">
    <div class="bookitem-wrap-item" >
      <div @click="toDetail">
        <img :src="book.coverImg" alt="">
        <p>{{ book.bookName }}</p>
        <p>{{ book.briefly }}</p>
        <p>{{ book.author }}</p>
      </div>
      <div class="btns">
        <button class="btn">加入购物车</button>
        <button class="btn">购买</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: ['book'],
  methods: {
    toDetail() {
      this.$router.push({
        name: 'detail',
        // 携带书的id 访问书的详情页
        params: { id: this.book.id }
      })
    }
  },
}
</script>
<style lang="less" scoped>
.bookitem-wrap {
  width: 270px;
  height: 370px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 8px 4px rgba(150, 150, 150, 0.2);
  }

  &:hover div.btns {
    opacity: 1;
  }

  // 1 2 3 (4) 将4排除
  &:not(:nth-child(4n)) {
    margin-right: 30.9px;
  }

  .bookitem-wrap-item {
    position: relative;
    height: 370px;
    text-align: center;

    &:hover {
      cursor: pointer;
    }

    &:hover img {
      width: 145px;
      height: 195px;
      margin: 15px;
    }

    p:nth-of-type(1) {
      font-weight: bold;
      font-size: 18px;
    }

    p:nth-of-type(2) {
      font-size: 11px;
      color: #5e5f60;
      margin: 8px 0 8px;
      padding: 0 20px;
    }

    .btns {
      position: absolute;
      margin-left: 15px;
      bottom: 10px;
      background-color: transparent;
      transition: all 0.2s ease-in-out;
      opacity: 0;

      button {
        border: none;
        width: 120px;
        line-height: 35px;
        font-size: 12px;

        &:hover {
          opacity: 1;
          cursor: pointer;
          background-color: #f7b800;
          color: white;
        }
      }
    }

    img {
      height: 185px;
      width: 135px;
      margin: 25px;
      margin-bottom: 15px;
      transition: all 0.3s ease-in-out;
    }
  }

}
</style>