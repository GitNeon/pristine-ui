# Button 按钮
常用的操作按钮

## 基础用法

使用 type、round 和 circle 来定义按钮的样式。

<BasicButton></BasicButton>

::: details 查看代码
```vue
<div class="otc">
  <div class="itc">
    <PriButton @click="onButtonClick">普通按钮</PriButton>
    <PriButton disabled>禁用按钮</PriButton>
    <PriButton type="primary">主要按钮</PriButton>
    <PriButton type="success">成功按钮</PriButton>
    <PriButton type="warning">警告按钮</PriButton>
    <PriButton type="danger">危险按钮</PriButton>
  </div>
  <div class="itc">
    <PriButton round>Round</PriButton>
    <PriButton round disabled>圆角按钮</PriButton>
    <PriButton round type="primary" disabled>圆角按钮</PriButton>
    <PriButton round type="success">圆角按钮</PriButton>
    <PriButton round type="warning">圆角按钮</PriButton>
    <PriButton round type="danger">圆角按钮</PriButton>
  </div>
  <div class="itc">
    <PriButton circle>圆</PriButton>
    <PriButton type="primary" circle>形</PriButton>
    <PriButton type="success" circle>按</PriButton>
    <PriButton type="info" circle>钮</PriButton>
  </div>
</div>
```
:::

## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

<DisabledButton></DisabledButton>

::: details 查看代码
```vue
<div class="otc">
  <div class="itc">
    <PriButton @click="onButtonClick">普通按钮</PriButton>
    <PriButton disabled>禁用按钮</PriButton>
    <PriButton disabled type="primary">主要按钮</PriButton>
    <PriButton disabled type="success">成功按钮</PriButton>
    <PriButton disabled type="warning">警告按钮</PriButton>
    <PriButton disabled type="danger">危险按钮</PriButton>
  </div>
  <div class="itc">
    <PriButton disabled round>Round</PriButton>
    <PriButton round disabled>圆角按钮</PriButton>
    <PriButton round type="primary" disabled>圆角按钮</PriButton>
    <PriButton round type="success" disabled>圆角按钮</PriButton>
    <PriButton round type="warning" disabled>圆角按钮</PriButton>
    <PriButton round type="danger" disabled>圆角按钮</PriButton>
  </div>
</div>
```
:::

## 链接按钮

模仿超链接的文字类型按钮

<LinkButton></LinkButton>

::: details 查看代码
```vue
<div class="otc">
  <div class="itc">
    <PriButton link type="primary">链接文本</PriButton>
    <PriButton link type="success">链接文本</PriButton>
    <PriButton link type="warning">链接文本</PriButton>
    <PriButton link type="danger">链接文本</PriButton>
  </div>
  <div class="itc">
    <PriButton link disabled type="primary">链接文本</PriButton>
    <PriButton link disabled type="success">链接文本</PriButton>
    <PriButton link disabled type="warning">链接文本</PriButton>
    <PriButton link disabled type="danger">链接文本</PriButton>
  </div>
</div>
```
:::

## 加载状态按钮

<LoadingButton></LoadingButton>

::: details 查看代码
```vue
<div class="otc">
  <div class="itc">
    <PriButton loading type="primary">加载中</PriButton>
    <PriButton loading>加载中</PriButton>
    <PriButton loading type="success">加载中</PriButton>
    <PriButton loading type="danger">加载中</PriButton>
  </div>
</div>
```
:::

## 调整尺寸

除了默认大小，还可以使用`large`和`small`两种值

<SizeButton></SizeButton>

::: details 查看代码
```vue
<div class="otc">
  <div class="itc">
    <PriButton size="small" type="primary">小型按钮</PriButton>
    <PriButton size="small" type="success">小型按钮</PriButton>
    <PriButton size="small" type="danger">小型按钮</PriButton>
  </div>
  <div class="itc">
    <PriButton size="normal" type="primary">常规按钮</PriButton>
    <PriButton size="normal" type="success">常规按钮</PriButton>
    <PriButton size="normal" type="danger">常规按钮</PriButton>
  </div>
  <div class="itc">
    <PriButton size="large" type="primary">大型按钮</PriButton>
    <PriButton size="large" type="success">大型按钮</PriButton>
    <PriButton size="large" type="danger">大型按钮</PriButton>
  </div>
</div>
```
:::

## Button API

### Button属性

| 属性名         | 说明         | 类型                                               |
|:------------|------------|--------------------------------------------------|
| size        | 尺寸         | large, default, small                            |
| type        | 类型         | default, primary, success, warning, danger, info |
| link        | 是否为链接按钮    | boolean                                          |
| round       | 是否为圆角按钮    | boolean                                          |
| circle      | 是否为圆形按钮    | boolean                                          |
| loading     | 是否为加载中状态   | boolean                                          |
| disabled    | 按钮是否为禁用状态  | boolean                                          |
| native-type | 原生 type 属性 | button, submit, reset                            |


<style>
table th:first-of-type {
    width: 20vw;
}
table th:nth-of-type(2) {
    width: 35vw;
}
table th:nth-of-type(3) {
    width: 45vw;
}
</style>
