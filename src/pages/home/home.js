import appHeaderComponent from '../../components/header/header.vue';

export default {
  components: {
    appHeaderComponent,
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
