<template>
  <ConfigProvider :locale="zhCN">
    <router-view />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>

<style lang="scss" scpoed>
#app {
  font-family: Avenir, Helvetica, 'PingFang SC', 'Microsoft YaHei', 'WenQuanYi Micro Hei',
    sans-serif;
  font-size: 0.16rem;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
