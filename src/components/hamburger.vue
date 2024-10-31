<script lang="ts" setup>
import svgIcon from "@/components/SvgIcon.vue";
</script>

<template>
  <div
    class=" hamburger mr-[14px] p-[21px] w-[64px] h-[64px] bg-white boxShadow rounded-md"
  >
    <svg-icon name="hamburger" class="w-[24px] h-[24px]" />
  </div>
</template>

<style lang="scss" scoped>
// RWD
.hamburger {
  @include min-dev($m_pc) {
    display: none;
  }
}
</style>
