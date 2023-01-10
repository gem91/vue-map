<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png">
        </router-link>
      </h1>
      <nav class="gnb">
        <ul>
          <li 
            v-for="list in gnb" :key="list.name">
            <router-link :to="list.href">{{list.name}}</router-link>
          </li>
        </ul>
      </nav>
      <SnsLists />
    </div>
  </header>
</template>

<script>
import SnsLists from '@/components/element/sns/SnsLists.vue';
export default {
  components: { SnsLists },
  data() {
    return {
      gnb: [
        {
          name: "프로필",
          href: "/"
        },
        {
          name: "맛지도",
          href: "/foodMap"
        },
        {
          name: "다른프로젝트",
          href: "/test3"
        },
        {
          name: "컨택",
          href: "/contact"
        },
      ],
     
    };
  },


};
</script>

<style lang="scss" scoped>
  @import './HeaderWrap.scss';
</style>