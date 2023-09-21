<template>
  <section>login</section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useLoginStore from '@/store/modules/login';

const loginStore = useLoginStore();
const { isLogin } = storeToRefs(loginStore);

console.warn('isLogin', isLogin);
</script>

<style lang="scss" scoped></style>
