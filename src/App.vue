<template>
 <HeaderArea></HeaderArea>
 <router-view></router-view>
</template>

<script>
import HeaderArea from './components/header/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderArea
  }
}
</script>

