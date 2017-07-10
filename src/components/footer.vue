<template>
  <div class="container">
    <router-link tag="div" class="menu-item" :to="{name: 'home'}" exact>
      <i class="icon icon-home"></i>
      <div>首页</div>
    </router-link>
    <router-link tag="div" class="menu-item" :to="{name: 'gameCenter'}">
      <i class="icon icon-game"></i>
      <div>游戏</div>
    </router-link>
    <router-link tag="div" class="menu-item" :to="{name: 'personal'}">
      <i class="icon icon-mine"></i>
      <div>我的</div>
    </router-link>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.container {
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: border-box;
  width: 100%;
  max-width: 640px;
  border-top: solid #e5e5e5 1px;
  background-color: #fff;

  .menu-item {
    &.router-link-active {
      color: #00c1b3;
    }
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #888;
    box-sizing: border-box;
    height: 98px;
    padding-top: 17px;
    padding-bottom: 12px;
    i {
      font-size: 40px;
    }
    div {
      font-size: 20px;
    }
  }
}
</style>
