<template>
  <div class="container" v-if="inited">
    <app-header-component s-title="首页"></app-header-component>
    <div class="hotGame section">
      <header-component s-title="热门游戏" s-link-text="进入游戏中心" :o-router="{name: 'personal'}"></header-component>
      <div class="swiper-contanier">
        <slider-component :arr-swiper-list="this.swiperList"></slider-component>
      </div>
      <div class="hr"></div>
      <hot-game-component></hot-game-component>
    </div>
    <!--<div class="hotNews section">
      <div class="hotNewsContainer">
        <hot-news-component :o-news="news"></hot-news-component>
      </div>
    </div>-->
    <back-to-top-component></back-to-top-component>
    <app-footer-component></app-footer-component>
  </div>
  <fading-circle-compontent v-else></fading-circle-compontent>
</template>
<script src="./home.js"></script>
<style lang="scss" scoped scr="./home.scss"></style>
