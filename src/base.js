import {message,notification} from "ant-design-vue";
import 'ant-design-vue/es/message/style/css.js'
import 'ant-design-vue/es/notification/style/css.js'

export default {
    install(app){
        //挂载到main.js中的app全局对象
        app.config.globalProperties.$message=message
        app.config.globalProperties.$notification=notification
    }
}

