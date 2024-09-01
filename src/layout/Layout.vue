

<template>

  <div class="" id="main">
    <div class="scroll">
      <div class="container cont1" >
        <NavBar @theme="handleTheme" class="nav"/>
        <div class="columns">
          <div class="column is-8">
            <RouterView/>
          </div>
          <div class="column is-4">
            <AsideBox type="news" name="最新的文章" :newsData="newsData" ></AsideBox>
            <AsideBox type="tag" name="标签" :tagsData="tagsData"></AsideBox>
            <AsideBox type="archive" name="归档" :archiveData="archiveData"></AsideBox>
          </div>
        </div>


      </div>

      <footer class="footer footer1">
        <div class="container">
          <div class="columns">
            <div class="column is-4  has-text-centered">
              <p class=" has-text-grey is-size-6-mobile footer-font" style="line-height:38px;">
                <a-tooltip>
                  <template #title>729850713</template>
                  <span class="has-text-danger"><qq-outlined /></span>
                </a-tooltip>
                <a-tooltip>
                  <template #title>Mercifial</template>
                  <span class="has-text-success">
                  <wechat-outlined />
                </span>
                </a-tooltip>
                <a-tooltip>
                  <template #title>
                    17704884196 13474811577
                  </template>
                  <span class="has-text-link">
                  <font-awesome-icon  icon="fa-solid fa-phone-alt" aria-hidden="true"/>
                </span>
                </a-tooltip>
              </p>
            </div>
            <div class="column is-4  has-text-centered">
              <div  class="has-text-grey" >
                <button class="button is-ghost" ><span><ie-outlined /></span></button>
                <button class="button is-ghost" ><span><a  href="https://www.hmszs.org/">黄梅四祖寺</a></span></button>
                <button class="button is-ghost"><span><a  href="http://www.bailinsi.net/">柏林禅寺</a></span></button>
              </div>
            </div>
            <div class="column is-4  has-text-centered">
              <p class="mobileFooter has-text-grey is-size-6-mobile" style="line-height:38px;">

                <span class="has-text-link">
                  <font-awesome-icon  icon=" fa-location-arrow" aria-hidden="true"/>
                </span>
                地址:呼和浩特市兴松街赛马场南
              </p>
            </div>

          </div>
          <div class="columns ">
            <div class="column has-text-centered">
              <p class=" has-text-grey is-size-6-mobile">

                <span class="has-text-info">
                  <font-awesome-icon  icon="fa-info-circle" aria-hidden="true"/>
                </span>
                蒙ICP备19003669
                蒙公网安备15000002000102
                互联网宗教信息服务许可证号20220000005

              </p>
            </div>



          </div>
        </div>

      </footer>



    </div>
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
    $('body').css('background-color', '');
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


#main{
  width: 100vw;
  position: fixed;

  top:0;
  left:0;
  .scroll{
    width:100vw;
    height:110vh;
    overflow: scroll; /* 设置容器为竖直滚动 */
  }

}
.example {
  color: blue;
  font-size: 16px;
  // Sass的特殊功能
  font-weight: bold;
  &:hover {
    color: red;
  }
}
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 360px;
  line-height: 360px;
  background: #364d79;
  overflow: hidden;
}
@media screen and (max-width:768px){
  /* For demo */
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
}



.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.my-carousel .slick-slide img {
  width: 100%; /* 设置图片宽度为100% */
  height: 360px; /* 设置图片高度为200px */
}
@media screen and (max-width:768px){
  /* For demo */
  .my-carousel .slick-slide img {
    width: 100%; /* 设置图片宽度为100% */
    height: 160px; /* 设置图片高度为200px */
  }
  .footer1{
    height:300px;
  }
}

.footer-font{
  span{
    margin-left:5px;
  }
  span:hover{
    cursor: pointer;
  }
}


</style>