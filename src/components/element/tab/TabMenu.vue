<template>
  <ul class="tab_menus">
    <li v-for="menu in tabMenuData" :key="menu.name" :class="{on : menu.isOn}">
      <button ># {{ menu.name }}</button>
    </li>
  </ul>
</template>

<script>
export default {
  props:{
    tabMenuData: {
      type: Object,
      default: null
    },
  },
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