<template>
  <header class="header">
    <h1 class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png">
      </router-link>
    </h1>
    <ul 
      v-for="list in gnb" 
      :key="list.name"
      class="menu_list">
      <li>{{list.name}}</li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      gnb: [
      {
        name: "test1",
        link: "/test1"
      },
      {
        name: "test2",
        link: "/test2"
      },
      {
        name: "test3",
        link: "/test3"
      },
      ]
    };
  },


};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 0 10px;
  border: 1px solid $color-red;
  color: $color-red;
  .logo{
    width: 40px;
    img{
      width: 100%;
    }
  }
  .menu_list{
    display: flex;
    list-style-type: none;
    li{
      margin-right: 15px;
    }
  }
}
</style>