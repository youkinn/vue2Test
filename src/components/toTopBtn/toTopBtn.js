import { device } from '../../util/mall';

const isWindows = device().isWindows;// 浏览器是否为windows系统
export default {
  props: {
    nDistance: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.controlDisplay);
  },
  deactivated() {
    window.removeEventListener('scroll', this.controlDisplay);
  },
  methods: {
    controlDisplay() {
      this.show = !!(!isWindows && document.body.scrollTop > 200);
    },
    goToTop() {
      window.scrollTo(0, 0);
    },
  },
};
