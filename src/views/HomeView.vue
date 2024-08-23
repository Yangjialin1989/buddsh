<script setup>
import {getCurrentInstance} from "vue";
const { proxy } = getCurrentInstance()

import "ant-design-vue/es/message/style/css.js"
import {UnlockOutlined} from '@ant-design/icons-vue'

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
  <unlock-outlined />
</template>
