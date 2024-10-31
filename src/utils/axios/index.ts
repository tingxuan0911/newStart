import axios from "axios";
import errorCode from "./errorCode.json";
import router from "@/router";
import pageloading from "@/utils/loading";
import { useUserStores } from "@/stores/user";
import { usePersistedStateStore } from "@/stores/persistedState";
import { storeToRefs } from "pinia";

// utils
import { toast } from "@/utils/toast";

const service = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_API}`,
  // baseURL: `${process.env.VITE_APP_BASE_API}`,
  withCredentials: false,
  // timeout: 10 * 1000, // 請求超時
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});

let isRefreshing = false;
let requestsQueue: ((token: string) => void)[] = [];

service.interceptors.request.use(
  (config) => {
    const stores = useUserStores();
    //
    const { loading } = storeToRefs(stores.appStore);
    // stores.appStore.setLoading(loading.value + 1);
    //
    const { token } = storeToRefs(stores.persistedStateStore);
    // console.log(token.value)

    if (token.value) {
      config.headers["authorization"] = "Bearer " + token.value;
    } else {
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: any) => {
    const stores = useUserStores();
    const { loading } = storeToRefs(stores.appStore);
    // stores.appStore.setLoading(loading.value - 1);

    // isLogin
    if (response.config && response.config.isLogin) {
      return Promise.resolve(response);
    }
    //
    const data = response.data;
    if (data.code === "0") {
      return data.data;
    } else {
      // pageloading.hideLoading();
      // TODO: login API　沒有 data.code 所以被擋住了，確認結構之後再改回來
      return Promise.resolve(data);
      return Promise.reject(data);
    }
  },
  async (error: any) => {
    const stores = useUserStores();
    //const userStore = userStore();

    const { loading } = storeToRefs(stores.appStore);

    // stores.appStore.setLoading(loading.value - 1);
    // 超時
    // if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
    //       ElMessage.error('請求超時，請稍後重試');
    //       window.history.back();
    //       return Promise.reject(new Error('請求超時'));
    // }
    // pageloading.hideLoading();
    const response = error.response;
    if (response) {
      switch (response.status) {
        case 400: {
          const { message } = error.response.data;
          console.log(`${error.response.status}: ${message || "資料錯誤"}。`);
          break;
        }
        case 401:
          if (!response.config.__isRetryRequest) {
            if (!isRefreshing) {
              isRefreshing = true;
              try {
                // const persistedStateStore = usePersistedStateStore()
                // const newToken =  persistedStateStore.refreshToken
                // console.log('newToken', newToken)
                isRefreshing = false;
                toast({ message: "登入逾時，請重新登入", type: "error" });
                router.push({ name: "Login" });
                // 更新token成功後重新發送請求
                return service(response.config);
              } catch (err) {
                isRefreshing = false;
                await stores.appStore.afterLogoutInit();
                console.log(error.response.data.Error);
                router.push({ name: "login" });
                return Promise.reject(err);
              }
            } else {
              // 如果正在更新token，則將請求加入陣列等待
              return new Promise((resolve) => {
                requestsQueue.push((token) => {
                  error.config.headers["authorization"] = "Bearer " + token;
                  error.config.__isRetryRequest = true;
                  resolve(service(error.config));
                });
              });
            }
          } else {
            await stores.appStore.afterLogoutInit();
            console.log("登入逾時，請重新登入");
            await router.push({ name: "Login" });
            return Promise.reject(response);
          }
        case 403:
          break;
        case 404:
          break;
        case 422:
          break;
        default:
          break;
      }
      return Promise.reject(error.response);
    } else {
      return Promise.reject(error.response);
    }
  }
);

export default service;
