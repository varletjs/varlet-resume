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
    image-linear-gradient="to right top, rgba(72, 151, 221, 1) 0%, rgba(47, 0, 208, 0.1) 100%"
  >
    <template #right>
      <var-button class="print-disabled" style="margin-top: 2px; margin-right: 4px;" round text color="transparent" text-color="#fff" @click="handlePrint">
        <var-icon name="download" :size="30" />
      </var-button>
      <var-button class="print-disabled" style="margin-right: 10px" round text color="transparent" text-color="#fff" @click="handleGithub">
        <var-icon name="github" :size="30" />
      </var-button>
    </template>

    <template #content>
      <div class="resume-app-bar-content">
        <div class="resume-app-bar-content-inner">
          <var-row :gutter="20">
            <var-col :span="8" :xs="24" justify="center">
              <var-avatar
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
  
  &-content {
    display: flex;
    justify-content: center;
  }

  &-content-inner {
    width: 760px;
    padding: 30px 20px 70px;
  }

  &-name {
    font-size: 36px;
    margin-top: 10px;
    font-weight: bold;
  }

  &-job {
    font-size: 20px;
    margin-top: 6px;
    padding: 0 3px;
  }

  &-description {
    font-size: 15px;
    margin-top: 20px;
    color: #eee;
    line-height: 24px;
    padding: 0 3px;
  }
}
</style>
