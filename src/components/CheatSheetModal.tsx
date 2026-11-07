import React, { useState } from 'react';
import { DESIGN_STYLES } from '../data/stylesData';
import { X, Copy, Check, Table2 } from 'lucide-react';

interface CheatSheetModalProps {
  onSelectStyle: (id: string) => void;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({
  onSelectStyle,
  onClose,
}) => {
  const [copiedCell, setCopiedCell] = useState<string | null>(null);

  const handleCopy = (text: string, cellId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCell(cellId);
    setTimeout(() => setCopiedCell(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6">
      <div className="bg-[#0F1117] border border-slate-800 rounded-2xl w-full max-w-7xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#141720]">
          <div className="flex items-center gap-3">
            <Table2 className="w-5 h-5 text-indigo-400" />
            <div>
              <h2 className="text-base font-semibold text-white">
                16 大前端设计风格 Tailwind CSS 参数全景速查表
              </h2>
              <p className="text-xs text-slate-400">
                点击任意右侧卡片配方或 AI 提示词即可直接复制到剪贴板，点击风格名称跳转至对应的 3 个页面样例
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Matrix Table */}
        <div className="overflow-auto p-6">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono bg-[#141720]">
                <th className="py-3 px-4">风格流派 (点击跳转)</th>
                <th className="py-3 px-4">主画布色值</th>
                <th className="py-3 px-4">圆角规范 (Radius)</th>
                <th className="py-3 px-4">核心容器 Tailwind 类名 (点击复制)</th>
                <th className="py-3 px-4">主按钮 Tailwind 类名 (点击复制)</th>
                <th className="py-3 px-4 text-right">AI 风格提示词</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {DESIGN_STYLES.map((style) => {
                const cardRecipe = style.recipes[0]?.classes || '';
                const btnRecipe = style.recipes[1]?.classes || style.recipes[2]?.classes || '';
                return (
                  <tr key={style.id} className="hover:bg-slate-900/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => {
                          onSelectStyle(style.id);
                          onClose();
                        }}
                        className="text-left group cursor-pointer"
                      >
                        <div className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                          {style.name}
                        </div>
                        <div className="font-mono text-[11px] text-slate-500">{style.enName}</div>
                      </button>
                    </td>
                    <td className="py-3.5 px-4 font-mono">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded border border-white/20 shrink-0"
                          style={{ backgroundColor: style.colors[0].hex }}
                        />
                        <span className="text-slate-300">{style.colors[0].hex}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">
                      {style.geometryAndDepth.borderRadius}
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <button
                        onClick={() => handleCopy(cardRecipe, `${style.id}-card`)}
                        className="w-full text-left font-mono text-[11px] text-emerald-400 bg-slate-950 border border-slate-800 hover:border-emerald-500/50 rounded px-2.5 py-1.5 truncate block cursor-pointer"
                        title={cardRecipe}
                      >
                        {copiedCell === `${style.id}-card` ? '✓ 已复制容器类名' : cardRecipe}
                      </button>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <button
                        onClick={() => handleCopy(btnRecipe, `${style.id}-btn`)}
                        className="w-full text-left font-mono text-[11px] text-sky-400 bg-slate-950 border border-slate-800 hover:border-sky-500/50 rounded px-2.5 py-1.5 truncate block cursor-pointer"
                        title={btnRecipe}
                      >
                        {copiedCell === `${style.id}-btn` ? '✓ 已复制按钮类名' : btnRecipe}
                      </button>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => handleCopy(style.aiPromptSnippet, `${style.id}-prompt`)}
                        className="px-3 py-1.5 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 font-medium inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                      >
                        {copiedCell === `${style.id}-prompt` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>已复制</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>复制 Prompt</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
