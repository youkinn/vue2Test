<!--区域头部-->
<template>
  <div class="header">
    <div class="title">{{ sTitle }}</div>
    <router-link :to="oRouter" v-if="oRouter">
      <div class="linkText" @click="clickHandle">
        {{ sLinkText }} <i class="icon icon-arrow-right"></i>
      </div>
    </router-link>
  </div>
</template>

<script src="./header.js"></script>
<style lang="scss" scoped src="./header.scss"></style>
