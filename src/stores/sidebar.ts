import { ref } from "vue";
import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", () => {
  const noCollapse = ref<boolean>(true); //收合功能是否開啟
  
  return {
    noCollapse
  };
});
