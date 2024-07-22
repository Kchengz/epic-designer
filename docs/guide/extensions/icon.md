# Icon 图标

:::tip Icon 图标
`EpicDesigner` 同时支持使用Iconify或者Iconfont图标库
:::

## Iconify

使用Iconify扩展图标只需参照Iconify文档中SVG in CSS -> NoCode方式添加
[查看Iconify文档](https://iconify.design/docs/usage/css/no-code/)

### 应用程序接口

Iconify API 是面向开发人员的开源托管（或自托管）服务。Public Iconify API 服务器托管来自 150 多个开源图标集的 200,000 多个图标。

公共 API 可在 https://api.iconify.design 上获得。

除其他功能外，它可以为图标生成 CSS。CSS 的查询为`/{prefix}.css?icons={icons}`，其中：

- "{prefix}“是图标集前缀。若要为多个图标集中的图标生成 CSS，请为每个图标集发送单独的查询。
- "{icons}“是图标名称列表，用逗号分隔。

### 用法

- 通过链接直接引入Iconify图标URL，如上所述（请参阅以下示例）。

  ```<link rel="stylesheet" href="https://api.iconify.design/mdi.css?icons=ab-testing">```

- 或者拷贝所有生成的CSS，将其复制到剪贴板，粘贴到项目的.css文件中。

### 示例

#### 第一步：选择加载相应图标

[/mdi.css?icons=ab-testing](https://api.iconify.design/mdi.css?icons=ab-testing)

```css
.icon--mdi {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.icon--mdi--ab-testing {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='M4 2a2 2 0 0 0-2 2v8h2V8h2v4h2V4a2 2 0 0 0-2-2zm0 2h2v2H4m18 9.5V14a2 2 0 0 0-2-2h-4v10h4a2 2 0 0 0 2-2v-1.5a1.54 1.54 0 0 0-1.5-1.5a1.54 1.54 0 0 0 1.5-1.5M20 20h-2v-2h2zm0-4h-2v-2h2M5.79 21.61l-1.58-1.22l14-18l1.58 1.22Z'/%3E%3C/svg%3E");
}
```

#### 第二步：获取类名，应用组件注册配置

使用时填写图标类名
类名规则`icon--{prefix}--{iconName}`

```css
icon: 'icon--mdi--ab-testing'
```

## Iconfont

使用Iconfont扩展图标只需参照Iconfont文档中font-class方式添加

[查看Iconfont文档](https://www.iconfont.cn/help/detail?spm=a313x.help_detail.i3.28.550b3a817jMvMr&helptype=code)

### font-class 引用

font-class是unicode使用方式的一种变种，主要是解决unicode书写不直观，语意不明确的问题。

与unicode使用方式相比，具有如下特点：

- 兼容性良好，支持ie8+，及所有现代浏览器。
- 相比于unicode语意明确，书写更直观。可以很容易分辨这个icon是什么。
- 因为使用class来定义图标，所以当要替换图标时，只需要修改class里面的unicode引用。
- 不过因为本质上还是使用的字体，所以多色图标还是不支持的。

使用步骤如下：

#### 第一步：拷贝项目下面生成的fontclass代码：

```js
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css
```

#### 第二步：挑选相应图标并获取类名，应用组件注册配置

```css
icon: 'icon-xxx'
```


## 内置Icon

> 以下为`EpicDesigner`默认内置的Icon

<iframe width="720px" height="2160px" frameborder="0" src="/icons/demo_index.html">

</iframe>
