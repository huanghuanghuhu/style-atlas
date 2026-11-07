import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Volume2,
  Sliders,
  Disc,
  BookOpen,
  Feather,
  Layers,
  Check,
} from 'lucide-react';

interface ExampleProps {
  exampleId: 'landing' | 'dashboard' | 'interactive';
}

// ============================================================================
// 4. NEO-BRUTALISM EXAMPLES (3 Full Pages)
// ============================================================================
export const NeoBrutalismExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [audienceCount, setAudienceCount] = useState<number>(1200);
  const [orderFilter, setOrderFilter] = useState<'ALL' | 'BUNDLE' | 'PRO'>('ALL');
  const [licenseType, setLicenseType] = useState<'SOLO' | 'TEAM'>('SOLO');
  const [customTip, setCustomTip] = useState<number>(10);

  if (exampleId === 'landing') {
    const estimatedMonthly = audienceCount * 14;
    return (
      <div className="bg-[#FFFDF5] text-black border-2 border-black p-6 md:p-8 space-y-8">
        {/* Top Bar Contract */}
        <header className="flex items-center justify-between bg-white border-2 border-black rounded-xl px-5 py-3.5 shadow-[4px_4px_0px_0px_#000000]">
          <span className="font-display font-extrabold text-lg tracking-tight">GUMDROP.WORK</span>
          <nav className="hidden sm:flex items-center gap-6 text-xs font-bold">
            <a href="#packs" onClick={(e) => e.preventDefault()} className="hover:underline">Asset Packs</a>
            <a href="#creators" onClick={(e) => e.preventDefault()} className="hover:underline">Creators</a>
            <a href="#fees" onClick={(e) => e.preventDefault()} className="hover:underline">Zero Monthly Fee</a>
          </nav>
          <button className="px-4 py-2 bg-[#FFDE59] border-2 border-black rounded-lg font-bold text-xs shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer">
            Open Shop →
          </button>
        </header>

        {/* Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 bg-[#FFDE59] border-2 border-black rounded-2xl p-8 shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider">
                CREATOR COMMERCE · 0% PLATFORM LOCK-IN
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.02] mt-4">
                Turn your side project into a cash-flowing studio.
              </h1>
              <p className="text-sm font-medium text-neutral-900 mt-4 leading-relaxed max-w-lg">
                Upload Figma kits, shaders, CLI binaries, or Notion templates. Instant global tax handling and weekly payouts.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#FF6B6B] border-2 border-black rounded-xl font-bold text-sm shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
                Start Selling in 60s
              </button>
              <button className="px-6 py-3 bg-white border-2 border-black rounded-xl font-bold text-sm shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] transition-all cursor-pointer">
                Explore 14,200+ Kits
              </button>
            </div>
          </div>

          {/* Interactive Revenue Estimator Box */}
          <div className="lg:col-span-5 bg-[#6EE7B7] border-2 border-black rounded-2xl p-7 shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase">INTERACTIVE PAYOUT ESTIMATOR</span>
              <h3 className="font-display text-2xl font-extrabold mt-2">Calculate Your Take-Home</h3>
              <div className="mt-6 bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_0px_#000000]">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>MONTHLY BUYERS</span>
                  <span className="font-mono tabular-nums">{audienceCount.toLocaleString()} buyers</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={5000}
                  step={100}
                  value={audienceCount}
                  onChange={(e) => setAudienceCount(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-6 pt-5 border-t-2 border-black flex items-baseline justify-between">
              <span className="text-xs font-bold uppercase">EST. ANNUAL PAYOUT</span>
              <span className="font-mono text-4xl font-extrabold tabular-nums">
                ${estimatedMonthly.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    const sales = [
      { id: '#ORD-982', product: 'Brutalist UI Kit v4 (Figma)', tier: 'BUNDLE', buyer: 'studio@koto.io', net: '$128.00' },
      { id: 'ORD-981', product: 'WebGL Shader Pack Pro', tier: 'PRO', buyer: 'alex@vercel.app', net: '$64.00' },
      { id: '#ORD-980', product: 'Brutalist UI Kit v4 (Figma)', tier: 'BUNDLE', buyer: 'mira@linear.app', net: '$128.00' },
      { id: '#ORD-979', product: 'Mono Icon System (1,200 SVG)', tier: 'PRO', buyer: 'dev@raycast.com', net: '$49.00' },
    ].filter((s) => orderFilter === 'ALL' || s.tier === orderFilter);

    return (
      <div className="bg-[#FFFDF5] text-black border-2 border-black p-6 space-y-6">
        {/* 3 Pop KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#FFDE59] border-2 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000000]">
            <div className="font-mono text-xs font-bold">30-DAY NET REVENUE</div>
            <div className="font-mono text-3xl font-extrabold tabular-nums mt-2">$24,890.00</div>
            <div className="text-xs font-bold mt-2">▲ +34% vs last month</div>
          </div>
          <div className="bg-[#6EE7B7] border-2 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000000]">
            <div className="font-mono text-xs font-bold">ACTIVE LICENSE KEYS</div>
            <div className="font-mono text-3xl font-extrabold tabular-nums mt-2">1,842</div>
            <div className="text-xs font-bold mt-2">99.4% activation rate</div>
          </div>
          <div className="bg-[#FF6B6B] border-2 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000000]">
            <div className="font-mono text-xs font-bold">REFUND DISPUTE RATE</div>
            <div className="font-mono text-3xl font-extrabold tabular-nums mt-2">0.12%</div>
            <div className="text-xs font-bold mt-2">20x lower than industry avg</div>
          </div>
        </div>

        {/* Filter Bar + Table */}
        <div className="bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] overflow-hidden">
          <div className="p-4 bg-[#FFF9DB] border-b-2 border-black flex items-center justify-between">
            <h3 className="font-display font-extrabold text-base">Recent Digital Downloads</h3>
            <div className="flex gap-2">
              {(['ALL', 'BUNDLE', 'PRO'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setOrderFilter(f)}
                  className={`px-3 py-1 border-2 border-black rounded-lg font-mono text-xs font-bold cursor-pointer transition-all ${
                    orderFilter === f ? 'bg-black text-white' : 'bg-white text-black hover:bg-[#FFDE59]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b-2 border-black bg-neutral-100 font-mono font-bold">
                <th className="p-3.5 border-r-2 border-black">ORDER ID</th>
                <th className="p-3.5 border-r-2 border-black">DIGITAL PRODUCT</th>
                <th className="p-3.5 border-r-2 border-black">CUSTOMER</th>
                <th className="p-3.5 text-right">NET PAYOUT</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-black font-medium">
              {sales.map((s) => (
                <tr key={s.id} className="hover:bg-[#FFFDF5]">
                  <td className="p-3.5 border-r-2 border-black font-mono font-bold">{s.id}</td>
                  <td className="p-3.5 border-r-2 border-black font-bold">{s.product}</td>
                  <td className="p-3.5 border-r-2 border-black font-mono">{s.buyer}</td>
                  <td className="p-3.5 text-right font-mono font-extrabold tabular-nums">{s.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Interactive Checkout & Fair Price Form
  const basePrice = licenseType === 'SOLO' ? 49 : 149;
  const finalTotal = basePrice + customTip;

  return (
    <div className="bg-[#FFFDF5] text-black border-2 border-black p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-7 bg-white border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000000] space-y-6">
        <div>
          <span className="font-mono text-xs font-bold bg-[#FFDE59] px-2 py-0.5 border border-black">INSTANT ZIP + FIGMA SOURCE</span>
          <h2 className="font-display text-2xl font-extrabold mt-2">Neo-Brutalist Design System v4.0</h2>
        </div>

        {/* License Selector */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setLicenseType('SOLO')}
            className={`p-4 border-2 border-black rounded-xl text-left cursor-pointer transition-all ${
              licenseType === 'SOLO'
                ? 'bg-[#FFDE59] shadow-[4px_4px_0px_0px_#000000]'
                : 'bg-white hover:bg-neutral-50'
            }`}
          >
            <div className="font-display font-extrabold text-base">Solo Creator</div>
            <div className="text-xs font-medium mt-1">1 Designer · Unlimited Personal Projects</div>
            <div className="font-mono text-xl font-extrabold mt-3">$49</div>
          </button>
          <button
            onClick={() => setLicenseType('TEAM')}
            className={`p-4 border-2 border-black rounded-xl text-left cursor-pointer transition-all ${
              licenseType === 'TEAM'
                ? 'bg-[#6EE7B7] shadow-[4px_4px_0px_0px_#000000]'
                : 'bg-white hover:bg-neutral-50'
            }`}
          >
            <div className="font-display font-extrabold text-base">Studio Unlimited</div>
            <div className="text-xs font-medium mt-1">Up to 25 Seats · Commercial Client Rights</div>
            <div className="font-mono text-xl font-extrabold mt-3">$149</div>
          </button>
        </div>

        {/* Name a Fair Tip */}
        <div>
          <label className="block text-xs font-bold uppercase mb-2">
            Add Creator Coffee Tip (Optional $)
          </label>
          <div className="flex gap-3">
            {[0, 5, 10, 25].map((tip) => (
              <button
                key={tip}
                onClick={() => setCustomTip(tip)}
                className={`px-4 py-2 border-2 border-black rounded-lg font-mono text-xs font-bold cursor-pointer ${
                  customTip === tip ? 'bg-black text-white' : 'bg-white hover:bg-[#FFF9DB]'
                }`}
              >
                +${tip}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Checkout Box */}
      <div className="md:col-span-5 bg-[#FFDE59] border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="font-display text-xl font-extrabold border-b-2 border-black pb-3">Order Receipt</h3>
          <div className="flex justify-between text-xs font-bold">
            <span>License ({licenseType})</span>
            <span className="font-mono">${basePrice}.00</span>
          </div>
          <div className="flex justify-between text-xs font-bold">
            <span>Creator Supporter Tip</span>
            <span className="font-mono">${customTip}.00</span>
          </div>
          <div className="flex justify-between text-xs font-bold">
            <span>VAT / Digital Tax</span>
            <span className="font-mono">$0.00</span>
          </div>
        </div>

        <div className="pt-5 border-t-2 border-black mt-6">
          <div className="flex justify-between items-baseline mb-4">
            <span className="font-mono text-xs font-bold">TOTAL DUE</span>
            <span className="font-mono text-4xl font-extrabold tabular-nums">${finalTotal}.00</span>
          </div>
          <button className="w-full py-3.5 bg-[#FF6B6B] border-2 border-black rounded-xl font-bold text-sm shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
            Pay & Download Now →
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 5. EDITORIAL LUXURY SERIF EXAMPLES (3 Full Pages)
// ============================================================================
export const EditorialSerifExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [eraFilter, setEraFilter] = useState<'ALL' | '1950S' | '1970S' | 'CONTEMPORARY'>('ALL');
  const [engravingText, setEngravingText] = useState<string>('A. LINDQVIST');
  const [scentProfile, setScentProfile] = useState<'VETIVER' | 'CEDAR' | 'FIG'>('VETIVER');

  if (exampleId === 'landing') {
    return (
      <div className="bg-[#FAF7F2] text-[#1C1917] p-8 md:p-12 border border-stone-300">
        {/* Broadsheet Masthead */}
        <header className="border-b border-stone-800 pb-6">
          <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-300 pb-3 mb-6">
            <span>VOLUME XIV · AUTUMN / WINTER MONOGRAPH</span>
            <span className="hidden sm:inline">ZÜRICH · KYOTO · ANTWERP</span>
            <span>ISSN 2049-8821</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-serif-editorial text-2xl tracking-tight">L’ATELIER DU NORD</span>
            <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-stone-600">
              <a href="#essays" onClick={(e) => e.preventDefault()} className="hover:text-[#1C1917]">Essays</a>
              <a href="#objects" onClick={(e) => e.preventDefault()} className="hover:text-[#1C1917]">Tactile Objects</a>
              <a href="#residencies" onClick={(e) => e.preventDefault()} className="hover:text-[#1C1917]">Residencies</a>
            </nav>
            <button className="px-5 py-2 bg-[#1C1917] text-[#FAF7F2] text-xs tracking-wider uppercase hover:bg-[#7C2D12] transition-colors cursor-pointer">
              Subscribe
            </button>
          </div>
        </header>

        {/* Editorial Hero */}
        <section className="py-12 border-b border-stone-300 text-center max-w-3xl mx-auto">
          <div className="text-xs tracking-widest uppercase text-[#7C2D12] mb-4">
            FEATURED ESSAY · BY SOREN KIERKEGAARD II
          </div>
          <h1 className="font-serif-editorial text-4xl md:text-6xl font-normal leading-[1.08] tracking-tight text-[#1C1917]">
            In Praise of <span className="italic">Unfinished</span> Timber and Silent Rooms.
          </h1>
          <p className="text-sm text-stone-600 mt-6 leading-[1.8] max-w-xl mx-auto">
            How contemporary Nordic cabinetmakers are returning to unlacquered Douglas fir, hand-cut mortise joints, and architectural restraint.
          </p>
          <div className="mt-6 text-xs text-stone-500">
            <span>Architecture</span>
            <span className="mx-2">·</span>
            <span>14 min read</span>
            <span className="mx-2">·</span>
            <span>Photographs from Gotland</span>
          </div>
        </section>

        {/* 3-Column Broadsheet Articles */}
        <section className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-300">
          {[
            {
              no: '01',
              title: 'The Acoustics of Raw Plaster',
              excerpt: 'Why lime-washed walls absorb high-frequency chatter and foster contemplative dialogue.',
              author: 'Clara V.',
            },
            {
              no: '02',
              title: 'Kyoto Ceramic Kilns at Dawn',
              excerpt: 'A seven-day apprenticeship observing wood-ash glaze transformations in Bizen province.',
              author: 'Kenji M.',
            },
            {
              no: '03',
              title: 'Typography on Cotton Rag Paper',
              excerpt: 'Examining the physical indentation of lead type on 300gsm mould-made archival sheets.',
              author: 'H. Lindqvist',
            },
          ].map((art, i) => (
            <article key={art.no} className={i > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}>
              <span className="font-mono text-xs text-[#7C2D12]">CHAPTER {art.no}</span>
              <h3 className="font-serif-editorial text-2xl mt-2 leading-snug">{art.title}</h3>
              <p className="text-xs text-stone-600 mt-3 leading-relaxed">{art.excerpt}</p>
              <div className="mt-5 text-xs text-stone-500">
                <span>By {art.author}</span>
                <span className="mx-2">·</span>
                <span className="underline cursor-pointer hover:text-[#1C1917]">Read Monograph</span>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    const lots = [
      { lot: 'LOT 014', title: 'Poul Kjærholm PK22 Lounge Chair', era: '1950S', material: 'Wicker & Matte Spring Steel', estimate: '€6,500 – €8,200' },
      { lot: 'LOT 019', title: 'Charlotte Perriand Les Arcs Stool', era: '1970S', material: 'Saddle Leather & Tubular Iron', estimate: '€4,200 – €5,500' },
      { lot: 'LOT 024', title: 'Axel Vervoordt Wabi Monolith Table', era: 'CONTEMPORARY', material: 'Reclaimed Bog Oak', estimate: '€18,000 – €24,000' },
      { lot: 'LOT 031', title: 'Hans Wegner Papa Bear Armchair', era: '1950S', material: 'Teak & Wool Bouclé', estimate: '€14,500 – €19,000' },
    ].filter((l) => eraFilter === 'ALL' || l.era === eraFilter);

    return (
      <div className="bg-[#FAF7F2] text-[#1C1917] p-8 border border-stone-300 space-y-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-stone-800 pb-5">
          <div>
            <span className="text-xs tracking-widest uppercase text-[#7C2D12]">AUTUMN CURATED AUCTION</span>
            <h2 className="font-serif-editorial text-3xl mt-1">Provenance & Archival Catalogue</h2>
          </div>
          <div className="flex gap-6 text-xs">
            {(['ALL', '1950S', '1970S', 'CONTEMPORARY'] as const).map((era) => (
              <button
                key={era}
                onClick={() => setEraFilter(era)}
                className={`pb-1 cursor-pointer transition-colors ${
                  eraFilter === era ? 'border-b-2 border-[#1C1917] font-semibold text-[#1C1917]' : 'text-stone-500 hover:text-[#1C1917]'
                }`}
              >
                {era}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-stone-300">
          {lots.map((item) => (
            <div key={item.lot} className="py-5 grid grid-cols-12 items-baseline gap-4 hover:bg-[#F2ECE1]/60 px-3 transition-colors">
              <div className="col-span-2 font-mono text-xs text-[#7C2D12]">{item.lot}</div>
              <div className="col-span-5 font-serif-editorial text-xl">{item.title}</div>
              <div className="col-span-3 text-xs text-stone-600">{item.material}</div>
              <div className="col-span-2 text-right font-mono text-xs tabular-nums font-medium">{item.estimate}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Interactive Bespoke Apothecary & Engraving
  const scentNotes = {
    VETIVER: { top: 'Calabrian Bergamot, Bitter Orange', heart: 'Haitian Vetiver Root, Coriander Seed', base: 'Smoked Guaiac Wood, Ambergris' },
    CEDAR: { top: 'Cardamom Pod, Crushed Pine Needle', heart: 'Atlas Mountain Cedar, Orris Butter', base: 'Hinoki Cypress, Vetiver' },
    FIG: { top: 'Green Fig Leaf, Petitgrain', heart: 'Wild Fig Nectar, Galbanum', base: 'White Cedarwood, Tonka Bean' },
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] p-8 border border-stone-300 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-7 space-y-6">
        <div>
          <span className="text-xs tracking-widest uppercase text-[#7C2D12]">BESPOKE APOTHECARY COMMISSION</span>
          <h2 className="font-serif-editorial text-3xl mt-1">Eau de Parfum · 100ml Amber Glass</h2>
        </div>

        {/* Botanical Accord Selector */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-stone-500">01. Select Botanical Formulation</label>
          <div className="grid grid-cols-3 gap-4 pt-1">
            {(['VETIVER', 'CEDAR', 'FIG'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setScentProfile(s)}
                className={`p-4 border text-left transition-colors cursor-pointer ${
                  scentProfile === s ? 'border-[#1C1917] bg-[#F2ECE1]' : 'border-stone-300 hover:border-stone-500'
                }`}
              >
                <div className="font-serif-editorial text-lg italic">{s.toLowerCase()}</div>
                <div className="text-[11px] text-stone-500 mt-1">18% Maceration</div>
              </button>
            ))}
          </div>
        </div>

        {/* Olfactory Notes Table */}
        <div className="border-y border-stone-300 divide-y divide-stone-300 text-xs">
          <div className="py-3 flex justify-between">
            <span className="text-stone-500">Top Notes</span>
            <span className="font-medium">{scentNotes[scentProfile].top}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="text-stone-500">Heart Notes</span>
            <span className="font-medium">{scentNotes[scentProfile].heart}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="text-stone-500">Base Notes</span>
            <span className="font-medium">{scentNotes[scentProfile].base}</span>
          </div>
        </div>

        {/* Monogram Input */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-500">
            02. Cotton Label Monogram (Max 16 Characters)
          </label>
          <input
            type="text"
            maxLength={16}
            value={engravingText}
            onChange={(e) => setEngravingText(e.target.value)}
            className="w-full mt-2 pb-2 bg-transparent border-b border-[#1C1917] font-serif-editorial italic text-xl focus:outline-none"
          />
        </div>
      </div>

      {/* Live Apothecary Bottle Label Preview */}
      <div className="md:col-span-5 bg-[#F2ECE1] p-8 border border-stone-300 flex flex-col justify-between">
        <div className="bg-[#FAF7F2] border border-stone-400 p-6 text-center space-y-4 shadow-2xs">
          <div className="text-[10px] tracking-widest uppercase text-stone-500">L’ATELIER DU NORD · ZÜRICH</div>
          <div className="border-y border-stone-300 py-4">
            <div className="font-serif-editorial text-2xl tracking-tight">
              No. 09 <span className="italic capitalize">{scentProfile.toLowerCase()}</span>
            </div>
            <div className="text-[11px] text-stone-500 mt-1">Extrait Botanique · 100ml e 3.4 fl.oz</div>
          </div>
          <div className="py-2">
            <div className="text-[10px] uppercase tracking-widest text-stone-400">COMPOUNDED FOR</div>
            <div className="font-serif-editorial italic text-lg mt-0.5">{engravingText || 'ANONYMOUS COLLECTOR'}</div>
          </div>
        </div>

        <button className="w-full mt-6 py-3.5 bg-[#1C1917] text-[#FAF7F2] text-xs tracking-widest uppercase hover:bg-[#7C2D12] transition-colors cursor-pointer">
          Commission Bottle · €185
        </button>
      </div>
    </div>
  );
};

// ============================================================================
// 6. SPATIAL GLASSMORPHISM EXAMPLES (3 Full Pages)
// ============================================================================
export const SpatialGlassExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [activeScene, setActiveScene] = useState<'aurora' | 'ocean' | 'nebula'>('aurora');
  const [immersionBlur, setImmersionBlur] = useState<number>(85);
  const [spatialAudio, setSpatialAudio] = useState<boolean>(true);

  const sceneOrbs = {
    aurora: 'from-indigo-500/35 via-sky-400/25 to-emerald-400/25',
    ocean: 'from-cyan-500/35 via-blue-600/30 to-indigo-800/30',
    nebula: 'from-fuchsia-500/30 via-indigo-500/30 to-amber-400/20',
  };

  if (exampleId === 'landing') {
    return (
      <div className="relative bg-[#070A17] text-white p-8 rounded-[32px] overflow-hidden min-h-[420px]">
        {/* Ambient Light Orbs */}
        <div className={`absolute -top-24 -left-16 w-96 h-96 rounded-full bg-gradient-to-br ${sceneOrbs[activeScene]} blur-3xl pointer-events-none`} />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-sky-500/25 blur-3xl pointer-events-none" />

        {/* Main Frosted Glass Window */}
        <div className="relative bg-white/[0.10] backdrop-blur-2xl border border-white/20 rounded-[28px] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_24px_60px_rgba(0,0,0,0.5)] space-y-8">
          <header className="flex items-center justify-between border-b border-white/15 pb-4">
            <span className="font-display font-semibold text-base tracking-tight">AetherOS Spatial</span>
            <div className="flex gap-2">
              {(['aurora', 'ocean', 'nebula'] as const).map((sc) => (
                <button
                  key={sc}
                  onClick={() => setActiveScene(sc)}
                  className={`px-3 py-1 rounded-xl text-xs capitalize transition-all cursor-pointer ${
                    activeScene === sc
                      ? 'bg-white/25 border border-white/40 text-white font-medium'
                      : 'bg-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  {sc} Field
                </button>
              ))}
            </div>
          </header>

          <div className="max-w-2xl">
            <div className="text-xs text-sky-300 font-medium tracking-wider uppercase">
              OPTICAL DEPTH COMPUTING · VISION INTERFACE
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-2 leading-[1.1]">
              Interfaces that breathe with ambient light.
            </h1>
            <p className="text-sm text-white/75 mt-4 leading-relaxed">
              Multi-layered frosted glass planes dynamically refract background environments while preserving crisp specular borders and effortless legibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Dynamic Specular Rims', sub: '1px top inset refraction responds to gaze angle' },
              { title: 'Acoustic Ray Tracing', sub: 'Head-tracked 360° spatial soundstage' },
              { title: 'Eye-Pinch Precision', sub: 'Zero-latency natural gesture affordances' },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 rounded-2xl p-5 transition-colors"
              >
                <div className="font-semibold text-sm text-white">{card.title}</div>
                <div className="text-xs text-white/65 mt-1.5 leading-relaxed">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className="relative bg-[#070A17] text-white p-6 rounded-[32px] overflow-hidden flex flex-col md:flex-row gap-4">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Spatial Dock */}
        <aside className="relative md:w-52 bg-white/[0.10] backdrop-blur-2xl border border-white/20 rounded-[24px] p-4 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
          <div className="space-y-1">
            <div className="px-3 py-2 text-[11px] font-mono text-white/50">SPATIAL ENVIRONMENTS</div>
            {['Nordic Fjord Dawn', 'Deep Orbit Station', 'Kyoto Moss Rain', 'Solar Observatory'].map((env, i) => (
              <button
                key={env}
                className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-medium transition-colors cursor-pointer ${
                  i === 0 ? 'bg-white/25 text-white border border-white/30' : 'text-white/70 hover:bg-white/10'
                }`}
              >
                {env}
              </button>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/15 text-xs text-white/60 flex items-center justify-between px-2">
            <span>Battery Array</span>
            <span className="font-mono text-white">94%</span>
          </div>
        </aside>

        {/* Main Glass Canvas */}
        <div className="relative flex-1 bg-white/[0.10] backdrop-blur-2xl border border-white/20 rounded-[28px] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-white/60">ACTIVE SOUNDSCAPE</span>
              <h3 className="text-xl font-semibold mt-0.5">Nordic Fjord Dawn · 7.1.4 Spatial Mix</h3>
            </div>
            <button
              onClick={() => setSpatialAudio(!spatialAudio)}
              className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-xs font-semibold cursor-pointer"
            >
              {spatialAudio ? 'Head Tracking: ON' : 'Fixed Stereo'}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { ch: 'Binaural Wind', db: '-4.0 dB', pan: '32° Left' },
              { ch: 'Glacial Meltwater', db: '-8.5 dB', pan: 'Center Near' },
              { ch: 'Sub-Bass Resonance', db: '-6.2 dB', pan: 'Omni Field' },
            ].map((stem) => (
              <div key={stem.ch} className="bg-black/25 border border-white/15 rounded-2xl p-4">
                <div className="text-xs text-white/60">{stem.ch}</div>
                <div className="font-mono text-xl font-semibold mt-2 tabular-nums">{stem.db}</div>
                <div className="text-[11px] text-sky-300 mt-1">{stem.pan}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Interactive Optical Calibration Panel
  return (
    <div className="relative bg-[#070A17] text-white p-8 rounded-[32px] overflow-hidden">
      <div className="absolute -top-10 right-10 w-80 h-80 bg-indigo-500/35 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-xl mx-auto bg-white/[0.12] backdrop-blur-2xl border border-white/25 rounded-[28px] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
        <div>
          <span className="text-xs text-sky-300 font-medium">OPTICAL GLASS CALIBRATION</span>
          <h3 className="text-xl font-semibold mt-1">Adjust Crown Dial Immersion</h3>
        </div>

        <div className="bg-black/25 border border-white/15 rounded-2xl p-5 space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-white/75">Passthrough Refraction Opacity</span>
            <span className="font-mono tabular-nums font-semibold">{immersionBlur}%</span>
          </div>
          <input
            type="range"
            min={20}
            max={100}
            value={immersionBlur}
            onChange={(e) => setImmersionBlur(Number(e.target.value))}
            className="w-full accent-sky-400 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
            <div className="text-xs text-white/60">Foveated Rendering</div>
            <div className="text-sm font-semibold mt-1">Dynamic 90Hz Lock</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
            <div className="text-xs text-white/60">Specular Rim Contrast</div>
            <div className="text-sm font-semibold mt-1">1.0px High Luminance</div>
          </div>
        </div>
      </div>
    </div>
  );
};
