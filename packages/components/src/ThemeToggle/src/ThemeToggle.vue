<!--
 * @Author: wanxy420
 * @Description: 
 * @Date: 2025-05-12 17:08:14
 * @LastEditTime: 2025-05-12 17:34:06
 * @FilePath: \wanxy-design\packages\components\src\ThemeToggle\src\ThemeToggle.vue
-->
<script setup lang="ts">
defineOptions({
  name: "WxyThemeToggle",
});

const toggleTheme = (event: MouseEvent) => {
  if (!document.startViewTransition) {
    // 不支持则直接切换主题，不添加动画
    document.documentElement.classList.toggle("dark");
    return;
  }
  const transition = document.startViewTransition(() => {
    document.documentElement.classList.toggle("dark");
  });

  transition.ready.then(() => {
    const { clientX, clientY } = event;

    const endRadius = Math.hypot(
      Math.max(clientX, innerWidth - clientX),
      Math.max(clientY, innerHeight - clientY)
    );

    const clipPath = [
      `circle(0px at ${clientX}px ${clientY}px)`,
      `circle(${endRadius}px at ${clientX}px ${clientY}px)`,
    ];

    const isDark = document.documentElement.classList.contains("dark");

    document.documentElement.animate(
      {
        clipPath: isDark ? clipPath.reverse() : clipPath,
      },
      {
        duration: 300,
        easing: "ease-in",
        pseudoElement: isDark
          ? "::view-transition-old(root)"
          : "::view-transition-new(root)",
      }
    );
  });
};
</script>

<template>
  <span @click="toggleTheme">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
@import url(./style/index.scss);
</style>
