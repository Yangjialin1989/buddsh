<script setup>
const props = defineProps({
  name:{
    type:String,
    default:'搜索'
  },
  type:{
    type:String,
    default:'search',
    validator(value) {
      // 传入的值必须在数组中，archive 文章归档
      return ['search','news','tag','archive','box'].includes(value)
    }
  },
  newsData:{
    type:Array,
    default:[]
  },
  tagsData:{
    type:Array,
    default:[]
  },
  archiveData:{
    type:Array,
    default:[]
  }
})

</script>

<template>
  <aside class="box">
    <h1 class="is-size-6 has-text-weight-semibold">{{ props.name}}</h1>
<!--    搜索-->
    <div v-if="props.type==='search'">
      <a-input-search placeholder="input search text"/>
    </div>
<!--    文章列表-->
    <div v-if="props.type==='news' && props.newsData.length > 0">
      <ul>
        <li v-for="(item,index) in props.newsData" :key="index">
          <a href="">{{item.title}}</a>
        </li>
      </ul>
    </div>
<!--    标签-->
    <div v-if="props.type === 'tag' && props.tagsData.length > 0">
      <a-tag v-for="(item,index) in props.tagsData" :color="item.color">{{item.name}}</a-tag>
    </div>
<!--    文章归档-->
    <div v-if="props.type==='archive' && props.archiveData.length > 0">
      <ul class="p1-2 pr-2">
        <li v-for="(item,index) in props.archiveData" :key="index">
          <a href="">{{item.date}}</a>
        </li>
      </ul>
    </div>
<!--    空插槽-->
    <slot name="box" v-if="props.type==='box'"></slot>
  </aside>
</template>

<style scoped>

</style>