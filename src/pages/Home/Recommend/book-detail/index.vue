<template>
  <div class="book-detail-wrap">
    <div class="detail" @click="toDetail(opu.id)" v-for="opu in opus" :key="opu.id">
      <img :src="opu.coverImg" alt="">
      <p>{{ opu.bookName }}</p>
      <p>￥{{ opu.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'book-detail',
  props: ['opus'],
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
.book-detail-wrap {
  height: 405px;
  width: 100%;

  .detail {
    width: 135px;
    display: inline-block;
    margin: 10px;
    margin-top: 0;
    text-align: center;

    &:hover {
      cursor: pointer;
    }

    p {
      margin: 4px 0;
      font-size: 14px;
      color: #666764;
    }
  }

  img {
    height: 146px;
    width: 110px;
  }
}
</style>