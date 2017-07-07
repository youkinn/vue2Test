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
<script src="./footer.js"></script>
<style lang="scss" scoped src="./footer.scss"></style>
