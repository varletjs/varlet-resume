<template>
  <div class="resume-profile">
    <var-row :gutter="20">
      <var-col justify="center" :span="12" :xs="24">
        <var-paper class="resume-profile-paper" :elevation="2" :radius="4">
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-cake class="resume-profile-icon" />
              <span>出生日期: 90后已然成为老人家了</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-school class="resume-profile-icon" />
              <span>学校: 野鸡大学也得写上</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-calendar class="resume-profile-icon" />
              <span>工作年限: 今年这行情多少年都没用</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-account-group class="resume-profile-icon" />
              <span>期望岗位: 前端开发工程师</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-cash class="resume-profile-icon" />
              <span>期望薪资: 1k</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0">
            <div class="resume-profile-cell">
              <icon-city class="resume-profile-icon" />
              <span>期望城市: 我选择缩在江苏无锡</span>
            </div>
          </var-cell>
        </var-paper>
      </var-col>

      <var-col :span="12" :xs="24">
        <var-paper class="resume-profile-paper" :elevation="2" :radius="4">
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-phone class="resume-profile-icon" />
              <span>手机: 千万别写错了！！！</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-email class="resume-profile-icon" />
              <span>邮箱: 听说QQ邮箱会让人看不起</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-tencent class="resume-profile-icon" />
              <span>QQ: 年轻人喜欢用QQ?</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-wechat class="resume-profile-icon" />
              <span>微信: 老年人喜欢用微信?</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0" border>
            <div class="resume-profile-cell">
              <icon-post class="resume-profile-icon" />
              <span>掘金: 有出彩的文章可以贴上</span>
            </div>
          </var-cell>
          <var-cell :border-offset="0">
            <div class="resume-profile-cell">
              <icon-github class="resume-profile-icon" />
              <span>Github: 经常参与开源贡献会加分的</span>
            </div>
          </var-cell>
        </var-paper>
      </var-col>
    </var-row>
  </div>
</template>

<style lang="less" scoped>
.resume-profile {
  width: 100%;

  &-paper {
    width: 100%;
    margin-top: 30px;
  }

  &-cell {
    display: flex;
    align-items: center;
  }

  &-icon {
    width: 22px;
    margin-right: 10px;
    fill: var(--color-primary)
  }
}
</style>
