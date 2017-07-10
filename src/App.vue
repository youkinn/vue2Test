<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.isKeepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.isKeepAlive"></router-view>
  </div>
</template>

<script>
import '../static/css/common.css';
import '../static/icons/style.css';

import flexbox from './util/flexbox';

// 定义页面rem的font-size
flexbox();
window.onresize = flexbox;

export default {
  name: 'app',
};
</script>
<style lang="scss">
#app {
  min-height: 100vh;
  max-width: 640px;
  min-width: 640px;
  margin: auto;
}
</style>

