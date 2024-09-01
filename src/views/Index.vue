<script setup>

import {LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons-vue";
import ArticleItem from "@/components/ArticleItem.vue";
</script>

<template>
  <div class="columns" style="padding:10px;">
    <div class="column is-12 box">
      <a-carousel autoplay arrows  class="my-carousel">
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div>
          <figure class="image ">
            <img style="background-size: cover" src="../../public/images/img01.jpg" alt="">
          </figure>
        </div>
        <div>
          <figure class="image">
            <img style="background-size: cover" src="../../public/images/img02.jpg" alt="">
          </figure>
        </div>
        <div>
          <figure class="image">
            <img style="background-size: cover" src="../../public/images/img03.jpg" alt="">
          </figure>
        </div>
        <div>
          <figure class="image">
            <img style="background-size: cover" src="../../public/images/img04.jpg" alt="">
          </figure>
        </div>
      </a-carousel>
    </div>
  </div>
  <div class="columns" style="padding:0 10px;">
      <div class="column is-6 box">
        <ArticleItem title="讲经说法"></ArticleItem>
      </div>
      <div class="column is-6 box">
        2222222222222
      </div>


  </div>

</template>

<style lang="scss" scoped>
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
</style>