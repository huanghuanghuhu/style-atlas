import React, { useState } from 'react';
import {
  ArrowUpRight,
  Terminal,
  Command,
  Search,
  Sliders,
  Cpu,
  Check,
  Sparkles,
  Sun,
  Volume2,
  Wifi,
  Layers,
  Filter,
} from 'lucide-react';

interface ExampleProps {
  exampleId: 'landing' | 'dashboard' | 'interactive';
}

// ============================================================================
// 1. SWISS INTERNATIONAL GRID EXAMPLES (3 Full Pages)
// ============================================================================
export const SwissGridExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [regionFilter, setRegionFilter] = useState<'ALL' | 'EU' | 'US' | 'APAC'>('ALL');
  const [selectedTier, setSelectedTier] = useState<'C4-STD' | 'C4-HIGH' | 'C4-ULTRA'>('C4-HIGH');
  const [storageTb, setStorageTb] = useState<number>(4);
  const [redundancy, setRedundancy] = useState<boolean>(true);
  const [deployedToast, setDeployedToast] = useState<string | null>(null);

  if (exampleId === 'landing') {
    return (
      <div className="bg-[#F7F6F2] text-[#111111] border-t border-l border-[#111111] font-sans">
        {/* Top Bar Contract: 3 zones */}
        <header className="grid grid-cols-12">
          <div className="col-span-4 md:col-span-3 p-5 border-r border-b border-[#111111] font-display font-bold text-lg tracking-tighter flex items-center">
            KRONOS.GRID
          </div>
          <nav className="col-span-5 md:col-span-6 p-5 border-r border-b border-[#111111] hidden sm:flex items-center gap-8 text-xs font-medium">
            <a href="#arch" onClick={(e) => e.preventDefault()} className="hover:text-[#FF3300] transition-colors whitespace-nowrap">01. Architecture</a>
            <a href="#topo" onClick={(e) => e.preventDefault()} className="hover:text-[#FF3300] transition-colors whitespace-nowrap">02. Topology</a>
            <a href="#spec" onClick={(e) => e.preventDefault()} className="hover:text-[#FF3300] transition-colors whitespace-nowrap">03. Verification</a>
            <a href="#pricing" onClick={(e) => e.preventDefault()} className="hover:text-[#FF3300] transition-colors whitespace-nowrap">04. Tariff</a>
          </nav>
          <button
            onClick={() => setDeployedToast('Cluster initialization sequence queued in fra-central-1.')}
            className="col-span-8 sm:col-span-3 p-5 border-r border-b border-[#111111] bg-[#FF3300] text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#111111] transition-colors flex items-center justify-between cursor-pointer"
          >
            <span>INITIALIZE NODE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </header>

        {deployedToast && (
          <div className="border-r border-b border-[#111111] bg-[#111111] text-white px-6 py-3 flex items-center justify-between font-mono text-xs">
            <span>{deployedToast}</span>
            <button onClick={() => setDeployedToast(null)} className="underline hover:text-[#FF3300]">DISMISS</button>
          </div>
        )}

        {/* Hero Split Grid */}
        <section className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 p-8 md:p-12 border-r border-b border-[#111111] flex flex-col justify-between min-h-[340px]">
            <div className="font-mono text-xs text-[#FF3300] font-semibold tracking-wider">
              01. DETERMINISTIC DISTRIBUTED RUNTIME · ZÜRICH EDITION
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.94] my-6 max-w-2xl">
              Mathematical order for global state replication.
            </h1>
            <p className="text-sm text-neutral-700 max-w-xl leading-relaxed">
              Built on strict consensus geometry. Zero decorative layers, zero hidden queues, sub-millisecond state finality across 42 bare-metal sovereign zones.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 grid grid-rows-2">
            <div className="p-8 border-r border-b border-[#111111] bg-white flex flex-col justify-between">
              <div className="flex justify-between items-start font-mono text-xs text-neutral-500">
                <span>01.A / CONSENSUS FINALITY</span>
                <span>ISO-27001</span>
              </div>
              <div>
                <div className="font-mono text-5xl font-bold tracking-tighter tabular-nums">0.42ms</div>
                <div className="text-xs text-neutral-600 mt-2">Verified across 10,000 concurrent write streams</div>
              </div>
            </div>
            <div className="p-8 border-r border-b border-[#111111] bg-[#F7F6F2] flex flex-col justify-between">
              <div className="flex justify-between items-start font-mono text-xs text-neutral-500">
                <span>01.B / UPTIME SLA</span>
                <span>2024–2026</span>
              </div>
              <div>
                <div className="font-mono text-5xl font-bold tracking-tighter tabular-nums">99.999%</div>
                <div className="text-xs text-neutral-600 mt-2">Zero unplanned partitions in 36 consecutive months</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Column Swiss Architectural Matrix */}
        <section className="grid grid-cols-1 md:grid-cols-3">
          {[
            {
              idx: '02.1',
              title: 'Zero-Copy Wire Protocol',
              desc: 'Direct kernel-bypass packet framing eliminates serialization overhead and garbage collection spikes.',
              metric: '14.2M req/s',
            },
            {
              idx: '02.2',
              title: 'Cryptographic Ledger Proof',
              desc: 'Every state transition emits a verifiable Merkle root anchored to hardware security modules.',
              metric: 'SHA-3 / Ed25519',
            },
            {
              idx: '02.3',
              title: 'Sovereign Mesh Routing',
              desc: 'Deterministic geo-fencing guarantees payload residency strictly within designated jurisdictional borders.',
              metric: '42 Edge Regions',
            },
          ].map((item) => (
            <div
              key={item.idx}
              className="p-8 border-r border-b border-[#111111] hover:bg-white transition-colors flex flex-col justify-between min-h-[240px] group"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#FF3300] font-bold">{item.idx}</span>
                <span className="text-neutral-500 tabular-nums">{item.metric}</span>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl font-bold tracking-tight group-hover:text-[#FF3300] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    const nodes = [
      { id: 'zrh-core-01', region: 'EU', zone: 'Zürich, CH', iops: '142,800', latency: '0.8ms', load: '34%', status: 'NOMINAL' },
      { id: 'fra-edge-04', region: 'EU', zone: 'Frankfurt, DE', iops: '98,420', latency: '1.2ms', load: '61%', status: 'NOMINAL' },
      { id: 'iad-core-02', region: 'US', zone: 'Virginia, US', iops: '210,550', latency: '2.4ms', load: '78%', status: 'ELEVATED' },
      { id: 'nrt-edge-09', region: 'APAC', zone: 'Tokyo, JP', iops: '115,900', latency: '1.5ms', load: '42%', status: 'NOMINAL' },
      { id: 'sin-core-01', region: 'APAC', zone: 'Singapore, SG', iops: '88,120', latency: '1.9ms', load: '29%', status: 'NOMINAL' },
    ].filter((n) => regionFilter === 'ALL' || n.region === regionFilter);

    return (
      <div className="bg-[#F7F6F2] text-[#111111] border-t border-l border-[#111111]">
        {/* Header Bar */}
        <div className="grid grid-cols-12">
          <div className="col-span-6 p-5 border-r border-b border-[#111111] flex items-center justify-between">
            <div>
              <div className="font-mono text-[11px] text-neutral-500">TELEMETRY MATRIX / SEC-09</div>
              <h2 className="font-display text-xl font-bold tracking-tight mt-0.5">Sovereign Node Partition Status</h2>
            </div>
          </div>
          <div className="col-span-6 p-5 border-r border-b border-[#111111] flex items-center justify-end gap-2 bg-white">
            <span className="font-mono text-xs text-neutral-500 mr-2">JURISDICTION:</span>
            {(['ALL', 'EU', 'US', 'APAC'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRegionFilter(r)}
                className={`px-3 py-1.5 font-mono text-xs font-bold border border-[#111111] cursor-pointer transition-colors ${
                  regionFilter === r ? 'bg-[#111111] text-white' : 'bg-[#F7F6F2] text-[#111111] hover:bg-neutral-200'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* 4 KPI Cells */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { label: '01 / ACTIVE PARTITIONS', val: '48 / 48', note: '100% QUORUM' },
            { label: '02 / GLOBAL WRITE IOPS', val: '655,790', note: '+12.4% VS 24H' },
            { label: '03 / P99 COMMIT TIME', val: '1.42 ms', note: 'TARGET < 5.0MS' },
            { label: '04 / MERKLE DRIFT', val: '0.000%', note: 'VERIFIED EPOCH 904' },
          ].map((kpi) => (
            <div key={kpi.label} className="p-6 border-r border-b border-[#111111] bg-white">
              <div className="font-mono text-[11px] text-neutral-500">{kpi.label}</div>
              <div className="font-mono text-3xl font-bold tabular-nums tracking-tight mt-3">{kpi.val}</div>
              <div className="font-mono text-[11px] text-[#FF3300] mt-2">{kpi.note}</div>
            </div>
          ))}
        </div>

        {/* Strict Swiss Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="bg-[#EAE8E1]">
                <th className="p-4 border-r border-b border-[#111111]">NODE IDENTIFIER</th>
                <th className="p-4 border-r border-b border-[#111111]">LOCATION</th>
                <th className="p-4 border-r border-b border-[#111111] text-right">WRITE IOPS</th>
                <th className="p-4 border-r border-b border-[#111111] text-right">P99 LATENCY</th>
                <th className="p-4 border-r border-b border-[#111111] text-right">SATURATION</th>
                <th className="p-4 border-r border-b border-[#111111]">STATE</th>
              </tr>
            </thead>
            <tbody>
              {nodes.map((n) => (
                <tr key={n.id} className="hover:bg-white transition-colors">
                  <td className="p-4 border-r border-b border-[#111111] font-bold">{n.id}</td>
                  <td className="p-4 border-r border-b border-[#111111] font-sans">{n.zone}</td>
                  <td className="p-4 border-r border-b border-[#111111] text-right tabular-nums">{n.iops}</td>
                  <td className="p-4 border-r border-b border-[#111111] text-right tabular-nums">{n.latency}</td>
                  <td className="p-4 border-r border-b border-[#111111] text-right tabular-nums">{n.load}</td>
                  <td className="p-4 border-r border-b border-[#111111] font-bold">
                    <span className={n.status === 'ELEVATED' ? 'text-[#FF3300]' : 'text-[#111111]'}>
                      {n.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Interactive Configurator
  const tierPrices = { 'C4-STD': 240, 'C4-HIGH': 480, 'C4-ULTRA': 920 };
  const totalMonthly = tierPrices[selectedTier] + storageTb * 35 + (redundancy ? 150 : 0);

  return (
    <div className="bg-[#F7F6F2] text-[#111111] border-t border-l border-[#111111] grid grid-cols-12">
      <div className="col-span-12 lg:col-span-8 p-8 border-r border-b border-[#111111] space-y-8">
        <div>
          <div className="font-mono text-xs text-[#FF3300] font-bold">SPECIFICATION SHEET / FORM 03</div>
          <h2 className="font-display text-2xl font-bold tracking-tight mt-1">Dedicated Bare-Metal Cluster Allocation</h2>
        </div>

        {/* Step 1 */}
        <div className="space-y-3">
          <label className="block font-mono text-xs font-bold uppercase">01. Select Compute Geometry</label>
          <div className="grid grid-cols-3 border-t border-l border-[#111111]">
            {[
              { id: 'C4-STD', cores: '16 Physical Cores', ram: '64 GB ECC', price: '$240/mo' },
              { id: 'C4-HIGH', cores: '32 Physical Cores', ram: '128 GB ECC', price: '$480/mo' },
              { id: 'C4-ULTRA', cores: '64 Physical Cores', ram: '256 GB ECC', price: '$920/mo' },
            ].map((t) => {
              const active = selectedTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id as any)}
                  className={`p-5 border-r border-b border-[#111111] text-left transition-colors cursor-pointer ${
                    active ? 'bg-[#111111] text-white' : 'bg-white text-[#111111] hover:bg-[#EAE8E1]'
                  }`}
                >
                  <div className="font-mono text-xs text-[#FF3300] font-bold">{t.id}</div>
                  <div className="font-display text-lg font-bold mt-2">{t.cores}</div>
                  <div className={`text-xs mt-1 ${active ? 'text-neutral-300' : 'text-neutral-600'}`}>{t.ram}</div>
                  <div className="font-mono text-sm font-bold mt-4 tabular-nums">{t.price}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-3">
          <div className="flex justify-between font-mono text-xs font-bold">
            <span>02. NVME RAID VOLUME ALLOCATION</span>
            <span className="text-[#FF3300] tabular-nums">{storageTb} TB ($35/TB)</span>
          </div>
          <div className="grid grid-cols-4 border-t border-l border-[#111111]">
            {[2, 4, 8, 16].map((tb) => (
              <button
                key={tb}
                onClick={() => setStorageTb(tb)}
                className={`p-3 border-r border-b border-[#111111] font-mono text-xs font-bold cursor-pointer ${
                  storageTb === tb ? 'bg-[#111111] text-white' : 'bg-white hover:bg-neutral-100'
                }`}
              >
                {tb} TB NVMe
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 */}
        <div className="pt-2">
          <button
            onClick={() => setRedundancy(!redundancy)}
            className="w-full p-4 border border-[#111111] bg-white flex items-center justify-between font-mono text-xs cursor-pointer hover:bg-neutral-50"
          >
            <span>03. MULTI-ZONE SYNCHRONOUS FAILOVER (+$150/MO)</span>
            <span className={`px-2 py-1 font-bold ${redundancy ? 'bg-[#FF3300] text-white' : 'bg-neutral-200 text-neutral-700'}`}>
              {redundancy ? 'ENABLED' : 'DISABLED'}
            </span>
          </button>
        </div>
      </div>

      {/* Right Summary Column */}
      <div className="col-span-12 lg:col-span-4 p-8 border-r border-b border-[#111111] bg-white flex flex-col justify-between">
        <div className="space-y-6">
          <div className="font-mono text-xs font-bold border-b border-[#111111] pb-3">
            04. BILLING LEDGER SUMMARY
          </div>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-neutral-500">COMPUTE ({selectedTier})</span>
              <span className="tabular-nums font-bold">${tierPrices[selectedTier]}.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">NVME STORAGE ({storageTb} TB)</span>
              <span className="tabular-nums font-bold">${storageTb * 35}.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">SYNC FAILOVER</span>
              <span className="tabular-nums font-bold">${redundancy ? '150.00' : '0.00'}</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#111111] mt-8">
          <div className="flex justify-between items-baseline">
            <span className="font-mono text-xs text-neutral-500">MONTHLY TOTAL (USD)</span>
            <span className="font-mono text-4xl font-bold tabular-nums tracking-tighter">${totalMonthly}.00</span>
          </div>
          <button className="w-full mt-6 py-4 bg-[#FF3300] text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#111111] transition-colors cursor-pointer">
            PROVISION HARDWARE →
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 2. LINEAR DARK CRAFT EXAMPLES (3 Full Pages)
// ============================================================================
export const LinearDarkExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'in-progress' | 'todo' | 'done'>('all');
  const [selectedIssue, setSelectedIssue] = useState<string>('ENG-412');
  const [cmdQuery, setCmdQuery] = useState<string>('');
  const [activeFeature, setActiveFeature] = useState<number>(0);

  if (exampleId === 'landing') {
    const features = [
      {
        title: 'Sub-50ms Local Sync Engine',
        desc: 'Backed by an IndexedDB GraphQL cache so every keystroke and state transition happens instantaneously.',
        shortcut: '⌘ + ⇧ + S',
      },
      {
        title: 'Automated Cycle Triage',
        desc: 'Unfinished issues roll over cleanly into the next sprint with velocity capacity forecasting.',
        shortcut: 'G then C',
      },
      {
        title: 'Git Branch Auto-Linking',
        desc: 'Copy issue branch names with one keystroke; pull requests automatically transition state on merge.',
        shortcut: '⌘ + .',
      },
    ];

    return (
      <div className="bg-[#090A0F] text-slate-100 rounded-2xl border border-white/[0.08] overflow-hidden relative">
        {/* Top Radial Spotlight */}
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(94,106,210,0.22),transparent)] pointer-events-none" />

        {/* Header */}
        <header className="relative flex items-center justify-between px-8 py-4 border-b border-white/[0.07]">
          <div className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#5E6AD2]" />
            <span>Veloce</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-xs text-[#8A8F98]">
            <a href="#method" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Method</a>
            <a href="#changelog" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Changelog</a>
            <a href="#security" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Security</a>
            <a href="#pricing" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Pricing</a>
          </nav>
          <button className="px-3.5 py-1.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6B77E0] text-white text-xs font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-colors cursor-pointer">
            Start Building
          </button>
        </header>

        {/* Hero */}
        <section className="relative px-8 pt-14 pb-12 text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono text-[#8A8F98] mb-4">
            RELEASE 2026.4 · NATIVE KEYBOARD GRAPH ENGINE
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.12]">
            Crafted for high-velocity engineering teams.
          </h1>
          <p className="text-sm text-[#8A8F98] mt-4 max-w-xl mx-auto leading-relaxed">
            Every interaction is tuned to 60fps with instant local-first persistence, crisp 1px specular borders, and complete keyboard navigation.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-white text-slate-950 text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer">
              Create Workspace
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1] hover:border-white/[0.2] text-slate-200 text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer">
              <span>Quick Command</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white/[0.08] rounded text-slate-300">⌘K</kbd>
            </button>
          </div>
        </section>

        {/* Interactive Craft Showcase Cards */}
        <section className="px-8 pb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <button
              key={f.title}
              onClick={() => setActiveFeature(i)}
              className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                activeFeature === i
                  ? 'bg-[#151824] border-[#5E6AD2]/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]'
                  : 'bg-[#12141C] border-white/[0.08] hover:border-white/[0.15]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#8A8F98]">0{i + 1}</span>
                <kbd className="px-1.5 py-0.5 text-[11px] font-mono bg-white/[0.06] border border-white/[0.1] rounded text-slate-300">
                  {f.shortcut}
                </kbd>
              </div>
              <h3 className="text-sm font-semibold text-white">{f.title}</h3>
              <p className="text-xs text-[#8A8F98] mt-2 leading-relaxed">{f.desc}</p>
            </button>
          ))}
        </section>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    const issues = [
      { id: 'ENG-412', title: 'Zero-copy buffer pooling in WebSocket gateway', status: 'in-progress', priority: 'Urgent', assignee: 'Elena R.', estimate: '5 pt' },
      { id: 'ENG-415', title: 'Add keyboard shortcut ⇧+G for cycle burndown drawer', status: 'in-progress', priority: 'High', assignee: 'Marcus T.', estimate: '3 pt' },
      { id: 'ENG-419', title: 'Migrate auth session store to edge KV replicas', status: 'todo', priority: 'High', assignee: 'Lin Z.', estimate: '8 pt' },
      { id: 'ENG-404', title: 'Fix optical contrast on muted table headers in dark mode', status: 'done', priority: 'Medium', assignee: 'Elena R.', estimate: '2 pt' },
      { id: 'ENG-398', title: 'Implement strict schema validation for webhook payloads', status: 'done', priority: 'Medium', assignee: 'Devon K.', estimate: '3 pt' },
    ].filter((item) => statusFilter === 'all' || item.status === statusFilter);

    const currentIssue = issues.find((i) => i.id === selectedIssue) || issues[0];

    return (
      <div className="bg-[#090A0F] text-slate-200 rounded-2xl border border-white/[0.08] overflow-hidden grid grid-cols-12 min-h-[420px]">
        {/* Left Issue List */}
        <div className="col-span-12 lg:col-span-8 border-r border-white/[0.08] flex flex-col justify-between">
          <div>
            {/* Toolbar */}
            <div className="px-4 py-3 bg-[#12141C] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.06]">
                {(['all', 'in-progress', 'todo', 'done'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      statusFilter === st ? 'bg-[#5E6AD2] text-white' : 'text-[#8A8F98] hover:text-white'
                    }`}
                  >
                    {st === 'all' ? 'All Issues' : st === 'in-progress' ? 'In Progress' : st === 'todo' ? 'Backlog' : 'Completed'}
                  </button>
                ))}
              </div>
              <div className="text-xs font-mono text-[#8A8F98] tabular-nums">
                Cycle 42 · {issues.length} visible
              </div>
            </div>

            {/* Compact 38px Issue Rows */}
            <div className="divide-y divide-white/[0.05]">
              {issues.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => setSelectedIssue(issue.id)}
                  className={`w-full px-4 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer ${
                    selectedIssue === issue.id ? 'bg-[#5E6AD2]/15' : 'hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-xs text-[#8A8F98] shrink-0">{issue.id}</span>
                    <span className="text-[13px] text-slate-100 truncate font-medium">{issue.title}</span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0 ml-4 text-xs font-mono text-[#8A8F98]">
                    <span className={issue.priority === 'Urgent' ? 'text-amber-400' : 'text-[#8A8F98]'}>{issue.priority}</span>
                    <span className="tabular-nums">{issue.estimate}</span>
                    <span className="text-slate-300 font-sans">{issue.assignee}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 py-2.5 bg-[#12141C]/60 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#8A8F98]">
            <span>Navigate with ↑↓ arrows</span>
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-white/[0.06] border border-white/[0.1] rounded font-mono">C</kbd>
              <span>New Issue</span>
            </div>
          </div>
        </div>

        {/* Right Inspector Panel */}
        <div className="col-span-12 lg:col-span-4 bg-[#12141C] p-5 flex flex-col justify-between">
          {currentIssue && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs text-[#5E6AD2] font-semibold">{currentIssue.id}</span>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white/[0.06] border border-white/[0.1] rounded text-[#8A8F98]">
                  ⌘ + Enter
                </kbd>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white leading-snug">{currentIssue.title}</h3>
                <p className="text-xs text-[#8A8F98] mt-2 leading-relaxed">
                  Verified telemetry indicates p99 allocation spikes during burst reconnects. Pool pre-allocated 64KB ring buffers.
                </p>
              </div>
              <div className="space-y-2.5 pt-3 border-t border-white/[0.08] text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8A8F98]">Status</span>
                  <span className="text-slate-200 font-medium capitalize">{currentIssue.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8F98]">Priority</span>
                  <span className="text-slate-200 font-medium">{currentIssue.priority}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8F98]">Assignee</span>
                  <span className="text-slate-200 font-medium">{currentIssue.assignee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8F98]">Estimate</span>
                  <span className="font-mono text-slate-200">{currentIssue.estimate}</span>
                </div>
              </div>
            </div>
          )}

          <button className="w-full mt-6 py-2 rounded-lg bg-[#5E6AD2] hover:bg-[#6A76E0] text-white text-xs font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-colors cursor-pointer">
            Copy Git Branch Name
          </button>
        </div>
      </div>
    );
  }

  // Interactive Command Palette & Workspace Preferences
  const commands = [
    { label: 'Assign current issue to me', shortcut: 'I', category: 'Issue Actions' },
    { label: 'Change issue status to In Progress', shortcut: 'S → 2', category: 'Issue Actions' },
    { label: 'Switch active cycle to Sprint 43', shortcut: 'G → C', category: 'Navigation' },
    { label: 'Toggle high-contrast dark borders', shortcut: '⌘ + ⇧ + B', category: 'Appearance' },
    { label: 'Export cycle metrics as CSV', shortcut: '⌘ + E', category: 'Data' },
  ].filter((c) => c.label.toLowerCase().includes(cmdQuery.toLowerCase()));

  return (
    <div className="bg-[#090A0F] p-6 md:p-10 rounded-2xl border border-white/[0.08]">
      <div className="max-w-xl mx-auto bg-[#12141C] border border-white/[0.12] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.1)] overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
          <Search className="w-4 h-4 text-[#8A8F98]" />
          <input
            type="text"
            value={cmdQuery}
            onChange={(e) => setCmdQuery(e.target.value)}
            placeholder="Type a command or search actions... (e.g. 'cycle', 'assign')"
            className="w-full bg-transparent text-sm text-white placeholder:text-[#8A8F98] focus:outline-none"
          />
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white/[0.06] border border-white/[0.1] rounded text-[#8A8F98]">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="p-2 space-y-1">
          {commands.map((cmd, idx) => (
            <button
              key={cmd.label}
              onClick={() => setCmdQuery(cmd.label)}
              className={`w-full px-3 py-2.5 rounded-lg flex items-center justify-between text-xs transition-colors cursor-pointer ${
                idx === 0 ? 'bg-[#5E6AD2]/20 text-white border border-[#5E6AD2]/40' : 'text-slate-300 hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Command className="w-3.5 h-3.5 text-[#5E6AD2]" />
                <span>{cmd.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-[#8A8F98]">{cmd.category}</span>
                <kbd className="px-1.5 py-0.5 text-[11px] font-mono bg-white/[0.06] border border-white/[0.1] rounded text-slate-300">
                  {cmd.shortcut}
                </kbd>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. BENTO MODULAR GRID EXAMPLES (3 Full Pages)
// ============================================================================
export const BentoModularExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [chipMode, setChipMode] = useState<'eco' | 'pro' | 'max'>('pro');
  const [studioLight, setStudioLight] = useState<number>(78);
  const [selectedRam, setSelectedRam] = useState<'36GB' | '64GB' | '128GB'>('64GB');
  const [selectedSsd, setSelectedSsd] = useState<'1TB' | '2TB' | '4TB'>('2TB');

  if (exampleId === 'landing') {
    return (
      <div className="bg-[#F5F5F7] text-[#1D1D1F] p-6 rounded-[32px] space-y-4">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-4 py-2">
          <span className="font-display font-bold text-base tracking-tight">StudioBook Pro</span>
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-[#E8E8ED] text-xs font-medium">
            {(['eco', 'pro', 'max'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setChipMode(m)}
                className={`px-3 py-1 rounded-xl capitalize transition-all cursor-pointer ${
                  chipMode === m ? 'bg-white text-[#1D1D1F] shadow-2xs' : 'text-[#86868B] hover:text-[#1D1D1F]'
                }`}
              >
                M4 {m}
              </button>
            ))}
          </div>
          <button className="px-4 py-1.5 rounded-full bg-[#0071E3] text-white text-xs font-medium hover:bg-[#0077ED] transition-colors cursor-pointer">
            Pre-order
          </button>
        </header>

        {/* 4-Column Asymmetric Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* 2x1 Hero Cell */}
          <div className="md:col-span-2 bg-white rounded-3xl p-7 border border-black/[0.06] shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0071E3]">UNIFIED SILICON ARCHITECTURE</span>
              <Cpu className="w-4 h-4 text-[#86868B]" />
            </div>
            <div className="mt-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                {chipMode === 'max' ? '16-Core CPU · 40-Core GPU' : chipMode === 'pro' ? '14-Core CPU · 20-Core GPU' : '10-Core Efficiency Engine'}
              </h2>
              <p className="text-xs text-[#86868B] mt-2 leading-relaxed">
                Hardware-accelerated ray tracing and 38 trillion operations per second on the Neural Engine.
              </p>
            </div>
          </div>

          {/* 1x1 High-Contrast Dark Anchor Cell */}
          <div className="bg-[#1D1D1F] text-white rounded-3xl p-7 flex flex-col justify-between min-h-[220px]">
            <span className="text-xs text-[#86868B] font-medium">MEMORY BANDWIDTH</span>
            <div>
              <div className="font-display text-4xl font-semibold tabular-nums tracking-tight text-white">
                {chipMode === 'max' ? '800' : chipMode === 'pro' ? '400' : '200'}
                <span className="text-lg text-[#86868B] ml-1">GB/s</span>
              </div>
              <p className="text-xs text-[#86868B] mt-2">Zero-copy shared pool between CPU and GPU</p>
            </div>
          </div>

          {/* 1x1 Battery Cell */}
          <div className="bg-white rounded-3xl p-7 border border-black/[0.06] flex flex-col justify-between min-h-[220px]">
            <span className="text-xs text-[#86868B] font-medium">ALL-DAY ENDURANCE</span>
            <div>
              <div className="font-display text-4xl font-semibold tabular-nums text-emerald-600">22 hrs</div>
              <p className="text-xs text-[#86868B] mt-2">Continuous 4K ProRes playback on a single charge</p>
            </div>
          </div>

          {/* Row 2: 1x1 + 3x1 */}
          <div className="bg-white rounded-3xl p-7 border border-black/[0.06] flex flex-col justify-between">
            <span className="text-xs text-[#86868B] font-medium">ACOUSTIC THERMAL</span>
            <div className="mt-4">
              <div className="font-display text-2xl font-semibold text-[#1D1D1F]">0 dBA Idle</div>
              <p className="text-xs text-[#86868B] mt-1">Fans remain completely off during everyday compilation.</p>
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-3xl p-7 border border-black/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold text-[#86868B]">LIQUID XDR DISPLAY</span>
              <h3 className="font-display text-2xl font-semibold text-[#1D1D1F] mt-1">
                1,600 nits peak HDR brightness. Nano-texture glass option.
              </h3>
            </div>
            <div className="flex gap-3 shrink-0">
              <div className="px-4 py-3 rounded-2xl bg-[#F5F5F7] text-center">
                <div className="font-mono text-lg font-bold text-[#1D1D1F] tabular-nums">120Hz</div>
                <div className="text-[11px] text-[#86868B]">ProMotion</div>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-[#F5F5F7] text-center">
                <div className="font-mono text-lg font-bold text-[#1D1D1F] tabular-nums">1,000,000:1</div>
                <div className="text-[11px] text-[#86868B]">Contrast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className="bg-[#F5F5F7] text-[#1D1D1F] p-6 rounded-[32px] grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Climate & Lighting */}
        <div className="md:col-span-2 bg-white rounded-3xl p-6 border border-black/[0.06] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-[#86868B] font-medium">STUDIO ENVIRONMENT</span>
              <h3 className="font-display text-xl font-semibold mt-0.5">Key Light & Ambient Array</h3>
            </div>
            <Sun className="w-5 h-5 text-amber-500" />
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[#86868B]">Luminance Output (5600K Daylight)</span>
              <span className="font-mono tabular-nums text-[#1D1D1F]">{studioLight}%</span>
            </div>
            <input
              type="range"
              min={10}
              max={100}
              value={studioLight}
              onChange={(e) => setStudioLight(Number(e.target.value))}
              className="w-full accent-[#0071E3] cursor-pointer"
            />
          </div>
        </div>

        {/* Card 2: Network */}
        <div className="bg-[#1D1D1F] text-white rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#86868B]">10G FIBER UPLINK</span>
            <Wifi className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-4">
            <div className="font-display text-3xl font-semibold tabular-nums">8.42 Gbps</div>
            <div className="text-xs text-[#86868B] mt-1">Symmetric low-jitter studio trunk</div>
          </div>
        </div>

        {/* Card 3, 4, 5 */}
        {[
          { label: 'NAS RAID STORAGE', val: '42.8 TB Free', sub: 'of 64.0 TB NVMe Pool' },
          { label: 'RENDER FARM QUEUE', val: '3 Frames Left', sub: 'Estimated 04m 12s remaining' },
          { label: 'POWER CONSUMPTION', val: '310 Watts', sub: 'Solar battery supplying 100%' },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-3xl p-6 border border-black/[0.06] flex flex-col justify-between">
            <span className="text-xs text-[#86868B] font-medium">{card.label}</span>
            <div className="mt-6">
              <div className="font-display text-2xl font-semibold tabular-nums">{card.val}</div>
              <div className="text-xs text-[#86868B] mt-1">{card.sub}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Interactive Bento Hardware Configurator
  const ramPrice = { '36GB': 0, '64GB': 400, '128GB': 1000 };
  const ssdPrice = { '1TB': 0, '2TB': 400, '4TB': 1000 };
  const total = 2499 + ramPrice[selectedRam] + ssdPrice[selectedSsd];

  return (
    <div className="bg-[#F5F5F7] text-[#1D1D1F] p-6 rounded-[32px] grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-8 space-y-4">
        <div className="bg-white rounded-3xl p-6 border border-black/[0.06]">
          <h3 className="font-display text-base font-semibold">1. Select Unified Memory</h3>
          <p className="text-xs text-[#86868B] mt-1">More unified memory allows larger 3D scenes and local LLM weights in VRAM.</p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {(['36GB', '64GB', '128GB'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRam(r)}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                  selectedRam === r ? 'border-[#0071E3] bg-[#0071E3]/[0.04]' : 'border-black/[0.08] hover:border-black/20'
                }`}
              >
                <div className="font-display text-lg font-semibold">{r}</div>
                <div className="text-xs text-[#86868B] mt-1 tabular-nums">
                  {ramPrice[r] === 0 ? 'Included' : `+$${ramPrice[r]}`}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-black/[0.06]">
          <h3 className="font-display text-base font-semibold">2. Select PCIe Gen5 SSD Storage</h3>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {(['1TB', '2TB', '4TB'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSsd(s)}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                  selectedSsd === s ? 'border-[#0071E3] bg-[#0071E3]/[0.04]' : 'border-black/[0.08] hover:border-black/20'
                }`}
              >
                <div className="font-display text-lg font-semibold">{s} SSD</div>
                <div className="text-xs text-[#86868B] mt-1 tabular-nums">
                  {ssdPrice[s] === 0 ? 'Included' : `+$${ssdPrice[s]}`}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Bento Box */}
      <div className="md:col-span-4 bg-[#1D1D1F] text-white rounded-3xl p-7 flex flex-col justify-between">
        <div>
          <span className="text-xs text-[#86868B]">YOUR CONFIGURATION</span>
          <h3 className="font-display text-2xl font-semibold mt-2">StudioBook 16 M4 Max</h3>
          <div className="mt-6 space-y-2.5 text-xs text-neutral-300 border-t border-white/10 pt-4">
            <div className="flex justify-between">
              <span className="text-[#86868B]">Unified Memory</span>
              <span className="font-medium text-white">{selectedRam}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#86868B]">Flash Storage</span>
              <span className="font-medium text-white">{selectedSsd} NVMe</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#86868B]">Display</span>
              <span className="font-medium text-white">16.2" Liquid XDR</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 mt-6">
          <div className="font-display text-4xl font-semibold tabular-nums">${total.toLocaleString()}</div>
          <button className="w-full mt-4 py-3 rounded-2xl bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold transition-colors cursor-pointer">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 13. SHADCN / ZINC MINIMALIST UI EXAMPLES (3 Full Pages)
// ============================================================================
export const ShadcnZincExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'cli'>('preview');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Paid' | 'Pending'>('all');
  const [tokenName, setTokenName] = useState<string>('prod-vercel-edge-agent');
  const [readWriteScope, setReadWriteScope] = useState<boolean>(true);
  const [copiedToken, setCopiedToken] = useState<boolean>(false);

  if (exampleId === 'landing') {
    return (
      <div className="bg-white text-zinc-950 p-6 md:p-8 rounded-xl border border-zinc-200 shadow-2xs space-y-8">
        <header className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-6">
            <span className="font-sans font-bold text-sm tracking-tight text-zinc-950">
              acme/ui
            </span>
            <nav className="hidden sm:flex gap-5 text-xs font-medium text-zinc-500">
              <a href="#docs" onClick={(e) => e.preventDefault()} className="text-zinc-950">Docs</a>
              <a href="#components" onClick={(e) => e.preventDefault()} className="hover:text-zinc-950">Components</a>
              <a href="#blocks" onClick={(e) => e.preventDefault()} className="hover:text-zinc-950">Blocks</a>
              <a href="#themes" onClick={(e) => e.preventDefault()} className="hover:text-zinc-950">Themes</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-medium text-zinc-700 transition-colors cursor-pointer">
              GitHub 84.2k
            </button>
            <button className="px-3.5 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-900/90 text-zinc-50 text-xs font-medium shadow-2xs transition-colors cursor-pointer">
              npx shadcn@latest init
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 border-b border-zinc-200 pb-1">
              <span>New · Tailwind v4 & React 19 Registry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              Build your component library with crisp Zinc primitives.
            </h1>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Accessible, copy-and-paste components styled with 1px <code className="font-mono text-xs text-zinc-900">border-zinc-200</code> hairlines, achromatic contrast, and predictable <code className="font-mono text-xs text-zinc-900">rounded-md</code> geometry.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <button className="px-4 py-2 rounded-md bg-zinc-900 hover:bg-zinc-900/90 text-zinc-50 text-xs font-medium shadow-2xs transition-colors cursor-pointer">
                Get Started
              </button>
              <button className="px-4 py-2 rounded-md border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-medium transition-colors cursor-pointer">
                Browse 60+ Primitives
              </button>
            </div>
          </div>

          {/* Interactive Tabs Slot Card */}
          <div className="lg:col-span-6 rounded-xl border border-zinc-200 bg-white p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex h-8 items-center rounded-lg bg-zinc-100 p-1 text-zinc-500 text-xs">
                {(['preview', 'code', 'cli'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-md capitalize font-medium transition-all cursor-pointer ${
                      activeTab === tab ? 'bg-white text-zinc-950 shadow-2xs' : 'hover:text-zinc-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <span className="font-mono text-[11px] text-zinc-400">components/ui/card.tsx</span>
            </div>

            {activeTab === 'preview' && (
              <div className="rounded-lg border border-zinc-200 p-4 space-y-3 bg-zinc-50/50">
                <div>
                  <div className="text-sm font-semibold text-zinc-950">Deploy Inference Endpoint</div>
                  <div className="text-xs text-zinc-500">Provision a zero-cold-start vLLM worker in one click.</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-md border border-zinc-200 bg-white p-2.5">
                    <div className="text-zinc-500">Region</div>
                    <div className="font-medium text-zinc-950 mt-0.5">iad1 (us-east)</div>
                  </div>
                  <div className="rounded-md border border-zinc-200 bg-white p-2.5">
                    <div className="text-zinc-500">Instance</div>
                    <div className="font-medium text-zinc-950 mt-0.5">NVIDIA H100 · 80GB</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <pre className="rounded-lg bg-zinc-950 text-zinc-100 p-4 font-mono text-xs overflow-x-auto">
{`<Card className="border-zinc-200 shadow-2xs">
  <CardHeader>
    <CardTitle>Deploy Inference</CardTitle>
  </CardHeader>
</Card>`}
              </pre>
            )}

            {activeTab === 'cli' && (
              <div className="rounded-lg bg-zinc-950 text-zinc-100 p-4 font-mono text-xs">
                $ pnpm dlx shadcn@latest add card button tabs
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    const invoices = [
      { id: 'INV-2091', customer: 'Linear Labs Inc.', status: 'Paid', method: 'ACH Direct', amount: '$4,200.00' },
      { id: 'INV-2092', customer: 'Raycast Technologies', status: 'Paid', method: 'Visa •••• 4242', amount: '$1,850.00' },
      { id: 'INV-2093', customer: 'Supabase Cloud', status: 'Pending', method: 'Wire Transfer', amount: '$6,400.00' },
    ].filter((row) => statusFilter === 'all' || row.status === statusFilter);

    return (
      <div className="bg-white text-zinc-950 p-6 rounded-xl border border-zinc-200 shadow-2xs space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Net Revenue', val: '$45,231.89', delta: '+20.1% from last month' },
            { label: 'Active Subscriptions', val: '+2,350', delta: '+180.1% from last month' },
            { label: 'API Requests (24h)', val: '12,234,890', delta: '99.99% success rate' },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-2xs">
              <div className="text-xs font-medium text-zinc-500">{kpi.label}</div>
              <div className="text-2xl font-bold text-zinc-950 tabular-nums mt-1.5">{kpi.val}</div>
              <div className="text-[11px] text-zinc-500 mt-1">{kpi.delta}</div>
            </div>
          ))}
        </div>

        {/* Faceted Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {(['all', 'Paid', 'Pending'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-md border border-dashed text-xs font-medium transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
                    : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                + Status: {st}
              </button>
            ))}
          </div>
          <span className="text-xs text-zinc-500 font-mono tabular-nums">{invoices.length} row(s)</span>
        </div>

        {/* Crisp 1px Zinc Data Table */}
        <div className="rounded-lg border border-zinc-200 overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-medium">
              <tr>
                <th className="py-2.5 px-4">Invoice</th>
                <th className="py-2.5 px-4">Customer</th>
                <th className="py-2.5 px-4">Status</th>
                <th className="py-2.5 px-4">Method</th>
                <th className="py-2.5 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-zinc-50/80 transition-colors">
                  <td className="py-3 px-4 font-mono font-medium text-zinc-900">{inv.id}</td>
                  <td className="py-3 px-4 text-zinc-900 font-medium">{inv.customer}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 font-medium text-zinc-700">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          inv.status === 'Paid' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                      />
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-500">{inv.method}</td>
                  <td className="py-3 px-4 text-right font-mono font-semibold tabular-nums text-zinc-950">
                    {inv.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Interactive API Token & Danger Zone Settings Form
  return (
    <div className="bg-white text-zinc-950 p-6 rounded-xl border border-zinc-200 shadow-2xs space-y-6">
      <div className="border-b border-zinc-200 pb-4">
        <h3 className="text-base font-semibold text-zinc-950">API Bearer Tokens & Scopes</h3>
        <p className="text-xs text-zinc-500 mt-1">
          Tokens authenticate requests to the Edge Runtime REST API.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-900">Token Identifier</label>
            <input
              type="text"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-1"
            />
          </div>

          <div className="rounded-lg border border-zinc-200 p-3.5 flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-zinc-950">Read & Write Deployment Scope</div>
              <div className="text-[11px] text-zinc-500">Allow programmatic rollbacks and alias updates</div>
            </div>
            <button
              onClick={() => setReadWriteScope(!readWriteScope)}
              className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                readWriteScope ? 'bg-zinc-900' : 'bg-zinc-200'
              }`}
            >
              <span
                className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                  readWriteScope ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <div className="text-xs font-medium text-zinc-700">Generated Secret Key</div>
            <div className="rounded-md border border-zinc-200 bg-white px-3 py-2 font-mono text-xs text-zinc-900 truncate">
              sk_live_zinc_{tokenName.replace(/[^a-z0-9]/gi, '_')}98f2a
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setCopiedToken(true)}
              className="px-3.5 py-1.5 rounded-md bg-zinc-900 text-zinc-50 text-xs font-medium hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              {copiedToken ? 'Copied to Clipboard' : 'Copy Secret Key'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 14. MICROSOFT FLUENT DESIGN (ACRYLIC & MICA) EXAMPLES (3 Full Pages)
// ============================================================================
export const FluentAcrylicExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [fluentApp, setFluentApp] = useState<'Copilot' | 'Loop' | 'OneDrive'>('Copilot');
  const [activeNav, setActiveNav] = useState<'Home' | 'Shared' | 'Cloud' | 'Security'>('Cloud');
  const [micaEnabled, setMicaEnabled] = useState<boolean>(true);
  const [snapLayouts, setSnapLayouts] = useState<boolean>(true);

  if (exampleId === 'landing') {
    return (
      <div className="bg-gradient-to-br from-[#E6EFFA] via-[#F2F6FC] to-[#E2ECFA] p-6 md:p-8 rounded-2xl border border-white/80 space-y-6 text-[#1B1A19]">
        {/* Acrylic Top Navigation Bar */}
        <header className="bg-white/75 backdrop-blur-xl border border-white/90 rounded-xl px-5 py-3 flex flex-wrap items-center justify-between gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <span className="bg-[#F25022]" />
              <span className="bg-[#7FBA00]" />
              <span className="bg-[#00A4EF]" />
              <span className="bg-[#FFB900]" />
            </div>
            <span className="font-sans font-semibold text-sm">Fluent 2 Cloud Workspace</span>
          </div>
          <div className="flex gap-1.5 bg-slate-200/60 p-1 rounded-lg text-xs">
            {(['Copilot', 'Loop', 'OneDrive'] as const).map((app) => (
              <button
                key={app}
                onClick={() => setFluentApp(app)}
                className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${
                  fluentApp === app ? 'bg-white text-[#0067C0] shadow-2xs font-semibold' : 'text-[#605E5C]'
                }`}
              >
                {app}
              </button>
            ))}
          </div>
        </header>

        {/* Translucent Acrylic Hero Surface */}
        <div className="bg-white/75 backdrop-blur-xl border border-white/90 rounded-2xl p-7 shadow-[0_8px_28px_rgba(0,103,192,0.08)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-semibold text-[#0067C0]">
              MICA & ACRYLIC MATERIAL SYSTEM · {fluentApp.toUpperCase()} ENGINE
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#1B1A19] leading-tight">
              Light, depth, and translucent Acrylic surfaces built for Windows 11 & Web.
            </h1>
            <p className="text-xs text-[#605E5C] leading-relaxed">
              Combines wallpaper-tinted Mica base canvases with frosted Acrylic overlays, subtle white specular borders, and WinUI bottom-accent inputs.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-md bg-[#0067C0] hover:bg-[#005BA1] text-white text-xs font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_4px_rgba(0,0,0,0.12)] transition-colors cursor-pointer">
                Launch {fluentApp} Studio
              </button>
              <button className="px-4 py-2 rounded-md bg-white/90 hover:bg-white border border-black/[0.08] text-xs font-semibold text-[#1B1A19] shadow-2xs transition-colors cursor-pointer">
                Explore Fluent Tokens
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/90 border border-white rounded-xl p-5 shadow-xs space-y-3">
            <div className="text-xs font-semibold text-[#1B1A19]">Quick Command Input (WinUI TextBox)</div>
            <input
              type="text"
               readOnly
              value={`Summarize Q4 architecture notes in ${fluentApp}...`}
              className="w-full px-3 py-2 rounded-md bg-white border border-slate-300/80 border-b-2 border-b-[#0067C0] text-xs text-[#1B1A19]"
            />
            <div className="flex justify-between text-[11px] text-[#605E5C] pt-1">
              <span>Enterprise Graph Grounding</span>
              <span className="text-[#0067C0] font-semibold">Active</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className="bg-gradient-to-br from-[#E6EFFA] via-[#F3F6FC] to-[#E2ECFA] p-5 rounded-2xl border border-white/80 grid grid-cols-1 md:grid-cols-12 gap-5 text-[#1B1A19]">
        {/* Left Acrylic Navigation Rail with Left Vertical Pill Indicator */}
        <aside className="md:col-span-4 lg:col-span-3 bg-white/70 backdrop-blur-xl border border-white/80 rounded-xl p-3 space-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <div className="px-3 py-2 text-xs font-semibold text-[#605E5C]">OneDrive Enterprise</div>
          {(['Home', 'Shared', 'Cloud', 'Security'] as const).map((nav) => {
            const active = activeNav === nav;
            return (
              <button
                key={nav}
                onClick={() => setActiveNav(nav)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                  active ? 'bg-white/95 font-semibold text-[#1B1A19] shadow-2xs' : 'text-[#605E5C] hover:bg-white/50'
                }`}
              >
                <span
                  className={`w-1 h-4 rounded-full transition-colors ${
                    active ? 'bg-[#0067C0]' : 'bg-transparent'
                  }`}
                />
                <span>{nav} Workspace</span>
              </button>
            );
          })}
        </aside>

        {/* Right Content Area */}
        <div className="md:col-span-8 lg:col-span-9 bg-white/85 backdrop-blur-md border border-white/90 rounded-xl p-5 space-y-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">{activeNav} Workspace Files</h3>
            <span className="text-xs text-[#0067C0] font-semibold">1.24 TB of 2.0 TB Used</span>
          </div>

          <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
            <div className="h-full w-3/5 bg-[#0067C0] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {[
              { name: 'Fluent_2_Design_Tokens.loop', meta: 'Edited 14 mins ago · Shared' },
              { name: 'Azure_Kubernetes_Topology.vsdx', meta: 'Edited 2 hrs ago · Verified' },
            ].map((doc) => (
              <div
                key={doc.name}
                className="p-3.5 rounded-lg bg-white border border-black/[0.06] hover:border-[#0067C0]/40 transition-colors"
              >
                <div className="text-xs font-semibold text-[#1B1A19]">{doc.name}</div>
                <div className="text-[11px] text-[#605E5C] mt-1">{doc.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Interactive Windows 11 Settings Expander Cards
  return (
    <div
      className={`p-6 rounded-2xl border border-white/80 space-y-3 transition-colors ${
        micaEnabled
          ? 'bg-gradient-to-br from-[#E3EEFA] via-[#F1F5FC] to-[#DDE9F8]'
          : 'bg-[#F3F3F3]'
      } text-[#1B1A19]`}
    >
      <div className="mb-4">
        <div className="text-xs font-semibold text-[#0067C0]">WINDOWS 11 SYSTEM &gt; PERSONALIZATION</div>
        <h3 className="text-lg font-semibold mt-0.5">Mica & Acrylic Material Settings</h3>
      </div>

      {[
        {
          title: 'Mica Wallpaper-Tinted Backdrop',
          desc: 'Subtly tint the base application canvas with desktop wallpaper colors',
          state: micaEnabled,
          toggle: () => setMicaEnabled(!micaEnabled),
        },
        {
          title: 'Snap Layouts & Reveal Hover Highlight',
          desc: 'Show Acrylic window snap flyouts when hovering over maximize button',
          state: snapLayouts,
          toggle: () => setSnapLayouts(!snapLayouts),
        },
      ].map((row) => (
        <div
          key={row.title}
          className="bg-white/85 backdrop-blur-xl border border-black/[0.06] rounded-xl px-5 py-4 flex items-center justify-between shadow-2xs"
        >
          <div>
            <div className="text-xs font-semibold text-[#1B1A19]">{row.title}</div>
            <div className="text-[11px] text-[#605E5C] mt-0.5">{row.desc}</div>
          </div>
          <button
            onClick={row.toggle}
            className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
              row.state ? 'bg-[#0067C0]' : 'bg-slate-300'
            }`}
          >
            <span
              className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                row.state ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

