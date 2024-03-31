<script setup lang="ts">
function handlePrint() {
  window.print()
}

function handleGithub() {
  window.open('https://github.com/varletjs/varlet-resume')
}
</script>

<template>
  <var-app-bar
    image="@/assets/material.jpg"
    :elevation="0"
  >
    <template #right>
      <div class="resume-app-bar-right">
        <var-space>
          <var-button
            class="print-disabled"
            type="danger"
            :elevation="0"
            icon-container
            round
            @click="handlePrint"
          >
            <var-icon name="download" :size="30" />
          </var-button>
          <var-button
            class="print-disabled"
            type="danger"
            :elevation="0"
            icon-container
            round
            @click="handleGithub"
          >
            <var-icon name="github" :size="30" />
          </var-button>
        </var-space>
      </div>
    </template>

    <template #content>
      <div class="resume-app-bar-content">
        <div class="resume-app-bar-content-inner">
          <var-row :gutter="20">
            <var-col :span="8" :xs="24" justify="center">
              <var-avatar
                class="resume-app-bar-content-avatar"
                :size="180"
                bordered
                src="@/assets/avatar.jpg"
              />
            </var-col>
            <var-col direction="column" :span="16" :xs="24">
              <div class="resume-app-bar-name">你的名字</div>
              <div class="resume-app-bar-job">期望的岗位</div>
              <div class="resume-app-bar-description">
                介绍一下你自己，真诚一点，不要过分谦虚，也不要张狂。
                介绍一下你自己，真诚一点，不要过分谦虚，也不要张狂。
                介绍一下你自己，真诚一点，不要过分谦虚，也不要张狂。
                介绍一下你自己，真诚一点，不要过分谦虚，也不要张狂。
              </div>
            </var-col>
          </var-row>
        </div>
      </div>
    </template>
  </var-app-bar>
</template>

<style lang="less" scoped>
.resume-app-bar {
  &-right {
    padding-top: 20px;
    padding-right: 20px;
  }

  &-content {
    display: flex;
    justify-content: center;
  }

  &-content-inner {
    width: 760px;
    padding: 40px 20px 80px;
  }

  &-name {
    font-size: 36px;
    margin-top: 10px;
    font-weight: bold;
    color: #333;
  }

  &-job {
    font-size: 20px;
    margin-top: 6px;
    padding: 0 3px;
    color: #333;
  }

  &-description {
    font-size: 15px;
    margin-top: 20px;
    color: #333;
    line-height: 24px;
    padding: 0 3px;
  }
}
</style>
