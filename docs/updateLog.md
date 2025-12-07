## 1.1.1（2025-12-07）
### 🐛 Bug Fixes
- 修复deepToRaw无法处理Ref对象类型问题
- 修复组件绑定数据为对象类型时，更新数据导致组件重新渲染问题
- 修复element-plus属性编辑器输入框光标异常跳转问题

## 1.1.0（2025-11-27）
【重要】为提供更灵活的按需引入能力，UI 组件包现已独立编译发布：
```
@epic-designer/antd
@epic-designer/element-plus
@epic-designer/naive-ui
```
>请参考[快速上手文档](/guide/start/quick-start.html#选择-ui-组件库)了解新的组件引入方式

pluginManager 插件管理器已全面重构，功能模块更加清晰：
```
pluginManager.component.*      // 组件相关功能
pluginManager.panel.*         // 面板相关功能  
pluginManager.publicMethods.* // 公共方法集合
```
> 详细了解请参阅[pluginManager 插件管理器文档](/guide/utils/pluginManager.html#主要变更内容)

### ✨ Feat
- 支持通过pluginManager对象修改默认图片上传、文件上传组件的默认上传地址
- 支持通过pluginManager对象传入请求的headers参数
- 新增showHiddenItems属性控制设计区隐藏组件的显示状态

### ✨ Refactor
- 重构 UI 组件包发布策略
- 优化插件管理器，将相关功能分别被组织到 component、panel、publicMethods 对象中

### 🐛 Bug Fixes
- 修复注册扩展组件缺少config配置时，导致设计器报错问题
- 修复表单name值不等于default时回显数据异常问题
- 修复在EpicNode、form组件使用designerProps变量导致的警告问题
- 修复wheel事件监听导致的passive警告问题

## 1.0.5（2025-10-17）

### 🐛 Bug Fixes

- 修复表单项输入数据后校验不通过的问题
- 修复组件属性配置组件中存在函数时，使用deepClone函数深拷贝componentSchema数据异常报错问题

## 1.0.4（2025-10-15）
### ✨ Feat
- MonacoEditor组件添加 allowFullscreen 属性控制全屏按钮显示
- 在pluginManager中添加全局状态管理功能
- 新增UI全局提示函数
- EActionEditor 为所有组件添加修改属性动作
- EColEditor 添加 Col 拖拽排序功能
- 新增历史操作导出导入
### ✨ Refactor
- 汉化monaco-editor编辑器
- 重构setFormData函数
- 升级VueDraggable实现设计时组件节点减少div标签包裹优化
- 将原本utils中的manager作为独立的子包管理
- 优化画布尺寸变化监听逻辑
- 优化revoke添加记录逻辑
- 优化深拷贝和获取UUID的代码
- 优化表单组件高度自适应能力
### 🐛 Bug Fixes
- 修复禁止拖拽元素渲染异常问题
- EColEditor 删除图标 name 错误无法正常显示
- 修复deepClone中structuredClone处理Proxy对象的兼容性问题
- EActionEditor 解决无法绑定多个事件的问题
- 修复Config拼写错误问题，将Confings修改为Configs

## 1.0.2（2025-07-03）
### ✨ Feat
- 新增快捷键操作
- 新增canvasMode属性设置默认画布模式
- 新增usePanel面板状态管理函数
- 新增setFormSchema函数
### ✨ Refactor
- findAllInstance函数修改为findInstanceAll
- 重构EDesigner组件，使用hooks封装逻辑函数
- 重构findSchemaById函数
- 重构useRevoke函数
### 🐛 Bug Fixes
- 修复在弹窗组件加载EDesigner组件时，画布初始化异常问题
- 修复组件初始化前调用隐藏显示侧边栏活动栏方法无效问题
- 修复EBuilder组件pageSchema默认值设置为null报错问题
- 将unocss配置文件中的排除项移入content.pipeline.exclude，以修复构建报错问题
- 修复使用 Naive UI 报错问题
- 修复使用 Navie UI 时重置表单校验找不到函数问题
- 修复其余 UI 依赖也会传递问题
- 修复图片文件上传组件校验无法正常校验问题
- 修复设计器已存在数据并已经选择组件，重新setData数据后，再点击左侧组件插入报错异常
- 修复ElementPlus上传组件删除文件后，数据未清空问题
- 修复属性标签被输入内容挤压的布局问题

## 1.0.1（2025-03-17）
### ✨ Feat
- 组件暴露schema对象,可通过find函数获取并修改组件的schema属性
- 新增findInstance、findAllInstance函数，用于获取组件实例
### ✨ Refactor
- 公共函数注册使用废弃属性时抛出警告提示
- 组件注册配置类型标注describe属性废弃,请使用description属性代替
### 🐛 Bug Fixes
- 修复执行组件方法异常问题

## 1.0.0（2025-03-17）
### ✨ Feat
- 新增支持Antd form组件 scrollToFirstError校验失败滚动到对应位置
- 动作配置大纲组件添加隐藏状态标识
- 动作配置大纲组件新增复制ID按钮
- 新增支持嵌套字段，数据字段支持user.age点分隔形式
- 新增ready生命周期,所有异步组件挂载完成后执行
- 活动栏和侧边栏新增sort排序字段
### ✨ Refactor
- 变量`checkedNode`修改为`selectedNode`
- 公共函数及组件注册配置中的变量`describe`修改为`description`
- 变量`disableHover`修改为`disabledHover`
- 默认图片上传组件返回字符串类型值,多图片以逗号分割
- 默认文件上传组件返回字符串类型,多文件以逗号分割
- 重构hover状态计算逻辑
- 重构设计区域拖拽禁用逻辑
### 🐛 Bug Fixes
- 修复组件无法绑定事件问题
- 修复依赖嵌套问题
- 修复校验编辑组件内存溢出问题
- 修复活动栏和侧边栏的显隐缺失响应式的问题
- 修复hover状态标识无效问题
- 禁止按钮组件在设计区域触发事件
- 修复find函数无法正确获取组件实例问题
- 修复组件拖拽后组件选中及悬停框失效问题
- 修复表单校验编辑组件无法回显数据问题
- 修复antd表单组件先校验后赋值问题
- 修复复制id按钮hover时无法显示问题

## 0.9.30（2025-01-15）

### ✨ Feat
- 新增样式隔离容器类名 `epic-scoped`，用于限定 UnoCSS 生成的样式
- 选中组件后的小按钮物件新增选中当前组件的父组件功能
- find函数支持通过组件属性字段查找
- 新增findAll方法，可查询所有匹配组件实例，返回数组
- 设计器隐藏头部时，在工具栏添加预览及保存按钮
- 新增imported导入数据事件
### ✨ Refactor
- 重构pageSchema初始化方式
- 优化find查找功能，只要匹配到一个组件就结束查找并返回数据
### 🐛 Bug Fixes
- 修复设计界面page组件高度未占满画布高度问题

## 0.9.28（2024-12-25）
### 🐛 Bug Fixes
- 修复设计界面无法使用鼠标滚动问题
- 修复事件配置中，由于组件相同导致没有重新渲染的问题

## 0.9.27（2024-12-23）
### ✨ Feat
- 自定义组件可以通过注册配置扩展样式面板
- 新增draggable属性，设置是否允许拖拽画布，默认为true
### ✨ Refactor
- 移除setDateLocale函数,设置antd组件国际化不再依赖该函数
### 🐛 Bug Fixes
- 修复getData数据后添加数据并重新setData数据，只更新数据但是设计区域无渲染更新
- 修复未页面未获取焦点时，按ctrl键+鼠标滚轮缩放画布异常问题
- 修复画布切换为mode、pad时，无法正常回显数据问题
- 修复数据回显案例点击清空后，撤销无效问题
- 修复classList不存在报错问题
- 修复设置禁止拖拽画布时底部滚动条未隐藏问题

## 0.9.26（2024-11-27）
### ✨ Feat
- EDesigner组件新增hidePreviewConfirm属性，隐藏预览表单数据按钮
- 设计界面新增节点遮罩，防止误触发节点事件
### 🐛 Bug Fixes
- 解决dynamicFormItem组件属性透传警告问题

## 0.9.25（2024-10-16）
### 🐛 Bug Fixes
- 修复antd组件校验异常问题

## 0.9.24（2024-10-16）
### ✨ Refactor
- unocss基础单位由rem转px
### 🐛 Bug Fixes
- 修复表单校验规则编辑内存溢出问题
## 0.9.23（2024-09-21）
### ✨ Feat
- EBuilder组件新增getForms、setForms、validateAll函数
### ✨ Refactor
- 重构EBuilder组件
- 重构ENode组件，减少重复代码
### 🐛 Bug Fixes
- 修复加载数据里面包含未注册组件时报错问题
- 修复属性编辑输入中文时光标自动跳到输入字段的末尾
- 修复ts类型引入路径错误
- 修复根节点非page时,根节点判断逻辑异常问题
- 修复单表单模式时，传入defaultSchema无效
- 修复数据回显时未进行深拷贝，导致源数据被修改问题

## 0.9.22（2024-09-07）
### ✨ Feat
- 右侧属性窗口，没有设置label的将不显示label
- 大纲组件添加隐藏状态标识
### ✨ Refactor
- 调整toolbar样式
### 🐛 Bug Fixes
- lint 样式重复定义
- 修正 Safari 下拖拽组件和画布失效问题、Chrome 下鼠标出现地球的问题、Safari 下拖拽阴影问题
- formMode 为 true 的时候，大纲tree 拖拽到外部导致节点丢失问题
- 修复缩放设置组件无法高亮选项
- 修复禁止缩放时切换设备无效问题

## 0.9.21（2024-08-21）
### ✨ Refactor
- 大纲显示组件id
- 重构预览组件,查看数据时验证所有表单组件
### 🐛 Bug Fixes
- 修复getUUID函数无法通过生成长度测试问题
- 修复重新加载组件，历史记录未清空问题
- 修复设计器组件切换表单模式时导致其他非表单模式的表单组件也被隐藏问题
- 修复不在表单内的输入组件不可输入，导致组件无法正常交互问题
- 解决项目中也使用monaco-editor，导致monaco-editor打包两次问题

## 0.9.20（2024-08-04）
### ✨ Feat
- EDesigner新增sourceCodeReadOnly属性设置源码面板为只读状态
### ✨ Refactor
- 优化画布自动缩放功能
### 🐛 Bug Fixes
- 修复在属性面板编辑后再使用源码面板编辑，属性面板无法正常回显数据

## 0.9.19（2024-07-23）
### ✨ Feat
- EDesigner新增切换单表单模式属性formMode
- 组件注册配置新增sort排序字段
- 组件Icon支持iconify图标库扩展
### ✨ Refactor
- 切换内置图标
### 🐛 Bug Fixes
- 修复文档搜索功能无法使用问题

## 0.9.18（2024-07-13）
### 🐛 Bug Fixes
- 修复点击清空按钮按钮无法正常重置设计器数据问题
- 修复公共函数和组件函数逻辑异常导致页面卡主问题
- 修复setAttr函数组件componentProps属性undefined导致异常报错问题

## 0.9.17（2024-07-11）
### ✨ Refactor
- EBuilder组件setData仅修改传入的字段值
### 🐛 Bug Fixes
- 修复表单组件调整表单布局为vertical时参数类型警告问题
- 修复动作配置弹出框icon显示异常问题
- 修复表单存在校验信息时,数据回显后校验信息保持校验失败状态
- 修复pageSchema中包含'#'字符时,导出数据被截断的问题
- 修复表单内联模式标签文本与组件自动换行问题
- 修复自定义函数逻辑异常导致页面卡主问题

## 0.9.16（2024-06-14）
### 🐛 Bug Fixes
- 修复elementPlus/naiveUi表单数据回显无效问题

## 0.9.15（2024-06-14）
### ✨ Feat
- EDesigner组件暴露预览方法
- EBuilder组件新增formData属性用于表单数据回显
### 🐛 Bug Fixes
- 修复选项管理拖拽后无法新增选项问题
- 修复级联选项管理，子选项拖拽后数据重复问题
- 修复扩展iconfont无效问题
- 修复ant design vue 升级4.2.3后formItem的label部分场景显示异常
- 修复预览时点击组件label会切换选中组件问题

## 0.9.14（2024-05-25）
### ✨ Refactor
- 组件label统一修改为标题
### 🐛 Bug Fixes
- 修复弹出builder组件图标异常问题

## 0.9.13（2024-05-23）
### 🐛 Bug Fixes
- 修复弹出窗口内组件图标异常问题

## 0.9.12（2024-05-20）

### ✨ Feat
- 重构注册配置接口，新增editConstraints约束配置对象
- antd日期选择器新增更多日期类型
- antd组件属性补充
- elementPlus组件属性补充
### ✨ Refactor
- 重构注册配置接口，新增editConstraints约束配置对象
- 调整图标font-class影响范围,防止与项目其他的icon冲突
- 将page组件name属性移至componentProps内
### 🐛 Bug Fixes
- 修复暗黑主题在组件渲染之前设置，导致异常问题
- 修复isDark状态错误问题

## 0.9.11（2024-05-13）

调整注册配置，将’icon‘属性移至 ComponentConfigModel 接口的‘defaultSchema’对象之外
影响：自定义组件，请自行调整注册配置中icon位置

### ✨ Feat
- 新增暗黑主题,添加css变量

### 🐛 Bug Fixes

- 修复根容器的隐藏按钮点击报错
- 修复elementPlus Radio组件警告问题
- 修复EDesigner组件初始化报错null问题

## 0.9.10（2024-05-03）

### ✨ Feat
- 日期选择器调整类型时自动调整数据格式

## 0.9.9（2024-04-27）

### ✨ Feat
- 注册配置新增fixedField字段锁定表单项field不添加UUID
- 选中元素不在可视区时自动滚动到相应位置
- 新增hideActivitybar、hideRightSidebar方法
- antd级联组件新增回填方式属性
- element新增文本域组件

## 0.9.8（2024-04-18）

### 🐛 Bug Fixes

- 修复打开动作面板后导致无法正常选中元素问题
- 修复antdUI设置数字输入框默认值为string类型问题

## 0.9.7（2024-04-17）

### ✨ Feat

- EDesigner新增toggleDeviceMode事件
- switch组件自动添加默认值
- 新增lockDefaultSchemaEdit属性，锁定默认组件是否可复制删除
- 新增title属性
- 右侧面板新增折叠按钮
- 输出结果新增弹出框展示
- 校验组件添加ruleType属性，设置默认校验规则类型

### 🐛 Bug Fixes

- 修复初始化时未构建自定义函数问题

## 0.9.6（2024-04-08）

### ✨ Feat

- EDesigner新增defaultSchema属性
- 新增getFormSchemas函数

## 0.9.5（2024-04-02）

### ✨ Feat

- 自定义函数epic对象可调用pluginManager对象

### 🐛 Bug Fixes

- 修复未编译epic-designer包模块时，无法正常启动项目
- 修复EInputSize组件在某些情况下单位显示不正常以及无法输入部分数字的问题
- 修复getFormFields函数无法正常查询问题
- 修复设计模式修改默认值时，设计视图无法更新问题
- 修复公共函数无法获取触发对象问题
- 修复设置值表单项与设计元素不一致问题
- 修复组件默认hidden为true时，无法获取组件实例调用setAttr函数来显示组件

## 0.9.4（2024-03-23）

### ✨ Feat

- [pageManager对象添加find方法](https://github.com/Kchengz/epic-designer/commit/c7355ad981c644e8fa51e628ceec35fcb3065be5)
- [EBuilder新增disabled属性，禁用所有输入项](https://github.com/Kchengz/epic-designer/commit/f57204f66243d0bfa80f84002570df9e7cf9c8a8)
- [builder组件新增getFormInstance方法函数](https://github.com/Kchengz/epic-designer/commit/b54e679d7311d335169f60fa93a6d7a375124616)

### ✨ refactor

- antd v3 v4版本兼容合并

### 🐛 Bug Fixes

- [修复setAttr方法设置组件属性时会直接修改componentSchema问题](https://github.com/Kchengz/epic-designer/commit/b94a30e802e8730a6dc238cad0a52e0e0c3bb0eb)
- [修复同时两个designer时，第二个设计器选择异常问题](https://github.com/Kchengz/epic-designer/commit/127e107beebaaa8c65fe44d5cf95e192700bce9b)
- [修复缩放计算出现Infinity问题](https://github.com/Kchengz/epic-designer/commit/f3d2954a9e1e669b35d44cfb692e1f7ac8e00181)
- [Antd(input)没有显示最大字符数](https://github.com/Kchengz/epic-designer/commit/88d63bbaecd371ab67884c64f7b6f6eaf30e3039)

## 0.9.3（2024-03-14）

### 🐛 Bug Fixes

- [修复使用EpicDesigner时，提示缺少不必要的依赖问题](https://github.com/Kchengz/epic-designer/commit/c17c5c58bdb3e61d2a0a7b8d021b27a1399dd956)
- [修复ui组件初始化未完成就渲染页面的异常问题](https://github.com/Kchengz/epic-designer/commit/f4e711ef82809ab60fc6e1a7dc6f31f976dbcb52)

## 0.9.1（2024-03-13）

本次更新重做了组件分组、ui设置及内部变量名称修改

pluginManager管理器移除~~setComponentGroup~~、~~addComponentGroup~~方法，
新增`setComponentGroupNameMap`、`clearComponentGroupNameMap`、`setSortedGroups`、`clearSortedGroups`、`hideComponent`、`showComponent`等方法

### ✨ Feat

- [新增element plus组件国际化支持](https://github.com/Kchengz/epic-designer/commit/b34a4ba6697e796f7dcd74b414d029eb406a2da5)
- [新增antdv国际化方案](https://github.com/Kchengz/epic-designer/commit/e6350ed0531cad040cb885fe10628515653c7325)
- [事件编辑折叠面板自动展开已配置动作的面板](https://github.com/Kchengz/epic-designer/commit/17fe46a4cbf14a8bc06e2eebcb19b18ec0334481) [#7](https://github.com/Kchengz/epic-designer/issues/7)
- [新增分组排序设置函数setSortedGroups](https://github.com/Kchengz/epic-designer/commit/25d67af7c3f4d8631bf50093bf037216dc0ac495)

### ✨ refactor

- [组件配置添加groupName 属性](https://github.com/Kchengz/epic-designer/commit/0e2abe80e22903d69e5268e41e1eab24129269e1)
- [重构组件分组管理，组件注册配置可设置分组](https://github.com/Kchengz/epic-designer/commit/2e6a5e4f2496edc9f45d1d4b2a43a94e700abe85)
- [将record字段重命名为componentSchema](https://github.com/Kchengz/epic-designer/commit/b9def1bee0374f1a56cc360d4697633c5feac8fb)
- [将NodeItem类型重命名为ComponentSchema并添加类型注释](https://github.com/Kchengz/epic-designer/commit/af1f5bbcfb783f75d0beb9d5a1ed4e7701fc2c63)
- [调整表单组件name至componentProps属性内](https://github.com/Kchengz/epic-designer/commit/6b18519df7832a7a7798e5e9dacefff13fb80e27)

### 🐛 Bug Fixes

- [修复AntdV3安装无效问题](https://github.com/Kchengz/epic-designer/commit/0af6a102cb3413a32e65a729a4bcf22124d9b42f)
- [修复element-plus组件无法正常渲染问题](https://github.com/Kchengz/epic-designer/commit/4b3238b140dbc67c162a85e9996839d3921315c2)

## 0.8.15（2024-01-11）

### ✨ Feat

- [新增数据查看面板](https://github.com/Kchengz/epic-designer/commit/18c0199ceaf4016b2dc70580ed28f84c03bef5ff)

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
