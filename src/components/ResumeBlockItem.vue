<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
})
</script>

<template>
  <div class="resume-block-item">
    <slot name="title">
      <div class="resume-block-item-title" v-if="title">{{ title }}</div>
    </slot>
    <slot name="description">
      <div class="resume-block-item-description" v-if="description">
        {{ description }}
      </div>
    </slot>
    <slot />
  </div>
</template>

<style lang="less" scoped>
.resume-block-item {
  width: 100%;
  margin-top: 20px;
  padding: 0 4px 20px;
  border-bottom: thin dashed #ddd;

  &-title {
    font-size: 16px;
  }

  &-description {
    font-size: 15px;
    color: #888;
    margin-top: 10px;
  }
}
</style>
