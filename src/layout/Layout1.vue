

<template>
  <div>

  </div>
</template>
<script setup>
//引入计算属性
import {computed, getCurrentInstance, onMounted, ref} from "vue";
import { WechatOutlined,QqOutlined,IeOutlined,GooglePlusOutlined} from '@ant-design/icons-vue';
import $ from 'jquery'
//响应式
const search1Value = ref('')
const search2Value = ref('')
const searchValue = ref()
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import {RouterView,RouterLink} from "vue-router";
import AsideBox from "@/components/AsideBox.vue";
import NavBar from "@/layout/NavBar.vue";
import isMobile from "@/global/utils/isMobile.js";
import Index from "@/views/Index.vue";
const {proxy} = getCurrentInstance()
// console.log(md.mobile())
//主题
const themes = ref('')

//模拟数据
const newsData = [{title:'现在如何修行是关键的最重要的今天是什么节日哦开发入门'},{title:'Agv实战'},{title:'Python实战'},]
const tagsData = [{name:'入门',color:'#87d068'},{name:'进阶',color:'#22d068'}]
const archiveData = [{date:'2024年9月10日'},{date:'2022年9月16日'},{date:'2000年5月10日'},]
//
function handleTheme(theme){
  // console.log('子组件传递的',theme)
  themes.value = theme
  if(theme === 'dark'){
    $('#main').addClass('theme-dark')
    $('#main').removeClass('theme-light')

// 单个CSS属性
    $('body').css('background-color', 'black');
  }else{
    $('#main').addClass('theme-light')
    $('#main').removeClass('theme-dark')
    $('body').css('background-color', 'hsl(36, 80%, 77%)');

  }

}

const updateSearchValue = (value)=> {
  searchValue.value = value
}
//对newsData进行计算
const newsDataComp = computed(()=>{

  let itemnewsData = []

  newsData.forEach(item=>{
    console.log(item.title.length)
    if(item.title.length > 13){
      // console.log('ok')
      item.title = item.title.substring(0,13)+'...'
    }
    itemnewsData.push(item)
  })
  return itemnewsData
})
//子父组件回调
function search1Callback(){
  // console.log(search1Value.value)
}
function search2Callback(){
  // console.log(search1Value.value)
}

onMounted(()=>{

  // const link = document.createElement('link');
  // link.rel = 'stylesheet';
  // link.href = './global/css/mobile.css';
  // document.head.appendChild(link)
})
</script>
<style lang="scss" scoped>




</style>