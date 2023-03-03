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
  <div class="resume-block-compact-item">
    <slot name="description">
      <div class="resume-block-compact-item-title" v-if="title">
        {{ title }}
      </div>
    </slot>
    <slot name="description">
      <div class="resume-block-compact-item-description" v-if="description">
        {{ description }}
      </div>
    </slot>
    <slot />
  </div>
</template>

<style lang="less" scoped>
.resume-block-compact-item {
  width: 100%;
  margin-top: 10px;
  padding: 0 4px 10px;
  border-bottom: thin dashed #ddd;

  &-title {
    font-size: 15px;
  }

  &-description {
    font-size: 14px;
    color: #888;
    margin-top: 10px;
  }
}
</style>
