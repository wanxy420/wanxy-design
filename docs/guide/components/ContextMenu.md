---
sider_text="右键菜单"
title="右键菜单"
---

<script setup>
  const menu1 = [
    { label: '菜单一', index: 1 }, 
    { label: '菜单二', index: 2 }, 
    { label: '菜单三', index: 3 }
  ];
  const menu2 = [
    { label: '菜单四', index: 4 }, 
    { label: '菜单五', index: 5 }, 
    { label: '菜单六', index: 6 }
  ];
  const menu = [
    { content: '菜单一', index: 1 }, 
    { content: '菜单二', index: 2 }, 
    { content: '菜单三', index: 3 }
  ];

  const handleSelect = (e) => {
    alert(JSON.stringify(e))
  }
</script>
<style>
.pr-main {
  width: 100%;
  display: flex;
  gap: 24px;
}

.context-menu {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  text-align: center;
  line-height: 200px;
  border-radius: 4px;
}
</style>

# 右键菜单

包裹着的组件可右键打开菜单进行选择

## 基础用法

基础用法

<div class="pr-main">
<ClientOnly>
  <wxy-context-menu :menu="menu1" @select="handleSelect">
    <div class="context-menu">菜单面板1</div>
  </wxy-context-menu>
</ClientOnly>
<ClientOnly>
  <wxy-context-menu :menu="menu2">
    <div class="context-menu">菜单面板2</div>
  </wxy-context-menu>
</ClientOnly>
</div>

```vue
<template>
  <div class="pr-main">
    <wxy-context-menu :menu="menu1" @select="handleSelect">
      <div class="context-menu">菜单面板1</div>
    </wxy-context-menu>

    <wxy-context-menu :menu="menu2">
      <div class="context-menu">菜单面板2</div>
    </wxy-context-menu>
  </div>
</template>

<script setup>
const menu1 = [
  { label: "菜单一", index: 1 },
  { label: "菜单二", index: 2 },
  { label: "菜单三", index: 3 },
];
const menu2 = [
  { label: "菜单四", index: 4 },
  { label: "菜单五", index: 5 },
  { label: "菜单六", index: 6 },
];

const handleSelect = (e) => {
  alert(JSON.stringify(e));
};
</script>

<style>
.pr-main {
  width: 100%;
  display: flex;
  gap: 24px;
}

.context-menu {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  text-align: center;
  line-height: 200px;
  border-radius: 4px;
}
</style>
```

## 自定义菜单内容

<div class="pr-main">
<ClientOnly>
  <wxy-context-menu :menu="menu" @select="handleSelect">
    <div class="context-menu">菜单面板</div>
    <template #item="{row}">{{ row.content }}</template>
  </wxy-context-menu>
</ClientOnly>
</div>

```vue
<template>
  <div class="pr-main">
    <wxy-context-menu :menu="menu" @select="handleSelect">
      <div class="context-menu">菜单面板</div>
      <template #item="{ row }">{{ row.content }}</template>
    </wxy-context-menu>
  </div>
</template>

<script setup>
const menu = [
  { label: "菜单一", index: 1 },
  { label: "菜单二", index: 2 },
  { label: "菜单三", index: 3 },
];
const handleSelect = (e) => {
  alert(JSON.stringify(e));
};
</script>

<style>
.pr-main {
  width: 100%;
  display: flex;
  gap: 24px;
}

.context-menu {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  text-align: center;
  line-height: 200px;
  border-radius: 4px;
}
</style>
```

## ContextMenu API

### ContextMenu Attributes

| 属性名 | 说明         | 类型  | 默认值 |
| ------ | ------------ | ----- | ------ |
| menu   | 菜单的数据组 | Array | -      |

### ContextMenu Methods

| 方法名 | 说明             | 传值                     |
| ------ | ---------------- | ------------------------ |
| select | 点击菜单单项触发 | 传递这个菜单的 item 数据 |

### ContextMenu Slots

| 插槽名  | 说明                                                      |
| ------- | --------------------------------------------------------- |
| default | 自定义默认插槽，用于可右键开启菜单的区域                  |
| item    | 自定义菜单内容插槽，用于自定义菜单内容，可用 row 获取内容 |
