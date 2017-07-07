export default {
  props: {
    sTitle: {
      type: String,
      default: '',
    },
    sLinkText: {
      type: String,
      default: '',
    },
    oRouter: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    clickHandle() {
      // TODO 不知道这里是干什么
      // bus.$emit('click-action');
    },
  },
};
