<template>
  <div class="book-wrap">
    <div class="book" @click="handleIndexChanged(rankingBook.id)" v-for="rankingBook in rankingData" :key="rankingBook.id">
      <img :ref="rankingBook.id"  :src="rankingBook.coverImgUrl">
      <p>{{ rankingBook.bookName }}</p>
      <p>{{ rankingBook.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: ['rankingData'],
  // 在更新节点后 调用父类参数
  updated() {
    this.$parent.initialize()
  },
  methods: {
    // 点击书籍 修改父类mainBook的坐标
    handleIndexChanged(id) {
      this.$parent.indexChanged(--id, this.$refs)
      // this.$refs[id][0].style = 'height:266px;width:auto'
    },

  }
}
</script>
<style lang="less" scoped>
.book-wrap {
  margin: 0 auto;
  width: 1175px;
  display: flex;
  justify-content: space-around;
  text-align: center;

  .book {
    p {
      text-align: center;
    }

    p:nth-of-type(1) {
      margin: 15px 0 5px;
      font-size: 20px;
      font-weight: bold;
    }
  }

  img {
    height: 236px;
    width: 180px;
    box-shadow: 5px 5px 8px rgba(150, 150, 150, 0.4);
  }
}
</style>