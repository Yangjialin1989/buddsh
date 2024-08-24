import {message,notification} from "ant-design-vue";
import 'ant-design-vue/es/message/style/css.js'
import 'ant-design-vue/es/notification/style/css.js'
import ArticleItem from "@/components/ArticleItem.vue";
import AsideBox from "@/components/AsideBox.vue";
export default {
    install(app){
        //挂载到main.js中的app全局对象
        app.config.globalProperties.$message=message
        app.config.globalProperties.$notification=notification

        //挂载全局组件、
        app.component('ArticleItem',ArticleItem)
        app.component('AsideBox',AsideBox)

    }
}

