let loading;
import { useAppStore } from "@/stores/app";

export default {
  showLoading() {
    const appStore = useAppStore();
    appStore.setLoading(appStore.loading + 1);
  },

  hideLoading() {
    const appStore = useAppStore();
   appStore.setLoading(appStore.loading - 1);
  }
};
