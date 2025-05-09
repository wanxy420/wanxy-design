---
sider_text="Json数据展示"
---

<script setup>
const jsonData = {
  key1: "111",
  key2: "222",
  object1: {
    key1: "ksdghsdg",
    object1: {
      arrary1: [1, 2, 3, 4, 5],
      arrary2: [
        { key: 1, value: 111 },
        { key2: 2, value: 222 },
      ],
    },
  },
  arrary1: [1, 2, 3, 4, 5],
};
</script>

# Json 数据展示

对项目中 Json 数据展示进行封装

## 基础使用

基础使用

<wxy-json-view :json="jsonData"></wxy-json-view>

```vue
<template>
  <wxy-json-view :json="jsonData"></wxy-json-view>
</template>

<script setup>
const jsonData = {
  key1: "111",
  key2: "222",
  object1: {
    key1: "ksdghsdg",
    object1: {
      arrary1: [1, 2, 3, 4, 5],
      arrary2: [
        { key: 1, value: 111 },
        { key2: 2, value: 222 },
      ],
    },
  },
  arrary1: [1, 2, 3, 4, 5],
};
</script>
```
