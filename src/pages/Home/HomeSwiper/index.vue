<template>
  <div class="swiper-container" id="floor1Swiper" ref="mySwiper">
    <div class="prev-wrap">
      <div class="swiper-button-prev"></div>
    </div>
    <div class="next-wrap">
      <div class="swiper-button-next"></div>
    </div>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="swiperImg in swiperData" :key="swiperImg.id">
        <img :src="swiperImg.imgUrl">
      </div>
      <!-- <div class="swiper-slide" >
        <img src="./imgs/swp2.jpg">
      </div>
      <div class="swiper-slide" >
        <img src="./imgs/swp3.jpg">
      </div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "homeSwiper",
  props: ['swiperData'],
  mounted() {
    // 挂载时创建Swiper实例
    new Swiper(this.$refs.mySwiper, {
      loop: true,
      effect: 'fade',
      speed: 2000,
      autoplay: true,
      delay: 3000,
      disableOnInteraction: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 600px;
  position: relative;

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    flex: 1;
  }

  .swiper-button-prev {
    top: 30px;
    left: 50%;
    transform: translate(-50%) rotateZ(90deg);
    color: #666;
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }

  div.swiper-button-next {
    width: 200px;
    height: 50px;
    top: 95%;
    right: 50%;
    transform: translate(50%) rotateZ(90deg);
    color: #666;
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }
}

.prev-wrap {
  position: absolute;
  height: 300px;
  width: 900px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 22;

  &:hover .swiper-button-prev {
    opacity: 1;
  }
}

.next-wrap {
  position: absolute;
  height: 300px;
  width: 900px;
  right: 50%;
  top: 45%;
  transform: translateX(50%);
  z-index: 22;

  &:hover .swiper-button-next {
    opacity: 1;
  }
}
</style>>
