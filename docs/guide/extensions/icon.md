# Icon 图标

:::tip Icon 图标
`EpicDesigner` 使用Iconfont图标库，如果需要扩展图标只需参照Iconfont文档中font-class引用方式
:::

[查看Iconfont文档](https://www.iconfont.cn/help/detail?spm=a313x.help_detail.i3.28.550b3a817jMvMr&helptype=code)

## font-class 引用

font-class是unicode使用方式的一种变种，主要是解决unicode书写不直观，语意不明确的问题。

与unicode使用方式相比，具有如下特点：

- 兼容性良好，支持ie8+，及所有现代浏览器。
- 相比于unicode语意明确，书写更直观。可以很容易分辨这个icon是什么。
- 因为使用class来定义图标，所以当要替换图标时，只需要修改class里面的unicode引用。
- 不过因为本质上还是使用的字体，所以多色图标还是不支持的。

使用步骤如下：

### 第一步：拷贝项目下面生成的fontclass代码：

```js
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css
```

### 第二步：挑选相应图标并获取类名，应用组件注册配置

```css
icon: 'icon-xxx'
```


## 内置Icon

> 以下为`EpicDesigner`默认内置的Icon

<iframe width="720px" height="2160px" frameborder="0" src="/icons/demo_index.html">

</iframe>
