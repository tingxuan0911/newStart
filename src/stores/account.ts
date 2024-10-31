import { defineStore } from 'pinia';
import { getStorage } from '@/utils/storage';
import { computed,ref ,reactive} from 'vue';

// api
// import { account } from '@/api';

// import { jwtDecode } from 'jwt-decode';

import type { JwtToken, BetSettingResponse } from '@/schema/account';

// store
import { usePersistedStateStore } from '@/stores/persistedState';

const persistedStateStore = usePersistedStateStore();

export const useAccountStore = defineStore('account', () => {
  // const accountData = computed<JwtToken>(() => {
    // if (persistedStateStore.token) return jwtDecode(persistedStateStore.token);
    // return {
    //   UserName: '',
    //   // for place bet API、get balance API
    //   AccountId: NaN,
    //   // for place bet API
    //   BuId: NaN,
    //   UserId: NaN,
    //   SourceTypeId: NaN
    // };
  // });

  const balance = ref<number | string>('--');

  function getAccountData() {
    const storageAccountData = ref<any>(null);
    // 取出localStorage的會員資料
    const storageAccountDataString = localStorage.getItem('accountData');
    if (storageAccountDataString) {
      // 轉換localStorage的會員資料為陣列
      storageAccountData.value = JSON.parse(storageAccountDataString);
      // 再次解析內部的 JSON 字符串
      storageAccountData.value = JSON.parse(storageAccountData.value);
    }
    return storageAccountData.value;
  }

  // async function getBalance() {
    // if (!accountData.value.AccountId) throw new Error('缺少Account ID 呦~');
    // const accountId = accountData.value.AccountId;

  //   try {
  //     const response = await account.getBalance(accountId);
  //     balance.value = response.Data.AvailableBalance;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  function setBalance(amount: number | string) {
    amount = Number(amount);
    if (isNaN(amount)) return;
    balance.value = amount;
  }

  //  marketType 投注金額上下限列表
  const betLimitList: BetSettingResponse['Data'] = reactive([]);

  // async function getBetSetting() {
  //   try {
  //     const response = await account.getBetSetting();

  //     if (response.StatusCode !== 0) throw response;

  //     let data = response.Data;
  //     // 先清空，再賦值
  //     betLimitList.length = 0;
  //     betLimitList.push(...data);
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return {
    // accountData,
    balance,
    betLimitList,
    setBalance,
    // getBalance,
    getAccountData,
    // getBetSetting
  };
});
