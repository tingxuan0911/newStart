import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const loading = ref(0);

  const setLoading = (data: number) => {
    loading.value = data;
  };

  const isMobile = ref(true);
  function checkMobile(): void {
    const userAgent = navigator.userAgent.toLowerCase();

    const list = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];

    isMobile.value = list.some((keyword) => userAgent.includes(keyword));
    // console.log('userAgent', navigator.userAgent)
    // console.log('isMobile: ', isMobile.value)
  }

  const afterLoginInit = () => {};

  const afterLogoutInit = async () => {};

  return {
    loading,
    setLoading,
    isMobile,
    checkMobile,
    afterLoginInit,
    afterLogoutInit
  };
});
