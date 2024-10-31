import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import { getStorage, setStorage, removeStorage } from '@/utils/storage';

export const usePersistedStateStore = defineStore('persistedState', () => {
  // 給token值
  const token = ref('');

  // 初始化token
  token.value = getStorage('token') || '';

  const setToken = (data: string) => {
    token.value = data;
    setStorage('token', data);
  };

  const refreshToken = ref('');
  const setRefreshToken = (data: string) => {
    refreshToken.value = data;
  };

  const loginData = ref({
    account: '',
    password: ''
  });
  const setLoginData = (data: { account: string; password: string }) => {
    loginData.value = data;

    const { account, password } = data;
    account ? setStorage('account', account) : removeStorage('account');
    password ? setStorage('password', password) : removeStorage('password');
  };

  const cleanPersistedState = () => {
    token.value = '';
    refreshToken.value = '';
    loginData.value = {
      account: '',
      password: ''
    };
    removeStorage('token');
    removeStorage('refreshToken');
  };

  // 檢查用戶是否登入
  const isAuthenticated = computed(() => !!token.value);

  return {
    token,
    setToken,
    refreshToken,
    setRefreshToken,
    loginData,
    setLoginData,
    cleanPersistedState,
    isAuthenticated
  };
});
