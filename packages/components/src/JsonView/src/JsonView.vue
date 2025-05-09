<!--
 * @Author: wanxy420
 * @Description: 
 * @Date: 2025-05-09 11:49:56
 * @LastEditTime: 2025-05-09 14:16:16
 * @FilePath: \wanxy-design\packages\components\src\JsonView\src\JsonView.vue
-->
<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "WxyJsonView",
});

const props = defineProps({
  json: {
    type: [Object, String],
  },
});

const data = computed({
  get() {
    if (typeof props.json === "string") {
      try {
        return JSON.parse(props.json);
      } catch {
        console.error("json数据格式有误!");
        return {};
      }
    }
    return props.json;
  },
  set() {},
});
</script>

<template>
  <div class="wxy-json-view">
    <span>{{ Array.isArray(data) ? "[" : "{" }}</span>
    <template v-for="(item, key) in data">
      <span
        class="array-item"
        v-if="
          Array.isArray(data) &&
          typeof item !== 'object' &&
          !Array.isArray(item)
        "
      >
        {{ item }}
      </span>
      <div
        v-else-if="typeof item !== 'object' && !Array.isArray(item)"
        class="json-view-item"
      >
        {{ key }}:<span>{{ item }}</span>
      </div>
      <div v-else-if="Array.isArray(data)" class="json-view-item array-item">
        <wxy-json-view :json="item"></wxy-json-view>
      </div>
      <div v-else class="json-view-item">
        {{ key }}: <wxy-json-view :json="item"></wxy-json-view>
      </div>
    </template>
    <span>{{ Array.isArray(data) ? "]" : "}" }}</span>
  </div>
</template>

<style scoped lang="scss">
@import url(./style/index.scss);
</style>
