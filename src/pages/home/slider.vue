<!--轮播图-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in arrSwiperList" :key="index">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
  props: {
    arrSwiperList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped></style>
