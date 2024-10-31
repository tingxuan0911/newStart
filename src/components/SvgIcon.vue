<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
});

const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => `svg-icon ${props.className}`);
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
