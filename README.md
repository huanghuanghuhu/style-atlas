# StyleAtlas 前端设计风格图鉴

> **在线访问地址 (GitHub Pages)**：**[https://huanghuanghuhu.github.io/style-atlas/](https://huanghuanghuhu.github.io/style-atlas/)**

一套基于 **React 19 + Tailwind CSS v4** 构建的前端视觉流派参考手册与交互式组件演练工作台，旨在帮助开发时快速选定 UI 风格并直接复用对应的 Tailwind 类名与 AI 提示词。

---

## 核心特性

- **16 大业内标准前端设计流派**：
  1. **主流现代体系**：扁平化设计 (`Flat Design 2.0`)、现代极简组件库风 (`Shadcn / Zinc UI`)、Google Material 3 (`Material You`)、微软流畅亚克力风 (`Microsoft Fluent UI`)
  2. **材质与拟物演进**：新拟态 (`Neumorphism`)、空间毛玻璃 (`Glassmorphism`)、3D 黏土软陶风 (`Claymorphism`)、经典拟物化设计 (`Classic Skeuomorphism`)
  3. **布局与经典平面**：便当盒网格 (`Bento Grid`)、瑞士国际主义网格 (`Swiss Style`)、社论杂志排版 (`Editorial Design`)、极光暗黑与微光风 (`Dark & Aurora UI`)
  4. **潮流与复古数字**：新粗野主义 (`Neo-Brutalism`)、复古桌面窗口风 (`Classic OS / Win95`)、极客命令行终端 (`Retro CLI / TUI`)、赛博朋克切角风 (`Cyberpunk / Sci-Fi HUD`)
- **48 套完整可交互页面样例**：每种风格均配备 **着陆页 (Landing)**、**仪表盘 (Dashboard)**、**交互组件 (Interactive)** 3 套实战页面。
- **三档 `@container` 真实响应式预览**：支持一键切换 **桌面 (`100%`)**、**平板 (`768px`)**、**手机 (`390px`)** 视口，内部网格实时流式折行。
- **即拿即用开发资产**：支持一键复制风格专属 **AI Prompt 提示词**、**5 色 Token 色板**、**Tailwind CSS 组件类名配方** 与 **JSX 源码**，内置双风格同屏对比器与 16 风格全景速查表。

---

## 本地运行与构建

```bash
# 1. 安装依赖
npm install --legacy-peer-deps

# 2. 启动开发服务器 (默认端口 3000)
npm run dev

# 3. 构建静态生产包 (输出至 dist/)
npm run build
```
