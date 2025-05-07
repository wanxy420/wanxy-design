/*
 * @Author: wanxy420
 * @Description: 
 * @Date: 2025-04-30 15:12:02
 * @LastEditTime: 2025-05-07 09:33:06
 * @FilePath: \wanxy-design\docs\.vitepress\theme\index.ts
 */
import DefaultTheme from 'vitepress/theme'
import './style/index.scss'

// 全局引入组件库（开发环境）
import WanxyDesign from '../../../packages/components/src/index'
import '../../../packages/components/style/index.scss'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(WanxyDesign);
  }
}