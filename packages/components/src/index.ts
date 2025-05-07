/*
 * @Author: wanxy420
 * @Description:
 * @Date: 2025-04-30 15:12:02
 * @LastEditTime: 2025-04-30 15:26:02
 * @FilePath: \wanxy-design\packages\components\src\index.ts
 */
import type { App } from "vue";
import * as components from "./components";
import "../style/index.scss";

const install = (app: App) => {
  for (let n in components) {
    app.use((components as any)[n]);
  }
};

export default install;
export * from "./components";
