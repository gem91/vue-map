<template>
  <ul class="tab_menus">
    <li
    v-for="menu in tabMenuData" 
    :key="menu.name" 
    :class="{ on : menu.isActive }"
    :aria-tabMenu="`tab-${menu.tabNum}`"
    @click="handleTabMenu"
    >
      <button ># {{ menu.name }}</button>
    </li>
  </ul>
</template>

<script>
export default {
  inheritAttrs: false,
  props:{
    tabMenuData: {
      type: Object,
      default: null
    },
  },
  data() {
    return {
      isOnTabMenu: false
    }
  },
  methods:{
    handleTabMenu(e){
      const lists = document.querySelectorAll('.tab_menus li')
      for( let i = 0; i < lists.length; i ++){
        lists[i].classList.remove('on')
      }
      e.currentTarget.classList.add('on')
      
    }
  }
};
</script>

<style lang="scss" scoped>
  .tab_menus{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    li{
      margin-right: 15px;
      padding: 5px 20px 7px;
      border-radius: 15px;
      background: #aaa;
      transition: .5s ease-in-out;
      &:last-child{
        margin-right: 0;
      }
      &.on, &:hover{
        background-color: #ff7100;
      }
      button{
        color: $text-color-white;
      }
    }
  }
</style>