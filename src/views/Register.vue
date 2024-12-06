<script setup>
import {DownOutlined, LockOutlined, QqOutlined, UserOutlined, WechatOutlined} from "@ant-design/icons-vue";
//创建动态路由用,封装好的a标签组件
import {RouterLink} from "vue-router";

//导入路由
import router from '@/router'

import $ from 'jquery'
import {defineEmits, defineProps, getCurrentInstance, ref} from "vue";
import {useCategoryStore} from "@/stores/category.js";
//登录注册
const registerVisible = ref(true)
const RegisterVisible = (visible) => {
  registerVisible.value = visible;
  router.push('/')
};
</script>

<template>
  <!--    登录界面-->

  <div class="modal is-active" v-if="registerVisible">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head p-3">
        <p class="modal-card-title">注册账号</p>
        <button class="delete" @click="RegisterVisible(false)" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
        <div class="field">
          <p class="control has-icons-left  ">
            <input class="input" type="text" placeholder="昵称">
            <span class="icon is-small is-left">
                <i class="fas">
                  <user-outlined />
                </i>
              </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="设置密码">
            <span class="icon is-small is-left">
                <i class="fas">
                  <LockOutlined></LockOutlined>
                </i>
              </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="再次输入密码">
            <span class="icon is-small is-left">
                <i class="fas">
                  <LockOutlined></LockOutlined>
                </i>
              </span>
          </p>
        </div>


        <div class="field">
          <p class="control has-text-centered	">
            <button class="button is-success">
              注册
            </button>
          </p>
        </div>
        <div class="is-size-7 has-text-centered	mt-4">
          已有账号，直接<a href="#" @click="router.push('/login')">登录</a>
        </div>


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