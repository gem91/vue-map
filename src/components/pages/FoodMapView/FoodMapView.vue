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
      <TabLists :tabMenu="tabMenu" :storeData="storeData" />
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
      tabMenu: [
        {
          tabNum: 0,
          name: "tab 1",
          href: "#tab1",
          isActive: true,
        },
        {
          tabNum: 1,
          name: "tab 2",
          href: "#tab2",
          isActive: false,
        },
        {
          tabNum: 2,
          name: "tab 3",
          href: "#tab3",
          isActive: false,
        },
      ],
      storeData: [
        {
          store: {
            name: "비비비당",
            address: "부산광역시 해운대구 달맞이길 239-16",
            img: "https://mp-seoul-image-production-s3.mangoplate.com/1560229_1638628790884711.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
            alt: "비비비당 사진"
          },
          profile: {
            name: "혜자",
            comment: "기대 별로 안했지만, 평점 높은 이유가 있었다! 경치도 좋고 분위기도 고급진 한정식집 느낌이였다! 카페느낌보단 레스토랑 느낌 메뉴도 코스도 있고",
            img: "https://k.kakaocdn.net/dn/kJpNj/btqzPx3LOZ4/r0349yc3v2z1KpYcZr7Bxk/img_640x640.jpg?fit=around|56:56&crop=56:56;*,*&output-format=jpg&output-quality=80",
          }
        },
        {
          store: {
            name: "올리고당",
            address: "서울특별시 마포구 포은로 106",
            img: "https://mp-seoul-image-production-s3.mangoplate.com/705256_1639278287674929.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
            alt: "올리고당 사진"
          },
          profile: {
            name: "창렬",
            comment: "양이 너무 작은거 같네요 아숩습니다.",
            img: "https://k.kakaocdn.net/dn/kJpNj/btqzPx3LOZ4/r0349yc3v2z1KpYcZr7Bxk/img_640x640.jpg?fit=around|56:56&crop=56:56;*,*&output-format=jpg&output-quality=80",
          }
        },
        {
          store: {
            name: "신난당",
            address: "서울특별시 마포구 독막로14길 32",
            img: "https://mp-seoul-image-production-s3.mangoplate.com/1743214_1628773990082735.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
            alt: "신난당 음식 사진"
          },
          profile: {
            name: "민정",
            comment: "대존맛 그자체!! 천상의 밥상!! 천국을 찍고 온 기분입니다.",
            img: "https://k.kakaocdn.net/dn/kJpNj/btqzPx3LOZ4/r0349yc3v2z1KpYcZr7Bxk/img_640x640.jpg?fit=around|56:56&crop=56:56;*,*&output-format=jpg&output-quality=80"
          }
        },
      ]
    };
  },
}
</script>

<style lang="scss" scoped>
  @import './FoodMapView.scss';
</style>