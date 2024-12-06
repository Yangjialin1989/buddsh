<script setup>
import {DownOutlined,KeyOutlined,EyeOutlined, LockOutlined, QqOutlined, UserOutlined, WechatOutlined} from "@ant-design/icons-vue";
//创建动态路由用,封装好的a标签组件
import {RouterLink} from "vue-router";

//导入路由
import router from '@/router'

import $ from 'jquery'
import {defineEmits, defineProps, getCurrentInstance, reactive, ref} from "vue";
import {useCategoryStore} from "@/stores/category.js";
import API from "@/global/utils/Axios.js";
import {message} from "ant-design-vue";
//登录注册
const loginVisible = ref(true)
const LoginVisible = (visible) => {
  loginVisible.value = visible;
  router.push('/')
};

const token = ref(null);


const loginForm = reactive({
  username: '',
  password: ''
});
const onFinish = values => {
  console.log('Success:', loginForm.value);
  const data = loginForm.value
  API.post('/api/login/',values)
      .then(res=>{
        console.log(res)
        if(res.status === 200){
          localStorage.setItem('token',res.data.token)
        }

      })
      .catch(err=>{
        console.log(err)
        message.error(err.response.data.msg)
      })
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const eye = ()=>{
  console.log('hhhh')
}
</script>

<template>
  <!--    登录界面-->

  <div class="modal is-active" v-if="loginVisible" >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head p-3">
        <p class="modal-card-title">登录账号</p>
        <button class="delete" @click="LoginVisible(false)" aria-label="close"></button>
      </header>
      <section class="modal-card-body" style="overflow:hidden">
        <!-- Content ... -->
        <a-form
            :model="loginForm"
            name="basic"

            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
          <a-form-item

              name="username"
              :rules="[{ required: true, message: '请输入用户名!' }]"
          >
            <a-input v-model:value="loginForm.username"  placeholder="用户名">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>

          </a-form-item>

          <a-form-item

              name="password"
              :rules="[{ required: true, message: '请输入密码!' }]"
          >

            <a-input-password v-model:value="loginForm.password"  placeholder="密码">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item >

              <a-form-item name="remember" no-style>
                <a-checkbox >记住我</a-checkbox>
              </a-form-item>
              <a class="login-form-forgot" style="margin-left:17rem" href="">忘记密码</a>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 10, span: 16 }">
            <a-button type="primary" html-type="submit">登录</a-button>
          </a-form-item>
          <div class="is-size-7 has-text-centered	">
            选择第三方登录
          </div>
          <br>

          <div class="is-size-6 has-text-centered	">
            <button class="button ml-1">
              <span class="icon has-text-success">
                <i class="fas fa-heading fa-lg">
                  <wechat-outlined/>
                </i>
              </span>
            </button>
            <button class="button ml-1">
              <span class="icon has-text-danger">
                <i class="fas fa-heading fa-lg">
                  <qq-outlined/>
                </i>
              </span>
            </button>
          </div>

          <div class="is-size-7 has-text-centered	mt-4">
            暂时没有账号，<a href="#" @click="router.push('/register')">立即注册</a>
          </div>
        </a-form>







<!--        <div class="field">-->
<!--          <p class="control has-icons-left">-->
<!--            <input class="input" type="password" placeholder="密码">-->
<!--            <span class="icon is-small is-left">-->
<!--                <i class="fal">-->
<!--                  <lock-outlined />-->
<!--                </i>-->
<!--              </span>-->
<!--          </p>-->
<!--          <div class="columns">-->
<!--            <div class="column is-size-7 is-8 has-text-left mt-3">-->

<!--              <input style="margin-top:10px;" type="checkbox" />-->

<!--              已阅读并同意 <a href="#">网站服务协议</a>-->



<!--            </div>-->

<!--            <div class="column is-size-7 has-text-right mt-3">-->
<!--              <a href="#">忘记密码</a>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->


<!--        <div class="field">-->
<!--          <p class="control has-text-centered	">-->
<!--            <button class="button is-success">-->
<!--              登录-->
<!--            </button>-->
<!--          </p>-->
<!--        </div>-->


<!--        <div class="has-background-light">-->


<!--          <div class="is-size-7 has-text-centered	">-->
<!--            选择第三方登录-->
<!--          </div>-->
<!--          <br>-->

<!--          <div class="is-size-6 has-text-centered	">-->
<!--            <button class="button ml-1">-->
<!--              <span class="icon has-text-success">-->
<!--                <i class="fas fa-heading fa-lg">-->
<!--                  <wechat-outlined/>-->
<!--                </i>-->
<!--              </span>-->
<!--            </button>-->
<!--            <button class="button ml-1">-->
<!--              <span class="icon has-text-danger">-->
<!--                <i class="fas fa-heading fa-lg">-->
<!--                  <qq-outlined/>-->
<!--                </i>-->
<!--              </span>-->
<!--            </button>-->
<!--          </div>-->

<!--          <div class="is-size-7 has-text-centered	mt-4">-->
<!--            暂时没有账号，<a href="#" @click="router.push('/register')">立即注册</a>-->
<!--          </div>-->
<!--        </div>-->
      </section>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-card {
  width: 30rem;
}

.modal-background {
  opacity: 1;

}
</style>