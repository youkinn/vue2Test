import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';

Vue.use(Router);

/* eslint-disable global-require*/
export default new Router({
  mode: 'history', // history模式
  // 参考 https://segmentfault.com/q/1010000008343428
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition || typeof savedPosition === 'undefined') {
      // 从第二页返回首页时savePosition为undefined
      // 只处理设置了路由元信息的组件
      /* eslint-disable no-param-reassign*/
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : false;
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : true;
      if (savedPosition) {
        return savedPosition;
      }
    } else {
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : true;
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : false;
    }
    return null;
  },
  routes: [
    {
      name: 'home', // 首页
      path: '/',
      component(resolve) {
        require.ensure(
          [],
          () => {
            resolve(require('../pages/home/home.vue'));
          },
          'home',
        );
      },
      meta: { isKeepAlive: true },
    },
  ],
});
