<script setup lang="ts">
defineProps({
  size: {
    type: Number,
  },
})
</script>

<template>
  <div class="resume-fill" :style="{ height: `${size}px` }"></div>
</template>
