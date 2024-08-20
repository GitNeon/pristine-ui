# Popover 气泡卡片

用于悬浮提示、便捷操作场景

## 基础用法

目前仅支持hover、click方式触发

<basic-popover></basic-popover>

::: details 查看代码
```vue
<div class="otc">
  <div class="itc">
    <PriPopover trigger="hover" position="top">
      <template #reference>
        <PriButton>hover悬浮</PriButton>
      </template>
      <template #content>
        <span>这是内容区域</span>
      </template>
    </PriPopover>
    <PriPopover trigger="click" position="top">
      <template #reference>
        <PriButton>click点击</PriButton>
      </template>
      <template #content>
        <p>这是内容区域这是内容区域这是内容区域这是内容区域这是内容区域这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
        <p>这是内容区域</p>
      </template>
    </PriPopover>
  </div>
</div>
```
:::

## 不同方位

<position-popover></position-popover>

::: details 查看代码
```vue
<div class="otc">
  <div class="itc">
    <PriPopover trigger="hover" position="top">
      <template #reference>
        <PriButton>top-上</PriButton>
      </template>
      <template #content>
        <span>这是内容区域</span>
      </template>
    </PriPopover>
    <PriPopover trigger="hover" position="right">
      <template #reference>
        <PriButton>right-右</PriButton>
      </template>
      <template #content>
        <span>这是内容区域</span>
      </template>
    </PriPopover>
    <PriPopover trigger="hover" position="bottom">
      <template #reference>
        <PriButton>bottom-下</PriButton>
      </template>
      <template #content>
        <span>这是内容区域</span>
      </template>
    </PriPopover>
    <PriPopover trigger="hover" position="left">
      <template #reference>
        <PriButton>left-左</PriButton>
      </template>
      <template #content>
        <span>这是内容区域</span>
      </template>
    </PriPopover>
  </div>
</div>
```
:::

## 动画效果

支持fade、scale、translate动画效果

<animation-popover></animation-popover>

::: details 查看代码
```vue
// 指定animation-name=[fade|scale|translate]
<PriPopover trigger="hover" position="top" animation-name="fade"> ...</PriPopover>
```
:::

## API

### 属性

| 属性名           | 说明                               | 类型      |
|:--------------|----------------------------------|---------|
| visible       | 是否可见                             | boolean |
| animationName | 动画名称，支持三种动画，fade、scale、translate | string  |
| trigger       | 触发方式，hover-悬浮、click点击触发          | string  |
| position      | 指定触发位置,默认top                     | string  |
| offset        | 弹出层的偏移量                          | boolean |
| popoverClass  | 为popover添加自定义类名                  | boolean |
| popoverStyle  | 为popover添加自定义样式                  | boolean |

<style>
table th:first-of-type {
    width: 20vw;
}
table th:nth-of-type(2) {
    width: 55vw;
}
table th:nth-of-type(3) {
    width: 25vw;
}
</style>
