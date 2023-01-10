<template>
  <div class="seach_wrap">
    <input 
    type="text" 
    placeholder="검색어를 입력하세요"
    v-model="msg"
    @keyup.enter="getSearchText"
    >
    <button class="btn_search" @click="getSearchText">검색</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: ''
    }
  },
 methods: {
    getSearchText(){
      alert(this.msg)
      this.msg = ''
    }
  },
};
</script>
