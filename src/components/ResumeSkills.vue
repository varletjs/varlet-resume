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
          :line-width="8"
          :value="s.value"
          :size="100"
        >
          <span class="resume-skills-value">{{ s.value }}</span>
        </var-progress>
        <span class="resume-skills-label">{{ s.label }}</span>
      </var-col>
    </var-row>
  </resume-block>
</template>

<style lang="less" scoped>
.resume-skills {
  width: 100%;
  margin-top: 20px;

  &-paper {
    padding: 20px;
  }

  &-label {
    margin-top: 20px;
    font-size: 18px;
    color: #666;
  }

  &-value {
    font-size: 20px;
  }

  &-chart {
    margin: 20px 0;
  }
}
</style>
