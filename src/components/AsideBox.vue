

<template>
  <aside class="box">

      <h1 class="title is-size-6 has-text-weight-semibold">{{ props.name}}</h1>


<!--    搜索-->
<!--    <div v-if="props.type==='search'">-->
<!--        <div class="control has-icons-right">-->
<!--          <input  class="is-small-mobile input point"-->
<!--                  type="text"-->
<!--                  v-model="inputValue"-->
<!--                  @change="change"-->
<!--                  @input="input"-->
<!--                  @click="change"-->
<!--                  @keyup.enter="change"-->
<!--                  placeholder="搜索" >-->
<!--          <span  class="icon is-small is-right">-->
<!--            <font-awesome-icon  icon="fa-solid fa-search" aria-hidden="true"/>-->
<!--          </span>-->
<!--        </div>-->



<!--&lt;!&ndash;      <a-input-search class="is-full-mobile"&ndash;&gt;-->
<!--&lt;!&ndash;            v-model:value="inputValue"&ndash;&gt;-->
<!--&lt;!&ndash;            @change="$emit('update:searchValue',$event.target.value)"&ndash;&gt;-->
<!--&lt;!&ndash;            @search="$emit('someSearch')"&ndash;&gt;-->
<!--&lt;!&ndash;            placeholder="搜索"/>&ndash;&gt;-->
<!--    </div>-->

<!--    文章列表-->
    <div v-if="props.type==='news' && props.newsData.length > 0">

      <ul>

          <li v-for="(item,index) in props.newsData" :key="index"  class="news">
            <a-tooltip :title="item.title" color="geekblue">
<!--              <template #title >{{ item.title }}</template>-->
              <a href="/">{{index+1}}.{{item.title}}</a>
            </a-tooltip>

          </li>


      </ul>

    </div>
<!--    标签-->
    <div v-if="props.type === 'tag' && props.tagsData.length > 0">
      <span style="margin-left: 2px" class="tag is-info" v-for="(item,index) in props.tagsData" :color="item.color">{{item.name}}</span>
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
<script setup>
import {onMounted, ref} from 'vue'
import $ from 'jquery';
const emit = defineEmits()
// defineEmits(['update:searchValue','someSearch'])
const inputValue = ref('')
const inputValue1 = ref('')


const search =()=>{
  console.log('pp')
}


const input =(event)=>{
  // console.log(inputValue1.value)
  // emit('update:searchValue',inputValue1.value)
  emit('update:searchValue',event.target.value)
}
const change =(event)=>{
  // console.log(inputValue1.value,'失去焦点')
  emit('someSearch')
}

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
  },
  searchValue:{
    type:String,
    default:''
  }
})
//搜索框回调



</script>
<style scoped>
@import "font-awesome/css/font-awesome.min.css";
.news{

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.point:hover{
  cursor: pointer !important;

}

</style>