<!--
 * @Author: wanxy420
 * @Description: 
 * @Date: 2025-04-30 15:27:14
 * @LastEditTime: 2025-05-07 11:52:45
 * @FilePath: \wanxy-design\packages\components\src\ContextMenu\src\ContextMenu.vue
-->
<script setup lang="ts">
import { nextTick, useTemplateRef, ref, watch, PropType } from "vue";

defineOptions({
  name: "WxyContextMenu",
});

const emits = defineEmits(["select"]);

const props = defineProps({
  menu: {
    type: Array as PropType<any[]>,
    default: () => {
      return [];
    },
  },
});

const contentRef = useTemplateRef("contentRef");
const menuRef = useTemplateRef("menuRef");

const visible = ref<boolean>(false);

const hide = () => {
  visible.value = false;
};

const handleSelect = (item: any) => {
  emits("select", item);
  hide();
};

nextTick(() => {
  document.addEventListener("contextmenu", hide);
  document.addEventListener("click", hide);

  contentRef.value?.addEventListener("contextmenu", (e) => {
    visible.value = false;
    e.preventDefault();
    e.stopPropagation();

    const list = document.getElementsByClassName("wxy-menu-body");
    for (let i = 0; i < list.length; i++) {
      const item = list[i] as HTMLElement;
      item.style.display = "none";
    }

    nextTick(() => {
      if (!menuRef.value) return;
      menuRef.value.style.top = e.pageY + "px";
      menuRef.value.style.left = e.pageX + "px";
      visible.value = true;
    });
  });
});

watch(
  () => visible.value,
  () => {
    nextTick(() => {
      if (!menuRef.value) return;
      menuRef.value.style.maxHeight = visible.value
        ? menuRef.value.scrollHeight + 8 + "px"
        : "0px";
    });
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <span ref="contentRef" class="wxy-context-menu">
    <slot name="default"></slot>
    <Teleport to="body">
      <ul
        ref="menuRef"
        class="wxy-menu-body"
        v-show="visible && Array.isArray(props.menu) && props.menu.length > 0"
      >
        <li
          class="menu-item"
          v-for="(item, index) in props.menu"
          :key="index"
          @click="handleSelect(item)"
        >
          <slot name="item" :row="item">{{ item.label }}</slot>
        </li>
      </ul>
    </Teleport>
  </span>
</template>

<style lang="scss" scoped>
@import "./style/index.scss";
</style>
