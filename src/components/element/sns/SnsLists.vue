<template>
    <ul class="sns">
      <li v-for="item in sns" :key="item.name">
        <router-link :to="item.href">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      sns: [
        {
          name: "인스타그램",
          href: "/insta",
        },
        {
          name: "카카오톡",
          href: "/kakao"
        },
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  @import './SnsLists.scss';
</style>