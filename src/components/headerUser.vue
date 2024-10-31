<script setup lang="ts">
import { ref } from "vue";
import svgIcon from "@/components/SvgIcon.vue";
const userInfoShow = ref<boolean>(false);
</script>

<template>
  <div
    class="flex items-center px-[14px] w-fit h-[36px] border-l-2 border-[#d8d6de]"
  >
    <div class="relative">
      <svg-icon name="message" class="message" />
      <div class="remind">2</div>
    </div>
    <div class="relative">
      <svg-icon name="notify" class="notify" />
      <div class="remind">300</div>
    </div>
    <div
      @click="userInfoShow = !userInfoShow"
      class="relative flex justify-center items-center ml-[14px]"
    >
      <div>
        <div class="font-bold">test001</div>
        <div>admin</div>
      </div>
      <svg-icon
        name="user"
        class="ml-[8px] w-[36px] h-[36px] fill-[--color-blue]"
      />

      <!-- userInfo -->
      <div
        v-if="userInfoShow"
        class="boxShadow absolute bottom-[-85px] right-0 w-[164px] font-bold cursor-pointer"
      >
        <div class="userinfo">帳號管理</div>
        <div class="userinfo">登 出</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.message,
.notify {
  margin: 0 2px;
  padding: 8px;
  width: 30px;
  height: 30px;
}
.remind {
  position: absolute;
  top: -13px;
  left: 13px;
  padding: 0 6px;
  color: white;
  font-size: 12px;
  border-radius: 9999px;
  background-color: var(--color-orange);
  text-align: center;
}
.userinfo {
  height: 40px;
  padding: 9px 0;
  border: solid 1px #d8d6de;
  background-color: white;
  text-align: center;
  &:hover {
   transition-duration: 0.2s;
    background-color: #eaeaeb;
  }
}
</style>
