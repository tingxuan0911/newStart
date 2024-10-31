<script setup lang="ts">
import { ref } from "vue";
import controlHeader from "@/components/control/controlHeader.vue";
import headerUser from "@/components/headerUser.vue";
import hamburger from "@/components/hamburger.vue";

import svgIcon from "@/components/SvgIcon.vue";
</script>

<template>
  <div >
    <div class="flex items-center">
      <hamburger />
 
      <div class="header">
        <controlHeader />
        <headerUser />
      </div>
    </div>
    <div class="main">控盤足球</div>
  </div>
</template>
<style lang="scss" scoped>

</style>
