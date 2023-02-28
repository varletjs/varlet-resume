<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  {
    label: 'HTML',
    value: 100,
  },
  {
    label: 'CSS',
    value: 100,
  },
  {
    label: 'Javascript',
    value: 100,
  },
  {
    label: 'Typescript',
    value: 80,
  },
  {
    label: 'Nodejs',
    value: 100,
  },
  {
    label: 'Vue',
    value: 100,
  },
  {
    label: 'React',
    value: 60,
  },
  {
    label: 'React Native',
    value: 60,
  },
  {
    label: 'Electron',
    value: 60,
  }
])
</script>

<template>
  <resume-block title="技能自评">
    <var-row class="resume-skills">
      <var-col
        class="resume-skills-chart"
        direction="column"
        align="center"
        v-for="s in skills"
        :key="s.label"
        :span="8"
      >
        <var-progress
          mode="circle"
          label
          line-width="5"
          :value="s.value"
          :size="74"
        >
          <span class="resume-skills-value">{{ s.value }}</span>
        </var-progress>
        <span class="resume-skills-label">{{ s.label }}</span>
      </var-col>
    </var-row>

    <resume-fill :size="65"/>
  </resume-block>
</template>

<style lang="less" scoped>
.resume-skills {
  width: 100%;
  margin-top: 20px;

  &-paper {
    padding: 20px;
  }

  &-title {
    font-size: 18px;
    padding-bottom: 18px;
    padding-left: 2px;
    margin-bottom: 30px;
    border-bottom: thin solid #ddd;
  }

  &-label {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }

  &-value {
    font-size: 16px;
  }

  &-chart {
    margin: 10px 0;
  }
}
</style>
