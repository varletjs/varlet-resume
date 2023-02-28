<template>
  <resume-app-bar />

  <div class="resume-layout">
    <resume-profile />

    <resume-blank :size="350"></resume-blank>

    <var-row :gutter="20">
      <var-col :span="12" :xs="24">
        <resume-timeline />
      </var-col>
      <var-col :span="12" :xs="24">
        <resume-skills />
      </var-col>
    </var-row>

    <resume-blank :size="350"></resume-blank>

    <resume-block title="项目经历" subtitle="**只列举部分典型项目**">
      <resume-block-item 
        title="苦熬苦夜让人无奈的低代码项目"
        description="一个苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目" 
      />
      <resume-block-item
        title="苦熬苦夜让人无奈的低代码项目"
        description="一个苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目" 
      />
      <resume-block-item 
        title="苦熬苦夜让人无奈的低代码项目"
        description="一个苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目" 
      />
      <resume-block-item 
        title="苦熬苦夜让人无奈的低代码项目"
        description="一个苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目，苦熬苦夜让人无奈的低代码项目" 
      />
    </resume-block>

    <resume-block title="开源项目" subtitle="**有高星项目很加分**">
      <resume-block-item 
        title="Varlet UI"
        description="这个简历就是用它做的，地址在这: https://github.com/varletjs/varlet" 
      />
      <resume-block-item 
        title="Varlet UI"
        description="这个简历就是用它做的，地址在这: https://github.com/varletjs/varlet" 
      />
      <resume-block-item 
        title="Varlet UI"
        description="这个简历就是用它做的，地址在这: https://github.com/varletjs/varlet" 
      />
    </resume-block>

    <resume-block title="技能清单">
      <resume-block-item 
        description="了解，就是不怎么熟练" 
      />
      <resume-block-item 
        description="熟练，用过就是熟练" 
      />
      <resume-block-item 
        description="精通，做过项目就是精通" 
      />
    </resume-block>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

@media print {
  * {
    box-shadow: none !important;
  }

  .print-disabled {
    display: none !important;
  }
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.25s, color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
}

::-webkit-scrollbar {
  display: none;
}
</style>

<style lang="less" scoped>
.resume-layout {
  padding: 0 20px 30px;
}
</style>
