<script setup>
import {FolderOutlined,UserOutlined,ClockCircleOutlined} from "@ant-design/icons-vue";
import {RouterLink} from "vue-router";
//props 用于接收父组件传递的数据
const props = defineProps({
  title:{
    type:String,
    required:true
  },
  link:String || Object,
  author: {
    type:String,
    default:'张三'
  },
  category:{
    type:String,
    default:"Vue3"
  },
  pubdate:{
    type:String,
    default:"2023.04.01"
  },
  desc: {
    type:String,
    default:'hhh'
  }


})
</script>

<template>
  <a-typography class="box">
    <a-typography-title :level="3">
      <RouterLink :to="{ path:'/' }">{{ props.title }}</RouterLink>
    </a-typography-title>
    <a-space>
<!--      插槽，预留位置-->

        <a-space>
          <user-outlined></user-outlined>
          <span>作者:<slot name="author">{{ props.author }}</slot></span>
        </a-space>
        <folder-outlined></folder-outlined>
        <span>分类:<slot name="category">{{ props.category }}</slot></span>
        <ClockCircleOutlined></ClockCircleOutlined>
        <span>发布日期:<slot name="pubdate">{{ props.pubdate }}</slot></span>
    </a-space>
    <a-typography-paragraph type="secondary">
      {{ props.desc }}
      <h1 class="is-size-7-mobile">Hello, Bulma</h1>
      <h2 class="is-size-2">Hello, Bulma</h2>
      <h3 class="is-size-3">Hello, Bulma</h3>
      <h4 class="is-size-4">Hello, Bulma</h4>
      <p class="is-size-5">Hello, Bulma</p>
      <p class="is-size-6">Hello, Bulma</p>
      <p class="is-size-7">Hello, Bulma</p>
    </a-typography-paragraph>
  </a-typography>
</template>

<style scoped>

</style>