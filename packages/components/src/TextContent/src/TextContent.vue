<!--
 * @Author: wanxy420
 * @Description: 
 * @Date: 2025-05-09 10:52:17
 * @LastEditTime: 2025-05-09 10:53:35
 * @FilePath: \wanxy-design\packages\components\src\TextContent\src\TextContent.vue
-->
<script setup lang="ts">
defineOptions({
  name: "WxyTextContent",
});
</script>

<template>
  <div class="wxy-text-content">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import url(./style/index.scss);
</style>
