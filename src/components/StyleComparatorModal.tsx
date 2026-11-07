import React, { useState } from 'react';
import { DESIGN_STYLES } from '../data/stylesData';
import { StyleExampleRenderer } from './examples/StyleExampleRenderer';
import { X, Copy, Check, Columns } from 'lucide-react';

interface StyleComparatorModalProps {
  initialLeftId: string;
  onClose: () => void;
}

export const StyleComparatorModal: React.FC<StyleComparatorModalProps> = ({
  initialLeftId,
  onClose,
}) => {
  const [leftId, setLeftId] = useState<string>(initialLeftId);
  const [rightId, setRightId] = useState<string>(
    initialLeftId === 'neo-brutalism' ? 'linear-dark' : 'neo-brutalism'
  );
  const [sharedExample, setSharedExample] = useState<'landing' | 'dashboard' | 'interactive'>('landing');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const leftStyle = DESIGN_STYLES.find((s) => s.id === leftId) || DESIGN_STYLES[0];
  const rightStyle = DESIGN_STYLES.find((s) => s.id === rightId) || DESIGN_STYLES[1];

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div className="bg-[#0F1117] border border-slate-800 rounded-2xl w-full max-w-7xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-[#141720]">
          <div className="flex items-center gap-3">
            <Columns className="w-5 h-5 text-indigo-400" />
            <div>
              <h2 className="text-base font-semibold text-white">双风格全方位对比工作台 (Side-by-Side Style Comparator)</h2>
              <p className="text-xs text-slate-400">同屏对比两种设计流派的几何圆角、边框阴影、色板及同一页面原型的视觉差异</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
              {(['landing', 'dashboard', 'interactive'] as const).map((ex) => (
                <button
                  key={ex}
                  onClick={() => setSharedExample(ex)}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    sharedExample === ex ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {ex === 'landing' ? '对比样例 01：着陆页' : ex === 'dashboard' ? '对比样例 02：仪表盘' : '对比样例 03：交互页'}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 cursor-pointer"
              aria-label="关闭对比器"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Comparison Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Style Selectors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { side: 'LEFT', value: leftId, setter: setLeftId, style: leftStyle },
              { side: 'RIGHT', value: rightId, setter: setRightId, style: rightStyle },
            ].map(({ side, value, setter, style }) => (
              <div key={side} className="bg-[#141720] border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-indigo-400 font-semibold">STYLE {side}</span>
                  <select
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-medium focus:outline-none focus:border-indigo-500"
                  >
                    {DESIGN_STYLES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.enName})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{style.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{style.tagline}</p>
                </div>

                {/* Spec Comparison Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-xs">
                  <div>
                    <div className="text-slate-500">圆角半径 (Radius)</div>
                    <div className="font-mono text-slate-200 mt-0.5">{style.geometryAndDepth.borderRadius}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">边框特征 (Border)</div>
                    <div className="font-mono text-slate-200 mt-0.5">{style.geometryAndDepth.borderStyle}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">阴影策略 (Shadow)</div>
                    <div className="font-mono text-slate-200 mt-0.5">{style.geometryAndDepth.shadowStyle}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">标题字体 (Heading)</div>
                    <div className="font-mono text-slate-200 mt-0.5">{style.typography.headingFont}</div>
                  </div>
                </div>

                {/* Color Strip */}
                <div className="flex items-center gap-2 pt-2">
                  {style.colors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => copyText(c.hex, `${side}-${c.hex}`)}
                      className="flex-1 p-2 rounded-lg border border-white/10 text-left transition-transform hover:scale-[1.02] cursor-pointer"
                      style={{ backgroundColor: c.hex.startsWith('rgba') ? '#1e293b' : c.hex }}
                      title={`点击复制 ${c.hex}`}
                    >
                      <div className={`font-mono text-[10px] font-bold ${c.textContrastClass}`}>
                        {copiedKey === `${side}-${c.hex}` ? '已复制' : c.hex.slice(0, 7)}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Core Card Recipe Copy */}
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 flex items-center justify-between gap-2">
                  <code className="font-mono text-[11px] text-emerald-400 truncate">
                    {style.recipes[0]?.classes}
                  </code>
                  <button
                    onClick={() => copyText(style.recipes[0]?.classes || '', `${side}-recipe`)}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedKey === `${side}-recipe` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>复制类名</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Live Rendered Page Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400">
                实时渲染预览：{leftStyle.name} — {sharedExample.toUpperCase()}
              </div>
              <StyleExampleRenderer styleId={leftStyle.id} exampleId={sharedExample} />
            </div>
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400">
                实时渲染预览：{rightStyle.name} — {sharedExample.toUpperCase()}
              </div>
              <StyleExampleRenderer styleId={rightStyle.id} exampleId={sharedExample} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
