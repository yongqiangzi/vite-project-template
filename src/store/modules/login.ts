import { defineStore } from 'pinia';
import { ref } from 'vue';

const useLoginStore = defineStore('demo', () => {
  const isLogin = ref<boolean>(false);
  const changeLoginStatus = () => {
    isLogin.value = true;
  };
  return {
    isLogin,
    changeLoginStatus,
  };
});
export default useLoginStore;
