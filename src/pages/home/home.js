import appHeaderComponent from '../../components/header/header.vue';
import fadingCircleCompontent from '../../components/fadingCircle/fadingCircle.vue';

export default {
  components: {
    appHeaderComponent, // 头部通用
    fadingCircleCompontent, // 圆形载入动画
  },
  data() {
    return {
      title: '首页',
      swiper: {},
      news: {},
      activated: false,
      inited: false,
    };
  },
};
