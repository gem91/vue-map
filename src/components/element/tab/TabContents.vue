<template>
  <div class="tab_cont">
    <ul class="tab_cont_list">
      <li v-for="(data, idx) in tabContData" :key="idx">
        <a href="#" class="thumbs">
          <img :src="data.store.img" :alt="data.store.alt">
        </a>
        <div class="text_wrap">
          <h4 class="title">{{ idx + 1 }}_ {{ data.store.name }}</h4>
          <p class="address">{{ data.store.address }}</p>
          <div class="review">
            <span class="profile">
              <img :src="data.profile.img" :alt="`${data.profile.name} 프로필 사진`">
            </span>
            <div class="comment">
              <em class="name">{{ data.profile.name }}'s</em>
                {{ data.profile.comment }}
            </div>
          </div>
        </div>
        <button class="btn-more">{{data.store.name}} 더보기</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    tabContData: {
      type: Object,
      default: null
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './TabContents.scss';
</style>