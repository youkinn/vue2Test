<template>
  <div class="container" v-if="inited">
    <app-header-component s-title="首页"></app-header-component>
    <div class="hotGame section">
      <header-component s-title="热门游戏" s-link-text="进入游戏中心" :o-router="{name: 'personal'}"></header-component>
      <!--<div class="swiper-contanier">-->
      <div class="swiper-contanier">
        <!--<slider-component :arr-swiper-list="this.swiperList"></slider-component>-->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(v,i) in swiperList" :key="i">
            <img :src="v.imgUrl" alt="">
          </mt-swipe-item>
        </mt-swipe>
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

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue';
import appHeaderComponent from '../../components/header';
import fadingCircleCompontent from '../../components/fadingCircle';
import appFooterComponent from '../../components/footer';
import backToTopComponent from '../../components/toTopBtn';
import headerComponent from './header';
import sliderComponent from './slider';
import hotGameComponent from './hotGame';
import { getSwiperList } from '../../http/home';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  components: {
    appHeaderComponent, // 头部通用
    fadingCircleCompontent, // 圆形载入动画
    appFooterComponent, // 底部导航条
    backToTopComponent, // 返回顶部的按钮
    headerComponent, // 小模块标题
    sliderComponent, // 轮播模块
    hotGameComponent, // 热门游戏
  },
  data() {
    return {
      title: '首页',
      swiperList: [],
      news: {},
      activated: false,
      inited: true,
    };
  },
  methods: {
    fetchData() {
      const promises = [this.getSwiperList, this.getNewsList].map(fn => fn());
      Promise.all(promises).then(() => {
        this.inited = true;
      });
    },
    getSwiperList() {
      getSwiperList(1)
        .then((res) => {
          const data = res.data;
          if (Number(data.code) === 10000) {
            this.swiperList = res.data.result;
          }
        })
        .catch(error => error);
      // this.swiper = new LoadData(Vue.ClientUrl.getSwiperList, {
      //   type: 4,
      //   limit: 8,
      //   nologin: 1,
      // });
      // return this.swiper.getList(this, () => {
      //   setTimeout(() => {
      //     new Swiper('.swiper-container', {
      //       direction: 'horizontal',
      //       loop: true,
      //       pagination: '.swiper-pagination',
      //       autoplay: 3500,
      //     });
      //   }, 100);
      // });
    },
    getNewsList() {
      // this.news = new LoadData(Vue.ClientUrl.getNewsList, {
      //   limit: 200,
      //   nologin: 1,
      // });
      // return this.news.getList();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style lang="scss" scoped>
.action-button {
  background-color: yellow;
}

.container {
  .section {
    background-color: #fff;
    &:not(:first-child) {
      border-top: solid #e5e5e5 1px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
      border-bottom: solid #e5e5e5 1px;
    }
  }
  .swiper-contanier {
    height: 280px;
    overflow: hidden;
    padding-left: 30px;
    padding-right: 30px;
  }
  .hotGame.section {
    overflow: hidden;
    border-top: none;
    .hr {
      width: 610px;
      height: 1px;
      line-height: 1px;
      border-top: solid #e5e5e5 1px;
      margin-left: 30px;
      color: #e5e5e5;
    }
  }
  .section.hotNews {
    margin-bottom: 99px;
    border-bottom: none;
  }
}
</style>
