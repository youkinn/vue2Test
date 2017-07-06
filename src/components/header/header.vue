<template>
  <div class="container">
    <div class="left" @click.stop="goback">
      <i class="icon icon-arrow-left"></i>
      <span class="action-text">{{ sActiontext }}</span>
    </div>
    <div class="center">
      {{ sTitle }}
    </div>
    <div class="right">
      <slot name="one"></slot>
    </div>
  </div>
</template>
<script src="./header.js"></script>
<style lang="scss" scoped src="./header.scss"></style>
