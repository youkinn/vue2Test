<!--区域头部-->
<template>
  <div class="header">
    <div class="title">{{ sTitle }}</div>
    <router-link :to="oRouter" v-if="oRouter">
      <div class="linkText" @click="clickHandle">
        {{ sLinkText }}
        <i class="icon icon-arrow-right"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
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
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 86px;
  line-height: 86px;
  border: none;
  padding-left: 30px;
  padding-right: 30px;
  .title {
    font-size: 32px;
    color: #333;
    text-align: left;
  }
  .linkText {
    display: flex;
    align-items: center;
    margin-right: -4px;
    font-size: 26px;
    color: #a5a5a5;
    i {
      margin-left: 5px;
    }
  }
}
</style>
