<template>
  <div class="like-book-wrap">
    <div class="like-book" @click="toDetail(likeBook.id)" v-for="likeBook in likeBooks" :key="likeBook.id">
      <img :src="likeBook.coverImg">
      <p>{{ likeBook.bookName }}</p>
      <p>{{ likeBook.author }}</p>
      <p>{{ likeBook.price }}￥</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Like',
  props: ['likeBooks'],
  methods: {
    toDetail(id) {
      this.$router.push({
        name: 'detail',
        params: { id }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.like-book-wrap {
  display: flex;
  justify-content: space-around;

  .like-book {
    width: 20%;
    text-align: center;

    &:hover {
      cursor: pointer;
    }

    img {
      height: 235px;
      width: 180px;
    }

    p:first-of-type {
      font-size: 19px;
      font-weight: bold;
      margin: 8px 0;
    }

    p:nth-of-type(2) {
      font-size: 16px;
      color: #656663;
      margin-bottom: 8px;
    }

    p:last-of-type {
      font-size: 14px;
    }
  }
}
</style>