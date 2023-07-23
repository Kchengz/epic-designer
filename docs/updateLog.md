## 0.0.42（2023-05-10）

###  (破坏性更新) Breaking changes

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

###  (破坏性更新) Breaking changes

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