/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { DESIGN_STYLES, STYLE_CATEGORIES } from './data/stylesData';
import { StyleCategory } from './types/style';
import { StyleExampleRenderer } from './components/examples/StyleExampleRenderer';
import { StyleComparatorModal } from './components/StyleComparatorModal';
import { CheatSheetModal } from './components/CheatSheetModal';
import {
  Search,
  Copy,
  Check,
  Bookmark,
  Columns,
  Code2,
  Eye,
  Monitor,
  Tablet,
  LayoutGrid,
  CheckCircle2,
  XCircle,
  Sparkles,
  FileCode2,
  NotebookPen,
} from 'lucide-react';

export default function App() {
  const [selectedStyleId, setSelectedStyleId] = useState<string>('neumorphism');
  const [activeCategory, setActiveCategory] = useState<StyleCategory | 'bookmarks'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Example Sandbox States
  const [activeExampleTab, setActiveExampleTab] = useState<'landing' | 'dashboard' | 'interactive' | 'all-three'>('landing');
  const [sandboxViewMode, setSandboxViewMode] = useState<'preview' | 'code'>('preview');
  const [viewportWidth, setViewportWidth] = useState<'full' | 'tablet'>('full');

  // Modals
  const [showComparator, setShowComparator] = useState<boolean>(false);
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);

  // Copy feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Horizontal scroll strip refs (convert vertical mouse wheel to horizontal scroll & lock page scroll)
  const categoryStripRef = useRef<HTMLDivElement | null>(null);
  const styleStripRef = useRef<HTMLDivElement | null>(null);
  const exampleStripRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const strips = [
      categoryStripRef.current,
      styleStripRef.current,
      exampleStripRef.current,
    ].filter((el): el is HTMLDivElement => el !== null);

    const handleWheel = (e: WheelEvent) => {
      const el = e.currentTarget as HTMLDivElement;
      if (!el) return;
      const canScrollX = el.scrollWidth > el.clientWidth + 1;
      if (canScrollX && Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        e.preventDefault();
        e.stopPropagation();
        el.scrollLeft += e.deltaY;
      }
    };

    strips.forEach((el) => {
      el.addEventListener('wheel', handleWheel, { passive: false });
    });

    return () => {
      strips.forEach((el) => {
        el.removeEventListener('wheel', handleWheel);
      });
    };
  }, []);

  // Persisted Bookmarks & Personal Notes
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('styleatlas_bookmarks');
      return saved ? JSON.parse(saved) : ['neumorphism', 'spatial-glass', 'bento-modular', 'neo-brutalism'];
    } catch {
      return ['neumorphism', 'spatial-glass'];
    }
  });

  const [devNotes, setDevNotes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('styleatlas_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('styleatlas_bookmarks', JSON.stringify(bookmarks));
    } catch {
      // ignore storage errors
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('styleatlas_notes', JSON.stringify(devNotes));
    } catch {
      // ignore storage errors
    }
  }, [devNotes]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 1600);
  };

  const filteredStyles = useMemo(() => {
    return DESIGN_STYLES.filter((style) => {
      const matchesCat =
        activeCategory === 'all'
          ? true
          : activeCategory === 'bookmarks'
          ? bookmarks.includes(style.id)
          : style.category === activeCategory;

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCat;

      const matchesSearch =
        style.name.toLowerCase().includes(q) ||
        style.enName.toLowerCase().includes(q) ||
        style.tagline.toLowerCase().includes(q) ||
        style.representativeBrands.some((b) => b.toLowerCase().includes(q)) ||
        style.bestFor.some((b) => b.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery, bookmarks]);

  const currentStyle = useMemo(() => {
    return DESIGN_STYLES.find((s) => s.id === selectedStyleId) || DESIGN_STYLES[0];
  }, [selectedStyleId]);

  const currentExampleMeta = useMemo(() => {
    if (activeExampleTab === 'all-three') return currentStyle.examples[0];
    return (
      currentStyle.examples.find((ex) => ex.id === activeExampleTab) ||
      currentStyle.examples[0]
    );
  }, [currentStyle, activeExampleTab]);

  return (
    <div className="min-h-screen bg-[#0B0D13] text-slate-100 flex flex-col">
      {/* =====================================================================
          TOP BAR CONTRACT: Strictly 3 Zones separated by gap-8
         ===================================================================== */}
      <header className="sticky top-0 z-30 bg-[#0B0D13]/95 backdrop-blur-md border-b border-slate-800/80 px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          StyleAtlas 前端风格图鉴
        </a>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-400">
          <a
            href="#section-examples"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            页面样例演练场 (3套/风格)
          </a>
          <a
            href="#section-overview"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            风格详解与色板
          </a>
          <a
            href="#section-recipes"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Tailwind 组件配方
          </a>
          <button
            onClick={() => setShowCheatSheet(true)}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            16 风格全景速查表
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setShowComparator(true)}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Columns className="w-3.5 h-3.5" />
            <span>双风格同屏对比</span>
          </button>
        </div>
      </header>

      {/* =====================================================================
          MAIN WORKSPACE CANVAS: Sidebar + Primary Viewport
         ===================================================================== */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto">
        {/* LEFT SIDEBAR: Style Directory & Filter */}
        <aside className="w-full lg:w-80 xl:w-84 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-800/80 bg-[#0E1118] px-4 py-3 lg:p-4 flex flex-col gap-2.5 lg:gap-4 lg:sticky lg:top-[57px] lg:h-[calc(100vh-57px)] lg:overflow-y-auto lg:overscroll-contain">
          {/* Top Row on Narrow Screens: Search Input + Category Filter Strip */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-2.5 items-stretch md:items-center lg:items-stretch">
            {/* Search Input */}
            <div className="relative md:w-64 lg:w-full shrink-0">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索风格、代表品牌 (如 Linear, Apple)..."
                className="w-full pl-9 pr-3 py-1.5 lg:py-2 rounded-lg bg-[#151923] border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Interactive Category Filter Buttons: single horizontal scrollable line on narrow screens, wrapped on desktop sidebar */}
            <div
              ref={categoryStripRef}
              className="flex items-center lg:flex-wrap gap-1.5 bg-[#151923] p-1.5 rounded-xl border border-slate-800/80 overflow-x-auto overscroll-contain flex-1"
            >
              {STYLE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as StyleCategory)}
                  className={`px-2.5 py-1 lg:py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
              <button
                onClick={() => setActiveCategory('bookmarks')}
                className={`px-2.5 py-1 lg:py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer ${
                  activeCategory === 'bookmarks'
                    ? 'bg-amber-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <Bookmark className="w-3 h-3" />
                <span>常用收藏 ({bookmarks.length})</span>
              </button>
            </div>
          </div>

          {/* Style List: Horizontal scrollable strip on < lg, vertical stack on lg+ */}
          <div
            ref={styleStripRef}
            className="flex flex-row lg:flex-col gap-2 lg:gap-1.5 overflow-x-auto lg:overflow-x-visible overscroll-contain pb-1 lg:pb-0 flex-1"
          >
            {filteredStyles.length === 0 ? (
              <div className="w-full p-4 lg:p-6 text-center border border-slate-800/80 rounded-xl bg-[#12151E] flex lg:flex-col items-center justify-between lg:justify-center gap-3">
                <p className="text-xs text-slate-400">未找到匹配的风格流派</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-white hover:bg-slate-700 cursor-pointer shrink-0"
                >
                  重置筛选条件
                </button>
              </div>
            ) : (
              filteredStyles.map((style) => {
                const globalIndex = DESIGN_STYLES.findIndex((s) => s.id === style.id) + 1;
                const isSelected = style.id === selectedStyleId;
                const isBookmarked = bookmarks.includes(style.id);

                return (
                  <div
                    key={style.id}
                    onClick={() => setSelectedStyleId(style.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setSelectedStyleId(style.id);
                    }}
                    className={`w-56 sm:w-60 lg:w-full shrink-0 px-3 py-2.5 lg:p-3 rounded-xl border text-left transition-all cursor-pointer group ${
                      isSelected
                        ? 'bg-[#171C29] border-indigo-500/60 shadow-sm'
                        : 'bg-[#12151E]/70 border-slate-800/60 hover:bg-[#161A25] hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="font-mono text-[11px] text-indigo-400 font-semibold tabular-nums shrink-0">
                          {String(globalIndex).padStart(2, '0')}.
                        </span>
                        <span className="font-semibold text-xs lg:text-sm text-white truncate">
                          {style.name}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(style.id);
                        }}
                        className="p-1 text-slate-500 hover:text-amber-400 transition-colors shrink-0 cursor-pointer"
                        title="收藏该风格"
                      >
                        <Bookmark
                          className={`w-3.5 h-3.5 ${
                            isBookmarked ? 'fill-amber-400 text-amber-400' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-1 pl-5">
                      <span className="font-mono text-[11px] text-slate-400 truncate pr-2">
                        {style.enName}
                      </span>
                      {/* Palette Preview Bar */}
                      <div className="flex items-center gap-1 shrink-0">
                        {style.colors.slice(0, 4).map((c) => (
                          <span
                            key={c.hex}
                            className="w-2.5 h-2.5 rounded-xs border border-white/20"
                            style={{
                              backgroundColor: c.hex.startsWith('rgba') ? '#38bdf8' : c.hex,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </aside>

        {/* RIGHT MAIN VIEWPORT: Above-the-Fold Live Sandbox First */}
        <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-7 space-y-8">
          {/* =================================================================
              SECTION 1 (ABOVE THE FOLD): COMPACT HEADER + UNIFIED SANDBOX TOOLBAR + LIVE CANVAS
             ================================================================= */}
          <section id="section-examples" className="space-y-3.5 scroll-mt-20">
            {/* Row 1: Single-Line Compact Style Title & Quick Actions Bar */}
            <div className="bg-[#12151E] border border-slate-800/90 rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className="font-mono text-xs font-bold text-indigo-400 tabular-nums">
                    {String(DESIGN_STYLES.findIndex((s) => s.id === currentStyle.id) + 1).padStart(2, '0')}.
                  </span>
                  <h1 className="font-display text-lg md:text-xl font-bold text-white tracking-tight truncate">
                    {currentStyle.name}
                  </h1>
                  <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                    {currentStyle.enName}
                  </span>
                  <span className="text-xs text-slate-600 hidden md:inline" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-xs text-indigo-300/90 font-medium hidden md:inline">
                    {currentStyle.categoryLabel}
                  </span>
                </div>
                <p className="text-xs text-slate-400 truncate mt-0.5">
                  {currentStyle.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopy(currentStyle.aiPromptSnippet, 'ai-prompt')}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {copiedId === 'ai-prompt' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>已复制风格 Prompt</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>复制 AI 提示词</span>
                    </>
                  )}
                </button>
                <a
                  href="#section-overview"
                  className="px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-colors whitespace-nowrap"
                >
                  风格详解与色板 ↓
                </a>
              </div>
            </div>

            {/* Row 2: Unified Single-Row Sandbox Toolbar (Left: 3 Example Pills + All 3, Right: Preview/Code + Copy JSX + Viewport) */}
            <div
              ref={exampleStripRef}
              className="bg-[#12151E] border border-slate-800/90 rounded-xl p-1.5 flex items-center justify-between gap-3 overflow-x-auto overscroll-contain"
            >
              {/* Left: Compact Example Switcher Pills */}
              <div className="flex items-center gap-1 shrink-0">
                {currentStyle.examples.map((ex, idx) => {
                  const active = activeExampleTab === ex.id;
                  const shortLabels = ['着陆页 (Landing)', '仪表盘 (Dashboard)', '交互组件 (Interactive)'];
                  return (
                    <button
                      key={ex.id}
                      onClick={() => setActiveExampleTab(ex.id)}
                      title={ex.title}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        active
                          ? 'bg-indigo-600 text-white font-semibold shadow-2xs'
                          : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className="font-mono text-[11px] opacity-80">0{idx + 1}</span>
                      <span>{shortLabels[idx] || ex.archetype}</span>
                    </button>
                  );
                })}

                <button
                  onClick={() => setActiveExampleTab('all-three')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeExampleTab === 'all-three'
                      ? 'bg-indigo-600 text-white font-semibold shadow-2xs'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>全景展开 (3套)</span>
                </button>
              </div>

              {/* Right: Preview/Code Switch + Copy JSX + Desktop/Tablet Switch */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="flex items-center bg-[#0B0D13] p-0.5 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setSandboxViewMode('preview')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap ${
                      sandboxViewMode === 'preview'
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>实时预览</span>
                  </button>
                  <button
                    onClick={() => setSandboxViewMode('code')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap ${
                      sandboxViewMode === 'code'
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>JSX 源码</span>
                  </button>
                </div>

                <button
                  onClick={() => handleCopy(currentExampleMeta.jsxCode, 'example-jsx')}
                  className="px-2.5 py-1.5 rounded-lg bg-[#0B0D13] hover:bg-slate-800 border border-slate-800 text-slate-300 font-mono text-xs flex items-center gap-1.5 shrink-0 cursor-pointer whitespace-nowrap"
                >
                  {copiedId === 'example-jsx' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>已复制 JSX</span>
                    </>
                  ) : (
                    <>
                      <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>复制此页 JSX</span>
                    </>
                  )}
                </button>

                <div className="hidden xl:flex items-center bg-[#0B0D13] p-0.5 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setViewportWidth('full')}
                    className={`px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                      viewportWidth === 'full' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="100% 桌面视口"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewportWidth('tablet')}
                    className={`px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                      viewportWidth === 'tablet' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="780px 紧凑视口"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Row 3: Immediate Live Viewport Frame (First-glance visual centerpiece) */}
            <div
              className={`mx-auto transition-all duration-200 ${
                viewportWidth === 'tablet' ? 'max-w-[780px]' : 'w-full'
              }`}
            >
              {sandboxViewMode === 'code' ? (
                <div className="bg-[#0D1017] border border-slate-800 rounded-2xl overflow-hidden">
                  <div className="px-5 py-3 bg-[#141822] border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{currentExampleMeta.title} — Tailwind CSS + React JSX</span>
                    <button
                      onClick={() => handleCopy(currentExampleMeta.jsxCode, 'code-block')}
                      className="px-3 py-1 rounded bg-indigo-600 text-white font-sans font-medium cursor-pointer"
                    >
                      {copiedId === 'code-block' ? '✓ 已复制' : '复制代码'}
                    </button>
                  </div>
                  <pre className="p-6 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                    <code>{currentExampleMeta.jsxCode}</code>
                  </pre>
                </div>
              ) : activeExampleTab === 'all-three' ? (
                <div className="space-y-10">
                  {currentStyle.examples.map((ex, idx) => (
                    <div key={ex.id} className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <div>
                          <span className="font-mono text-xs text-indigo-400 font-bold">
                            0{idx + 1} / {ex.archetype}
                          </span>
                          <h3 className="text-base font-bold text-white">{ex.title}</h3>
                        </div>
                        <button
                          onClick={() => handleCopy(ex.jsxCode, `all-jsx-${ex.id}`)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 cursor-pointer"
                        >
                          {copiedId === `all-jsx-${ex.id}` ? '✓ 已复制 JSX' : '复制此页 JSX'}
                        </button>
                      </div>
                      <StyleExampleRenderer styleId={currentStyle.id} exampleId={ex.id} />
                    </div>
                  ))}
                </div>
              ) : (
                <StyleExampleRenderer
                  styleId={currentStyle.id}
                  exampleId={activeExampleTab}
                />
              )}
            </div>

            {/* Row 4: Compact Example Caption & Techniques Footnote below canvas */}
            {activeExampleTab !== 'all-three' && (
              <div className="bg-[#12151E]/90 border border-slate-800/80 rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-2 min-w-0">
                  <span className="font-semibold text-white">{currentExampleMeta.title}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">{currentExampleMeta.scenario}</span>
                </div>
                <div className="text-indigo-300/90 font-mono text-[11px] shrink-0">
                  核心技法：{currentExampleMeta.keyTechniques.join(' · ')}
                </div>
              </div>
            )}
          </section>

          {/* =================================================================
              SECTION 2 (BELOW THE CANVAS): DETAILED STYLE OVERVIEW & USE CASES
             ================================================================= */}
          <section
            id="section-overview"
            className="bg-[#12151E] border border-slate-800/90 rounded-2xl p-6 md:p-7 space-y-5 scroll-mt-20"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-mono text-indigo-400">STYLE BACKGROUND & APPLICATION GUIDE</span>
                <h2 className="font-display text-xl font-bold text-white mt-0.5">
                  {currentStyle.name} — 流派背景与适用场景详解
                </h2>
              </div>
              <button
                onClick={() => setShowCheatSheet(true)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                打开 16 风格速查矩阵
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
              {currentStyle.summary}
            </p>

            {/* Unboxed Metadata: Representative Brands & Best Use Cases */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800/80 text-xs">
              <div>
                <div className="text-slate-500 font-mono uppercase mb-1.5">代表产品与参考标杆</div>
                <div className="text-slate-200 font-medium leading-relaxed">
                  {currentStyle.representativeBrands.join('  ·  ')}
                </div>
              </div>
              <div>
                <div className="text-slate-500 font-mono uppercase mb-1.5">最佳适用业务场景</div>
                <div className="text-emerald-300/90 leading-relaxed">
                  {currentStyle.bestFor.join('  ·  ')}
                </div>
              </div>
              <div>
                <div className="text-slate-500 font-mono uppercase mb-1.5">不推荐使用的场景</div>
                <div className="text-rose-300/90 leading-relaxed">
                  {currentStyle.notRecommendedFor.join('  ·  ')}
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              SECTION 3: COLOR TOKENS & CORE VISUAL DNA
             ================================================================= */}
          <section id="section-dna" className="grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-20">
            {/* Left 7 Cols: 4 Core Characteristics */}
            <div className="lg:col-span-7 bg-[#12151E] border border-slate-800/90 rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <span className="text-xs font-mono text-indigo-400">ARCHITECTURAL DNA</span>
                <h2 className="font-display text-xl font-bold text-white mt-1">
                  四大标志性视觉基因与 Tailwind 实现要点
                </h2>
              </div>

              <div className="divide-y divide-slate-800/80">
                {currentStyle.coreCharacteristics.map((item, idx) => (
                  <div key={item.title} className="py-4 first:pt-0 last:pb-0 space-y-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-sm font-semibold text-white">
                        0{idx + 1}. {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                    <div className="bg-[#0B0D13] border border-slate-800/90 rounded-lg px-3 py-2 flex items-center justify-between gap-3">
                      <code className="font-mono text-[11px] text-emerald-400 truncate">
                        {item.tailwindHint}
                      </code>
                      <button
                        onClick={() => handleCopy(item.tailwindHint, `dna-${idx}`)}
                        className="text-xs font-mono text-slate-400 hover:text-white shrink-0 flex items-center gap-1 cursor-pointer"
                      >
                        {copiedId === `dna-${idx}` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Color Palette & Geometry Spec */}
            <div className="lg:col-span-5 space-y-6">
              {/* Interactive Color Tokens */}
              <div className="bg-[#12151E] border border-slate-800/90 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-indigo-400">COLOR PALETTE & TOKENS</span>
                    <h3 className="font-display text-lg font-bold text-white mt-0.5">
                      标准色板 (点击色块复制)
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {currentStyle.colors.map((token) => (
                    <div
                      key={token.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0D13] border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg border border-white/15 shrink-0"
                          style={{
                            backgroundColor: token.hex.startsWith('rgba')
                              ? 'rgba(255,255,255,0.18)'
                              : token.hex,
                          }}
                        />
                        <div>
                          <div className="text-xs font-semibold text-white">{token.name}</div>
                          <div className="text-[11px] text-slate-400">{token.role}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopy(token.hex, `hex-${token.name}`)}
                          className="px-2.5 py-1 rounded bg-slate-800/90 hover:bg-slate-700 font-mono text-[11px] text-slate-200 cursor-pointer"
                        >
                          {copiedId === `hex-${token.name}` ? '✓ HEX' : token.hex}
                        </button>
                        <button
                          onClick={() => handleCopy(token.tailwindClass, `tw-${token.name}`)}
                          className="px-2.5 py-1 rounded bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 font-mono text-[11px] text-indigo-300 cursor-pointer"
                        >
                          {copiedId === `tw-${token.name}` ? '✓ 已复制' : token.tailwindClass}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography & Spatial Math Spec */}
              <div className="bg-[#12151E] border border-slate-800/90 rounded-2xl p-6 space-y-3 text-xs">
                <span className="font-mono text-indigo-400">TYPOGRAPHY & GEOMETRY MATH</span>
                <div className="divide-y divide-slate-800/80">
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-400 shrink-0">标题字体推荐</span>
                    <span className="font-mono text-slate-200 text-right">{currentStyle.typography.headingFont}</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-400 shrink-0">圆角尺度 (Radius)</span>
                    <span className="font-mono text-slate-200 text-right">{currentStyle.geometryAndDepth.borderRadius}</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-400 shrink-0">边框语法 (Border)</span>
                    <span className="font-mono text-slate-200 text-right">{currentStyle.geometryAndDepth.borderStyle}</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-400 shrink-0">阴影策略 (Shadow)</span>
                    <span className="font-mono text-slate-200 text-right">{currentStyle.geometryAndDepth.shadowStyle}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              SECTION 4: READY-TO-COPY TAILWIND COMPONENT RECIPES & DO/DON'T
             ================================================================= */}
          <section id="section-recipes" className="space-y-6 scroll-mt-20">
            <div>
              <span className="text-xs font-mono text-indigo-400">TAILWIND CSS UTILITY RECIPES</span>
              <h2 className="font-display text-2xl font-bold text-white mt-1">
                可直接复用的 Tailwind 组件类名配方
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStyle.recipes.map((recipe, idx) => (
                <div
                  key={recipe.component}
                  className="bg-[#12151E] border border-slate-800/90 rounded-2xl p-5 flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-white">{recipe.component}</h3>
                      <button
                        onClick={() => handleCopy(recipe.classes, `recipe-${idx}`)}
                        className="px-3 py-1 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 text-xs font-medium flex items-center gap-1.5 cursor-pointer shrink-0"
                      >
                        {copiedId === `recipe-${idx}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>已复制类名</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>复制 Class</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{recipe.description}</p>
                  </div>

                  <div className="bg-[#090B10] border border-slate-800 rounded-xl p-3.5 font-mono text-xs text-emerald-400 break-all leading-relaxed">
                    {recipe.classes}
                  </div>
                </div>
              ))}
            </div>

            {/* Developer Do's & Don'ts + Personal Dev Memo */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              <div className="bg-[#12151E] border border-slate-800/90 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>开发还原必做项 (Do's)</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  {currentStyle.dos.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#12151E] border border-slate-800/90 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <XCircle className="w-4 h-4" />
                  <span>常见破坏风格禁忌 (Don'ts)</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  {currentStyle.donts.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-rose-400 font-mono">✕</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personal Developer Notes (Saved in LocalStorage) */}
              <div className="bg-[#12151E] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <NotebookPen className="w-4 h-4" />
                    <span>我的个人开发备忘 ({currentStyle.name})</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">自动保存于本地</span>
                </div>
                <textarea
                  rows={4}
                  value={devNotes[currentStyle.id] || ''}
                  onChange={(e) =>
                    setDevNotes((prev) => ({
                      ...prev,
                      [currentStyle.id]: e.target.value,
                    }))
                  }
                  placeholder="记录你在实际项目中使用该风格的心得、专属配色微调或常用组件库搭配..."
                  className="w-full rounded-xl bg-[#090B10] border border-slate-800 p-3 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Modals */}
      {showComparator && (
        <StyleComparatorModal
          initialLeftId={currentStyle.id}
          onClose={() => setShowComparator(false)}
        />
      )}

      {showCheatSheet && (
        <CheatSheetModal
          onSelectStyle={(id) => setSelectedStyleId(id)}
          onClose={() => setShowCheatSheet(false)}
        />
      )}
    </div>
  );
}
