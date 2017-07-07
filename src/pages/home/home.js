import appHeaderComponent from '../../components/header/header.vue';
import fadingCircleCompontent from '../../components/fadingCircle/fadingCircle.vue';
import appFooterComponent from '../../components/footer/footer.vue';
import backToTopComponent from '../../components/toTopBtn/toTopBtn.vue';

export default {
  components: {
    appHeaderComponent, // 头部通用
    fadingCircleCompontent, // 圆形载入动画
    appFooterComponent, // 底部导航条
    backToTopComponent, // 返回顶部的按钮
  },
  data() {
    return {
      title: '首页',
      swiper: {},
      news: {},
      activated: false,
      inited: true,
    };
  },
};
