<!--首页：热门游戏-->
<template>
  <div class="container">
    <ul v-if="games.list && games.list.length > 0" class="list" v-cloak>
      <li class="item" v-for="(item, index) in games.list.slice(0,4)" :key="index">
        <div class="listImg">
          <img :src="item.imgUrl" alt="">
          <!--<img v-if="item.type == 1" class="h5Mark" src="/static/images/tao-you/home/h5.png" alt="">-->
        </div>
        <div class="name overflow-ellipsis">{{ item.gameName }}</div>
      </li>
    </ul>
    <ul v-if="games.list && games.list.length > 4" class="list" v-cloak>
      <li class="item" v-for="(item, index) in games.list.slice(4,8)" :key="index">
        <div class="listImg">
          <img :src="item.imgUrl" alt="">
          <!--<img v-if="item.type == 1" class="h5Mark" src="/static/images/tao-you/home/h5.png" alt="">-->
        </div>
        <div class="name overflow-ellipsis">{{ item.gameName }}</div>
      </li>
    </ul>
  </div>
</template>
<script src="./hotGame.js"></script>
<style lang="scss" scoped src="./hotGame.scss"></style>
