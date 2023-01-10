<template>
  <div class="banner_wrap">
    <img :src="`${publicPath}images/${imgSrc}`">
    <div class="container">
      <h2>{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
   return {
      publicPath: process.env.BASE_URL
    }
  },

  props:{
    title: {
        type: String,
        default: '배너문구 고민 중'
      },
    imgSrc: {
      type: String,
      default: null
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './BannerWrap.scss';
</style>