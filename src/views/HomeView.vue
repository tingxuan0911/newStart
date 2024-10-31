<script setup lang="ts">
import { ref, toRef } from "vue";
import { RouterLink, RouterView } from "vue-router";
import sideBar from "@/components/sideBar.vue";
// import headerMenu from "@/components/header.vue";
import mainModel from "@/components/mainModel.vue";
import { getCurrentInstance } from "vue";

// store
import { useSidebarStore } from "@/stores/sidebar";
const sidebarStore = useSidebarStore();
const noCollapse = toRef(sidebarStore.noCollapse); //收合功能是否開啟

const internalInstance: any = getCurrentInstance();
const $baseUrl = internalInstance.appContext.config.globalProperties.$baseUrl;
console.log($baseUrl);
</script>

<template>
  <div class="flex justify-start">
    <sideBar />

    <div class="mx-auto w-full">
      <mainModel />
    </div>
  </div>
</template>
