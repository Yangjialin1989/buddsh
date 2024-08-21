<script setup>
import {getCurrentInstance} from "vue";
const { proxy } = getCurrentInstance()

// 这里不需要全部引入，只需按需引入所需的组件
// import { Button } from 'ant-design-vue';
import { message } from 'ant-design-vue';
import "ant-design-vue/es/message/style/css.js"
const info = () => {
  proxy.$message.info('This is a normal message');
};
const openNotification = () => {
  proxy.$notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
</script>

<template>
  <a-button type="primary" @click="info">Display normal message</a-button>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>

</template>
