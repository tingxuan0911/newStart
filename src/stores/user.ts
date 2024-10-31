import { defineStore } from "pinia";
import { useAppStore } from "@/stores/app";
import { usePersistedStateStore } from "../stores/persistedState";

// utils
import { toast } from "@/utils/toast";

// API
import { user } from "@/api";

import router from "@/router";
import errorCode from "@/utils/axios/errorCode.json";

export const useUserStores = defineStore("user", () => {
  const appStore = useAppStore();
  const persistedStateStore = usePersistedStateStore();

  async function login(data: { account: string; password: string }) {
    const { account, password } = data;

    const requestData = {
      LoginId: account,
      Password: password,
    };
    try {
      const response = await user.login(requestData);
      const statusCode =
        response.StatusCode.toString() as keyof typeof errorCode;

      const jwtToken = response.Data.jwtToken;
  
      if (!jwtToken) {
        toast({ message: response.Message[0], type: "error" });
      }
      if (!jwtToken) throw new Error(errorCode[statusCode]);

      // 紀錄 token
      persistedStateStore.setToken(jwtToken);

      router.push({ name: "home" });
    } catch (error) {
      return error;
    }
  }
  return {
    appStore,
    persistedStateStore,
    login,
  };
});
