<template>
  <BannerWrap
    :title="'오늘도 돼지런하게 아점저를 골라보자'"
    :imgSrc="'banner-bg01.jpg'">
    <SearchWrap />
  </BannerWrap>
  <BannerWrap
    :title="'오늘의 BEST 5, 점심 맛집'"
    :imgSrc="'banner-bg02.jpg'">
    <button class="btn_more">더보기</button>
  </BannerWrap>

  <div class="contents">
    <div class="container">
      <TabLists />
    </div>
  </div>

</template>

<script>
import SearchWrap from '@/components/element/search/SearchWrap.vue';
import TabLists from '@/components/element/tab/TabLists.vue';
import BannerWrap from '@/components/element/banner/BannerWrap.vue';

export default {
    components: { SearchWrap, TabLists, BannerWrap },
    data() {
    return {
      }
    }
}
</script>

<style lang="scss" scoped>
  @import './FoodMapView.scss';
</style>