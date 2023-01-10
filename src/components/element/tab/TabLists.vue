<template>
  <div class="tab_wrap">
    <TabMenu :tabMenuData="tabMenu" :data-tabMenu="tabMenu[0].length"></TabMenu>
    <!-- <font-awesome-icon icon="fa-brands fa-gratipay" /> -->
    <TabContents :tabContData="storeData"></TabContents>
  </div>
</template>

<script>
import TabContents from './TabContents.vue';
import TabMenu from './TabMenu.vue';
export default {
  components: { TabMenu, TabContents },

  props:{
    tabMenu: {
      type: Object,
      default: null
    },
    storeData: {
      type: Object,
      default: null
    },
  },
};
</script>

<style lang="scss" scoped>
  .tab_wrap{
    margin: 50px 0;
  }
</style>