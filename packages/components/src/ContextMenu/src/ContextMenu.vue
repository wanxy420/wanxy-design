<!--
 * @Author: wanxy420
 * @Description: 
 * @Date: 2025-04-30 15:27:14
 * @LastEditTime: 2025-05-06 17:18:27
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
      console.log(e);
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
$primary: #409eff;
$borderRadius: 4px;

.wxy-context-menu {
  display: block;
  width: fit-content;
  height: fit-content;
}

.wxy-menu-body {
  min-width: 80px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  border: 1px solid #ddd;
  border-radius: $borderRadius;
  padding: 4px;
  background-color: #fff;
  transition: max-height 300ms;
  overflow: hidden;
}

.menu-item {
  width: 100%;
  text-align: center;
  padding: 6px 8px;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  border-radius: $borderRadius;
  transition: all 300ms;

  &:hover {
    background-color: rgba($primary, 0.2);
    color: $primary;
  }
}
</style>
