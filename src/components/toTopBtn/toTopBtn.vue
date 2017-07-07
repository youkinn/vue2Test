<template>
  <div class="action-button" v-show="show" @click.stop.prevent="goToTop" :style="{'bottom': nDistance + 'px'}">
    <i class="icon icon-top"></i>
  </div>
</template>
<script src="./toTopBtn.js"></script>
<style lang="scss" scoped src="./toTopBtn.scss"></style>
