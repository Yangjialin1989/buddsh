<script setup>
import { RouterView } from 'vue-router'
import Layout from "@/layout/Layout.vue";
import {onMounted,getCurrentInstance, ref} from "vue";
import Layout1 from "@/layout/Layout1.vue";
const {proxy} = getCurrentInstance()
const isMobile = ref(proxy.$utils.ISMOBILE)
onMounted(()=>{
  //全局移动端样式
  const mobileStyleLink = document.createElement('link');
  mobileStyleLink.rel = 'stylesheet';
  mobileStyleLink.href = './src/global/css/mobile.css';

  if(isMobile.value){
    document.head.appendChild(mobileStyleLink)
  }

})
</script>
<template>
<!--  <RouterView/>-->
  <Layout1></Layout1>
</template>

<style lang="scss" >


</style>
