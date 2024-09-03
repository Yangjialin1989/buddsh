<script setup>

import {ref,reactive,watch} from "vue";
import {useRoute} from "vue-router";



const article = reactive({})
//当前路由
const route = useRoute()

//监听当前路由
watch(
    //监听的对象
    ()=>route.params,

    //监听后台数据端口，对象后要执行的回调函数
    (newParams,oldParams)=>{
        console.log(newParams,oldParams)
    },
    //参数
    {
      //当watch对象创建时就触发上面的回调cb
      immediate:true
    }

)



</script>

<template>
<div>
  category
</div>
</template>

<style scoped>

</style>