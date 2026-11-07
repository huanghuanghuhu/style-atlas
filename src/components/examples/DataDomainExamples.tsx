import React, { useState } from 'react';
import {
  Plus,
  Check,
  Mail,
  Calendar,
  Folder,
  Bell,
  Power,
  Volume2,
  Sun,
  Wind,
  Flame,
  Trophy,
  Sparkles,
  Users,
  Shield,
  FileText,
} from 'lucide-react';

interface ExampleProps {
  exampleId: 'landing' | 'dashboard' | 'interactive';
}

// ============================================================================
// 1. FLAT DESIGN 2.0 EXAMPLES (3 Full Pages)
// ============================================================================
export const FlatDesignExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [ticketFilter, setTicketFilter] = useState<'ALL' | 'OPEN' | 'RESOLVED'>('ALL');
  const [billingCycle, setBillingCycle] = useState<'MONTHLY' | 'ANNUAL'>('ANNUAL');
  const [role, setRole] = useState<'ADMIN' | 'EDITOR' | 'VIEWER'>('EDITOR');
  const [savedNotice, setSavedNotice] = useState<boolean>(false);

  if (exampleId === 'landing') {
    return (
      <div className="bg-slate-50 text-slate-900 p-6 @md:p-8 border border-slate-200 rounded-xl space-y-8">
        {/* Flat Navigation */}
        <header className="flex items-center justify-between bg-white px-5 py-3.5 rounded-lg border border-slate-200">
          <span className="font-display font-bold text-base text-slate-900">DocuFlat</span>
          <nav className="hidden @sm:flex gap-6 text-xs font-medium text-slate-600">
            <a href="#wiki" onClick={(e) => e.preventDefault()} className="hover:text-blue-600">Knowledge Base</a>
            <a href="#tasks" onClick={(e) => e.preventDefault()} className="hover:text-blue-600">Sprint Boards</a>
            <a href="#api" onClick={(e) => e.preventDefault()} className="hover:text-blue-600">REST API</a>
          </nav>
          <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors cursor-pointer">
            Start Free Trial
          </button>
        </header>

        {/* Flat Hero */}
        <div className="bg-white p-8 rounded-lg border border-slate-200 grid grid-cols-1 @lg:grid-cols-12 gap-8 items-center">
          <div className="@lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              FLAT 2.0 ARCHITECTURE · ZERO VISUAL BLOAT
            </div>
            <h1 className="font-display text-3xl @md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Clear hierarchy through solid color blocks and clean geometry.
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              No heavy gradients, no skeuomorphic textures, no distracting drop shadows. Built for rapid reading and instant comprehension across every device.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer">
                Create Team Workspace
              </button>
              <button className="px-5 py-2.5 rounded-md bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold transition-colors cursor-pointer">
                Read Design Specs
              </button>
            </div>
          </div>

          {/* Solid Color Feature Blocks */}
          <div className="@lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-lg bg-blue-600 text-white">
              <FileText className="w-5 h-5 mb-3" />
              <div className="font-bold text-sm">Instant Docs</div>
              <div className="text-xs text-blue-100 mt-1">Markdown-native pages</div>
            </div>
            <div className="p-4 rounded-lg bg-emerald-600 text-white">
              <Shield className="w-5 h-5 mb-3" />
              <div className="font-bold text-sm">SSO Security</div>
              <div className="text-xs text-emerald-100 mt-1">SAML 2.0 & SCIM</div>
            </div>
            <div className="col-span-2 p-4 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm">99.98% Uptime SLA</div>
                <div className="text-xs text-slate-500">Verified across 12 global regions</div>
              </div>
              <span className="font-mono text-lg font-bold text-blue-600 tabular-nums">18ms</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    const tickets = [
      { id: 'TKT-104', subject: 'Update OAuth callback URI whitelist', owner: 'Sarah Chen', status: 'OPEN' },
      { id: 'TKT-103', subject: 'Export Q3 billing invoice CSV', owner: 'David Ross', status: 'RESOLVED' },
      { id: 'TKT-102', subject: 'Configure custom domain DNS CNAME', owner: 'Alex Kim', status: 'OPEN' },
    ].filter((t) => ticketFilter === 'ALL' || t.status === ticketFilter);

    return (
      <div className="bg-slate-50 text-slate-900 p-6 border border-slate-200 rounded-xl space-y-5">
        <div className="grid grid-cols-1 @md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg border border-slate-200">
            <div className="text-xs text-slate-500 font-medium">Total Active Users</div>
            <div className="text-3xl font-bold text-slate-900 mt-1 tabular-nums">12,480</div>
          </div>
          <div className="bg-white p-5 rounded-lg border border-slate-200">
            <div className="text-xs text-slate-500 font-medium">Open Support Tickets</div>
            <div className="text-3xl font-bold text-blue-600 mt-1 tabular-nums">14</div>
          </div>
          <div className="bg-white p-5 rounded-lg border border-slate-200">
            <div className="text-xs text-slate-500 font-medium">Resolution Rate</div>
            <div className="text-3xl font-bold text-emerald-600 mt-1 tabular-nums">98.4%</div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Support Queue</h3>
            <div className="flex gap-1 bg-slate-100 p-1 rounded-md">
              {(['ALL', 'OPEN', 'RESOLVED'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setTicketFilter(st)}
                  className={`px-3 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                    ticketFilter === st ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
          <div className="divide-y divide-slate-200 text-xs">
            {tickets.map((t) => (
              <div key={t.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-slate-500 font-medium">{t.id}</span>
                  <span className="font-semibold text-slate-900">{t.subject}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-slate-500">{t.owner}</span>
                  <span className={`font-semibold ${t.status === 'OPEN' ? 'text-blue-600' : 'text-emerald-600'}`}>
                    {t.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Interactive Flat Settings & Role Form
  return (
    <div className="bg-slate-50 p-6 border border-slate-200 rounded-xl">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg border border-slate-200 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Invite Team Member</h3>
            <p className="text-xs text-slate-500">Clean Flat 2.0 form controls with 1px solid borders</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-md text-xs font-medium">
            {(['MONTHLY', 'ANNUAL'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBillingCycle(b)}
                className={`px-2.5 py-1 rounded cursor-pointer ${
                  billingCycle === b ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-semibold text-slate-700">Select Permission Role</label>
          <div className="grid grid-cols-3 gap-3">
            {(['ADMIN', 'EDITOR', 'VIEWER'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`p-3 rounded-md border text-left text-xs cursor-pointer transition-colors ${
                  role === r
                    ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-bold'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div>{r}</div>
                <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                  {r === 'ADMIN' ? 'Full billing access' : r === 'EDITOR' ? 'Can edit pages' : 'Read-only'}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
          <span className="text-xs text-slate-500">
            Seat Price: <strong className="text-slate-900">${billingCycle === 'ANNUAL' ? '12' : '15'}/mo</strong>
          </span>
          <button
            onClick={() => setSavedNotice(true)}
            className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            {savedNotice ? '✓ Invitation Sent' : 'Send Invite'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 2. MATERIAL DESIGN 3 (MATERIAL YOU) EXAMPLES (3 Full Pages)
// ============================================================================
export const MaterialDesignExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [seedTheme, setSeedTheme] = useState<'purple' | 'emerald' | 'ocean'>('purple');
  const [activeNav, setActiveNav] = useState<'inbox' | 'starred' | 'scheduled'>('inbox');
  const [projectTitle, setProjectTitle] = useState<string>('Q4 Android Design Tokens');
  const [notifEnabled, setNotifEnabled] = useState<boolean>(true);

  const palettes = {
    purple: {
      surface: 'bg-[#FEF7FF]',
      container: 'bg-[#F3EDF7]',
      primary: 'bg-[#6750A4] hover:bg-[#564090]',
      primaryText: 'text-[#6750A4]',
      fab: 'bg-[#EADDFF] hover:bg-[#D0BCFF] text-[#21005D]',
      pillActive: 'bg-[#E8DEF8] text-[#1D192B]',
    },
    emerald: {
      surface: 'bg-[#F5FBF5]',
      container: 'bg-[#E9F2EA]',
      primary: 'bg-[#146C2E] hover:bg-[#0F5223]',
      primaryText: 'text-[#146C2E]',
      fab: 'bg-[#C4EED0] hover:bg-[#A8E5B8] text-[#072711]',
      pillActive: 'bg-[#C4EED0] text-[#072711]',
    },
    ocean: {
      surface: 'bg-[#F8FAFF]',
      container: 'bg-[#EDF2FC]',
      primary: 'bg-[#0B57D0] hover:bg-[#0842A0]',
      primaryText: 'text-[#0B57D0]',
      fab: 'bg-[#D3E3FD] hover:bg-[#B8D1FC] text-[#041E49]',
      pillActive: 'bg-[#D3E3FD] text-[#041E49]',
    },
  };

  const p = palettes[seedTheme];

  if (exampleId === 'landing') {
    return (
      <div className={`${p.surface} text-[#1D1B20] p-6 @md:p-8 rounded-[32px] space-y-6 transition-colors`}>
        {/* M3 Top Bar with Dynamic Seed Color Picker */}
        <header className="flex flex-wrap items-center justify-between gap-4">
          <span className="font-display font-medium text-lg tracking-tight">Material You Studio</span>
          <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full shadow-2xs text-xs">
            <span className="text-[#49454F] mr-1">Dynamic Seed Color:</span>
            {(['purple', 'emerald', 'ocean'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSeedTheme(t)}
                className={`px-3 py-1 rounded-full capitalize font-medium cursor-pointer transition-all ${
                  seedTheme === t ? `${p.primary} text-white` : 'text-[#49454F] hover:bg-black/5'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </header>

        {/* M3 Tonal Hero Container (Zero Border, Pure Tonal Surface) */}
        <div className={`${p.container} rounded-[28px] p-8 grid grid-cols-1 @lg:grid-cols-12 gap-6 items-center transition-colors`}>
          <div className="@lg:col-span-8 space-y-4">
            <span className={`text-xs font-semibold uppercase tracking-wider ${p.primaryText}`}>
              GOOGLE MATERIAL DESIGN 3 · TONAL PALETTE SYSTEM
            </span>
            <h1 className="font-display text-3xl @md:text-5xl font-normal tracking-tight leading-[1.12]">
              Personal, adaptive interfaces built on tonal elevation.
            </h1>
            <p className="text-sm text-[#49454F] max-w-xl leading-relaxed">
              Instead of harsh 1px borders, Material 3 separates surfaces using harmonious tonal container hues, pill-shaped active indicators, and elevated Floating Action Buttons.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button className={`px-6 py-3 rounded-full ${p.primary} text-white text-xs font-medium shadow-sm hover:shadow-md transition-all cursor-pointer`}>
                Download M3 Token Kit
              </button>
              <button className="px-6 py-3 rounded-full border border-[#79747E] text-[#1D1B20] text-xs font-medium hover:bg-black/5 transition-colors cursor-pointer">
                Read Elevation Guidelines
              </button>
            </div>
          </div>

          {/* Extended FAB Preview Card */}
          <div className="@lg:col-span-4 bg-white rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs text-[#49454F]">PRIMARY ELEVATED AFFORDANCE</div>
              <div className="text-base font-medium mt-1">Extended Floating Action Button (FAB)</div>
            </div>
            <button className={`w-full py-4 px-5 rounded-2xl ${p.fab} font-semibold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer`}>
              <Plus className="w-5 h-5" />
              <span>Compose New Document</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className={`${p.surface} text-[#1D1B20] p-6 rounded-[32px] grid grid-cols-1 @md:grid-cols-12 gap-5 relative`}>
        {/* M3 Navigation Drawer with Pill Active Indicator */}
        <aside className={`@md:col-span-4 @lg:col-span-3 ${p.container} rounded-3xl p-4 space-y-1.5`}>
          <button className={`w-full mb-4 py-3.5 px-4 rounded-2xl ${p.fab} font-semibold text-xs shadow-sm flex items-center gap-2 cursor-pointer`}>
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
          {[
            { id: 'inbox', label: 'Primary Inbox', count: '14', icon: Mail },
            { id: 'starred', label: 'Priority Sprints', count: '5', icon: Calendar },
            { id: 'scheduled', label: 'Archived Releases', count: '42', icon: Folder },
          ].map((item) => {
            const Icon = item.icon;
            const active = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id as any)}
                className={`w-full px-4 py-2.5 rounded-full flex items-center justify-between text-xs font-medium transition-colors cursor-pointer ${
                  active ? `${p.pillActive} font-semibold` : 'text-[#49454F] hover:bg-black/5'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </span>
                <span className="font-mono">{item.count}</span>
              </button>
            );
          })}
        </aside>

        {/* Main Tonal Content List */}
        <div className="@md:col-span-8 @lg:col-span-9 space-y-3">
          {[
            { sender: 'Material Design Council', title: 'Updated M3 Contrast Tokens for Surface Container High', time: '10:42 AM' },
            { sender: 'Android System UI', title: 'Predictive Back Gesture animation curve verification', time: '09:15 AM' },
            { sender: 'Flutter Engine Team', title: 'Impeller renderer shader warm-up benchmarks completed', time: 'Yesterday' },
          ].map((row) => (
            <div
              key={row.title}
              className="bg-white hover:shadow-md rounded-2xl p-4 shadow-2xs transition-all flex items-center justify-between gap-4 cursor-pointer"
            >
              <div>
                <div className="text-xs font-semibold text-[#49454F]">{row.sender}</div>
                <div className="text-sm font-medium text-[#1D1B20] mt-0.5">{row.title}</div>
              </div>
              <span className="text-xs text-[#49454F] shrink-0">{row.time}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Interactive M3 Filled Text Field & Segmented Control Form
  return (
    <div className={`${p.surface} text-[#1D1B20] p-6 @md:p-8 rounded-[32px]`}>
      <div className={`max-w-xl mx-auto ${p.container} rounded-[28px] p-7 space-y-6`}>
        <h3 className="text-xl font-normal">Material 3 Filled Form Controls</h3>

        {/* Authentic M3 Filled Text Field (Top Rounded + 2px Bottom Indicator) */}
        <div>
          <label className="block text-xs font-medium text-[#49454F] mb-1.5">
            M3 Filled Text Field (rounded-t-xl + border-b-2)
          </label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-t-xl bg-white/90 border-b-2 border-[#6750A4] text-sm text-[#1D1B20] focus:outline-none"
          />
        </div>

        {/* M3 Switch Row */}
        <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-4 h-4 text-[#6750A4]" />
            <div>
              <div className="text-sm font-medium">Adaptive Notification Channels</div>
              <div className="text-xs text-[#49454F]">Group low-priority alerts into daily digest</div>
            </div>
          </div>
          <button
            onClick={() => setNotifEnabled(!notifEnabled)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
              notifEnabled ? 'bg-[#6750A4] text-white' : 'bg-slate-200 text-slate-700'
            }`}
          >
            {notifEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. NEUMORPHISM (SOFT UI) EXAMPLES (3 Full Pages — Authentic #E0E5EC Dual Shadows)
// ============================================================================
export const NeumorphismExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [temp, setTemp] = useState<number>(22);
  const [activeMode, setActiveMode] = useState<'COOL' | 'ECO' | 'HEAT'>('COOL');
  const [powerOn, setPowerOn] = useState<boolean>(true);
  const [eqBands, setEqBands] = useState<number[]>([65, 45, 80, 55, 70]);

  if (exampleId === 'landing') {
    return (
      <div className="bg-[#E0E5EC] text-slate-700 p-8 @md:p-10 rounded-[32px] space-y-8">
        {/* Soft UI Header */}
        <header className="flex items-center justify-between">
          <div className="px-5 py-2.5 rounded-2xl bg-[#E0E5EC] shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] font-display font-bold text-sm text-slate-700">
            NEUMO.AUDIO
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setPowerOn(!powerOn)}
              className={`w-11 h-11 rounded-full bg-[#E0E5EC] flex items-center justify-center cursor-pointer transition-all ${
                powerOn
                  ? 'shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] text-indigo-600'
                  : 'shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] text-slate-500'
              }`}
              title="Toggle Power"
            >
              <Power className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Extruded Hero Card */}
        <div className="bg-[#E0E5EC] rounded-[32px] p-8 shadow-[10px_10px_20px_#b8bec7,-10px_-10px_20px_#ffffff] grid grid-cols-1 @lg:grid-cols-12 gap-8 items-center">
          <div className="@lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
              AUTHENTIC NEUMORPHISM · #E0E5EC MONOCHROMATIC EXTRUSION
            </div>
            <h1 className="font-display text-3xl @md:text-4xl font-bold text-slate-700 tracking-tight leading-tight">
              Sculpted from a single continuous surface with dual light & shadow.
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every card and button shares the exact #E0E5EC base color. Raised elements cast a top-left white highlight (-8px) and bottom-right dark shadow (+8px); pressed controls invert into recessed cavities.
            </p>
            <div className="pt-3 flex flex-wrap gap-5">
              <button className="px-6 py-3.5 rounded-2xl bg-[#E0E5EC] text-indigo-600 font-bold text-xs shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-all cursor-pointer">
                Press Tactile Button
              </button>
              <div className="px-5 py-3.5 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] text-xs font-mono text-slate-600">
                Status: {powerOn ? 'ONLINE (INSET WELL)' : 'STANDBY'}
              </div>
            </div>
          </div>

          {/* Concentric Neumorphic Dial */}
          <div className="@lg:col-span-5 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-[#E0E5EC] shadow-[10px_10px_20px_#b8bec7,-10px_-10px_20px_#ffffff] flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#b8bec7,inset_-6px_-6px_12px_#ffffff] flex flex-col items-center justify-center">
                <span className="font-mono text-2xl font-bold text-indigo-600 tabular-nums">96 kHz</span>
                <span className="text-[10px] text-slate-500 mt-0.5">PURE DAC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className="bg-[#E0E5EC] text-slate-700 p-8 rounded-[32px] grid grid-cols-1 @md:grid-cols-12 gap-8 items-center">
        {/* Left Circular Thermostat Dial */}
        <div className="@md:col-span-5 flex flex-col items-center space-y-6">
          <div className="w-52 h-52 rounded-full bg-[#E0E5EC] shadow-[12px_12px_24px_#b8bec7,-12px_-12px_24px_#ffffff] flex items-center justify-center">
            <div className="w-36 h-36 rounded-full bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#b8bec7,inset_-6px_-6px_12px_#ffffff] flex flex-col items-center justify-center">
              <span className="text-[11px] font-mono text-slate-400">TARGET TEMP</span>
              <span className="font-display text-4xl font-bold text-slate-700 tabular-nums mt-1">
                {temp}°C
              </span>
              <span className="text-[11px] font-semibold text-indigo-600 mt-1">{activeMode}</span>
            </div>
          </div>

          <div className="flex gap-5">
            <button
              onClick={() => setTemp((t) => Math.max(16, t - 1))}
              className="w-12 h-12 rounded-full bg-[#E0E5EC] font-mono text-lg font-bold shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] cursor-pointer"
            >
              -
            </button>
            <button
              onClick={() => setTemp((t) => Math.min(30, t + 1))}
              className="w-12 h-12 rounded-full bg-[#E0E5EC] font-mono text-lg font-bold shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        {/* Right Controls */}
        <div className="@md:col-span-7 space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            CLIMATE MODE (ACTIVE BUTTON BECOMES INSET CAVITY)
          </div>
          <div className="grid grid-cols-3 gap-4">
            {(['COOL', 'ECO', 'HEAT'] as const).map((m) => {
              const active = activeMode === m;
              return (
                <button
                  key={m}
                  onClick={() => setActiveMode(m)}
                  className={`p-4 rounded-2xl bg-[#E0E5EC] font-bold text-xs transition-all cursor-pointer ${
                    active
                      ? 'shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff] text-indigo-600'
                      : 'shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] text-slate-600'
                  }`}
                >
                  {m} MODE
                </button>
              );
            })}
          </div>

          {/* Inset Progress Well */}
          <div className="p-5 rounded-2xl bg-[#E0E5EC] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] space-y-3">
            <div className="flex justify-between text-xs font-semibold">
              <span>Indoor Humidity Sensor</span>
              <span className="font-mono text-indigo-600">48% RH</span>
            </div>
            <div className="w-full h-4 rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] p-1">
              <div className="w-1/2 h-full rounded-full bg-indigo-500" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Interactive 5-Band Neumorphic Graphic Equalizer
  const freqs = ['60Hz', '250Hz', '1kHz', '4kHz', '16kHz'];
  return (
    <div className="bg-[#E0E5EC] text-slate-700 p-8 rounded-[32px] space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-bold">Neumorphic Parametric Equalizer</h3>
          <p className="text-xs text-slate-500">Click any frequency column to boost/cut gain</p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] font-mono text-xs font-bold text-indigo-600">
          PRESET: STUDIO FLAT
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {eqBands.map((val, idx) => (
          <div
            key={freqs[idx]}
            className="p-4 rounded-2xl bg-[#E0E5EC] shadow-[7px_7px_14px_#b8bec7,-7px_-7px_14px_#ffffff] flex flex-col items-center space-y-3"
          >
            <span className="font-mono text-xs font-bold text-indigo-600 tabular-nums">{val}%</span>
            <div
              onClick={() => {
                const next = [...eqBands];
                next[idx] = val >= 85 ? 35 : val + 15;
                setEqBands(next);
              }}
              className="w-6 h-28 rounded-full bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] p-1 flex flex-col justify-end cursor-pointer"
            >
              <div
                className="w-full rounded-full bg-indigo-500 transition-all duration-200"
                style={{ height: `${val}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-slate-500">{freqs[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// 6. CLAYMORPHISM EXAMPLES (3 Full Pages — Authentic 3D Puffy Dual Inner Shadows)
// ============================================================================
export const ClaymorphismExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [xpCount, setXpCount] = useState<number>(540);
  const [selectedChoice, setSelectedChoice] = useState<number>(1);
  const [checkedAnswer, setCheckedAnswer] = useState<boolean>(false);

  // Authentic Claymorphism shadow recipe: Outer drop shadow + Top-left white inner highlight + Bottom-right dark inner shadow
  const whiteClayShadow =
    'shadow-[0_16px_32px_-8px_rgba(99,102,241,0.14),inset_0_5px_10px_#ffffff,inset_0_-8px_16px_#dce1f0]';
  const indigoClayBtn =
    'bg-indigo-500 text-white shadow-[0_12px_24px_-4px_rgba(99,102,241,0.45),inset_0_4px_8px_rgba(255,255,255,0.5),inset_0_-6px_12px_rgba(49,46,129,0.5)] hover:scale-[1.02] active:scale-[0.97] transition-all';
  const emeraldClayCard =
    'bg-emerald-400 text-emerald-950 shadow-[0_14px_28px_-6px_rgba(16,185,129,0.35),inset_0_5px_10px_rgba(255,255,255,0.65),inset_0_-8px_14px_rgba(6,95,70,0.28)]';
  const amberClayCard =
    'bg-amber-400 text-amber-950 shadow-[0_14px_28px_-6px_rgba(245,158,11,0.35),inset_0_5px_10px_rgba(255,255,255,0.65),inset_0_-8px_14px_rgba(146,64,14,0.28)]';

  if (exampleId === 'landing') {
    return (
      <div className="bg-[#F3F1FF] text-slate-800 p-8 rounded-[36px] space-y-8">
        <header className="flex items-center justify-between">
          <span className="font-display font-extrabold text-xl text-indigo-600 tracking-tight">
            ClayVerse 3D
          </span>
          <button
            onClick={() => setXpCount((x) => x + 50)}
            className={`px-5 py-2.5 rounded-2xl font-bold text-xs cursor-pointer ${indigoClayBtn}`}
          >
            +50 Bonus Gems ({xpCount})
          </button>
        </header>

        <div className={`bg-white rounded-[32px] p-8 ${whiteClayShadow} grid grid-cols-1 @lg:grid-cols-12 gap-8 items-center`}>
          <div className="@lg:col-span-7 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-500">
              AUTHENTIC CLAYMORPHISM · DUAL INNER SHADOW VOLUME
            </span>
            <h1 className="font-display text-3xl @md:text-4xl font-extrabold text-slate-800 leading-tight">
              Inflated 3D toy-like surfaces crafted with pure CSS shadows.
            </h1>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">
              Claymorphism combines a soft outer drop shadow with two inner shadows—a bright top-left specular highlight and a darker bottom-right inner shade—to create irresistible puffy 3D depth.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setXpCount((x) => x + 25)}
                className={`px-7 py-3.5 rounded-2xl font-bold text-sm cursor-pointer ${indigoClayBtn}`}
              >
                Squishy 3D Action Button
              </button>
            </div>
          </div>

          <div className="@lg:col-span-5 grid grid-cols-1 gap-4">
            <div className={`rounded-[26px] p-6 font-bold ${emeraldClayCard}`}>
              <div className="text-xs uppercase opacity-75">3D CLAY BADGE</div>
              <div className="font-display text-2xl font-extrabold mt-1">Top + Bottom Inner Shadows</div>
            </div>
            <div className={`rounded-[26px] p-6 font-bold ${amberClayCard}`}>
              <div className="text-xs uppercase opacity-75">ACTIVE STREAK</div>
              <div className="font-display text-2xl font-extrabold mt-1">24 Days Completed</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className="bg-[#F3F1FF] text-slate-800 p-6 @md:p-8 rounded-[36px] grid grid-cols-1 @md:grid-cols-3 gap-6">
        <div className={`rounded-[28px] p-6 ${emeraldClayCard} flex items-center justify-between`}>
          <div>
            <div className="text-xs font-bold uppercase opacity-75">DAILY STREAK</div>
            <div className="font-display text-3xl font-extrabold mt-1">18 Days</div>
          </div>
          <Flame className="w-8 h-8" />
        </div>
        <div className={`rounded-[28px] p-6 ${amberClayCard} flex items-center justify-between`}>
          <div>
            <div className="text-xs font-bold uppercase opacity-75">LEAGUE TIER</div>
            <div className="font-display text-3xl font-extrabold mt-1">Diamond #1</div>
          </div>
          <Trophy className="w-8 h-8" />
        </div>
        <div className={`bg-white rounded-[28px] p-6 ${whiteClayShadow} flex items-center justify-between`}>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase">TOTAL SCORE</div>
            <div className="font-display text-3xl font-extrabold text-indigo-600 mt-1 tabular-nums">{xpCount} XP</div>
          </div>
          <Sparkles className="w-8 h-8 text-indigo-500" />
        </div>
      </div>
    );
  }

  // Interactive 3D Clay Quiz
  const choices = [
    { id: 0, text: 'Only a single standard drop-shadow' },
    { id: 1, text: 'Outer shadow + Top light inset + Bottom dark inset' },
    { id: 2, text: 'Sharp 0px corners with 1px black border' },
  ];

  return (
    <div className="bg-[#F3F1FF] p-6 @md:p-8 rounded-[36px]">
      <div className={`bg-white rounded-[32px] p-7 ${whiteClayShadow} space-y-6`}>
        <h3 className="font-display text-2xl font-extrabold text-slate-800">
          What gives Claymorphism its inflated 3D clay volume?
        </h3>

        <div className="space-y-3.5">
          {choices.map((c) => {
            const active = selectedChoice === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedChoice(c.id);
                  setCheckedAnswer(false);
                }}
                className={`w-full p-4 rounded-2xl text-left font-bold text-sm transition-all cursor-pointer ${
                  active
                    ? 'bg-indigo-500 text-white shadow-[0_10px_20px_-4px_rgba(99,102,241,0.4),inset_0_4px_8px_rgba(255,255,255,0.45),inset_0_-6px_12px_rgba(49,46,129,0.45)]'
                    : 'bg-[#F8F7FF] text-slate-700 shadow-[inset_0_3px_6px_rgba(148,163,184,0.2),inset_0_-3px_6px_#ffffff] hover:bg-indigo-50/50'
                }`}
              >
                {c.text}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-bold text-indigo-600">
            {checkedAnswer
              ? selectedChoice === 1
                ? '✓ Correct! Dual inner shadows + outer shadow create the 3D clay effect!'
                : 'Try selecting Option 2 (Outer + Dual Inner Shadows).'
              : ''}
          </span>
          <button
            onClick={() => setCheckedAnswer(true)}
            className={`px-7 py-3 rounded-2xl font-bold text-sm cursor-pointer ${indigoClayBtn}`}
          >
            Check Answer
          </button>
        </div>
      </div>
    </div>
  );
};
