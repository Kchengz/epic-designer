## 0.8.15（2024-01-11）

### ✨ Feat

- [[新增数据查看面板](https://github.com/Kchengz/epic-designer/commit/18c0199ceaf4016b2dc70580ed28f84c03bef5ff)](https://github.com/Kchengz/epic-designer/commit/de558e9b0693508cec3d9bb9634a176053b12708)

### 🐛 Bug Fixes

- [修复画布宽高设置为px以外的单位不会生效的问题](https://github.com/Kchengz/epic-designer/commit/79d502c37b83247713bb203dc7f7706e12adb1f0)
- [修复校验不通过是外部的Promise保持pedding的bug](https://github.com/Kchengz/epic-designer/commit/00160a3d7ea00f7b9415c3cdff789fdced06b443)
- [修复编译后types类型文件不存在问题](https://github.com/Kchengz/epic-designer/commit/4a996ae396a39761fda6970e79cdd7fb4d6487c6)

## 0.8.13（2023-11-21）

### ✨ Feat

- [新增隐藏头部属性](https://github.com/Kchengz/epic-designer/commit/de558e9b0693508cec3d9bb9634a176053b12708)
- [新增header插槽](https://github.com/Kchengz/epic-designer/commit/8c9295ec5aa6f73b13898b9b7e005deac6ef8953)

### 🐛 Bug Fixes

- [修复上传图片图标不显示问题](https://github.com/Kchengz/epic-designer/commit/08f16cfff58adc4a09aa8489d1a48e91af0138b9)
- [修复用户扩展icon无法正常显示问题](https://github.com/Kchengz/epic-designer/commit/f3288745b694318cd0d6cfb0dbabbb1aa00e41ca)
- [修复组件ts类型缺失问题](https://github.com/Kchengz/epic-designer/commit/b91bd0e13c5e5ba3fa3c11ff7992a85ac0ca7727)

## 0.8.12（2023-11-16）

### ✨ Feat

- [新增find方法用于查找组件示例，替换getComponent](https://github.com/Kchengz/epic-designer/commit/8463a8a4e9fda261a7f42717db0a4b2da993c153)
- [导入新增简单k-form数据处理，可导入k-form数据](https://github.com/Kchengz/epic-designer/commit/1729ea0188d33cdb38243364b86c0fc533cd2d9d)

### 🐛 Bug Fixes

- [大纲树挤占动作选区](https://github.com/Kchengz/epic-designer/commit/243766ee2abdcc3a8264bc3932901b4c88ad5723)

## 0.8.10（2023-11-09）

### ✨ Feat

- 新增antdv4版本
-  新增header-right-prefix插槽

### 🐛 Bug Fixes

- 修复动作删除icon图标异常问题

## 0.8.9（2023-11-08）

### ✨ Feat

- 新增禁止拖拽属性childImmovable、immovable
- node新增内部schema数据状态，新增属性修改，属性获取方法
- 新增清空设计器数据操作
- 新增画布宽高配置
- 新增不同设备画布选型
- 新增动作组件可配置设置值
- 动作编辑新增参数缓存功能

### 🐛 Bug Fixes

- 修复先赋值表单初始化node组件导致数据被重置问题
- 修复表单赋值提示表单不存在问题
- 修复mounted生命周期无法set/get表单数据问题
- 修复属性编辑组件在切换组件时无法显示数据异常问题
- 修复大纲树拖拽操作异常问题
......

## 0.8.8（2023-10-08）

### ✨ Feat

- 表单组件新增动作
- 大纲目录树可以拖拽节点

### 🐛 Bug Fixes

- 修复大纲树可拖拽至页面根节点之外的bug

## 0.8.7（2023-09-16）

### ✨ Feat

- 新增getFormFields获取表单字段
- 新增disabledZoom属性，可禁用画布缩放功能
- 新增e-icon组件
- antd/radio组件新增属性配置
- eTree组件新增查询过滤

### 🐛 Bug Fixes

- 修复复杂布局组件id重复问题

- 修复非根节点使用指令警告问题

## 0.8.5（2023-08-10）

### ✨ Feat

- 输入组件添加getValue动作

- 输入组件添加setValue动作

- 补充输入类型组件事件及动作


## 0.8.4（2023-08-03）

### 🐛 Bug Fixes

- 修复modal组件抛出警告问题

- 修复非根节点使用指令警告问题


## 0.8.3（2023-08-03）

### ✨ Feat

- 添加antdUI/slider组件
- antdUI日期选择器增加时间选择配置

### ✨ refactor

  - 更新图标

### 🐛 Bug Fixes

- 修复拖拽组件生成id相同且数据没有深拷贝问题

- 修复拖拽elementPlus/number组件警告问题

  

## 0.0.82（2023-07-25）

###  (破坏性更新) Breaking changes

- 组件名称修改为epic-designer，项目架构使用monorepo（单仓库多项目）形式

### ✨ Feat
- header新增插槽
- monacoEditor添加json编辑功能
- 动作配置区域添加自定义函数编辑区域
- 补充组件属性配置
- 新增工具栏组件，添加缩放控制组件

......

### ✨ refactor

- 重构项目架构
- 重构动作配置功能，新增拖拽动作功能

......

### 🐛 Bug Fixes

- 修复切换组件时动作无法配置问题
- 修复切换动作主体时，动作绑定异常问题
- 修改k-input-size重复渲染元素问题
- 修复组件缺少兼容样式问题

......

## 0.0.42（2023-05-10）

- 将注册组件函数useElementPlus、useAntd、useNaiveUi改为setupElementPlus、setupAntd、setupNaiveUi
  - 影响：之前已经使用组件的用户，需要按照文档修改注册组件方式及引入路径

### 🐛 Bug Fixes

- 修复naive ui 布局组件无法使用问题
- 修复naiveUI NColorPicker 无法显示问题
- 修复编辑组件无效问题

### ✨ refactor

- 允许重复注册组件，后注册的组件将覆盖已注册组件
- 重构ENode组件,组件配置input属性读取默认配置，新增noFormItem属性用于移除输入组件外层的formItem

## 0.0.41（2023-05-09）

- 将nodeItem的属性isInput更改为input
  - 影响：之前已经生成并保存JSON Schema 的用户，无法直接正常回显，需要手动将JSON Schema 中isInput改为input（下个版本会考虑重构向下兼容，如果觉得目前升级更新麻烦可以选择忽略该版本）
  - 原因：组件 input 属性设置为true可以很直观表达该组件类型为输入类型组件
- 更新UI注册文件目录结构
  - 影响：之前已经使用组件的用户，需要按照文档修改注册组件方式及引入路径
  - 原因：之前的UI组件注册结构混乱，调整之后更合理

### ✨ Feat

- 新增NaiveUI

## 0.0.36（2023-05-08）
### ✨ Feat
- designer组件新增setData方法
- designer组件新增getData方法
- designer组件新增reset方法
### 🐛 Bug Fixes
- 修复deepCompareAndModify更改数组时导致数据修改不完全问题


## 0.0.35（2023-04-29）
### 🐛 Bug Fixes
- 修复撤销重做失效bug
- 编译ts类型无法自动推断类型
- 修复element plus 编译后异步组件无法加载问题
- 修复组件属性赋值null报错问题
- 修复组件属性编辑异常问题

...