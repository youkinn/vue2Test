<template>
  <div class="action-button" v-show="show" @click.stop.prevent="goToTop" :style="{'bottom': nDistance + 'px'}">
    <i class="icon icon-top"></i>
  </div>
</template>
<script>
import { device } from '../util/mall';

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
</script>
<style lang="scss" scoped>
.action-button {
  position: fixed;
  right: 30px;
  bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  opacity: 0.4;
  color: #fff;
  background-color: #000;
  i {
    font-size: 40px;
  }
}
</style>
