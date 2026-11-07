import { DesignStyle } from '../types/style';

export const STYLE_CATEGORIES = [
  { id: 'all', label: '全部标准风格 (16)', count: 16 },
  { id: 'modern-minimal', label: '主流现代体系 (Flat / Shadcn / Material / Fluent)', count: 4 },
  { id: 'tactile-retro', label: '材质与拟物演进 (新拟态 / 毛玻璃 / 黏土 / 拟物)', count: 4 },
  { id: 'data-domain', label: '布局与经典平面 (Bento / 瑞士 / 社论 / 极光暗黑)', count: 4 },
  { id: 'expressive-avant', label: '潮流与复古数字 (新粗野 / Win95 / 终端 / 赛博)', count: 4 },
] as const;

export const DESIGN_STYLES: DesignStyle[] = [
  // ============================================================================
  // 1. Flat Design (扁平化设计)
  // ============================================================================
  {
    id: 'flat-design',
    name: '扁平化设计 (Flat Design 2.0)',
    enName: 'Flat Design',
    category: 'modern-minimal',
    categoryLabel: '主流现代体系',
    tagline: '去除一切三维拟物纹理与复杂阴影，依靠纯净色块、清晰几何边界与排版层级传递信息',
    summary:
      '公认的现代 UI 基础流派（始于 Microsoft Metro 与 Apple iOS 7，现演进为 Flat 2.0 / Semi-Flat）。核心原则是彻底摒弃高光、斜面、纹理等拟物装饰，使用高可读性的纯色块（Solid Colors）、利落的圆角矩形、简洁的线性图标与清晰的文字大小对比来构建界面。Flat 2.0 允许加入极其克制的微边框（1px）或极淡的底层投影来辅助区分可点击区域。',
    representativeBrands: ['Stripe 官网组件', 'Notion', 'Dropbox', 'Slack'],
    bestFor: ['企业级 SaaS 后台与管理系统', '跨平台响应式 Web 应用', '知识库、文档工具与内容平台', '追求极致加载速度与清晰度的业务系统'],
    notRecommendedFor: ['需要强烈沉浸感的游戏界面', '强调硬件旋钮物理质感的模拟乐器软件'],
    coreCharacteristics: [
      {
        title: '纯色表面与零纹理 (Solid Surfaces & Zero Texture)',
        detail: '容器与按钮均采用 100% 纯色填充（如 bg-white、bg-blue-600），不使用渐变、噪点或高光反射。',
        tailwindHint: 'bg-white border border-slate-200 rounded-lg text-slate-900',
      },
      {
        title: '色块与微边框区分层级',
        detail: '不使用立体浮雕，而是通过浅灰画布（bg-slate-50）与纯白卡片（bg-white）的明度差搭配 1px 细边框（border-slate-200）划分区域。',
        tailwindHint: 'bg-slate-50 p-6 rounded-xl border border-slate-200',
      },
      {
        title: '鲜明的语义色盘 (Semantic Color Blocks)',
        detail: '直接用高辨识度的纯色表达状态：蓝色代表主操作（bg-blue-600）、绿色代表成功（bg-emerald-600）、琥珀色代表警告。',
        tailwindHint: 'px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors',
      },
      {
        title: '清晰的字体大小与字重阶梯',
        detail: '在没有复杂装饰的情况下，完全依靠标题（font-bold text-2xl）与说明文字（text-sm text-slate-500）建立阅读顺序。',
        tailwindHint: 'text-2xl font-bold text-slate-900 tracking-tight',
      },
    ],
    typography: {
      headingFont: 'Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-sans font-bold tracking-tight text-slate-900',
      bodyClasses: 'font-sans text-sm leading-relaxed text-slate-600',
      scaleNotes: '标准无衬线体系，层级分明（12px 辅助 / 14px 正文 / 18px 卡片标题 / 32px 页面标题）。',
    },
    geometryAndDepth: {
      borderRadius: 'rounded-md (6px) 至 rounded-lg (8px)',
      borderStyle: 'border border-slate-200 (1px 干净实线)',
      shadowStyle: 'shadow-none 或 Flat 2.0 极浅 shadow-2xs',
      spacingRhythm: '标准 8px 栅格间距体系（p-4, p-6, gap-4, gap-6）。',
    },
    colors: [
      { name: 'Canvas Light', role: '底层背景灰', hex: '#F8FAFC', tailwindClass: 'bg-slate-50', textContrastClass: 'text-slate-900' },
      { name: 'Flat White', role: '卡片纯白表面', hex: '#FFFFFF', tailwindClass: 'bg-white', textContrastClass: 'text-slate-900' },
      { name: 'Action Blue', role: '主交互按钮纯色', hex: '#2563EB', tailwindClass: 'bg-blue-600', textContrastClass: 'text-white' },
      { name: 'Success Green', role: '正向状态色块', hex: '#10B981', tailwindClass: 'bg-emerald-500', textContrastClass: 'text-white' },
      { name: 'Neutral Slate', role: '正文与次级文本', hex: '#475569', tailwindClass: 'bg-slate-600', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: 'Flat 2.0 标准卡片 (Flat Card)',
        description: '纯白底色 + 1px 浅灰边框 + 零渐变，清爽干练',
        classes: 'bg-white border border-slate-200 rounded-lg p-6 text-slate-900',
      },
      {
        component: '扁平化主按钮 (Flat Primary Button)',
        description: '纯色填充，悬停时仅改变背景色阶，无发光或立体位移',
        classes: 'px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors',
      },
      {
        component: '次级线框按钮 (Flat Secondary Button)',
        description: '白底细灰框，悬停变为极浅灰底',
        classes: 'px-4 py-2 rounded-md bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-sm font-medium transition-colors',
      },
      {
        component: '扁平化输入框 (Flat Input)',
        description: '标准 1px 边框输入控件，聚焦时切换为蓝色边框',
        classes: 'w-full px-3.5 py-2 rounded-md bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600',
      },
    ],
    dos: [
      '通过明确的色彩对比和留白来区分可点击按钮与普通文本，避免纯扁平化导致用户不知道哪里能点',
      '保持图标风格统一（如统一使用 1.5px 或 2px 线宽的 Lucide 线性图标）',
    ],
    donts: [
      '不要添加内阴影、斜面浮雕或复杂的玻璃模糊效果',
      '不要在同一页面混用过多高饱和度背景色块',
    ],
    aiPromptSnippet:
      'Use clean Flat Design 2.0 aesthetic. Solid flat surfaces (`bg-white` on `bg-slate-50`), crisp 1px borders (`border-slate-200`), zero textures or complex gradients, restrained `rounded-lg` corners, high-legibility sans-serif typography, and solid semantic action buttons (`bg-blue-600 hover:bg-blue-700 text-white`).',
    examples: [
      {
        id: 'landing',
        title: '样例 01：现代云文档与团队协作 SaaS 着陆页',
        archetype: 'Flat 2.0 SaaS Landing',
        scenario: '采用纯色分块、清晰 1px 边框与明快蓝色行动按钮构建的标准现代 SaaS 产品主页。',
        keyTechniques: ['纯白与浅灰（bg-slate-50）分块对比', '无渐变纯色主次按钮', '清晰的四宫格功能矩阵'],
        jsxCode: `<div className="bg-slate-50 text-slate-900 p-8 border border-slate-200 rounded-xl">
  <h1 className="text-4xl font-bold tracking-tight">Team documentation, simplified.</h1>
  <p className="text-sm text-slate-600 mt-3 max-w-xl">Clean flat interface with zero visual clutter.</p>
  <div className="mt-6 flex gap-3">
    <button className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium">Get Started Free</button>
    <button className="px-5 py-2.5 rounded-md bg-white border border-slate-300 text-slate-700 text-sm font-medium">View Live Demo</button>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：企业项目进度与工单管理后台',
        archetype: 'Flat Admin Dashboard',
        scenario: '经典的扁平化管理后台，包含顶部纯色指标卡片、状态筛选标签与干净的工单数据表。',
        keyTechniques: ['1px 细边框表格', '纯色状态指示文本', '零多余投影的清爽布局'],
        jsxCode: `<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
  <div className="grid grid-cols-3 gap-4">
    <div className="bg-white p-5 rounded-lg border border-slate-200">
      <div className="text-xs text-slate-500 font-medium">Active Projects</div>
      <div className="text-3xl font-bold text-slate-900 mt-1 tabular-nums">24</div>
    </div>
  </div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：团队权限配置与订阅方案切换表单',
        archetype: 'Flat Settings & Billing Form',
        scenario: '直观易用的扁平化设置面板，支持角色权限即时切换、周期计费折扣计算与表单保存反馈。',
        keyTechniques: ['焦点环 (focus:ring-2) 清晰反馈', '纯色开关控件', '2px 蓝色选中框卡片'],
        jsxCode: `<div className="bg-white p-6 rounded-lg border border-slate-200 space-y-4">
  <h3 className="text-base font-bold text-slate-900">Workspace Access Control</h3>
  <input type="email" placeholder="colleague@company.com" className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:border-blue-600 focus:outline-none" />
</div>`,
      },
    ],
  },

  // ============================================================================
  // 2. Material Design (Google 质感设计 / Material You)
  // ============================================================================
  {
    id: 'material-design',
    name: '质感设计 (Material Design 3)',
    enName: 'Material Design (Google M3)',
    category: 'modern-minimal',
    categoryLabel: '主流现代体系',
    tagline: 'Google 官方设计语言：动态色调表面（Tonal Surface）、物理海拔阴影（Elevation）与大胶囊交互',
    summary:
      '由 Google 提出并持续演进至 Material Design 3（Material You）的全球最知名设计规范之一。其核心隐喻是“具有物理厚度与光线投影的智能纸张（Quantum Paper）”以及 M3 引入的“动态色彩表面（Tonal Palettes）”：不再单纯依赖生硬边框，而是通过同一色相的不同明度背景色（如淡紫灰底配深紫容器）、明确的 Z 轴海拔阴影（Elevation 1~5）以及标志性的悬浮操作按钮（FAB）构建层次。',
    representativeBrands: ['Google Workspace (Gmail / Drive)', 'Android 14+ UI', 'YouTube Web', 'Firebase Console'],
    bestFor: ['全平台应用（Web + Android/iOS 统一体验）', '效率办公套件、日历与邮件客户端', '内容消费流与多媒体管理平台', '表单密集型企业工作流应用'],
    notRecommendedFor: ['追求极端冷峻去装饰化的先锋艺术画廊', '复古命令行终端应用'],
    coreCharacteristics: [
      {
        title: '色调表面层级 (Tonal Surface Elevation)',
        detail: 'Material 3 弱化了 1px 黑色/灰色描边，改用带有微妙品牌色倾向的浅色容器（如 bg-[#F3EDF7] 与 bg-[#EADDFF]）区分层级。',
        tailwindHint: 'bg-[#F3EDF7] rounded-3xl p-6 text-[#1D1B20]',
      },
      {
        title: '标志性悬浮操作按钮 (Floating Action Button - FAB)',
        detail: '圆角正方形（rounded-2xl）高海拔阴影按钮，集中承载当前屏幕最核心的“新建/添加”动作。',
        tailwindHint: 'px-5 py-4 rounded-2xl bg-[#EADDFF] hover:bg-[#D0BCFF] text-[#21005D] font-semibold shadow-md hover:shadow-lg transition-all',
      },
      {
        title: '全胶囊形主按钮与导航指示器 (Pill Indicators)',
        detail: 'M3 的标准按钮与侧栏/顶栏激活态统一采用 rounded-full 胶囊形态，触控热区饱满友好。',
        tailwindHint: 'px-6 py-2.5 rounded-full bg-[#6750A4] hover:bg-[#564090] text-white text-sm font-medium shadow-xs hover:shadow-md transition-all',
      },
      {
        title: '物理海拔阴影体系 (Z-Axis Elevation Shadows)',
        detail: '卡片在悬停或拖拽时从 shadow-xs 平滑升起至 shadow-md，模拟纸张向用户手指靠近的物理反馈。',
        tailwindHint: 'bg-white rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow duration-200',
      },
    ],
    typography: {
      headingFont: 'Outfit / Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-sans font-medium tracking-normal text-[#1D1B20]',
      bodyClasses: 'font-sans text-sm leading-relaxed text-[#49454F]',
      scaleNotes: '遵循 Material Type Scale（Display / Headline / Title / Body / Label），字重多用 Regular (400) 与 Medium (500)。',
    },
    geometryAndDepth: {
      borderRadius: 'M3 强调温润大圆角：卡片 rounded-2xl (16px) 或 rounded-3xl (24px)，按钮 rounded-full',
      borderStyle: 'Outlined 变体使用 border border-[#79747E]，Filled Tonal 变体无边框（border-0）',
      shadowStyle: '分级海拔阴影 shadow-xs (Level 1) → shadow-md (Level 2) → shadow-xl (Level 3)',
      spacingRhythm: '遵循 4dp / 8dp 网格基准，容器内边距宽松舒适（p-6）。',
    },
    colors: [
      { name: 'M3 Surface', role: '主背景画布', hex: '#FEF7FF', tailwindClass: 'bg-[#FEF7FF]', textContrastClass: 'text-[#1D1B20]' },
      { name: 'Surface Container', role: '次级色调容器', hex: '#F3EDF7', tailwindClass: 'bg-[#F3EDF7]', textContrastClass: 'text-[#1D1B20]' },
      { name: 'M3 Primary', role: '主操作核心色', hex: '#6750A4', tailwindClass: 'bg-[#6750A4]', textContrastClass: 'text-white' },
      { name: 'Primary Container', role: 'FAB 与高亮色块', hex: '#EADDFF', tailwindClass: 'bg-[#EADDFF]', textContrastClass: 'text-[#21005D]' },
      { name: 'On-Surface Variant', role: '次要正文与图标', hex: '#49454F', tailwindClass: 'bg-[#49454F]', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: 'M3 色调卡片 (Filled Tonal Card)',
        description: '无边框设计，依靠 #F3EDF7 色调背景与柔和大圆角区分区域',
        classes: 'bg-[#F3EDF7] rounded-3xl p-6 text-[#1D1B20] transition-colors hover:bg-[#ECE6F0]',
      },
      {
        component: 'M3 悬浮操作按钮 (Extended FAB)',
        description: '标志性 rounded-2xl 容器色按钮，带海拔阴影',
        classes: 'inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-[#EADDFF] hover:bg-[#D0BCFF] text-[#21005D] text-sm font-semibold shadow-md hover:shadow-lg transition-all',
      },
      {
        component: 'M3 标准填充按钮 (Filled Pill Button)',
        description: '全胶囊圆角主色按钮',
        classes: 'px-6 py-2.5 rounded-full bg-[#6750A4] hover:bg-[#584291] text-white text-sm font-medium shadow-xs hover:shadow-md transition-all',
      },
      {
        component: 'M3 填充式底线输入框 (Filled Text Field)',
        description: '顶部微圆角、浅色填充背景配底部 2px 激活指示线',
        classes: 'w-full px-4 py-3 rounded-t-xl bg-[#E6E0E9] border-b-2 border-[#49454F] text-sm text-[#1D1B20] focus:outline-none focus:border-[#6750A4] transition-colors',
      },
    ],
    dos: [
      '善用 Primary Container（如浅紫 #EADDFF 配深紫字 #21005D）表现选中态与次优重点按钮，避免全屏都是刺眼的深色按钮',
      '保持圆角与海拔阴影的配对关系：越靠近用户的悬浮层（如 FAB、Dialog）圆角越大、阴影越明显',
    ],
    donts: [
      '不要在 Material 3 的 Tonal 卡片上再叠加粗黑边框',
      '不要在同一个屏幕放置超过 1 个 FAB（悬浮操作按钮）',
    ],
    aiPromptSnippet:
      'Use Google Material Design 3 (Material You) aesthetic. Tonal surface palette (`#FEF7FF` background, `#F3EDF7` surface containers, `#EADDFF` primary containers with `#21005D` text, `#6750A4` primary actions), generous `rounded-3xl` cards without borders, `rounded-full` pill buttons, an Extended FAB (`rounded-2xl shadow-md`), and smooth elevation shadow transitions.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：Material You 智能日程与云端工作区主页',
        archetype: 'Material 3 Product Landing',
        scenario: '展示动态色彩主题切换（紫/绿/蓝 Tonal Palette）、大圆角无框色调卡片与 Extended FAB 的 Google M3 风格主页。',
        keyTechniques: ['动态 Tonal 色板切换器', 'rounded-3xl 色调表面容器', '标志性 Extended FAB 按钮'],
        jsxCode: `<div className="bg-[#FEF7FF] text-[#1D1B20] p-8 rounded-3xl space-y-6">
  <div className="bg-[#F3EDF7] rounded-3xl p-8 flex justify-between items-center">
    <div>
      <h1 className="text-4xl font-normal tracking-tight">Adaptive workspaces powered by Material You.</h1>
      <button className="mt-6 px-6 py-2.5 rounded-full bg-[#6750A4] text-white text-sm font-medium shadow-sm">
        Explore Components
      </button>
    </div>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：Google Workspace 风邮件与任务分流工作台',
        archetype: 'M3 Productivity Hub',
        scenario: '左侧胶囊激活态导航栏（Navigation Rail/Drawer）+ 右侧色调列表与右下角悬浮新建按钮（FAB）的典型 M3 应用布局。',
        keyTechniques: ['胶囊形导航选中指示器 (bg-[#E8DEF8])', '无外框色调分块列表', '海拔阴影悬浮交互'],
        jsxCode: `<div className="bg-[#FEF7FF] p-6 rounded-3xl flex gap-6">
  <aside className="w-52 space-y-1">
    <button className="w-full px-4 py-2.5 rounded-full bg-[#E8DEF8] text-[#1D192B] text-xs font-semibold text-left">
      Inbox (12)
    </button>
  </aside>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：M3 填充式表单、滑块与通知偏好面板',
        archetype: 'M3 Interactive Form & Controls',
        scenario: '包含 M3 标志性的顶部圆角填充式输入框（Filled Text Field）、分段按钮组（Segmented Button）与饱满圆角开关。',
        keyTechniques: ['Filled Text Field 底边聚焦线', '带勾选图标的分段胶囊选择器', 'Tonal 容器实时预览'],
        jsxCode: `<div className="bg-[#F3EDF7] p-6 rounded-3xl space-y-4">
  <input
    type="text"
    placeholder="Project Title"
    className="w-full px-4 py-3 rounded-t-xl bg-[#E6E0E9] border-b-2 border-[#6750A4] text-sm text-[#1D1B20] focus:outline-none"
  />
</div>`,
      },
    ],
  },

  // ============================================================================
  // 3. Bento Grid (便当盒模块化网格风)
  // ============================================================================
  {
    id: 'bento-modular',
    name: '便当盒网格风 (Bento Grid UI)',
    enName: 'Bento Grid',
    category: 'data-domain',
    categoryLabel: '布局与经典平面',
    tagline: 'Apple 与 Linear 带火的行业主流布局：非对称跨列大圆角矩形矩阵，一格一核心视觉焦点',
    summary:
      '灵感源自日式便当盒（Bento Box），由 Apple 发布会特性总览图与 Chronicle、Raycast 等网站推向全球前端主流。核心在于利用 CSS Grid 的跨列（`col-span-2`）与跨行（`row-span-2`）将不同尺度的功能模块严丝合缝地排列在一个矩形大矩阵中。每个单元格拥有统一的圆角（`rounded-3xl`）与固定间隙（`gap-4`），高信息密度且极富秩序感。',
    representativeBrands: ['Apple 产品特性墙', 'Raycast 官网', 'Chronicle.hq', 'Linear Features'],
    bestFor: ['产品全特性总览墙 (Feature Showcase)', '科技硬件与 SaaS 营销着陆页', '个人开发者作品集主页 (Portfolio)', '多组件聚合型概览仪表盘'],
    notRecommendedFor: ['长篇连续文本阅读页面', '需要横向滚动几十列的传统财务报表'],
    coreCharacteristics: [
      {
        title: '非对称跨列矩阵 (Asymmetric Grid Spans)',
        detail: '在 4 列或 3 列网格中混合使用 2x2、2x1、1x1 尺寸的卡片，打破单调均分网格，引导视线先看核心主卡。',
        tailwindHint: 'grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]',
      },
      {
        title: '同心圆嵌套圆角公式 (Concentric Border Radius)',
        detail: '外层便当盒使用 rounded-3xl (24px)，内边距 p-6 时，内部子控件使用 rounded-xl (12px)，保证内外圆弧曲率平行。',
        tailwindHint: 'rounded-3xl p-6 bg-white border border-black/[0.06] shadow-2xs',
      },
      {
        title: '深浅对比视觉锚点 (Contrast Focal Cell)',
        detail: '在浅灰色/白色便当盒矩阵中，特意放置 1~2 个深色背景卡片（bg-[#1D1D1F] text-white）以锁定视觉重心。',
        tailwindHint: 'rounded-3xl bg-[#1D1D1F] text-white p-7 flex flex-col justify-between',
      },
      {
        title: '一格一卖点 (Single Concept Per Box)',
        detail: '每个便当盒只展示一个核心数据或一个微型交互组件，顶部配微标题，底部配精炼结论。',
        tailwindHint: 'flex flex-col justify-between overflow-hidden',
      },
    ],
    typography: {
      headingFont: 'Outfit / Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-display font-semibold tracking-tight text-[#1D1D1F]',
      bodyClasses: 'font-sans text-xs text-[#86868B] leading-relaxed',
      scaleNotes: '卡片内大指标采用 36px–48px 醒目字号，卡片标题采用 18px–24px SemiBold。',
    },
    geometryAndDepth: {
      borderRadius: '外盒统一 rounded-3xl (24px)，内嵌按钮/色块 rounded-xl (12px)',
      borderStyle: 'border border-black/[0.06] (极轻柔边缘)',
      shadowStyle: 'shadow-[0_2px_10px_rgba(0,0,0,0.03)]',
      spacingRhythm: '网格间距全站统一 gap-4 (16px)，盒内边距统一 p-6 或 p-7。',
    },
    colors: [
      { name: 'Studio Gray', role: '画布底色', hex: '#F5F5F7', tailwindClass: 'bg-[#F5F5F7]', textContrastClass: 'text-[#1D1D1F]' },
      { name: 'Pure Box White', role: '标准便当盒底色', hex: '#FFFFFF', tailwindClass: 'bg-white', textContrastClass: 'text-[#1D1D1F]' },
      { name: 'Carbon Box', role: '深色重点便当盒', hex: '#1D1D1F', tailwindClass: 'bg-[#1D1D1F]', textContrastClass: 'text-white' },
      { name: 'Electric Blue', role: '高亮指标与交互', hex: '#0071E3', tailwindClass: 'bg-[#0071E3]', textContrastClass: 'text-white' },
      { name: 'Neutral Muted', role: '辅助说明文字', hex: '#86868B', tailwindClass: 'bg-[#86868B]', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: 'Bento 4列母网格 (Bento Grid Container)',
        description: '响应式 4 列矩阵，固定 16px 间隙',
        classes: 'grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-[#F5F5F7] rounded-[32px]',
      },
      {
        component: '双倍宽主推便当盒 (2-Col Span Box)',
        description: '占据 2 列宽度的主功能卡片',
        classes: 'md:col-span-2 rounded-3xl bg-white p-7 border border-black/[0.06] shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col justify-between',
      },
      {
        component: '深色高对比便当盒 (Dark Anchor Box)',
        description: '用于在浅色网格中建立视觉焦点',
        classes: 'rounded-3xl bg-[#1D1D1F] text-white p-7 flex flex-col justify-between',
      },
      {
        component: '同心圆分段控制器 (Concentric Segmented Control)',
        description: '与大圆角卡片曲率呼应的切换器',
        classes: 'inline-flex p-1 rounded-2xl bg-[#E8E8ED] text-xs font-medium text-[#1D1D1F]',
      },
    ],
    dos: [
      '严格计算每一行的 col-span 之和（如 2+1+1=4 或 1+3=4），确保矩阵四周边缘整齐闭合，不留空缺死角',
      '保持所有便当盒的圆角半径（rounded-3xl）与间距（gap-4）完全一致',
    ],
    donts: [
      '不要在 Bento 盒子内部再嵌套一层 Bento 网格',
      '不要在一个小盒子里塞入长篇大论的多段文字',
    ],
    aiPromptSnippet:
      'Use Bento Grid UI aesthetic (Apple / Raycast inspired). Soft `#F5F5F7` canvas, crisp `#FFFFFF` modular cards paired with one high-contrast `#1D1D1F` dark card, uniform `rounded-3xl` corners with concentric `rounded-xl` inner elements, strict `gap-4` grid alignment, and asymmetric `md:col-span-2` spans.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：旗舰芯片与硬件全特性 Bento 展示墙',
        archetype: 'Bento Feature Showcase',
        scenario: '经典的 4 列非对称便当盒矩阵，支持切换芯片档位并动态更新算力、带宽与续航单元格。',
        keyTechniques: ['col-span-2 与 col-span-3 混排闭合', '深浅卡片视觉对比', '同心圆角内嵌标签'],
        jsxCode: `<div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#F5F5F7] p-6 rounded-3xl">
  <div className="md:col-span-2 bg-white rounded-3xl p-7 border border-black/[0.06]">
    <h2 className="text-3xl font-semibold text-[#1D1D1F]">Unified Memory up to 800GB/s</h2>
  </div>
  <div className="bg-[#1D1D1F] text-white rounded-3xl p-7">
    <div className="text-4xl font-semibold tabular-nums">22 hrs</div>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：智能工作室环境与设备状态中控台',
        archetype: 'Bento Smart Hub',
        scenario: '将灯光色温滑块、10G 网络吞吐量、NAS 存储池与功耗监控整合在严丝合缝的圆角矩阵中。',
        keyTechniques: ['卡片内直接交互滑块', '统一圆角与等高对齐', '零多余分割线'],
        jsxCode: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#F5F5F7] p-6 rounded-3xl">
  <div className="bg-white rounded-3xl p-6 border border-black/[0.06]">
    <div className="text-xs text-[#86868B]">STUDIO CLIMATE</div>
    <div className="text-3xl font-semibold text-[#1D1D1F] mt-2">21.5°C</div>
  </div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：模块化硬件定制与实时价格汇总器',
        archetype: 'Bento Configurator',
        scenario: '左侧分块点选内存与固态硬盘规格，右侧深色 Bento 汇总盒实时计算总价。',
        keyTechniques: ['2px 蓝色选中框', '深色粘性汇总便当盒', '即时价格联动'],
        jsxCode: `<div className="bg-[#F5F5F7] p-6 rounded-3xl grid grid-cols-12 gap-4">
  <button className="col-span-6 p-5 rounded-2xl bg-white border-2 border-[#0071E3] text-left">
    <div className="font-semibold">64GB Unified Memory</div>
  </button>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 4. Neumorphism (新拟态 / Soft UI) — 经典双向阴影硅胶浮雕风！
  // ============================================================================
  {
    id: 'neumorphism',
    name: '新拟态 (Neumorphism / Soft UI)',
    enName: 'Neumorphism (Soft UI)',
    category: 'tactile-retro',
    categoryLabel: '材质与拟物演进',
    tagline: '背景与组件同色一体成型，依靠左上白色亮阴影 + 右下深色暗阴影塑造柔和的浮凸与内凹触感',
    summary:
      '由 Alexander Plyuto 与 Michal Malewicz 引爆前端圈的标志性趋势（New Skeuomorphism，简称 Neumorphism 或 Soft UI）。其最大技术特征是：**卡片、按钮与底层画布使用完全相同的背景色（最经典为冷灰 `#E0E5EC`）**，完全不画边框，而是同时投射两个方向相反的阴影——左上角投射纯白高光阴影（`-8px -8px 16px #ffffff`），右下角投射深灰暗部阴影（`8px 8px 16px #a3b1c6`）。当按钮被按下时，外阴影切换为 `inset` 内阴影，仿佛组件直接从同一块软硅胶或石膏面板中挤压浮现。',
    representativeBrands: ['Dribbble Soft UI 经典潮', '智能家居温控器 App', '高端音频均衡器 UI', '极简计算器与计时器应用'],
    bestFor: ['智能家居遥控面板（温控器、灯光旋钮）', '音乐播放器、节拍器与白噪音工具', '计算器、秒表、习惯打卡等轻量独立工具', '追求柔和触感体验的硬件配套界面'],
    notRecommendedFor: ['高密度多列财务表格（阴影占空间太多）', '视力障碍人群公共服务系统（边缘对比度较低）'],
    coreCharacteristics: [
      {
        title: '画布与组件严格同色 (Monochromatic Same-Surface Color)',
        detail: '背景画布、卡片、按钮表面必须全部设置为同一个中间明度色值（经典色值 #E0E5EC），绝不能用纯白 #FFFFFF 做背景（否则左上角的白色亮阴影无法显现）。',
        tailwindHint: 'bg-[#E0E5EC] text-[#4A5568]',
      },
      {
        title: '双向外浮凸阴影公式 (Extruded Dual Drop Shadow)',
        detail: '未按下状态：右下角正偏移深灰阴影 + 左上角负偏移纯白阴影，营造组件从背景中向上凸起的软浮雕感。',
        tailwindHint: 'bg-[#E0E5EC] rounded-2xl shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]',
      },
      {
        title: '双向内凹陷阴影公式 (Inset Pressed Cavity)',
        detail: '输入框、进度槽或激活态按钮：将双向阴影改为 inset，视觉上立即变成向面板内部凹陷的槽位。',
        tailwindHint: 'bg-[#E0E5EC] rounded-xl shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]',
      },
      {
        title: '克制的单点彩色指示灯',
        detail: '由于整体是柔和单色浮雕，当前激活状态通常配合高对比度的电光蓝（#4F46E5）或翠绿微指示点来保障无障碍可读性。',
        tailwindHint: 'text-indigo-600 font-semibold',
      },
    ],
    typography: {
      headingFont: 'Outfit / Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-display font-bold tracking-tight text-slate-700',
      bodyClasses: 'font-sans text-xs text-slate-500 leading-relaxed',
      scaleNotes: '文字不使用刺眼的 #000000，而是采用柔和的石板深灰（text-slate-700 / #334155）。',
    },
    geometryAndDepth: {
      borderRadius: 'rounded-2xl (16px)、rounded-3xl (24px) 或圆形按钮 rounded-full',
      borderStyle: 'border-none (或极微弱的 border border-white/40 辅助边界)',
      shadowStyle: '凸起：shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]；凹陷：shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]',
      spacingRhythm: '组件之间必须留出至少 20px–24px 间距（gap-6），防止双向长阴影互相重叠显脏。',
    },
    colors: [
      { name: 'Neumorphic Base', role: '全局唯一同色基底', hex: '#E0E5EC', tailwindClass: 'bg-[#E0E5EC]', textContrastClass: 'text-slate-700' },
      { name: 'Dark Shadow Tone', role: '右下角暗部阴影色', hex: '#B8BEC7', tailwindClass: 'bg-[#B8BEC7]', textContrastClass: 'text-slate-900' },
      { name: 'Light Highlight', role: '左上角高光阴影色', hex: '#FFFFFF', tailwindClass: 'bg-white', textContrastClass: 'text-slate-900' },
      { name: 'Soft Slate Ink', role: '主文字深灰', hex: '#334155', tailwindClass: 'bg-slate-700', textContrastClass: 'text-white' },
      { name: 'Active Indigo', role: '激活态高亮色', hex: '#4F46E5', tailwindClass: 'bg-indigo-600', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: '新拟态凸起卡片 (Extruded Soft Card)',
        description: '与背景同色 #E0E5EC + 左上白高光与右下灰暗影',
        classes: 'bg-[#E0E5EC] rounded-3xl p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] text-slate-700',
      },
      {
        component: '新拟态可按压按钮 (Neumorphic Push Button)',
        description: '默认凸起，点击或激活时切换为 inset 内凹阴影',
        classes: 'px-5 py-3 rounded-2xl bg-[#E0E5EC] text-slate-700 font-semibold text-xs shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-all',
      },
      {
        component: '新拟态内凹输入框 / 槽位 (Inset Input Well)',
        description: '双向内阴影营造凹陷进面板内部的输入槽',
        classes: 'w-full px-4 py-3 rounded-xl bg-[#E0E5EC] shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff] text-sm text-slate-700 focus:outline-none',
      },
      {
        component: '新拟态圆形旋钮/图标键 (Soft Icon Orb)',
        description: '正圆形浮凸按键，常见于播放控制与空调遥控',
        classes: 'w-12 h-12 rounded-full bg-[#E0E5EC] flex items-center justify-center shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]',
      },
    ],
    dos: [
      '严格保持背景与卡片色值一致（如 #E0E5EC），这是双向明暗阴影生效的物理前提',
      '用“凸起（Extruded）”表示未点击按钮，用“内凹（Inset）”表示已按下状态或文本输入槽位',
      '在激活按钮内加上明确的彩色文字或图标（如 text-indigo-600），弥补无边框带来的对比度不足',
    ],
    donts: [
      '切勿在纯白背景（#FFFFFF）上使用新拟态（因为没有比 #FFFFFF 更亮的颜色来做左上角高光阴影）',
      '不要将组件排得太密，双向 16px 阴影需要呼吸空间',
    ],
    aiPromptSnippet:
      'Use authentic Neumorphism (Soft UI) aesthetic. Strictly monochromatic `#E0E5EC` background shared across canvas, cards, and buttons. Extruded raised elements use dual opposite shadows (`shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]`), while pressed buttons, active toggles, and inputs use recessed inset shadows (`shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]`). Soft `rounded-2xl` geometry and `#334155` slate typography with `#4F46E5` active accents.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：新拟态智能声学与家居硬件控制主页',
        archetype: 'Soft UI Product Showcase',
        scenario: '纯正 #E0E5EC 硅胶浮雕质感主页，展示凸起卡片、内凹状态槽与可按压圆形控制键。',
        keyTechniques: ['同色 #E0E5EC 基底', '双向外浮雕阴影与内凹槽对比', '圆形浮凸控制旋钮'],
        jsxCode: `<div className="bg-[#E0E5EC] text-slate-700 p-8 rounded-3xl space-y-8">
  <div className="bg-[#E0E5EC] rounded-3xl p-8 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff]">
    <h1 className="text-3xl font-bold text-slate-700">Tactile Soft UI Controller</h1>
    <button className="mt-6 px-6 py-3 rounded-2xl bg-[#E0E5EC] font-semibold text-indigo-600 shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
      Activate Scene
    </button>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：智能恒温器与全屋环境遥测中控台',
        archetype: 'Neumorphic Smart Home Hub',
        scenario: '最经典的新拟态应用场景：中央圆形内凹/外凸双层温控表盘、房间模式切换键（按下即内凹）与湿度进度槽。',
        keyTechniques: ['双层同心圆新拟态表盘', '按下变 inset 内阴影的模式按钮', '内凹进度条槽位'],
        jsxCode: `<div className="bg-[#E0E5EC] p-8 rounded-3xl grid grid-cols-2 gap-6">
  <div className="bg-[#E0E5EC] rounded-3xl p-6 shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] flex flex-col items-center">
    <div className="w-36 h-36 rounded-full bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#b8bec7,inset_-6px_-6px_12px_#ffffff] flex items-center justify-center">
      <span className="text-3xl font-bold text-slate-700 tabular-nums">22.5°</span>
    </div>
  </div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：新拟态音频均衡器与触感计算器面板',
        archetype: 'Soft UI Equalizer & Calculator',
        scenario: '包含内凹陷输入屏、多频段内凹滑槽与立体浮凸数字/音效按键的交互面板。',
        keyTechniques: ['内凹显示屏 (Inset Readout)', '凸起按键阵列', '点击下陷物理视觉反馈'],
        jsxCode: `<div className="bg-[#E0E5EC] p-8 rounded-3xl space-y-6">
  <div className="p-4 rounded-2xl bg-[#E0E5EC] shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff] text-right font-mono text-2xl text-slate-700">
    440.0 Hz
  </div>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 5. Glassmorphism (玻璃拟态 / 毛玻璃风)
  // ============================================================================
  {
    id: 'spatial-glass',
    name: '玻璃拟态 (Glassmorphism)',
    enName: 'Glassmorphism',
    category: 'tactile-retro',
    categoryLabel: '材质与拟物演进',
    tagline: '背景实时磨砂模糊 (backdrop-blur)、半透明多层白度梯度与 1px 高光玻璃切面边框',
    summary:
      '由 Apple macOS Big Sur / visionOS 与 Windows 11 Fluent (Acrylic) 全面普及的行业标准风格。核心公式由四要素构成：1. 鲜艳的多彩渐变或光斑底层背景；2. `backdrop-blur-xl` 背景实时磨砂模糊；3. `bg-white/10` 至 `bg-white/25` 的不同半透明度图层表现前后景深；4. 至关重要的 `border border-white/20` 1px 半透明高光边框模拟玻璃边缘折射。',
    representativeBrands: ['Apple visionOS / macOS', 'Windows 11 Fluent Design', 'Arc Browser', ' Dribbble 玻璃卡片潮'],
    bestFor: ['多媒体音乐/视频播放器与空间计算界面', 'Web3 / 创意科技产品着陆页', '天气预报、金融虚拟卡展示页', '悬浮导航栏、弹窗与全局控制中心'],
    notRecommendedFor: ['纯白单调背景上的大面积长文阅读', '低算力老旧嵌入式浏览器'],
    coreCharacteristics: [
      {
        title: '实时背景磨砂模糊 (Backdrop Filter Blur)',
        detail: '通过 backdrop-blur-md 至 backdrop-blur-2xl 让底层色彩光斑柔和透射，产生真实的毛玻璃光学质感。',
        tailwindHint: 'bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl',
      },
      {
        title: '1px 高光玻璃折射边缘 (Specular Glass Border)',
        detail: '缺少边框的模糊块会显得混沌，必须加上 border border-white/20 及顶部内高光模拟玻璃切面反光。',
        tailwindHint: 'border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_20px_50px_rgba(0,0,0,0.35)]',
      },
      {
        title: '多彩环境光斑基底 (Vibrant Mesh Backdrop)',
        detail: '底层放置 2~3 个高饱和度 blur-3xl 的极光紫、青蓝或珊瑚粉光球，使上层玻璃产生丰富的色彩折射。',
        tailwindHint: 'bg-[#070A17] relative overflow-hidden',
      },
      {
        title: '透明度层级树 (Translucency Hierarchy)',
        detail: '外层大窗口用 bg-white/10，内嵌小卡片用 bg-white/15，激活按钮用 bg-white/25，依靠透光率区分主次。',
        tailwindHint: 'bg-white/20 hover:bg-white/30 text-white',
      },
    ],
    typography: {
      headingFont: 'Plus Jakarta Sans / Outfit',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-display font-semibold tracking-tight text-white',
      bodyClasses: 'font-sans text-sm text-white/75 leading-relaxed',
      scaleNotes: '文字统一采用纯白及不同透明度的白色（text-white/90, text-white/65），确保自动融合背景色彩。',
    },
    geometryAndDepth: {
      borderRadius: '外窗 rounded-[28px]，内卡 rounded-2xl，按钮 rounded-xl',
      borderStyle: 'border border-white/20 (核心玻璃边缘)',
      shadowStyle: 'shadow-[0_20px_50px_rgba(0,0,0,0.4)] 配合顶部内高光',
      spacingRhythm: '悬浮侧栏与主视窗之间留有间隙（gap-4），展现通透背景。',
    },
    colors: [
      { name: 'Deep Space Base', role: '底层暗色环境画布', hex: '#070A17', tailwindClass: 'bg-[#070A17]', textContrastClass: 'text-white' },
      { name: 'Glass Surface 10%', role: '主磨砂玻璃面板', hex: 'rgba(255,255,255,0.12)', tailwindClass: 'bg-white/10', textContrastClass: 'text-white' },
      { name: 'Glass Active 25%', role: '高亮选中态玻璃', hex: 'rgba(255,255,255,0.25)', tailwindClass: 'bg-white/25', textContrastClass: 'text-white' },
      { name: 'Cyan Orb', role: '底层折射光球 A', hex: '#38BDF8', tailwindClass: 'bg-sky-400', textContrastClass: 'text-slate-950' },
      { name: 'Indigo Orb', role: '底层折射光球 B', hex: '#818CF8', tailwindClass: 'bg-indigo-400', textContrastClass: 'text-slate-950' },
    ],
    recipes: [
      {
        component: '标准毛玻璃主视窗 (Frosted Glass Window)',
        description: '10% 白度 + 2xl 背景模糊 + 20% 白色高光边框 + 顶部内折射',
        classes: 'bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_20px_50px_rgba(0,0,0,0.4)] p-6 text-white',
      },
      {
        component: '内嵌次级毛玻璃卡 (Nested Glass Card)',
        description: '位于玻璃视窗内部的轻量半透明卡片',
        classes: 'bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 rounded-2xl p-5 transition-colors',
      },
      {
        component: '毛玻璃高透按钮 (Glass Pill CTA)',
        description: '高透光率按钮，悬停时提升白度',
        classes: 'px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs font-semibold backdrop-blur-md transition-all',
      },
      {
        component: '暗色磨砂凹槽输入框 (Dark Glass Input)',
        description: '使用 bg-black/25 营造玻璃内凹雕刻感',
        classes: 'w-full px-4 py-2.5 rounded-xl bg-black/25 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40',
      },
    ],
    dos: [
      '务必在底层画布放置色彩丰富的光斑或渐变，否则 backdrop-blur 没有可折射的色彩细节',
      '始终保留 1px 的 border-white/20 边框，这是玻璃质感的灵魂',
    ],
    donts: [
      '不要在毛玻璃上使用灰色文字（如 text-gray-500），应使用 text-white/60 以保持通透感',
      '不要叠加超过 3 层 backdrop-blur，以免损伤可读性与渲染帧率',
    ],
    aiPromptSnippet:
      'Use Glassmorphism aesthetic. Deep ambient canvas (`#070A17`) with blurred colorful gradient orbs (`blur-3xl`), translucent frosted containers (`bg-white/10 backdrop-blur-2xl`), crisp 1px specular glass borders (`border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]`), and white opacity typography (`text-white`, `text-white/70`).',
    examples: [
      {
        id: 'landing',
        title: '样例 01：空间音频与毛玻璃视觉工作站主页',
        archetype: 'Glassmorphism Landing',
        scenario: '悬浮在多彩极光光场上的多层毛玻璃主视窗，支持动态切换底层折射色彩场。',
        keyTechniques: ['底层 blur-3xl 极光光球', 'backdrop-blur-2xl 磨砂主窗', '1px 玻璃切面内高光'],
        jsxCode: `<div className="relative bg-[#070A17] p-8 rounded-3xl overflow-hidden text-white">
  <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/35 rounded-full blur-3xl" />
  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-8">
    <h1 className="text-4xl font-semibold">Glassmorphism UI System</h1>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：悬浮分离式毛玻璃多轨混音与播控台',
        archetype: 'Glass Media Console',
        scenario: '分离式悬浮毛玻璃侧边栏 + 主视窗架构，展示空间声场切换与半透明音轨电平。',
        keyTechniques: ['分离式悬浮 Dock 栏', '透明度梯度区分激活态', 'bg-black/25 暗色玻璃子卡'],
        jsxCode: `<div className="bg-[#070A17] p-6 flex gap-4 text-white">
  <aside className="w-48 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-4">
    <button className="w-full p-2.5 rounded-xl bg-white/25 text-xs font-medium">Spatial Mixer</button>
  </aside>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：光学折射率与毛玻璃透光度校准面板',
        archetype: 'Glass Calibration Controls',
        scenario: '通过滑块实时调节玻璃透光率与视觉沉浸度的交互设置面板。',
        keyTechniques: ['实时透明度反馈', '暗色磨砂凹槽控件', '高对比白色边框选中态'],
        jsxCode: `<div className="bg-white/12 backdrop-blur-2xl border border-white/25 rounded-3xl p-6 text-white">
  <h3 className="text-base font-semibold">Adjust Glass Opacity</h3>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 6. Claymorphism (黏土拟态 / 3D 膨胀软陶风)
  // ============================================================================
  {
    id: 'claymorphism',
    name: '黏土拟态 (Claymorphism)',
    enName: 'Claymorphism',
    category: 'tactile-retro',
    categoryLabel: '材质与拟物演进',
    tagline: '超大圆角膨胀感 + 外部柔和投影 + 双重内阴影（左上浅色内高光 + 右下深色内阴影）构成的 3D 软陶质感',
    summary:
      '由设计师 Michal Malewicz 命名的标准 UI 风格。它与平面设计或新拟态不同，专门模仿 3D 软陶/橡皮泥（Clay）的充气膨胀体积感。其标准 CSS 配方由三部分组成：1. 极饱满的大圆角（`rounded-[28px]` 或 `rounded-3xl`）；2. 柔和的外部悬浮投影；3. **内部双重内阴影（左上角白色高光 `inset 0 6px 12px rgba(255,255,255,0.7)` + 右下角深色暗部 `inset 0 -8px 16px rgba(0,0,0,0.15)`）**，无需 WebGL 即可用纯 CSS 渲染出 Q 弹饱满的 3D 视觉效果。',
    representativeBrands: ['Web3 & NFT 潮流着陆页', 'Duolingo / 互动教育卡片', 'Pitch 3D 营销页', '儿童编程与创意效率应用'],
    bestFor: ['互动教育、语言学习与游戏化闯关应用', '年轻化消费品牌与创意活动主页', '个人社交名片与趣味投票/问答工具', 'Web3 钱包与数字藏品展示'],
    notRecommendedFor: ['严肃的机构级证券交易系统', '重工业监控与医疗诊断软件'],
    coreCharacteristics: [
      {
        title: '双重内阴影充气公式 (Dual Inner Shadow Inflation)',
        detail: 'Claymorphism 的核心机密：在一个圆角容器内同时声明顶部白色内高光（inset_0_6px_12px）与底部深色内暗影（inset_0_-8px_16px），瞬间产生 3D 凸起体积。',
        tailwindHint: 'rounded-[28px] shadow-[0_14px_28px_rgba(79,70,229,0.18),inset_0_6px_12px_rgba(255,255,255,0.75),inset_0_-8px_14px_rgba(55,48,163,0.35)]',
      },
      {
        title: '饱满鹅卵石大圆角 (Puffy 28px+ Radius)',
        detail: '所有卡片与按钮均采用 rounded-3xl (24px) 至 rounded-[32px]，绝不出现尖锐直角。',
        tailwindHint: 'rounded-[28px] p-6 bg-white',
      },
      {
        title: '明快粉彩与多巴胺配色 (Vibrant Pastel & Candy Hues)',
        detail: '背景采用柔和的薰衣草紫白或薄荷白（#F4F3FF），组件采用天空蓝、电光紫、珊瑚粉与翠绿，色彩明快讨喜。',
        tailwindHint: 'bg-[#F4F3FF] text-slate-800',
      },
      {
        title: 'Q 弹按压缩放交互 (Squishy Press Feedback)',
        detail: '点击或悬停按钮时配合 hover:scale-[1.02] active:scale-[0.97] 弹性过渡，强化软陶按压手感。',
        tailwindHint: 'hover:scale-[1.02] active:scale-[0.97] transition-transform duration-150',
      },
    ],
    typography: {
      headingFont: 'Bricolage Grotesque / Outfit',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-display font-extrabold tracking-tight text-slate-800',
      bodyClasses: 'font-sans font-medium text-sm text-slate-500 leading-relaxed',
      scaleNotes: '搭配圆润饱满的粗体无衬线字（Bold / ExtraBold），与膨胀的 3D 卡片曲率相得益彰。',
    },
    geometryAndDepth: {
      borderRadius: '卡片 rounded-[28px] 或 rounded-[32px]，按钮 rounded-2xl (16px) 或 rounded-full',
      borderStyle: 'border-0 或 border-2 border-white/60 增强高光感',
      shadowStyle: '外阴影 + 顶部亮内阴影 + 底部暗内阴影（三合一复合 shadow）',
      spacingRhythm: '宽松的卡片间距（gap-6, p-7），留足外部柔光投影扩散空间。',
    },
    colors: [
      { name: 'Lavender Cloud', role: '柔和粉彩画布', hex: '#F3F1FF', tailwindClass: 'bg-[#F3F1FF]', textContrastClass: 'text-slate-800' },
      { name: 'White Clay', role: '白色软陶卡片', hex: '#FFFFFF', tailwindClass: 'bg-white', textContrastClass: 'text-slate-800' },
      { name: 'Grape Clay', role: '3D 紫色主按钮', hex: '#6366F1', tailwindClass: 'bg-indigo-500', textContrastClass: 'text-white' },
      { name: 'Mint Clay', role: '3D 翠绿通关色', hex: '#10B981', tailwindClass: 'bg-emerald-500', textContrastClass: 'text-white' },
      { name: 'Amber Clay', role: '3D 琥珀奖励色', hex: '#F59E0B', tailwindClass: 'bg-amber-500', textContrastClass: 'text-slate-950' },
    ],
    recipes: [
      {
        component: '白色 3D 黏土大卡片 (White Clay Card)',
        description: '白底大圆角 + 外柔光投影 + 顶部白高光与底部蓝灰内阴影',
        classes: 'bg-white rounded-[30px] p-7 shadow-[0_16px_32px_-8px_rgba(99,102,241,0.12),inset_0_4px_8px_#ffffff,inset_0_-8px_16px_#e2e8f0] text-slate-800',
      },
      {
        component: '彩色 3D 充气黏土按钮 (3D Puffy Clay Button)',
        description: '靛蓝背景 + 顶部 45% 白内高光 + 底部深紫内暗影 + 弹性缩放',
        classes: 'px-6 py-3.5 rounded-2xl bg-indigo-500 text-white font-bold text-sm shadow-[0_10px_20px_-4px_rgba(99,102,241,0.45),inset_0_4px_6px_rgba(255,255,255,0.45),inset_0_-6px_10px_rgba(49,46,129,0.45)] hover:scale-[1.02] active:scale-[0.97] transition-all',
      },
      {
        component: '薄荷绿 3D 徽章块 (Mint Clay Tile)',
        description: '用于展示统计指标或通关奖励的彩色软陶块',
        classes: 'bg-emerald-400 text-emerald-950 rounded-3xl p-5 font-bold shadow-[0_12px_24px_-6px_rgba(16,185,129,0.35),inset_0_4px_8px_rgba(255,255,255,0.6),inset_0_-6px_12px_rgba(6,95,70,0.25)]',
      },
      {
        component: '软陶内凹输入槽 (Clay Input Field)',
        description: '圆润白底配柔和内阴影',
        classes: 'w-full px-5 py-3 rounded-2xl bg-[#F8F7FF] shadow-[inset_0_3px_6px_rgba(148,163,184,0.25),inset_0_-2px_4px_#ffffff] border border-indigo-100 text-sm text-slate-800 focus:outline-none',
      },
    ],
    dos: [
      '务必同时包含 `inset 0 +Y`（顶部高光）和 `inset 0 -Y`（底部暗影），这是 Claymorphism 区别于普通阴影卡片的核心标志',
      '外部投影颜色尽量使用与组件色相一致的半透明彩色投影（如紫色按钮用 `rgba(99,102,241,0.4)`）',
    ],
    donts: [
      '不要使用尖锐直角（rounded-none）或细碎的 1px 黑色实线',
      '不要把内阴影设成纯黑色，应使用同色系的深色半透明值以免显得脏污',
    ],
    aiPromptSnippet:
      'Use authentic Claymorphism aesthetic (Michal Malewicz formula). Puffy `rounded-[30px]` containers and `rounded-2xl` buttons rendered with a soft outer shadow plus dual inner shadows: a top-left white specular inner shadow (`inset_0_4px_8px_rgba(255,255,255,0.7)`) and a bottom-right darker tonal inner shadow (`inset_0_-8px_16px_rgba(0,0,0,0.15)`). Cheerful `#F3F1FF` pastel canvas and squishy `active:scale-[0.97]` micro-interactions.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：3D 黏土风互动编程与创意星球主页',
        archetype: 'Claymorphism Landing',
        scenario: '采用标准双重内阴影构建的 3D 充气感着陆页，每个卡片与按钮都像饱满的彩色软陶积木。',
        keyTechniques: ['外投影 + 顶白内高光 + 底暗内阴影三合一', 'rounded-[30px] 鹅卵石圆角', '弹性按压缩放'],
        jsxCode: `<div className="bg-[#F3F1FF] p-8 rounded-[36px]">
  <div className="bg-white rounded-[30px] p-8 shadow-[0_16px_32px_-8px_rgba(99,102,241,0.12),inset_0_4px_8px_#ffffff,inset_0_-8px_16px_#e2e8f0]">
    <h1 className="font-display text-4xl font-extrabold text-slate-800">Playful 3D Clay Interface</h1>
    <button className="mt-6 px-7 py-3.5 rounded-2xl bg-indigo-500 text-white font-bold shadow-[0_10px_20px_-4px_rgba(99,102,241,0.45),inset_0_4px_6px_rgba(255,255,255,0.45),inset_0_-6px_10px_rgba(49,46,129,0.45)]">
      Start Adventure
    </button>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：游戏化习惯养成与成就勋章工作台',
        archetype: 'Clay Gamified Dashboard',
        scenario: '用紫、绿、黄三色 3D 软陶卡片展示连胜天数、经验值与每日任务进度槽。',
        keyTechniques: ['多巴胺彩色 3D 黏土指标块', '充气感立体进度条', '零挫败感友好卡片交互'],
        jsxCode: `<div className="bg-[#F3F1FF] p-6 rounded-[32px] grid grid-cols-3 gap-5">
  <div className="bg-emerald-400 text-emerald-950 rounded-3xl p-6 font-bold shadow-[0_12px_24px_-6px_rgba(16,185,129,0.35),inset_0_4px_8px_rgba(255,255,255,0.6),inset_0_-6px_12px_rgba(6,95,70,0.25)]">
    <div className="text-xs uppercase">Streak</div>
    <div className="text-3xl font-extrabold mt-1">18 Days</div>
  </div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：3D 软陶闯关问答与即时奖励面板',
        archetype: 'Clay Quiz & Reward Engine',
        scenario: '点选蓬松的 3D 黏土选项卡并点击充气感绿色按钮检查答案。',
        keyTechniques: ['选中态蓝色充气卡片', '顶部立体高光进度槽', '即时判题动画反馈'],
        jsxCode: `<div className="bg-white rounded-[30px] p-8 shadow-[0_16px_32px_-8px_rgba(99,102,241,0.12),inset_0_4px_8px_#ffffff,inset_0_-8px_16px_#e2e8f0]">
  <h3 className="text-xl font-extrabold text-slate-800">Select the correct time complexity:</h3>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 7. Skeuomorphism (拟物化设计)
  // ============================================================================
  {
    id: 'industrial-hardware',
    name: '经典拟物化设计 (Classic Skeuomorphism)',
    enName: 'Skeuomorphism',
    category: 'tactile-retro',
    categoryLabel: '材质与拟物演进',
    tagline: '逼真还原物理世界的金属拉丝光泽、皮革/胡桃木包边、曲面玻璃高光折射、3D 旋转旋钮与发光 LED 指示灯',
    summary:
      'UI 设计史上最经典的流派之一（由 Apple iOS 1–6、Mac OS X Aqua、Logic Pro 硬件机架插件与经典 Hi-Fi 音响界面代表）。真正的“拟物化（Skeuomorphism）”绝非普通灰盒加粗底边，而是通过多层线性/锥形金属渐变（Brushed Aluminum & Conic Knob Gradients）、曲面玻璃半透明斜向反光层（Glossy Specular Reflection）、皮革缝线或木纹侧板以及带辉光的物理 LED 指示灯，在屏幕上 1:1 复刻真实世界的物理材质与阻尼触感。',
    representativeBrands: ['Apple iOS 6 经典应用 (ボイスメモ / 指南针)', 'Logic Pro / Universal Audio 拟物机架插件', 'Mac OS X Aqua 经典水晶按钮', 'McIntosh / Teenage Engineering 拟真音响面板'],
    bestFor: ['专业音频合成器、均衡器与吉他效果器面板 (VST/AU)', '复古胶片相机、黑胶唱机与调频收音机应用', '高拟真车载仪表盘、航空模拟器与精密仪器', '追求强烈物理触感与收藏价值的创意硬件工具'],
    notRecommendedFor: ['高密度文字阅读类新闻网站', '追求极简留白的企业级财务后台'],
    coreCharacteristics: [
      {
        title: '金属拉丝渐变机壳与螺丝铆钉 (Brushed Metal Chassis)',
        detail: '使用多段银灰线性渐变模拟阳极氧化拉丝铝板，外框搭配高光倒角（inset 0 1px 0 white）与胡桃木/皮革侧边包覆。',
        tailwindHint: 'bg-[linear-gradient(180deg,#e6e8ec_0%,#c8ccd4_48%,#b4b9c4_50%,#dcdfe6_100%)] border-2 border-[#8c929e] rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_28px_rgba(0,0,0,0.35)]',
      },
      {
        title: '曲面玻璃高光折射屏幕 (Glossy Glass Reflection)',
        detail: '内凹液晶/电平表窗口上方叠加一层半透明白色斜切渐变（bg-gradient-to-b from-white/25 to-transparent），还原真实弧面玻璃的镜面反光。',
        tailwindHint: 'relative overflow-hidden bg-[#0c120e] border-2 border-[#2a3038] rounded-xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)]',
      },
      {
        title: '3D 锥形金属旋钮与推子 (Rotary Knobs & Faders)',
        detail: '使用圆形容器配合金属光泽渐变、外圈阴影与白色刻度指示线，支持旋转角度调节参数。',
        tailwindHint: 'w-16 h-16 rounded-full bg-[conic-gradient(#d4d8e0,#787e8a,#f2f4f8,#5c626e,#d4d8e0)] border-2 border-neutral-700 shadow-[0_6px_12px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.8)]',
      },
      {
        title: '真实发光 LED 灯珠与立体镀铬按键',
        detail: '开启状态配备径向辉光 LED（shadow-[0_0_10px_#ef4444]），按键具备顶部镜面高光与按下内陷阴影。',
        tailwindHint: 'w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444,inset_0_1px_2px_#ffffff]',
      },
    ],
    typography: {
      headingFont: 'Outfit / Plus Jakarta Sans',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-sans font-bold tracking-wider uppercase text-neutral-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.75)]',
      bodyClasses: 'font-sans text-xs text-neutral-700',
      scaleNotes: '面板铭牌文字添加 1px 底部白色投影（drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]）以呈现真实的金属蚀刻/冲压凹陷感。',
    },
    geometryAndDepth: {
      borderRadius: '机架外壳 rounded-2xl，旋钮 rounded-full，玻璃屏 rounded-xl',
      borderStyle: '多层金属倒角边框 + 顶部白色内高光 (inset 0 1px 0)',
      shadowStyle: '重度立体复合投影（外投影 + 玻璃内凹深影 + LED 辉光）',
      spacingRhythm: '对称式硬件机架布局，旋钮与电平表按通道列对齐。',
    },
    colors: [
      { name: 'Brushed Silver', role: '拉丝铝合金主面板', hex: '#D4D8E0', tailwindClass: 'bg-[#D4D8E0]', textContrastClass: 'text-neutral-900' },
      { name: 'Walnut Trim', role: '复古胡桃木/皮革包边', hex: '#3D261C', tailwindClass: 'bg-[#3D261C]', textContrastClass: 'text-amber-100' },
      { name: 'Glass VFD Black', role: '镜面内凹荧光屏底色', hex: '#0C120E', tailwindClass: 'bg-[#0C120E]', textContrastClass: 'text-emerald-400' },
      { name: 'Aqua Gloss Amber', role: '暖色真空管/VU表背光', hex: '#F59E0B', tailwindClass: 'bg-amber-500', textContrastClass: 'text-neutral-950' },
      { name: 'Ruby LED Glow', role: '发光红宝石电源指示灯', hex: '#EF4444', tailwindClass: 'bg-red-500', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: '拉丝铝金属机架面板 (Brushed Aluminum Rack)',
        description: '多段金属线性渐变 + 顶部 1px 镜面内高光 + 深邃外投影',
        classes: 'bg-[linear-gradient(180deg,#e6e8ec_0%,#c8ccd4_48%,#b4b9c4_50%,#dcdfe6_100%)] border-2 border-[#7c828e] rounded-2xl p-6 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_28px_rgba(0,0,0,0.35)]',
      },
      {
        component: '带玻璃反光层的内凹显示屏 (Glossy Glass Screen)',
        description: '深色内凹槽位，顶部覆盖半透明白色弧面玻璃反光带',
        classes: 'relative overflow-hidden bg-[#0c120e] border-2 border-[#2a3038] rounded-xl p-5 font-mono text-emerald-400 shadow-[inset_0_4px_12px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.6)] before:content-[""] before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none',
      },
      {
        component: '3D 金属光泽立体按钮 (Glossy Beveled Button)',
        description: '上下双色金属渐变 + 顶部内高光，按下时反转为内凹阴影',
        classes: 'px-4 py-2 rounded-lg bg-[linear-gradient(180deg,#f8fafc_0%,#cbd5e1_100%)] border border-slate-500 font-sans text-xs font-bold text-slate-800 shadow-[0_3px_5px_rgba(0,0,0,0.25),inset_0_1px_0_#ffffff] active:bg-[linear-gradient(180deg,#94a3b8_0%,#cbd5e1_100%)] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.4)] transition-all',
      },
      {
        component: '仿真发光 LED 指示灯 (Glowing LED Indicator)',
        description: '带外发光光晕与中心高光点的物理灯珠',
        classes: 'w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981,inset_0_1px_2px_#ffffff] border border-emerald-700',
      },
    ],
    dos: [
      '使用线性渐变（linear-gradient）和锥形渐变（conic-gradient）表现金属拉丝与旋钮的反射高光，文字加上 1px 白色底影营造金属蚀刻感',
      '在内凹屏幕或表盘上方覆盖一层 `bg-gradient-to-b from-white/20 to-transparent` 半透明高光层，立刻呈现出真实的玻璃镜面质感',
    ],
    donts: [
      '不要用毫无光泽的纯色灰块冒充金属材质',
      '不要遗漏光源方向的一致性（统一遵循顶光原则：上边缘亮、下边缘暗）',
    ],
    aiPromptSnippet:
      'Use authentic Classic Skeuomorphism aesthetic (Apple iOS 6 / Logic Pro / vintage Hi-Fi hardware inspired). Brushed aluminum metallic gradients (`bg-[linear-gradient(180deg,#e6e8ec_0%,#c8ccd4_48%,#b4b9c4_50%,#dcdfe6_100%)]`), walnut wood/leather side trim (`#3D261C`), recessed glass display with glossy white specular reflection overlay (`from-white/25 to-transparent`), 3D rotary knobs (`conic-gradient`), engraved labels (`drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]`), and glowing LED indicator bulbs.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：复古拉丝铝与胡桃木机架母带压缩器 (Tube Mastering Rack)',
        archetype: 'Skeuomorphic Audio Rack',
        scenario: '胡桃木包边 + 拉丝铝前面板 + 弧面玻璃反光双 VU 电平表 + 3 颗可点击旋转的 3D 金属旋钮与红绿发光 LED 灯珠。',
        keyTechniques: ['conic-gradient 3D 金属旋钮', '弧面玻璃斜向高光折射层', '蚀刻金属铭牌与四角铆钉螺丝'],
        jsxCode: `<div className="bg-[#3D261C] p-3 rounded-2xl shadow-2xl">
  <div className="bg-[linear-gradient(180deg,#e6e8ec_0%,#c8ccd4_48%,#b4b9c4_50%,#dcdfe6_100%)] border-2 border-[#7c828e] rounded-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
    <div className="relative overflow-hidden bg-[#0c120e] rounded-xl p-5 border-2 border-[#2a3038] shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)]">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      <h1 className="text-amber-400 font-mono text-xl font-bold">VINTAGE TUBE MASTERING LIMITER</h1>
    </div>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：经典 iOS 6 / Aqua 风格精密时钟与环境气压仪',
        archetype: 'Skeuomorphic Instrument Panel',
        scenario: '复刻经典 iOS 6 皮革缝线顶栏、水晶高光按钮（Aqua Gloss Button）与玻璃反光气象/声学仪表盘。',
        keyTechniques: ['皮革缝线质感顶栏 (border-dashed)', 'Aqua 半透明水晶高光按钮', '玻璃表盘与发光刻度'],
        jsxCode: `<div className="bg-[linear-gradient(180deg,#e6e8ec_0%,#c8ccd4_100%)] p-6 rounded-2xl border-2 border-slate-400">
  <button className="px-5 py-2 rounded-full bg-[linear-gradient(180deg,#60a5fa_0%,#2563eb_50%,#1d4ed8_51%,#3b82f6_100%)] text-white font-bold shadow-[0_3px_6px_rgba(0,0,0,0.3),inset_0_1px_1px_#ffffff]">
    Calibrate Barometer
  </button>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：拟物化开盘磁带录音机与均衡器推子台',
        archetype: 'Skeuomorphic Tape Recorder',
        scenario: '拥有立体镀铬走带控制键（PLAY / REC / STOP）、发光红宝石录音灯与多段金属推子档位切换。',
        keyTechniques: ['镀铬金属光泽琴键', '录音状态红宝石 LED 呼吸辉光', '内凹磁带计数器窗口'],
        jsxCode: `<div className="bg-[linear-gradient(180deg,#d4d8e0_0%,#9ca3af_100%)] p-6 rounded-2xl border-2 border-slate-600">
  <button className="px-5 py-3 rounded-lg bg-[linear-gradient(180deg,#f8fafc_0%,#cbd5e1_100%)] border border-slate-600 shadow-[0_4px_6px_rgba(0,0,0,0.3),inset_0_1px_0_#fff] active:shadow-inner font-bold">
    ● REC
  </button>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 8. Neo-Brutalism (新粗野主义 / Neubrutalism)
  // ============================================================================
  {
    id: 'neo-brutalism',
    name: '新粗野主义 (Neo-Brutalism)',
    enName: 'Neo-Brutalism (Neubrutalism)',
    category: 'expressive-avant',
    categoryLabel: '潮流与复古数字',
    tagline: '2px 纯黑粗实线描边、零模糊 45° 硬偏移黑影、高饱和复古撞色与极具冲击力的按压位移',
    summary:
      '近年来在 Gumroad、Figma Config、獨立创作者工具中最具辨识度的潮流风格（又称 Neubrutalism）。它融合了传统建筑粗野主义的率真结构与波普印刷海报色彩：全站组件一律使用 `border-2 border-black` 纯黑粗边框，阴影彻底取消模糊度（`shadow-[4px_4px_0px_0px_#000000]`），背景大胆采用暖米白搭配明黄、珊瑚红、薄荷绿高对比色块。',
    representativeBrands: ['Gumroad', 'Figma Config', 'Lemon Squeezy 早期版', 'Poolsuite'],
    bestFor: ['独立开发者与数字商品电商店铺', '设计大会、黑客松与潮流活动官网', '极具个性的效率工具与文创品牌', '年轻化创作者社区'],
    notRecommendedFor: ['传统银行与严肃政务系统', '需要长时间夜间紧盯的运维监控屏'],
    coreCharacteristics: [
      {
        title: '零模糊硬偏移纯黑阴影 (Hard Offset Shadows)',
        detail: '模糊半径严格为 0px，使用 shadow-[4px_4px_0px_0px_#000000] 或 6px 制造如同剪纸拼贴般的强烈立体感。',
        tailwindHint: 'border-2 border-black shadow-[4px_4px_0px_0px_#000000]',
      },
      {
        title: '按压位移与阴影收起动画',
        detail: '鼠标悬停或按下时，按钮向右下角平移 2px~4px，同时阴影等比缩小直至完全贴合底面。',
        tailwindHint: 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all',
      },
      {
        title: '高饱和波普撞色色盘',
        detail: '在暖米白（#FFFDF5）画布上碰撞柠檬黄（#FFDE59）、珊瑚粉（#FF6B6B）与薄荷绿（#6EE7B7），所有文字保持 100% 纯黑。',
        tailwindHint: 'bg-[#FFDE59] text-black font-bold',
      },
      {
        title: '粗体几何标题与外露黑框表格',
        detail: '标题采用 ExtraBold 字重，表格和分割线全部采用 2px 纯黑实线。',
        tailwindHint: 'font-display font-extrabold text-black tracking-tight',
      },
    ],
    typography: {
      headingFont: 'Bricolage Grotesque',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-display font-extrabold tracking-tight text-black',
      bodyClasses: 'font-sans font-medium text-sm text-neutral-900',
      scaleNotes: '正文字重建议使用 Medium (500) 或 SemiBold (600)，以撑起 2px 粗黑描边的视觉重量。',
    },
    geometryAndDepth: {
      borderRadius: 'rounded-lg (8px) 或 rounded-xl (12px)',
      borderStyle: 'border-2 border-black (全站统一 2px 纯黑实线)',
      shadowStyle: 'shadow-[4px_4px_0px_0px_#000000] (大卡片可用 6px_6px)',
      spacingRhythm: '组件间距充足（gap-5, p-6），给右下角硬阴影留出展示空间。',
    },
    colors: [
      { name: 'Poster Cream', role: '暖米白画布', hex: '#FFFDF5', tailwindClass: 'bg-[#FFFDF5]', textContrastClass: 'text-black' },
      { name: 'Acid Yellow', role: '主高亮色块', hex: '#FFDE59', tailwindClass: 'bg-[#FFDE59]', textContrastClass: 'text-black' },
      { name: 'Coral Pop', role: '行动点撞色', hex: '#FF6B6B', tailwindClass: 'bg-[#FF6B6B]', textContrastClass: 'text-black' },
      { name: 'Mint Pop', role: '增长与成功色块', hex: '#6EE7B7', tailwindClass: 'bg-[#6EE7B7]', textContrastClass: 'text-black' },
      { name: 'Pure Black', role: '边框与硬阴影', hex: '#000000', tailwindClass: 'bg-black', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: '新粗野主义标准卡片 (Neubrutalist Card)',
        description: '白底 + 2px 纯黑粗框 + 6px 右下硬黑影',
        classes: 'bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0px_0px_#000000]',
      },
      {
        component: '新粗野主义位移按钮 (Hard-Shadow Button)',
        description: '黄底黑框，悬停下沉 2px，点击完全压平阴影',
        classes: 'px-5 py-2.5 bg-[#FFDE59] border-2 border-black rounded-lg font-bold text-sm text-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all',
      },
      {
        component: '粗黑框输入框 (Brutalist Input)',
        description: '聚焦时背景变浅黄并弹出 3px 硬阴影',
        classes: 'w-full px-4 py-2.5 bg-white border-2 border-black rounded-lg text-sm font-medium text-black focus:outline-none focus:bg-[#FFF9DB] focus:shadow-[3px_3px_0px_0px_#000000] transition-all',
      },
      {
        component: '薄荷绿撞色指标盒 (Pop Metric Card)',
        description: '高饱和背景配纯黑粗体大数字',
        classes: 'bg-[#6EE7B7] border-2 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000000]',
      },
    ],
    dos: [
      '确保全站所有边框都是 100% 纯黑（border-black），所有阴影模糊度都是 0px',
      '彩色背景上的文字一律使用纯黑色（text-black）以保证极高对比度',
    ],
    donts: [
      '切勿混用柔和模糊阴影（shadow-lg）和硬偏移阴影',
      '不要使用浅灰色边框（如 border-slate-200）',
    ],
    aiPromptSnippet:
      'Use Neo-Brutalism (Neubrutalism) aesthetic. Warm cream canvas (`#FFFDF5`), `border-2 border-black` outlines on every element, zero-blur hard offset shadows (`shadow-[4px_4px_0px_0px_#000000]`), mechanical press shift (`hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000]`), and vibrant `#FFDE59`, `#FF6B6B`, `#6EE7B7` blocks.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：Gumroad 风独立创作者数字商店主页',
        archetype: 'Neubrutalist Landing',
        scenario: '高饱和柠檬黄与薄荷绿撞色英雄区，内嵌可拖动滑块的创作者分成收益计算器。',
        keyTechniques: ['6px 零模糊硬黑影', '按压位移按钮动画', '实时滑块收益计算'],
        jsxCode: `<div className="bg-[#FFFDF5] p-8 border-2 border-black">
  <div className="bg-[#FFDE59] border-2 border-black rounded-2xl p-8 shadow-[6px_6px_0px_0px_#000000]">
    <h1 className="font-display text-4xl font-extrabold text-black">Sell digital goods directly.</h1>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：创作者营收看板与订单管理后台',
        archetype: 'Neubrutalist Dashboard',
        scenario: '用三原色撞色块区分净收入、激活数与退款率，搭配 2px 粗黑线表格。',
        keyTechniques: ['撞色 KPI 卡片', '2px 纯黑实线数据表', '反白选中态筛选按钮'],
        jsxCode: `<div className="bg-[#FFFDF5] p-6 grid grid-cols-3 gap-5">
  <div className="bg-[#6EE7B7] border-2 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000]">
    <div className="text-3xl font-extrabold font-mono">$24,890</div>
  </div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：数字许可证选配与自定义小费结账单',
        archetype: 'Neubrutalist Checkout',
        scenario: '支持个人/团队许可证切换与创作者咖啡打赏叠加计算的结账表单。',
        keyTechniques: ['硬阴影单选卡片', '小费金额快捷叠加', '实时收据汇总'],
        jsxCode: `<div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000]">
  <h3 className="font-display text-xl font-extrabold">Select License Tier</h3>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 9. Dark Mode & Aurora UI (极光暗黑与微光风)
  // ============================================================================
  {
    id: 'linear-dark',
    name: '极光暗黑与微光风 (Dark & Aurora UI)',
    enName: 'Dark Mode & Aurora UI',
    category: 'data-domain',
    categoryLabel: '布局与经典平面',
    tagline: '深邃曜石底色、顶部柔和弥散极光光晕 (Aurora Gradient)、1px 半透明微光边框与键盘优先体验',
    summary:
      '现代 AI 与开发者工具（Linear、Raycast、Vercel、Supabase）最主流的暗黑设计范式，在设计圈被称为“Aurora UI + Dark Craft”。它解决了传统纯黑界面沉闷死板的问题：在深邃蓝黑画布（`#090A0F`）顶部布置大半径柔和弥散的极光径向渐变（Aurora Spotlight），面板边缘采用 `border-white/[0.08]` 模拟顶光照射的 1px 细腻反光，并内建丰富的键盘快捷键（`<kbd>`）交互。',
    representativeBrands: ['Linear', 'Raycast', 'Supabase', 'Resend'],
    bestFor: ['AI 产品主页与大模型开发平台', '研发效能、Issue 追踪与云原生控制台', '高频快捷键驱动的桌面级 Web 工具', '现代开发者技术品牌官网'],
    notRecommendedFor: ['传统政务与老年公共服务门户', '强日照户外使用的浅色移动端页面'],
    coreCharacteristics: [
      {
        title: '顶部弥散极光光晕 (Aurora Radial Spotlight)',
        detail: '使用 radial-gradient 在页面顶部中央渲染 15%~20% 透明度的靛蓝/紫罗兰柔光，赋予暗黑界面通透的呼吸感。',
        tailwindHint: 'bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(94,106,210,0.22),transparent)]',
      },
      {
        title: '1px 半透明微光边框 (Subtle Luminance Borders)',
        detail: '绝不使用刺眼的实色灰白线，统一采用 border-white/[0.08]，悬停时提亮至 border-white/[0.16] 并叠加顶部内高光。',
        tailwindHint: 'bg-[#12141C] border border-white/[0.08] hover:border-white/[0.16] rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]',
      },
      {
        title: '原生快捷键徽章基因 (Keyboard-First Kbd)',
        detail: '按钮、搜索框与列表项旁标配精致的 <kbd> 按键提示（如 ⌘K, ⇧G），彰显专业生产力工具定位。',
        tailwindHint: 'px-1.5 py-0.5 text-[11px] font-mono bg-white/[0.06] border border-white/[0.1] rounded text-slate-300',
      },
      {
        title: '紧凑高密度列表与光学字重补偿',
        detail: '工作台列表采用 13px 字号与 38px 紧凑行高，主次文字采用 white 与 #8A8F98 柔和过渡。',
        tailwindHint: 'text-[13px] text-slate-200 tracking-tight',
      },
    ],
    typography: {
      headingFont: 'Plus Jakarta Sans / Outfit',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-sans font-semibold tracking-tight text-white',
      bodyClasses: 'font-sans text-[13px] leading-relaxed text-[#8A8F98]',
      scaleNotes: '大标题采用渐变白或高亮纯白，控制台列表统一采用紧凑 13px 字号。',
    },
    geometryAndDepth: {
      borderRadius: 'rounded-lg (8px) 至 rounded-xl (12px)',
      borderStyle: 'border border-white/[0.08]',
      shadowStyle: 'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_16px_40px_rgba(0,0,0,0.4)]',
      spacingRhythm: '外框 24px 留白，内部列表紧凑高效。',
    },
    colors: [
      { name: 'Obsidian Void', role: '底层暗黑画布', hex: '#090A0F', tailwindClass: 'bg-[#090A0F]', textContrastClass: 'text-white' },
      { name: 'Elevated Slate', role: '卡片与面板表面', hex: '#12141C', tailwindClass: 'bg-[#12141C]', textContrastClass: 'text-white' },
      { name: 'Aurora Indigo', role: '极光光晕与主按钮', hex: '#5E6AD2', tailwindClass: 'bg-[#5E6AD2]', textContrastClass: 'text-white' },
      { name: 'Muted Silver', role: '次级文本与说明', hex: '#8A8F98', tailwindClass: 'bg-[#8A8F98]', textContrastClass: 'text-slate-950' },
      { name: 'Border Luminance', role: '8% 微光边框色', hex: '#222634', tailwindClass: 'bg-[#222634]', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: '微光暗黑卡片 (Aurora Dark Card)',
        description: '深色面板 + 8% 白度细边框 + 1px 顶部内折射高光',
        classes: 'bg-[#12141C] border border-white/[0.08] rounded-xl p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]',
      },
      {
        component: '极光靛蓝主按钮 (Linear Indigo Button)',
        description: '带顶部内高光描边的精致小圆角按钮',
        classes: 'px-3.5 py-1.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6B77E0] text-white text-xs font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-colors',
      },
      {
        component: '⌘K 命令触发栏 (Command Bar Trigger)',
        description: '半透明微光搜索触发器配快捷键徽章',
        classes: 'flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-[#8A8F98] hover:border-white/[0.16]',
      },
      {
        component: '高密度任务行 (Compact Issue Row)',
        description: '38px 行高，悬停 3% 白度微亮',
        classes: 'flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05] hover:bg-white/[0.03] text-[13px] text-slate-200 transition-colors',
      },
    ],
    dos: [
      '始终使用 border-white/[0.08] 半透明边框代替死板的实色灰框',
      '背景光晕保持柔和低饱和（透明度 ≤ 22%），营造高级感而非廉价夜店霓虹灯',
    ],
    donts: [
      '严禁使用刺眼的青红赛博朋克外发光',
      '不要在暗色卡片内嵌套多层浓重阴影',
    ],
    aiPromptSnippet:
      'Use Dark Mode & Aurora UI aesthetic (Linear / Raycast inspired). Deep `#090A0F` canvas with a soft top radial aurora spotlight (`rgba(94,106,210,0.22)`), `#12141C` elevated surfaces, `border-white/[0.08]` subtle borders with top inset highlight (`shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]`), compact 13px typography, and `<kbd>` shortcut badges.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：极光暗黑风研发效能工具主页',
        archetype: 'Aurora Dark Landing',
        scenario: '顶部径向极光聚光灯 + 1px 微光卡片矩阵 + 快捷键交互切换的现代 SaaS 着陆页。',
        keyTechniques: ['顶部径向极光渐变', '1px 顶部内高光边框', '交互式快捷键卡片'],
        jsxCode: `<div className="bg-[#090A0F] text-white p-8 relative overflow-hidden">
  <div className="max-w-2xl mx-auto text-center">
    <h1 className="text-4xl font-semibold">Crafted for high-velocity teams.</h1>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：Linear 风迭代周期与 Issue 追踪工作台',
        archetype: 'Dark Craft Workspace',
        scenario: '左列表 + 右侧属性检查器的紧凑研发工作台，支持按状态筛选与点击查看 Issue 详情。',
        keyTechniques: ['38px 紧凑列表行', '半透明分割线', '右侧实时属性检查器'],
        jsxCode: `<div className="bg-[#090A0F] text-slate-200 border border-white/[0.08] rounded-xl">
  <div className="px-4 py-2.5 flex justify-between">
    <span>ENG-412 · Zero-copy buffer pooling</span>
  </div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：⌘K 全局命令面板 (Command Palette)',
        archetype: 'Command Palette Modal',
        scenario: '支持实时输入过滤指令、显示分类与快捷键绑定的悬浮命令中心。',
        keyTechniques: ['实时模糊过滤', '首项高亮聚焦态', 'Kbd 组合键展示'],
        jsxCode: `<div className="bg-[#12141C] border border-white/[0.12] rounded-xl p-2">
  <input placeholder="Type a command..." className="w-full p-3 bg-transparent text-sm text-white" />
</div>`,
      },
    ],
  },

  // ============================================================================
  // 10. Retro Terminal & Classic OS (复古终端与千禧系统风 / TUI & Y2K)
  // ============================================================================
  {
    id: 'retro-terminal',
    name: '极客命令行终端风 (Retro CLI / TUI)',
    enName: 'Retro CLI & TUI Terminal',
    category: 'expressive-avant',
    categoryLabel: '潮流与复古数字',
    tagline: '100% 等宽像素感字体、CRT 磷光绿显像管、ASCII 框线分屏与反白块光标交互',
    summary:
      '专为极客与底层基础设施打造的命令行终端界面流派（Terminal User Interface，如 Charm.sh、Warp、btop、k9s）。区别于图形化的 Win95 桌面窗口，CLI / TUI 风格全站 100% 采用等宽字体（`font-mono`），零圆角（`rounded-none`），在深黑显像管背景（`#060B08`）上搭配高对比磷光绿（`text-emerald-400`）与琥珀黄（`text-amber-400`）、方括号按钮（`[ EXECUTE ]`）、字符进度条（`████████░░`）以及悬停整块反白光标效果。',
    representativeBrands: ['Charm.sh', 'Warp.dev', 'btop / Lazygit TUI', 'IBM 3270 Mainframe'],
    bestFor: ['开源 CLI 工具、编译器与基础设施官网', '网络安全、CTF 竞赛与黑客松活动页', '极客程序员个人博客与作品集', '复古音乐电台与潮流数字实验项目'],
    notRecommendedFor: ['传统企业 OA 与大众母婴商城', '面向非技术用户的日常政务服务'],
    coreCharacteristics: [
      {
        title: '全站 100% 等宽字体纪律 (100% Monospace)',
        detail: '标题、正文、表格与按钮无一例外全部使用 font-mono，每个字符宽度相等，形成严格的字符栅格。',
        tailwindHint: 'font-mono tabular-nums tracking-normal',
      },
      {
        title: '反白块光标交互 (Inverse Block Cursor)',
        detail: '选中项或按钮悬停时，背景直接变为亮绿色、文字变为深黑色（bg-emerald-400 text-[#060B08]），还原终端光标反显效果。',
        tailwindHint: 'px-3 py-1.5 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#060B08] font-mono text-xs font-bold',
      },
      {
        title: 'ASCII 字符进度条与方括号控件',
        detail: '使用 `[ COPY ]`、`[X]` 以及 `████████░░ 80%` 字符块代替现代圆滑图标与 SVG 图表。',
        tailwindHint: 'font-mono text-xs text-emerald-400',
      },
      {
        title: '零圆角分屏边框 (TUI Split Panes)',
        detail: '使用 1px 直角绿框将页面划分为多个终端窗格，窗口左上角嵌合反白标题条。',
        tailwindHint: 'bg-[#0B140E] border border-emerald-500/40 rounded-none p-4',
      },
    ],
    typography: {
      headingFont: 'JetBrains Mono',
      bodyFont: 'JetBrains Mono',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-mono font-bold text-emerald-400',
      bodyClasses: 'font-mono text-xs text-emerald-300/80 leading-relaxed',
      scaleNotes: '字号层级克制，主要依靠反白底色块（bg-emerald-400 text-black）和琥珀色（text-amber-400）突出重点。',
    },
    geometryAndDepth: {
      borderRadius: 'rounded-none (0px 绝对直角)',
      borderStyle: 'border border-emerald-500/40',
      shadowStyle: 'shadow-none',
      spacingRhythm: '紧凑字符网格（p-4, gap-4）。',
    },
    colors: [
      { name: 'CRT Black', role: '显像管深黑底色', hex: '#060B08', tailwindClass: 'bg-[#060B08]', textContrastClass: 'text-emerald-400' },
      { name: 'Pane Dark Green', role: '分屏面板底色', hex: '#0B140E', tailwindClass: 'bg-[#0B140E]', textContrastClass: 'text-emerald-400' },
      { name: 'Phosphor Green', role: '主前景字符与反白块', hex: '#34D399', tailwindClass: 'bg-emerald-400', textContrastClass: 'text-[#060B08]' },
      { name: 'Amber Alert', role: '警告与次级高亮', hex: '#FBBF24', tailwindClass: 'bg-amber-400', textContrastClass: 'text-[#060B08]' },
      { name: 'Dim Grid', role: '暗部边框线', hex: '#065F46', tailwindClass: 'bg-emerald-800', textContrastClass: 'text-emerald-200' },
    ],
    recipes: [
      {
        component: 'TUI 终端分屏窗格 (Terminal Pane)',
        description: '直角绿框容器，全等宽字体',
        classes: 'bg-[#0B140E] border border-emerald-500/40 rounded-none p-4 font-mono text-emerald-400',
      },
      {
        component: '终端反白光标按钮 (Bracket Button)',
        description: '方括号包裹，悬停瞬间反白为绿底黑字',
        classes: 'px-4 py-2 border border-emerald-400 text-emerald-400 font-mono text-xs font-bold hover:bg-emerald-400 hover:text-[#060B08] transition-colors',
      },
      {
        component: '窗口反白标题条 (Inverse Title Header)',
        description: '绿底黑字紧凑标题条',
        classes: 'bg-emerald-400 text-[#060B08] px-2.5 py-0.5 font-mono text-xs font-bold inline-block',
      },
      {
        component: 'Shell 命令行复制框 (Shell Prompt Box)',
        description: '带 $ 提示符的安装命令栏',
        classes: 'bg-[#060B08] border border-emerald-500/50 p-3 font-mono text-xs text-emerald-300 flex items-center justify-between',
      },
    ],
    dos: [
      '用 `[ ACTION ]`、`< OK >`、`[X]` 等 ASCII 符号强化终端交互真实感',
      '使用反白块（`bg-emerald-400 text-[#060B08]`）指示当前焦点所在位置',
    ],
    donts: [
      '不要混入任何圆角胶囊（rounded-full）或非等宽字体',
      '不要叠加模糊发光导致小号字符糊成一团',
    ],
    aiPromptSnippet:
      'Use Retro CRT Terminal / TUI aesthetic. 100% monospace typography (`font-mono tabular-nums`), deep CRT black background (`#060B08`), phosphor green (`text-emerald-400`) and amber (`text-amber-400`) foregrounds, `rounded-none` 1px borders (`border-emerald-500/40`), ASCII progress bars (`████████░░`), and inverse block cursor hover states (`hover:bg-emerald-400 hover:text-[#060B08]`).',
    examples: [
      {
        id: 'landing',
        title: '样例 01：开源 CLI 工具与 Rust 内核项目主页',
        archetype: 'Retro CLI Landing',
        scenario: '包含一键复制 curl 安装指令行、ASCII 字符性能对比柱状图与反白导航栏的极客工具主页。',
        keyTechniques: ['一键复制安装命令', 'ASCII 字符块性能对比', '反白块标题条'],
        jsxCode: `<div className="bg-[#060B08] text-emerald-400 font-mono p-6 border border-emerald-500/40">
  <div className="bg-emerald-400 text-[#060B08] px-2 py-0.5 text-xs font-bold inline-block">VORTEX-CLI v3.8</div>
  <h1 className="text-2xl font-bold mt-4">Zero-dependency container supervisor.</h1>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：btop 风多窗格终端资源与审计监控台',
        archetype: 'TUI System Monitor',
        scenario: '复刻 btop / k9s 的终端分屏监控界面，展示 8 核 CPU 字符负载条与实时安全套接字流。',
        keyTechniques: ['TUI 多窗格分屏', '████████░░ 字符进度条', '琥珀色拦截告警'],
        jsxCode: `<div className="bg-[#060B08] text-emerald-400 font-mono p-4 grid grid-cols-2 gap-4">
  <div className="border border-emerald-500/40 p-4">CPU_00 ██████████░░ 84%</div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：交互式防火墙规则生成器 (nftables TUI)',
        archetype: 'Interactive TUI Configurator',
        scenario: '点击 `[X] / [ ]` 复选框切换端口放行策略，右侧窗格实时生成 nftables 配置文件。',
        keyTechniques: ['[X] 字符复选框交互', '实时生成终端配置代码', '整行反白悬停反馈'],
        jsxCode: `<div className="bg-[#0B140E] border border-emerald-500/40 p-6 font-mono text-xs text-emerald-400">
  <button className="w-full text-left py-1.5 hover:bg-emerald-400 hover:text-black">[X] ALLOW TCP/443</button>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 11. Swiss Style (瑞士国际主义排版风)
  // ============================================================================
  {
    id: 'swiss-grid',
    name: '瑞士国际主义网格风 (Swiss Style)',
    enName: 'Swiss Style (International Typographic)',
    category: 'data-domain',
    categoryLabel: '布局与经典平面',
    tagline: '现代网格系统的鼻祖：外露 1px 贯穿式分割线、零圆角几何单元格、巨型无衬线紧字距标题与绝对理性秩序',
    summary:
      '源自 1950 年代瑞士苏黎世与巴塞尔学派（Josef Müller-Brockmann），是现代网页 CSS Grid 网格布局的理论源头，也是 Awwwards 与 Vercel、Read.cv 等设计驱动型科技品牌最推崇的经典风格。其标志性特征是将数学网格线直接暴露在界面上（1px 黑色贯穿实线 `border-neutral-900`），所有单元格严格零圆角（`rounded-none`）、零阴影，利用极大的字号反差、左上角 `01. / 02.` 章节编号与单点瑞士朱红（`#FF3300`）构建建筑级的视觉秩序。',
    representativeBrands: ['Vercel Architectural Pages', 'Josef Müller-Brockmann 海报体系', 'Read.cv', 'Are.na'],
    bestFor: ['设计机构、建筑事务所与创意工作室官网', '前沿 AI 基础设施与工程技术白皮书', '艺术设计展、技术峰会着陆页', '追求极高秩序感与精准数据对齐的报表系统'],
    notRecommendedFor: ['圆润卡通风格的亲子应用', '追求柔和软陶触感的游戏界面'],
    coreCharacteristics: [
      {
        title: '外露贯穿式 1px 网格线 (Exposed Hairline Grid)',
        detail: '利用父容器 border-t border-l 配合子单元格 border-r border-b 构建全屏贯通的 1px 黑色实线网格，结构即视觉。',
        tailwindHint: 'grid grid-cols-12 border-t border-l border-neutral-900 [&>*]:border-r [&>*]:border-b [&>*]:border-neutral-900',
      },
      {
        title: '绝对零圆角与零阴影 (Zero Radius & Flat Plane)',
        detail: '全站严格保持 rounded-none 与 shadow-none，悬停反馈直接采用单元格纯色反转（白底变黑底或朱红底）。',
        tailwindHint: 'rounded-none shadow-none hover:bg-neutral-950 hover:text-white transition-colors',
      },
      {
        title: '巨型紧凑无衬线标题 + 理性序号索引',
        detail: '标题使用 tracking-tighter leading-[0.94] 制造强烈视觉张力，每个区块左上角配 01. / 02. 等宽编号。',
        tailwindHint: 'font-display text-5xl font-bold tracking-tighter leading-[0.94] text-neutral-950',
      },
      {
        title: '高对比纸白、炭黑与瑞士朱红 (#FF3300)',
        detail: '90% 面积为暖纸白（#F7F6F2）与炭黑（#111111），仅在唯一主操作处使用 10% 瑞士国际朱红。',
        tailwindHint: 'bg-[#FF3300] text-white font-mono text-xs font-bold uppercase',
      },
    ],
    typography: {
      headingFont: 'Plus Jakarta Sans / Bricolage Grotesque',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-display font-bold tracking-tighter leading-none text-neutral-950',
      bodyClasses: 'font-sans text-sm leading-relaxed text-neutral-700',
      scaleNotes: '大标题（48px–64px）与正文（13px–14px）形成戏剧性的比例落差。',
    },
    geometryAndDepth: {
      borderRadius: 'rounded-none (0px)',
      borderStyle: 'border border-neutral-900 (1px 贯穿实线)',
      shadowStyle: 'shadow-none',
      spacingRhythm: '单元格内部顶部留白，内容贴齐底部基线（flex flex-col justify-between）。',
    },
    colors: [
      { name: 'Swiss Paper', role: '暖白主画布', hex: '#F7F6F2', tailwindClass: 'bg-[#F7F6F2]', textContrastClass: 'text-neutral-950' },
      { name: 'Pure Cell White', role: '重点单元格底色', hex: '#FFFFFF', tailwindClass: 'bg-white', textContrastClass: 'text-neutral-950' },
      { name: 'Carbon Black', role: '网格线与主标题', hex: '#111111', tailwindClass: 'bg-[#111111]', textContrastClass: 'text-white' },
      { name: 'Swiss Vermilion', role: '唯一高优强调色', hex: '#FF3300', tailwindClass: 'bg-[#FF3300]', textContrastClass: 'text-white' },
      { name: 'Neutral Gray', role: '次级说明文字', hex: '#666666', tailwindClass: 'bg-neutral-500', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: '瑞士外露网格母容器 (Swiss Grid Matrix)',
        description: '上左边框在父级、下右边框在子级，确保相邻分割线永远是精准的 1px',
        classes: 'grid grid-cols-1 md:grid-cols-3 border-t border-l border-neutral-900 bg-[#F7F6F2]',
      },
      {
        component: '标准网格单元格 (Swiss Grid Cell)',
        description: '直角、上下两端对齐、悬停变为纯白底色',
        classes: 'border-r border-b border-neutral-900 p-8 flex flex-col justify-between min-h-[240px] hover:bg-white transition-colors',
      },
      {
        component: '瑞士朱红主按钮 (Vermilion CTA)',
        description: '零圆角朱红填充，悬停反转为炭黑',
        classes: 'px-6 py-3.5 rounded-none bg-[#FF3300] hover:bg-neutral-950 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors',
      },
      {
        component: '直角结构化输入框 (Grid Input)',
        description: '1px 纯黑实线直角输入框',
        classes: 'w-full px-4 py-2.5 rounded-none bg-white border border-neutral-900 text-sm text-neutral-950 focus:outline-none focus:border-[#FF3300]',
      },
    ],
    dos: [
      '严格处理相邻单元格的边框折叠，绝不让两个相邻 border 叠加成 2px 粗细不均',
      '所有数字、序号、百分比一律添加 tabular-nums 等宽对齐',
    ],
    donts: [
      '不要添加任何圆角或模糊投影',
      '不要将文字居中对齐，坚持严格的网格左对齐与数字右对齐',
    ],
    aiPromptSnippet:
      'Use Swiss International Typographic Style (Josef Müller-Brockmann inspired). Exposed 1px hairline grid (`border-neutral-900`), strictly `rounded-none` zero border radius, zero shadows, `#F7F6F2` paper canvas, `#111111` ink, single `#FF3300` vermilion accent, oversized tight-tracking sans-serif headlines, and `01. / 02.` monospace index numbers.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：12 列外露网格架构技术峰会主页',
        archetype: 'Swiss Grid Landing',
        scenario: '采用贯穿式 1px 黑色网格构建的现代技术主页，包含非对称大标题区与三栏特性矩阵。',
        keyTechniques: ['1px 边框折叠网格', 'tracking-tighter 巨型标题', '悬停反色交互'],
        jsxCode: `<div className="bg-[#F7F6F2] text-neutral-950 border-t border-l border-neutral-900">
  <div className="grid grid-cols-12">
    <div className="col-span-8 p-10 border-r border-b border-neutral-900">
      <h1 className="text-5xl font-bold tracking-tighter">Precision Grid Infrastructure.</h1>
    </div>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：高密度分布式节点网格监控台',
        archetype: 'Swiss Grid Telemetry',
        scenario: '无卡片嵌套的纯网格分割仪表盘，支持按区域过滤节点并保持等宽数字对齐。',
        keyTechniques: ['tabular-nums 纵向对齐', '通栏网格数据表', '零圆角区域切换器'],
        jsxCode: `<div className="bg-[#F7F6F2] border-t border-l border-neutral-900 grid grid-cols-4">
  <div className="p-6 border-r border-b border-neutral-900 bg-white">
    <div className="font-mono text-3xl font-bold tabular-nums">655,790</div>
  </div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：裸金属算力规格配置单与账单汇总',
        archetype: 'Swiss Specification Form',
        scenario: '像瑞士精密工程说明书一样的配置器，点选直角规格单元格实时计算月度账单。',
        keyTechniques: ['黑底反白选中态单元格', '分项等宽账单表', '零装饰结构化布局'],
        jsxCode: `<div className="bg-white border-t border-l border-neutral-900 grid grid-cols-3">
  <button className="p-5 border-r border-b border-neutral-900 bg-neutral-950 text-white text-left">
    32 Physical Cores
  </button>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 12. Editorial Magazine Design (社论杂志与纸媒排版风)
  // ============================================================================
  {
    id: 'editorial-serif',
    name: '社论杂志排版风 (Editorial Design)',
    enName: 'Editorial & Magazine Design',
    category: 'data-domain',
    categoryLabel: '布局与经典平面',
    tagline: '高对比典雅衬线大标题、正斜体混排韵律、暖调亚麻纸背景与报纸分栏细线法则',
    summary:
      '源于《Kinfolk》、《Monocle》、《The New York Times Magazine》与 Stripe Press 的经典数字出版与品牌叙事风格（在 Awwwards 与设计分类中统称为 Editorial Design）。它打破了千篇一律的无衬线科技感，将高对比度衬线字体（Playfair Display / Fraunces）作为绝对视觉主角，配合关键情绪词的斜体强调（`italic`）、温润的暖亚麻纸底色（`#FAF7F2`）以及经典的报纸多栏细分割线（Broadsheet Rules），传递深厚的人文底蕴与高定品质感。',
    representativeBrands: ['Kinfolk Magazine', 'Monocle', 'Stripe Press', 'Aesop 品牌故事页', 'Financial Times'],
    bestFor: ['高端时尚、家居、香氛与生活方式品牌官网', '深度长文博客、数字期刊与在线出版平台', '艺术博物馆、画廊策展与年度人文报告', '精品建筑室内设计与文化机构网站'],
    notRecommendedFor: ['高频秒级刷新的服务器运维监控台', '密集小图标工具栏类修图/建模软件'],
    coreCharacteristics: [
      {
        title: '高对比度衬线主标题与正斜体混排',
        detail: '主标题使用 Playfair Display 或 Fraunces，并在句子中挑选 1~2 个核心意象词设为 italic 斜体，营造杂志封面的优雅律动。',
        tailwindHint: 'font-serif-editorial text-4xl md:text-6xl font-normal tracking-tight leading-[1.08] text-[#1C1917]',
      },
      {
        title: '暖调亚麻/羊皮纸画布 (Warm Parchment Canvas)',
        detail: '告别刺眼的纯白 #FFFFFF，采用带有微暖纸浆质感的 #FAF7F2 作为主背景，#F2ECE1 作为次级专栏底色。',
        tailwindHint: 'bg-[#FAF7F2] text-[#1C1917]',
      },
      {
        title: '期刊眉栏与报纸分栏细线 (Broadsheet Hairlines)',
        detail: '页面顶部采用上下双细横线（border-y border-stone-300）标注刊号、季节与城市，正文采用多栏竖向细线（divide-x divide-stone-300）分隔。',
        tailwindHint: 'border-y border-stone-300 py-2.5 text-xs text-stone-500 flex justify-between',
      },
      {
        title: '无框元数据与极简底线输入控件',
        detail: '作者、分类、阅读时长使用中圆点 ` · ` 分隔，输入框仅保留底部 1px 墨线（border-b border-stone-900）。',
        tailwindHint: 'bg-transparent border-b border-stone-900 pb-2 font-serif-editorial italic',
      },
    ],
    typography: {
      headingFont: 'Playfair Display / Fraunces',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-serif-editorial font-normal tracking-tight text-[#1C1917]',
      bodyClasses: 'font-sans text-sm leading-[1.8] text-stone-600',
      scaleNotes: '正文行高宽松（1.75–1.85），赋予读者纸质书刊般的从容阅读节奏。',
    },
    geometryAndDepth: {
      borderRadius: 'rounded-none (0px 纸张切角)',
      borderStyle: 'border-stone-300 (暖灰细分割线) 与 border-stone-800 (主刊头线)',
      shadowStyle: 'shadow-none (纯正纸媒平面感)',
      spacingRhythm: '宽裕的章节上下留白（py-12）与分栏内边距（gap-8）。',
    },
    colors: [
      { name: 'Warm Linen', role: '亚麻纸主背景', hex: '#FAF7F2', tailwindClass: 'bg-[#FAF7F2]', textContrastClass: 'text-[#1C1917]' },
      { name: 'Sandstone Column', role: '次级专栏底色', hex: '#F2ECE1', tailwindClass: 'bg-[#F2ECE1]', textContrastClass: 'text-[#1C1917]' },
      { name: 'Espresso Ink', role: '主标题与正文墨色', hex: '#1C1917', tailwindClass: 'bg-[#1C1917]', textContrastClass: 'text-[#FAF7F2]' },
      { name: 'Burgundy Issue', role: '刊号与点缀色', hex: '#7C2D12', tailwindClass: 'bg-[#7C2D12]', textContrastClass: 'text-white' },
      { name: 'Stone Caption', role: '图注与作者元数据', hex: '#78716C', tailwindClass: 'bg-[#78716C]', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: '杂志刊头眉栏 (Magazine Masthead)',
        description: '上下双细线包裹的期号、地点与ISSN刊号条',
        classes: 'border-y border-stone-300 py-2.5 flex items-center justify-between text-xs text-stone-500 bg-[#FAF7F2]',
      },
      {
        component: '社论正斜体主标题 (Editorial Serif Headline)',
        description: '高对比衬线体配斜体关键词',
        classes: 'font-serif-editorial text-4xl md:text-5xl text-[#1C1917] leading-[1.1] tracking-tight',
      },
      {
        component: '报纸分栏文章块 (Broadsheet Column)',
        description: '依靠竖向细分割线划分的三栏深度特稿列表',
        classes: 'grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-300',
      },
      {
        component: '高定墨色主按钮 (Atelier Ink Button)',
        description: '直角浓缩咖啡黑按钮，悬停变为勃艮第酒红',
        classes: 'px-6 py-2.5 bg-[#1C1917] hover:bg-[#7C2D12] text-[#FAF7F2] text-xs tracking-widest uppercase transition-colors',
      },
    ],
    dos: [
      '在主标题中巧妙运用 `italic` 斜体词汇制造古典排版张力',
      '用细横线（border-t）和竖向分栏线（divide-x）组织内容，不要把每篇文章塞进带阴影的圆角白盒子里',
    ],
    donts: [
      '切勿使用彩色胶囊标签包裹文章分类或阅读时间',
      '不要使用冰冷刺眼的纯白背景或蓝紫科技渐变',
    ],
    aiPromptSnippet:
      'Use Editorial & Magazine Design aesthetic (Kinfolk / Monocle / Stripe Press inspired). Warm linen paper canvas (`#FAF7F2`), sandstone secondary panels (`#F2ECE1`), espresso ink typography (`#1C1917`), Playfair Display / Fraunces serif headlines with `italic` emphasis words, broadsheet hairline column dividers (`divide-x divide-stone-300`), and `rounded-none` print geometry.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：《L’ATELIER》建筑与器物美学季刊主页',
        archetype: 'Editorial Magazine Landing',
        scenario: '拥有经典双线期刊眉栏、正斜体交织大标题与三栏报纸分栏导读的数字杂志首页。',
        keyTechniques: ['双细线期刊眉栏', 'Playfair 正斜体混排', '三栏报纸级分割线排版'],
        jsxCode: `<div className="bg-[#FAF7F2] text-[#1C1917] p-8">
  <h1 className="font-serif-editorial text-5xl">In Praise of <span className="italic">Unfinished</span> Timber.</h1>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：现代主义馆藏拍品档案与目录索引台',
        archetype: 'Editorial Catalogue Index',
        scenario: '无边框目录式索引表，支持按年代筛选拍品，左侧衬线作品名搭配右侧等宽估价区间。',
        keyTechniques: ['无框目录横线列表', '年代底线筛选器', '衬线与等宽数字混排'],
        jsxCode: `<div className="bg-[#FAF7F2] text-[#1C1917] p-8">
  <h2 className="font-serif-editorial text-3xl">Provenance & Archival Catalogue</h2>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：高定香氛配方选配与瓶贴镌刻预览器',
        archetype: 'Bespoke Engraving Configurator',
        scenario: '切换前中后调植物香型并输入专属签名，右侧实时渲染亚麻纸质感定制瓶贴。',
        keyTechniques: ['极简底边输入框 (border-b)', '实时衬线瓶贴渲染', '香调成分分栏表'],
        jsxCode: `<div className="bg-[#F2ECE1] p-8 border border-stone-300">
  <input placeholder="Enter initials..." className="w-full pb-2 bg-transparent border-b border-[#1C1917] font-serif-editorial italic text-xl" />
</div>`,
      },
    ],
  },

  // ============================================================================
  // 13. Shadcn / Zinc Minimalist UI (现代极简组件库风)
  // ============================================================================
  {
    id: 'shadcn-zinc',
    name: '现代极简组件库风 (Shadcn / Zinc UI)',
    enName: 'Shadcn / Zinc Minimalist UI',
    category: 'modern-minimal',
    categoryLabel: '主流现代体系',
    tagline: '2023–2026 最主流的 SaaS 与 AI 应用事实标准：克制的 Zinc 消色差灰阶、1px 细边框、极浅微投影与高对比黑白主按钮',
    summary:
      '由 shadcn/ui、Vercel Geist 与 Radix Primitives 确立的当代 Web 应用事实标准（也是目前全球 AI 产品、Next.js 创业公司与现代 B2B SaaS 使用率最高的设计风格）。它摒弃了传统 Bootstrap/Ant Design 的彩色大按钮与繁琐装饰，全站 95% 采用精准校准的 Zinc 中性灰阶（`zinc-50` 至 `zinc-950`），以 `border border-zinc-200` 1px 细实线搭配 `shadow-2xs` 构建干净利落的卡片容器，主按钮直接采用纯黑（`bg-zinc-900 text-zinc-50`），焦点状态统一使用双层 `ring-2 ring-zinc-950 ring-offset-2`。',
    representativeBrands: ['shadcn/ui 官方体系', 'Vercel Dashboard (Geist)', 'Cal.com', 'Dub.co / Resend'],
    bestFor: ['现代 AI SaaS 应用与 Agent 工作台', 'B2B 开发者控制台、API 管理与账单后台', '开源组件库文档与现代全栈 Web 模板', '数据密集的筛选表格与多步配置表单'],
    notRecommendedFor: ['重度视觉娱乐化的儿童游戏', '追求奢华复古纸媒质感的高定时装画册'],
    coreCharacteristics: [
      {
        title: 'Zinc 消色差中性色阶主导 (Achromatic Zinc Palette)',
        detail: '克制使用彩色，主交互按钮直接采用高对比纯黑（bg-zinc-900 text-white hover:bg-zinc-800），次级按钮使用 bg-zinc-100，仅在危险操作或状态点使用语义色。',
        tailwindHint: 'bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 rounded-md px-4 py-2 text-sm font-medium shadow-2xs',
      },
      {
        title: '1px 细边框与紧凑圆角体系 (1px Border & Rounded-md)',
        detail: '卡片统一采用 rounded-xl border border-zinc-200 bg-white shadow-2xs，内部按钮、输入框与下拉框统一采用 rounded-md (6px)。',
        tailwindHint: 'rounded-xl border border-zinc-200 bg-white p-6 text-zinc-950 shadow-2xs',
      },
      {
        title: '标准 Ring-Offset 无障碍焦点环',
        detail: '源自 Radix UI 的标志性焦点反馈：控件聚焦时呈现 2px 留白偏移 + 2px 深色焦点环（focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2）。',
        tailwindHint: 'focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2',
      },
      {
        title: '分面筛选表格与槽位化卡片头尾 (Slot Card & Data Table)',
        detail: '卡片严格遵循 CardHeader / CardContent / CardFooter 结构，表格配备带虚线边框的筛选器（border-dashed）与紧凑行高。',
        tailwindHint: 'border border-dashed border-zinc-300 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50',
      },
    ],
    typography: {
      headingFont: 'Plus Jakarta Sans / Inter',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-sans font-semibold tracking-tight text-zinc-950',
      bodyClasses: 'font-sans text-sm text-zinc-500 leading-relaxed',
      scaleNotes: '卡片标题固定采用 `text-base font-semibold leading-none tracking-tight`，副标题采用 `text-xs text-zinc-500`。',
    },
    geometryAndDepth: {
      borderRadius: '外层卡片 rounded-xl (12px)，内部控件严格统一 rounded-md (6px)',
      borderStyle: 'border border-zinc-200 (分面过滤按钮可用 border-dashed)',
      shadowStyle: 'shadow-2xs 或 shadow-xs (极其克制的微投影)',
      spacingRhythm: '标准紧凑间距（p-6 外框，space-y-1.5 标题组，gap-4 表单项）。',
    },
    colors: [
      { name: 'Pure Background', role: '主背景与卡片表面', hex: '#FFFFFF', tailwindClass: 'bg-white', textContrastClass: 'text-zinc-950' },
      { name: 'Muted Surface', role: '次级背景与Tab槽位', hex: '#F4F4F5', tailwindClass: 'bg-zinc-100', textContrastClass: 'text-zinc-900' },
      { name: 'Primary Zinc-900', role: '主按钮与主标题墨色', hex: '#18181B', tailwindClass: 'bg-zinc-900', textContrastClass: 'text-zinc-50' },
      { name: 'Muted Foreground', role: '辅助说明文字', hex: '#71717A', tailwindClass: 'bg-zinc-500', textContrastClass: 'text-white' },
      { name: 'Border Zinc-200', role: '1px 标准分割边框', hex: '#E4E4E7', tailwindClass: 'bg-zinc-200', textContrastClass: 'text-zinc-900' },
    ],
    recipes: [
      {
        component: 'Shadcn 标准卡片容器 (Card Container)',
        description: '白底 + 1px zinc-200 细边框 + 极浅微阴影',
        classes: 'rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow-2xs p-6',
      },
      {
        component: 'Zinc-900 纯黑主按钮 (Primary Button)',
        description: '高对比深色填充、6px 圆角、悬停 90% 透明度',
        classes: 'inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-50 shadow-2xs hover:bg-zinc-900/90 transition-colors',
      },
      {
        component: '虚线分面筛选按钮 (Faceted Filter Trigger)',
        description: 'Data Table 顶部的标志性虚线边框过滤触发器',
        classes: 'inline-flex items-center gap-1.5 rounded-md border border-dashed border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors',
      },
      {
        component: 'Shadcn 槽位化分段切换器 (Tabs List & Trigger)',
        description: 'zinc-100 浅灰底槽 + 白底微阴影激活态卡片',
        classes: 'inline-flex h-9 items-center justify-center rounded-lg bg-zinc-100 p-1 text-zinc-500',
      },
    ],
    dos: [
      '严格保持色彩克制：用 `bg-zinc-900` 作为主操作按钮色，把彩色留给状态小圆点（如 `bg-emerald-500`）和图表折线',
      '统一使用 `rounded-md` (6px) 处理按钮与输入框，外层卡片使用 `rounded-xl` (12px)，形成鲜明的组件库秩序感',
    ],
    donts: [
      '不要在卡片上叠加厚重模糊的大投影（shadow-2xl）或花哨的多色渐变背景',
      '不要混用粗细不一的边框，全站所有分割线与外框均保持 1px `border-zinc-200`',
    ],
    aiPromptSnippet:
      'Use Shadcn / Zinc Minimalist UI aesthetic (shadcn/ui & Vercel Geist inspired). Achromatic Zinc palette (`bg-white`, `bg-zinc-100` muted surfaces, `text-zinc-950` primary text, `text-zinc-500` muted text), crisp 1px `border-zinc-200` borders, `rounded-xl` cards with `shadow-2xs`, `rounded-md` controls, high-contrast `bg-zinc-900 text-zinc-50` primary buttons, and `border-dashed` faceted filter triggers.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：Next.js / AI SDK 开发者平台与组件预览着陆页',
        archetype: 'Shadcn Developer Landing',
        scenario: '经典的顶栏公告条 + 双主次按钮组 + 内嵌交互式 Playground 选项卡的现代 AI 基础设施主页。',
        keyTechniques: ['bg-zinc-900 纯黑主按钮', 'bg-zinc-100 分段 Tabs 预览器', '1px border-zinc-200 模块化卡片'],
        jsxCode: `<div className="bg-white text-zinc-950 p-8 border border-zinc-200 rounded-xl space-y-6">
  <h1 className="text-4xl font-bold tracking-tight">Build your component library.</h1>
  <div className="flex gap-3">
    <button className="px-4 py-2 rounded-md bg-zinc-900 text-zinc-50 text-xs font-medium">Get Started</button>
    <button className="px-4 py-2 rounded-md border border-zinc-200 bg-white text-zinc-900 text-xs font-medium">Browse Blocks</button>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：Shadcn 分面筛选数据表与营收概览后台 (Data Table)',
        archetype: 'Shadcn Faceted Data Table',
        scenario: '包含 4 张标准 KPI 卡片、Tabs 视图切换器、虚线边框（border-dashed）状态过滤按钮与带复选框的账单表格。',
        keyTechniques: ['border-dashed 分面筛选按钮', '标准 CardHeader + tabular-nums 指标', '紧凑行高勾选数据表'],
        jsxCode: `<div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-2xs">
  <div className="text-xs font-medium text-zinc-500">Total Revenue</div>
  <div className="text-2xl font-bold text-zinc-950 tabular-nums mt-1">$45,231.89</div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：API 密钥签发、权限范围与危险区设置面板',
        archetype: 'Shadcn Settings & Token Form',
        scenario: '展示带 Ring 焦点态的输入框、权限 Switch 开关组、一键复制 Secret Key 以及底部红色边框危险操作区（Danger Zone）。',
        keyTechniques: ['focus:ring-2 ring-zinc-950 焦点环', '平滑胶囊 Switch 开关', 'border-red-200 危险操作隔离区'],
        jsxCode: `<div className="rounded-xl border border-zinc-200 bg-white p-6 space-y-4">
  <input className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-950" />
</div>`,
      },
    ],
  },

  // ============================================================================
  // 14. Microsoft Fluent Design (微软流畅亚克力与云母风)
  // ============================================================================
  {
    id: 'fluent-acrylic',
    name: '微软流畅亚克力风 (Microsoft Fluent UI)',
    enName: 'Microsoft Fluent Design (Acrylic & Mica)',
    category: 'modern-minimal',
    categoryLabel: '主流现代体系',
    tagline: '与 Apple 和 Google 并列的三大商业设计语言之一：云母柔和染色画布 (Mica)、半透明亚克力材质 (Acrylic) 与高光边缘',
    summary:
      '由 Microsoft 主导的跨平台设计系统（Fluent 2 / Windows 11 / Microsoft 365 Copilot）。它围绕五大物理元素“Light（光感）、Depth（景深）、Motion（动效）、Material（材质）、Scale（尺度）”构建：底层画布采用融合桌面壁纸色调的“云母（Mica）”柔和冷白渐变，浮动导航与侧边栏采用高模糊度的“亚克力（Acrylic）”半透明磨砂材质，控件边缘在悬停时呈现微妙的顶光描边（Reveal Highlight），主色调采用极具企业级信任感的 Fluent Blue（`#0067C0`）。',
    representativeBrands: ['Windows 11 系统界面', 'Microsoft 365 / Copilot', 'Microsoft Loop', 'Azure Portal (Fluent 2)'],
    bestFor: ['桌面级生产力套件与协同办公应用', '企业级云平台、IT 资产管理与安全中心', 'AI Copilot 侧边栏与智能文档助手', '跨 Windows / Web 混合架构的客户端软件'],
    notRecommendedFor: ['地下摇滚或街头潮流海报站', '纯字符命令行黑客工具'],
    coreCharacteristics: [
      {
        title: '云母底层画布与亚克力半透明层 (Mica & Acrylic Surfaces)',
        detail: '底层采用带有淡淡天青与薰衣草晕染的 Mica 画布（#EEF3FA），上层导航面板采用 bg-white/75 backdrop-blur-xl 模拟亚克力半透明折射。',
        tailwindHint: 'bg-white/75 backdrop-blur-xl border border-white/80 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)]',
      },
      {
        title: 'Fluent 底部强调线输入框 (Bottom-Accent Input)',
        detail: 'Windows 11 标志性的输入控件：四周为浅灰细边框，唯独底部有一条加粗底线，聚焦时底线变为 2px 亮蓝色（border-b-2 border-[#0067C0]）。',
        tailwindHint: 'bg-white/90 border border-slate-300/80 border-b-2 border-b-[#0067C0] rounded-md px-3 py-2 text-sm',
      },
      {
        title: '左侧垂直蓝色短竖条导航指示器 (Fluent Selection Pill)',
        detail: '侧边栏菜单选中项不仅背景变亮白，其最左侧还会浮现一根 3px 宽、16px 高的圆角蓝色短竖条（w-1 h-4 bg-[#0067C0] rounded-full）。',
        tailwindHint: 'relative flex items-center gap-3 px-3 py-2 rounded-lg bg-white/90 font-medium text-slate-900 before:w-1 before:h-4 before:bg-[#0067C0] before:rounded-full',
      },
      {
        title: '温润 8px 圆角与多层柔和环境阴影 (Elevation Shadows)',
        detail: '全面告别 Windows 8 时代的尖锐磁贴，采用温和的 rounded-lg (8px) 与 rounded-xl (12px)，配合低透明度双层环境阴影。',
        tailwindHint: 'rounded-xl bg-white/85 border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,103,192,0.06)]',
      },
    ],
    typography: {
      headingFont: 'Plus Jakarta Sans (Segoe UI Variable 替代)',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-sans font-semibold tracking-tight text-[#1B1A19]',
      bodyClasses: 'font-sans text-sm text-[#605E5C] leading-relaxed',
      scaleNotes: '模拟 Segoe UI Variable 的光学字重曲线，标题温润清晰，正文采用柔和深灰（#605E5C）降低长时办公视觉疲劳。',
    },
    geometryAndDepth: {
      borderRadius: '窗口与大卡片 rounded-xl (12px)，内部按钮与菜单项 rounded-lg (8px) 或 rounded-md (6px)',
      borderStyle: '亚克力层 border-white/80，常规卡片 border-black/[0.06]',
      shadowStyle: 'shadow-[0_4px_16px_rgba(0,0,0,0.06)] (柔和多层环境投影)',
      spacingRhythm: '宽敞舒适的现代桌面间距（p-6, gap-4）。',
    },
    colors: [
      { name: 'Mica Tint Canvas', role: '云母微染底层画布', hex: '#EEF3FA', tailwindClass: 'bg-[#EEF3FA]', textContrastClass: 'text-[#1B1A19]' },
      { name: 'Acrylic Frost', role: '亚克力半透明面板', hex: '#FFFFFF', tailwindClass: 'bg-white/75', textContrastClass: 'text-[#1B1A19]' },
      { name: 'Fluent Blue', role: '微软标准主交互蓝', hex: '#0067C0', tailwindClass: 'bg-[#0067C0]', textContrastClass: 'text-white' },
      { name: 'Copilot Violet', role: '智能助手渐变点缀', hex: '#4F46E5', tailwindClass: 'bg-indigo-600', textContrastClass: 'text-white' },
      { name: 'Neutral Graphite', role: '主标题与正文深灰', hex: '#1B1A19', tailwindClass: 'bg-[#1B1A19]', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: 'Fluent 亚克力悬浮面板 (Acrylic Panel)',
        description: '75% 白度磨砂背景 + 高光白边 + 柔和景深阴影',
        classes: 'bg-white/75 backdrop-blur-xl border border-white/80 rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-[#1B1A19]',
      },
      {
        component: 'Fluent Blue 标准主按钮 (Fluent Primary Button)',
        description: '微软蓝填充 + 顶部微弱内高光 + 温和 6px 圆角',
        classes: 'px-4 py-2 rounded-md bg-[#0067C0] hover:bg-[#005BA1] text-white text-xs font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_1px_2px_rgba(0,0,0,0.12)] transition-colors',
      },
      {
        component: 'Windows 11 底部高亮输入框 (Fluent TextBox)',
        description: '底部 2px 蓝色激活边线，还原 WinUI 3 原生输入框体验',
        classes: 'w-full px-3 py-2 rounded-md bg-white/90 border border-slate-300/80 border-b-2 border-b-[#0067C0] text-sm text-[#1B1A19] focus:outline-none focus:bg-white',
      },
      {
        component: '带左侧短竖条的导航项 (Fluent Nav Item)',
        description: '左侧 3px 蓝色胶囊指示条标识当前激活页面',
        classes: 'flex items-center gap-3 px-3 py-2 rounded-lg bg-white/90 text-xs font-semibold text-[#1B1A19] shadow-2xs',
      },
    ],
    dos: [
      '在底层使用柔和的云母渐变（如 `bg-gradient-to-br from-[#EEF3FA] via-[#F5F7FC] to-[#E6EEF8]`），才能让上层的半透明亚克力卡片显现出温润的通透层次',
      '为侧边栏激活项加上左侧蓝色小竖条（`w-1 h-4 rounded-full bg-[#0067C0]`），这是 Fluent Design 最具辨识度的细节之一',
    ],
    donts: [
      '不要使用纯黑粗边框或零圆角磁贴（那是十年前的 Windows 8 Metro，而非现代 Fluent 2）',
      '不要将背景色设成深黑霓虹色（那是 Apple 空间毛玻璃，Fluent 强调明亮轻盈的日常办公氛围）',
    ],
    aiPromptSnippet:
      'Use Microsoft Fluent 2 Design System aesthetic (Windows 11 / Microsoft 365 inspired). Soft Mica-tinted canvas (`bg-gradient-to-br from-[#EEF3FA] via-[#F4F6FB] to-[#E5EDF8]`), translucent Acrylic panels (`bg-white/75 backdrop-blur-xl border border-white/80 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)]`), Fluent Blue (`#0067C0`) primary controls, left vertical selection pill indicators (`w-1 h-4 bg-[#0067C0] rounded-full`), and WinUI bottom-accent inputs (`border-b-2 border-b-[#0067C0]`).',
    examples: [
      {
        id: 'landing',
        title: '样例 01：Fluent 2 云端协同套件与智能工作区主页',
        archetype: 'Fluent 2 Product Suite Landing',
        scenario: '在柔和云母渐变画布上悬浮亚克力玻璃特性卡片，支持切换 Word / Loop / Teams 协同模块预览。',
        keyTechniques: ['Mica 云母微染底层画布', 'Acrylic 半透明磨砂特性卡片', 'Fluent Blue (#0067C0) 立体按钮'],
        jsxCode: `<div className="bg-gradient-to-br from-[#EEF3FA] via-[#F5F7FC] to-[#E4ECF7] p-8 rounded-2xl">
  <div className="bg-white/75 backdrop-blur-xl border border-white/80 rounded-xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
    <h1 className="text-3xl font-semibold text-[#1B1A19]">Designed for fluid enterprise collaboration.</h1>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：Windows 11 风云端文档中心与左侧竖条导航台',
        archetype: 'Fluent Acrylic Workspace',
        scenario: '左侧亚克力导航栏（配标志性蓝色短竖条指示器）+ 右侧云存储进度条与最近协同文档列表。',
        keyTechniques: ['左侧 3px 蓝色胶囊选中指示器', '亚克力侧边栏与纯白内容区对比', 'WinUI 底部蓝线搜索框'],
        jsxCode: `<div className="bg-[#EEF3FA] p-5 rounded-2xl flex gap-5">
  <aside className="w-48 bg-white/70 backdrop-blur-xl rounded-xl p-3 border border-white/80">
    <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white font-semibold text-xs">
      <span className="w-1 h-4 rounded-full bg-[#0067C0]" /> Cloud Drive
    </div>
  </aside>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：Windows 11 系统个性化与云母材质设置面板',
        archetype: 'Win11 Settings & Personalization',
        scenario: '复刻 Windows 11 设置中心的手风琴式长条设置卡（Setting Expander Rows），支持实时切换云母底色与无障碍对比度。',
        keyTechniques: ['Win11 横向长条设置行卡片', '材质模式实时切换预览', 'Fluent 圆角开关控件'],
        jsxCode: `<div className="bg-[#EEF3FA] p-6 rounded-2xl space-y-2.5">
  <div className="bg-white/85 border border-black/[0.06] rounded-lg px-5 py-4 flex justify-between items-center">
    <span className="text-sm font-medium text-[#1B1A19]">Mica Translucent Window Effect</span>
  </div>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 15. Classic Desktop OS / Win95 UI (90年代复古桌面窗口风)
  // ============================================================================
  {
    id: 'win95-retro',
    name: '复古桌面系统窗口风 (Classic OS / Win95)',
    enName: 'Classic Desktop OS (Win95 / System 7)',
    category: 'expressive-avant',
    categoryLabel: '潮流与复古数字',
    tagline: '池畔电台与创意品牌最爱的怀旧风：#008080 经典青绿桌面、#C0C0C0 银灰窗口、左上白/右下黑 3D 倒角边框与海军蓝标题栏',
    summary:
      '复刻 1990 年代图形操作系统黄金期（Windows 95 / Windows 98 / Classic Mac OS）的标志性视觉流派，由 Poolsuite FM、Windows96、MSCHF 与众多独立音乐/潮牌网站重新带火。它与黑屏绿字的 CLI 终端截然不同：核心在于利用纯 CSS 边框模拟早期 GUI 的 3D 凹凸光影——外凸按钮与窗口采用“上白左白、下黑右黑”双色边框（Beveled Outset），内凹输入框与列表槽则反转为“上黑左黑、下白右白”（Sunken Inset），搭配标志性的 `#008080` 青色桌面与 `#000080` 深蓝渐变标题栏。',
    representativeBrands: ['Poolsuite FM (Poolside)', 'Windows 95 / 98 经典 GUI', 'React95 / 98.css 组件库', 'MSCHF 创意项目页'],
    bestFor: ['复古音乐电台、播客与蒸汽波文化社区', '独立游戏工作室、艺术展览与潮牌首发页', '极具记忆点的个人作品集（做成可点击桌面窗口）', '创意彩蛋页与复古互联网博物馆'],
    notRecommendedFor: ['严肃的现代医疗诊断系统', '需要移动端大拇指单手滑动的原生 App'],
    coreCharacteristics: [
      {
        title: '左上亮白、右下深灰的 3D 外凸倒角 (3D Outset Bevel)',
        detail: '不用模糊阴影，而是用 2px 实线边框将上/左设为纯白（#FFFFFF），右/下设为深炭灰（#404040），瞬间还原 Win95 立体窗体与按钮。',
        tailwindHint: 'bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#dfdfdf]',
      },
      {
        title: '左上深灰、右下亮白的内凹输入槽 (3D Sunken Well)',
        detail: '文本输入框、文件列表区与状态栏翻转光影方向（上左深灰、下右纯白），在视觉上形成嵌入银灰面板内部的凹槽。',
        tailwindHint: 'bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-3',
      },
      {
        title: '海军蓝渐变标题栏与 [ _ ][ □ ][ X ] 控制钮',
        detail: '每个模块都封装为一个标准桌面窗口，顶部配有从 #000080 到 #1084D0 的经典蓝条与三颗立体最小化/关闭方钮。',
        tailwindHint: 'bg-[linear-gradient(90deg,#000080_0%,#1084d0_100%)] text-white px-2 py-1 flex items-center justify-between font-bold text-xs',
      },
      {
        title: '经典 #008080 蓝绿桌面与底部 Start 任务栏',
        detail: '画布背景采用最具辨识度的 Win95 默认蓝绿色（Teal #008080），底部可配备带立体 Start 按钮与系统时钟的任务栏。',
        tailwindHint: 'bg-[#008080] p-6 font-sans text-black',
      },
    ],
    typography: {
      headingFont: 'Plus Jakarta Sans / JetBrains Mono',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-sans font-bold text-xs tracking-wide text-white',
      bodyClasses: 'font-sans text-xs text-black leading-normal',
      scaleNotes: '字号普遍偏小且紧凑（11px–13px），菜单栏首字母习惯性添加下划线（如 `F`ile, `E`dit）。',
    },
    geometryAndDepth: {
      borderRadius: 'rounded-none (0px 绝对直角像素感)',
      borderStyle: '2px 不对称双色倒角边框 (border-t-white border-l-white border-r-[#404040] border-b-[#404040])',
      shadowStyle: '零模糊内嵌像素阶梯阴影 (inset_-1px_-1px_0_#808080)',
      spacingRhythm: '窗口内部紧凑严密（p-2, gap-2），桌面窗口之间错落排布。',
    },
    colors: [
      { name: 'Desktop Teal', role: 'Win95 经典蓝绿桌面', hex: '#008080', tailwindClass: 'bg-[#008080]', textContrastClass: 'text-white' },
      { name: 'Window Silver', role: '3D 窗体与按钮主色', hex: '#C0C0C0', tailwindClass: 'bg-[#C0C0C0]', textContrastClass: 'text-black' },
      { name: 'Active Title Navy', role: '激活窗口标题栏深蓝', hex: '#000080', tailwindClass: 'bg-[#000080]', textContrastClass: 'text-white' },
      { name: 'Title Gradient Cyan', role: 'Win98 标题栏渐变亮蓝', hex: '#1084D0', tailwindClass: 'bg-[#1084D0]', textContrastClass: 'text-white' },
      { name: 'Bevel Shadow Gray', role: '3D 倒角暗部灰', hex: '#808080', tailwindClass: 'bg-[#808080]', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: 'Win95 标准 3D 窗口外框 (Classic OS Window)',
        description: '银灰底色 + 左上白/右下深灰立体倒角外框',
        classes: 'bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-1 text-black shadow-[2px_2px_0_rgba(0,0,0,0.35)]',
      },
      {
        component: '经典蓝渐变窗口标题栏 (Window Title Bar)',
        description: '海军蓝到天青蓝水平渐变 + 白色粗体标题 + 右侧窗口控制键',
        classes: 'bg-[linear-gradient(90deg,#000080_0%,#1084d0_100%)] text-white px-2 py-1 flex items-center justify-between text-xs font-bold',
      },
      {
        component: 'Win95 3D 立体按钮 (3D Beveled Button)',
        description: '常态上左亮白外凸，按下时翻转为上左深灰内凹',
        classes: 'px-4 py-1.5 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] text-xs font-bold text-black active:border-t-[#404040] active:border-l-[#404040] active:border-r-white active:border-b-white active:translate-y-[1px]',
      },
      {
        component: '内凹白底文档/列表槽 (Sunken Inset Field)',
        description: '上左深灰、下右纯白的内陷白底区域',
        classes: 'bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-3 text-xs text-black',
      },
    ],
    dos: [
      '严格区分“外凸组件（上左白、下右黑）”与“内凹容器（上左黑、下右白）”，这是还原 90 年代桌面 GUI 立体灵魂的唯一法则',
      '给每个窗口配上 `File  Edit  View  Help` 菜单条和底部内凹状态栏（Status Bar），立刻拉满复古桌面沉浸感',
    ],
    donts: [
      '严禁出现任何圆角（rounded-lg）或现代高斯模糊毛玻璃',
      '不要把文字设成浅灰色，Win95 窗口内的所有正文与按钮文字必须是 100% 纯黑（text-black）',
    ],
    aiPromptSnippet:
      'Use Classic Desktop OS / Windows 95 GUI aesthetic (98.css / Poolsuite FM inspired). Classic `#008080` teal desktop background, `#C0C0C0` silver gray windows with 3D outset beveled borders (`border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040]`), navy-to-blue gradient title bars (`bg-[linear-gradient(90deg,#000080_0%,#1084d0_100%)]`) with `[ _ ][ □ ][ X ]` controls, sunken white content wells (`border-t-[#808080] border-l-[#808080] border-r-white border-b-white`), and bottom taskbar.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：Poolsuite 风复古夏日音乐电台与多窗口桌面主页',
        archetype: 'Win95 Desktop & Media Player',
        scenario: '在 #008080 经典蓝绿桌面上排布欢迎窗口、磁带曲目播放器与底部 Start 任务栏，支持点击切歌与最小化提示。',
        keyTechniques: ['上白左白/下黑右黑 3D 倒角窗体', '#000080 蓝渐变标题栏', '底部立体 Start 任务栏'],
        jsxCode: `<div className="bg-[#008080] p-6">
  <div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-1">
    <div className="bg-[linear-gradient(90deg,#000080_0%,#1084d0_100%)] text-white px-2 py-1 text-xs font-bold flex justify-between">
      <span>Poolsuite_FM_Player.exe</span>
      <span>[X]</span>
    </div>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：经典资源管理器与磁盘碎片整理监控台',
        archetype: 'Classic File Manager & Defrag',
        scenario: '复刻 My Computer 文件资源管理器（内凹白底图标网格）与经典的蓝黄方块磁盘碎片整理进度面板。',
        keyTechniques: ['内凹白底文件视口', '像素块磁盘碎片簇矩阵', '底部双格内凹状态栏'],
        jsxCode: `<div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-2">
  <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-4">
    C:\\WINDOWS\\SYSTEM32 (14 Objects)
  </div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：经典软件安装向导 (Setup Wizard) 与系统属性弹窗',
        archetype: 'Win95 Setup Wizard Dialog',
        scenario: '带有左侧复古安装插画栏、内凹组件勾选列表、蓝色方块进度条以及 `< Back` / `Next >` / `Cancel` 3D 按钮组的向导窗口。',
        keyTechniques: ['3D 立体选项卡 (Tabbed Dialog)', '内凹复选列表框', '蓝色分段方块进度条'],
        jsxCode: `<div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-4">
  <div className="flex justify-end gap-2">
    <button className="px-4 py-1 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] text-xs font-bold">&lt; Back</button>
    <button className="px-4 py-1 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] text-xs font-bold">Next &gt;</button>
  </div>
</div>`,
      },
    ],
  },

  // ============================================================================
  // 16. Cyberpunk / Sci-Fi HUD (赛博朋克与机甲切角界面风)
  // ============================================================================
  {
    id: 'cyberpunk-hud',
    name: '赛博朋克与机甲切角风 (Cyberpunk / Sci-Fi HUD)',
    enName: 'Cyberpunk & Tactical FUI / HUD',
    category: 'expressive-avant',
    categoryLabel: '潮流与复古数字',
    tagline: '45° 斜切角多边形容器 (clip-path)、赛博明黄与电光青高对比撞色、战术准星刻度与全息遥测网格',
    summary:
      '源自《Cyberpunk 2077》、《明日方舟 (Arknights)》、《Apex Legends》与未来派战术界面（FUI / Fantasy User Interface）的高辨识度潮流风格，在游戏官网、电竞硬件、Web3 链游与机甲潮牌中极为盛行。其最核心的几何标志是彻底抛弃传统圆角，改用 CSS `clip-path: polygon(...)` 对卡片和按钮的左上角或右下角进行 45° 斜向切削（Chamfered Corners），在深空碳黑网格背景上碰撞极具攻击性的赛博黄（`#FCEE0A`）、电光青（`#00F0FF`）与故障品红（`#FF0055`），并点缀战术坐标与编号水印。',
    representativeBrands: ['Cyberpunk 2077 界面体系', '明日方舟 (Arknights / 终末地) 视觉系统', 'ROG 玩家国度电竞门户', 'Marathon / Halo 战术 HUD'],
    bestFor: ['电子竞技赛事、游戏大作与机甲动漫官网', '外设硬件（显卡/电竞显示器/定制键盘）旗舰页', 'Web3 链游、NFT 铸造台与元宇宙启动器', '科幻主题数据可视化大屏与无人机地面站'],
    notRecommendedFor: ['传统少儿教育与老年养生平台', '严肃的会计师事务所与法律文书系统'],
    coreCharacteristics: [
      {
        title: '45° 斜切角多边形容器 (Chamfered Clip-Path Polygons)',
        detail: '使用 arbitrary clip-path 将矩形的右下角或对角切去 14px~20px 斜角，彻底打破传统网页盒模型的方正呆板感。',
        tailwindHint: '[clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,16px_100%,0_calc(100%-16px))] bg-[#0D111A] border border-cyan-500/40',
      },
      {
        title: '赛博明黄 (#FCEE0A) 与电光青 (#00F0FF) 霓虹对撞',
        detail: '以高饱和度赛博黄作为主操作按钮与警示条，电光青作为全息边框与正常遥测读数，故障品红（#FF0055）作为超频/危险状态。',
        tailwindHint: 'bg-[#FCEE0A] text-black font-mono font-extrabold uppercase tracking-wider [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]',
      },
      {
        title: '四角战术准星与工业机甲编号 (HUD Corner Reticles)',
        detail: '卡片四角装饰 L 形亮青色定位角标（`border-t-2 border-l-2 border-[#00F0FF]`），旁侧标注 `SYS // 09-ALPHA` 等宽战术序列号。',
        tailwindHint: 'font-mono text-[10px] tracking-[0.2em] uppercase text-[#00F0FF]',
      },
      {
        title: '斜纹警戒条与扫描线网格背景',
        detail: '使用 repeating-linear-gradient 绘制 45° 黑黄相间工程警戒条，底层辅以微弱的坐标十字网格。',
        tailwindHint: 'bg-[repeating-linear-gradient(-45deg,#FCEE0A,#FCEE0A_8px,#000_8px,#000_16px)] h-2',
      },
    ],
    typography: {
      headingFont: 'Bricolage Grotesque / Outfit',
      bodyFont: 'Plus Jakarta Sans',
      monoFont: 'JetBrains Mono',
      headingClasses: 'font-display font-extrabold uppercase tracking-wider text-white',
      bodyClasses: 'font-sans text-xs text-slate-300 leading-relaxed',
      scaleNotes: '所有标题、按钮与状态标签一律采用全大写（uppercase）配合加宽字距（tracking-wider），遥测数值统一使用等宽字体。',
    },
    geometryAndDepth: {
      borderRadius: 'rounded-none (全部由 45° 斜切角 clip-path 替代圆角)',
      borderStyle: 'border border-[#00F0FF]/40 配合四角 2px 亮青色 L 形加粗角标',
      shadowStyle: 'shadow-[0_0_20px_rgba(0,240,255,0.18)] (电光青全息微辉光)',
      spacingRhythm: '模块化战术机甲分块（gap-4, p-6）。',
    },
    colors: [
      { name: 'Night City Void', role: '深空战术黑底色', hex: '#07090E', tailwindClass: 'bg-[#07090E]', textContrastClass: 'text-white' },
      { name: 'Armor Panel', role: '机甲深蓝灰面板', hex: '#0E131F', tailwindClass: 'bg-[#0E131F]', textContrastClass: 'text-white' },
      { name: 'Cyber Yellow', role: '标志性赛博明黄主色', hex: '#FCEE0A', tailwindClass: 'bg-[#FCEE0A]', textContrastClass: 'text-black' },
      { name: 'Holo Cyan', role: '全息电光青边框与读数', hex: '#00F0FF', tailwindClass: 'bg-[#00F0FF]', textContrastClass: 'text-black' },
      { name: 'Glitch Crimson', role: '超频/入侵品红告警色', hex: '#FF0055', tailwindClass: 'bg-[#FF0055]', textContrastClass: 'text-white' },
    ],
    recipes: [
      {
        component: '45° 双对角斜切机甲卡片 (Chamfered HUD Card)',
        description: '右上与左下 16px 斜切角 + 电光青边框与暗黑装甲底色',
        classes: 'bg-[#0E131F] border border-[#00F0FF]/40 p-6 text-white [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,16px_100%,0_calc(100%-16px))] shadow-[0_0_20px_rgba(0,240,255,0.1)]',
      },
      {
        component: '赛博明黄切角主按钮 (Cyber Yellow Action Button)',
        description: '右下切角亮黄填充，悬停切换为电光青并爆发霓虹阴影',
        classes: 'px-6 py-3 bg-[#FCEE0A] hover:bg-[#00F0FF] text-black font-mono text-xs font-extrabold uppercase tracking-widest [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)] transition-colors',
      },
      {
        component: '四角 L 形战术准星面板 (Tactical Reticle Box)',
        description: '利用伪元素或绝对定位角标强化机甲瞄准器视觉',
        classes: 'relative bg-[#0E131F]/90 border border-cyan-500/30 p-5 font-mono text-xs text-[#00F0FF]',
      },
      {
        component: '黑黄斜纹工程警戒条 (Hazard Stripe Divider)',
        description: '用于面板顶部或底部的机甲工业警示带',
        classes: 'h-2 w-full bg-[repeating-linear-gradient(-45deg,#FCEE0A,#FCEE0A_8px,#07090E_8px,#07090E_16px)]',
      },
    ],
    dos: [
      '善用 `[clip-path:polygon(...)]` 制造 45° 斜切角，并在容器边缘搭配 `SYS // 04` 等宽微缩编号与黑黄斜纹条',
      '保持文字高可读性：亮黄色（`#FCEE0A`）和亮青色（`#00F0FF`）背景块上的文字必须使用纯黑色（`text-black font-extrabold`）',
    ],
    donts: [
      '不要使用圆润可爱的胶囊按钮（rounded-full）或柔和粉彩色',
      '不要让发光阴影覆盖在正文小字上导致阅读模糊',
    ],
    aiPromptSnippet:
      'Use Cyberpunk / Tactical Sci-Fi HUD aesthetic (Cyberpunk 2077 / Arknights inspired). Deep `#07090E` grid canvas, `#0E131F` armor panels with 45-degree chamfered corners (`[clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,16px_100%,0_calc(100%-16px))]`), high-voltage `#FCEE0A` cyber yellow CTAs, `#00F0FF` holographic cyan borders, `#FF0055` overclock alerts, corner L-reticles, and monospace tactical telemetry.',
    examples: [
      {
        id: 'landing',
        title: '样例 01：义体神经装甲与次世电竞旗舰硬件着陆页',
        archetype: 'Cyberpunk Hardware Landing',
        scenario: '拥有 45° 斜切角主视觉框、黑黄工程警戒带、#FCEE0A 赛博黄切角主按钮与可切换战术模式的机甲风主页。',
        keyTechniques: ['clip-path 45° 斜切角面板', '#FCEE0A 赛博黄切角按钮', '黑黄斜纹警戒分割带'],
        jsxCode: `<div className="bg-[#07090E] text-white p-8 border border-[#00F0FF]/30">
  <div className="bg-[#0E131F] p-8 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))] border border-[#00F0FF]/50">
    <h1 className="font-display text-4xl font-extrabold uppercase">Kiroshi Optical MK.V</h1>
    <button className="mt-6 px-6 py-3 bg-[#FCEE0A] text-black font-mono text-xs font-extrabold uppercase [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]">
      INITIALIZE LINK //
    </button>
  </div>
</div>`,
      },
      {
        id: 'dashboard',
        title: '样例 02：轨道机甲遥测、核心超频与神经负载 HUD 监控台',
        archetype: 'Sci-Fi Tactical HUD Telemetry',
        scenario: '四角 L 形准星锁定框 + 分段式发光能量格 + 一键切换常规/超频（Overclock #FF0055）状态的战术中控台。',
        keyTechniques: ['四角 L 形亮青准星框', '分段式霓虹能量槽', '超频红/全息青双态联动'],
        jsxCode: `<div className="bg-[#07090E] p-6 grid grid-cols-3 gap-4 font-mono">
  <div className="bg-[#0E131F] border border-[#00F0FF]/40 p-5 text-[#00F0FF]">
    <div className="text-[10px]">NEURAL SYNC RATE</div>
    <div className="text-3xl font-extrabold mt-1">98.4%</div>
  </div>
</div>`,
      },
      {
        id: 'interactive',
        title: '样例 03：义体插件槽位装配与算力功耗配平器 (Cyberware Loadout)',
        archetype: 'Cyberware Tactical Configurator',
        scenario: '点击斜切角插件模块挂载/卸载光学迷彩、反应装甲与黑客矩阵，实时计算神经算力上限与散热负载。',
        keyTechniques: ['切角槽位挂载交互', '算力超载红警阈值反馈', '实时战术属性雷达汇总'],
        jsxCode: `<div className="bg-[#0E131F] border border-[#00F0FF]/40 p-6 font-mono text-white">
  <div className="text-xs text-[#FCEE0A] font-bold">CYBERWARE SLOTS // CAPACITY 42/60</div>
</div>`,
      },
    ],
  },
];
