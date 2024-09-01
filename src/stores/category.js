import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//category
export const useCategoryStore = defineStore('category',()=>{

    //state 状态
    const categoryDatas = ref([])

    //getter 计算属性
    const coumcategoryDatas = computed(()=>{
        return categoryDatas
        // return JSON.parse(sessionStorage.getItem('CategoryDatas'))||categoryDatas
    })
    // 修改state
    // 异步请求
    async function apiCategory(){

        //存储到本地
        sessionStorage.setItem('CategoryDatas',JSON.stringify())
    }


    return {categoryDatas,coumcategoryDatas,apiCategory}
})














