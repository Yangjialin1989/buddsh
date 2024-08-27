<script setup>
//局部引入组件



import {getCurrentInstance} from "vue";
const { proxy } = getCurrentInstance()

import "ant-design-vue/es/message/style/css.js"
import {ref,reactive} from 'vue'
const articleDatas = reactive([
  {
    'title':'Vue3+VueRouter+vite开发入门',
    'link':'/s',
    'desc':'Vue开发实战如果你需要更精细的控制，可以通过自定义 Bulma 的 Sass 变量来实现。你可以设置不同屏幕尺寸下的字体大小变量，并在编译时应用这些变量。Bulma 允许你覆盖其默认的 Sass 变量，以创建符合你需求的样式‌',
    'author':'张三的',
    'category':'Vue3',
    'pubdate':'2023年11月9日'
  },
  {
    'title':'bulma开发入门',
    'link':'/aaa',
    'desc':'虽然 Bulma 提供了丰富的响应式类，但在某些情况下，你可能需要使用 CSS 的媒体查询来更精确地控制字体大小。媒体查询允许你根据屏幕宽度或高度来应用不同的样式规则。你可以在你的 CSS 文件中添加媒体查询，以覆盖 Bulma 的默认样式或添加额外的样式规则。',
    'author':'张晓峰',
    'category':'Vue3',
    'pubdate':'2013年11月9日'
  },
  {
    'title':'Python开发入门',
    'link':'/home',
    'desc':'虽然容器本身不直接影响字体大小，但你可以通过调整容器的宽度来影响内容的布局，从而间接影响字体大小的视觉效果。Bulma 提供了默认容器、宽度固定容器和宽度全屏容器等选项，你可以根据需要选择适合的容器类型‌',
    'author':'刘大伟',
    'category':'Vue3',
    'pubdate':'2053年11月9日'
  }
])


</script>

<template>
<!--    for循环渲染子组件复用。-->
    <ArticleItem v-for="(item,index) in articleDatas"
                 :key="index"
                 :title="item.title"
                 :link="item.link"
                 :desc="item.desc"
    >
<!--      渲染插槽,插槽内的内容都会被替换掉-->
      <template #author>{{item.author}}</template>
      <template #category>{{item.category}}</template>
      <template #pubdate>{{item.pubdate}}</template>
    </ArticleItem>



</template>
