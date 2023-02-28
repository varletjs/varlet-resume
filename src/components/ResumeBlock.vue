<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
})
</script>

<template>
  <div class="resume-block">
    <var-paper class="resume-block-paper" :elevation="2" :radius="4">
      <div class="resume-block-header" v-if="title || subtitle">
        <slot name="title">
          <div class="resume-block-title">
            {{ title }}
          </div>
        </slot>
        <slot name="subtitle">
          <div class="resume-block-subtitle">
            {{ subtitle }}
          </div>
        </slot>
      </div>
      <slot />
    </var-paper>
  </div>
</template>

<style lang="less" scoped>
.resume-block {
  width: 100%;
  margin-top: 30px;

  &-paper {
    padding: 20px;
  }

  &-header {
    padding-bottom: 18px;
    padding-left: 4px;
    margin-bottom: 25px;
    border-bottom: thin solid #ddd;
  }

  &-title {
    font-size: 18px;
  }

  &-subtitle {
    font-size: 14px;
    color: #aaa;
    margin-top: 6px;
  }
}
</style>

<style>
.resume-block .resume-block-item:last-child {
  border-bottom: none;
}
</style>
