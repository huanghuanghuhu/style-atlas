# 演练场三档视口（桌面 / 平板 / 手机）与 `@container` 真实响应式升级方案

## 一、 核心升级目标
1. **三档视口切换**：将演练场工具栏右侧的视口切换器升级为 **桌面 (`100%`)**、**平板 (`768px`)**、**手机 (`390px`)** 三档（图标采用 `Monitor` / `Tablet` / `Smartphone`）。
2. **`@container` 真实响应式折行**：在外层预览画布挂载 Tailwind v4 的 `@container` 容器查询上下文，并将 4 套样例组件库（共 48 个页面样例）内部的 `sm:` / `md:` / `lg:` 窗口媒体查询统一升级为 `@sm:` / `@md:` / `@lg:` 容器查询，确保在宽屏电脑上点击「手机 390px」或「平板 768px」时，内部多列网格、导航栏和表单真实触发单列/双列自适应折行，绝不挤压变形。
3. **极简居中画布与尺寸标尺**：在平板（`768px`）和手机（`390px`）档位下，画布居中过渡（`transition-all duration-300`），并在画布顶部附带一行极简等宽尺寸标尺（如 `390px · Mobile Viewport (@container active)`），不包裹累赘的拟物手机壳。

---

## 二、 涉及修改的文件清单

1. **`/src/App.tsx`**
   - 将 `viewportWidth` 状态类型扩展为 `'full' | 'tablet' | 'mobile'`。
   - 在工具栏右侧增加 `Smartphone` 手机图标按钮（支持桌面/平板/手机三档切换，并在 `md` 以上屏幕常驻显示）。
   - 为样例渲染画布外框添加 `@container` 类，以及平板/手机模式下的极简顶部像素尺寸指示条。
2. **`/src/components/examples/ModernMinimalExamples.tsx`**
   - 将内部响应式断点类名（`sm:` / `md:` / `lg:`）升级为容器查询断点（`@sm:` / `@md:` / `@lg:`），并优化窄视口下的内边距与字号折行。
3. **`/src/components/examples/ExpressiveExamples.tsx`**
   - 将新粗野主义、社论杂志风、空间毛玻璃风的 9 套页面样例响应式断点升级为 `@sm:` / `@md:` / `@lg:`。
4. **`/src/components/examples/TactileRetroExamples.tsx`**
   - 将经典拟物化、极客命令行终端、Win95 复古桌面、赛博朋克切角风的 12 套页面样例响应式断点升级为 `@sm:` / `@md:` / `@lg:`。
5. **`/src/components/examples/DataDomainExamples.tsx`**
   - 将扁平化、Material 3、新拟态、3D 黏土风的 12 套页面样例响应式断点升级为 `@sm:` / `@md:` / `@lg:`。
