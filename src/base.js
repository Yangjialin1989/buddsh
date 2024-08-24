import {message,notification} from "ant-design-vue";
import 'ant-design-vue/es/message/style/css.js'
import 'ant-design-vue/es/notification/style/css.js'
import ArticleItem from "@/components/ArticleItem.vue";
import AsideBox from "@/components/AsideBox.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 将所需图标添加到库中
library.add(fas, far, fab);
export default {
    install(app){
        //挂载到main.js中的app全局对象
        app.config.globalProperties.$message=message
        app.config.globalProperties.$notification=notification

        //挂载全局组件、
        app.component('ArticleItem',ArticleItem)
        app.component('AsideBox',AsideBox)
        // 全局注册FontAwesomeIcon组件
        app.component('FontAwesomeIcon', FontAwesomeIcon)

    }
}

