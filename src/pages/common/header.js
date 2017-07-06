export default {
  props: {
    sActiontext: {
      type: String,
      default: '返回',
    },
    sTitle: {
      type: String,
      default: '',
    },
    oRouter: {
      type: Object,
      default: null,
    },
    bHasAction: {
      type: Boolean,
      default: false,
    },
  },
};
