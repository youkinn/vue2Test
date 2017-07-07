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
      this.show = !!(!mallUtils.device.isWindows && document.body.scrollTop > 200);
    },
    goToTop() {
      window.scrollTo(0, 0);
    },
  },
};
