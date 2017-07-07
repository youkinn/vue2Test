import appHeaderComponent from '../../components/header/header.vue';
import fadingCircleCompontent from '../../components/fadingCircle/fadingCircle.vue';
import appFooterComponent from '../../components/footer/footer.vue';
import backToTopComponent from '../../components/toTopBtn/toTopBtn.vue';
import headerComponent from './header.vue';
import sliderComponent from './slider.vue';
import hotGameComponent from './hotGame.vue';
import { getSwiperList } from '../../http/home';

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
