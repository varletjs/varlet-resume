<script setup lang="ts">
defineProps({
  size: {
    type: Number,
  },
})
</script>

<template>
  <div class="resume-blank" :style="{ '--size': `${size}px` }"></div>
</template>

<style lang="less" scoped>
@media print {
  .resume-blank {
    height: var(--size);
  }
}
</style>
