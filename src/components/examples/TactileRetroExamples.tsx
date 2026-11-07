import React, { useState } from 'react';

interface ExampleProps {
  exampleId: 'landing' | 'dashboard' | 'interactive';
}

// ============================================================================
// 7. CLASSIC SKEUOMORPHISM EXAMPLES (3 Full Pages - Brushed Metal, Glass & 3D Knobs)
// ============================================================================
export const IndustrialHardwareExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [powerOn, setPowerOn] = useState<boolean>(true);
  const [inputGain, setInputGain] = useState<number>(2); // 0..4 steps
  const [tubeDrive, setTubeDrive] = useState<number>(3); // 0..4 steps
  const [outputCeiling, setOutputCeiling] = useState<number>(1); // 0..4 steps
  const [barometerHpa, setBarometerHpa] = useState<number>(1014);
  const [tapeState, setTapeState] = useState<'STOP' | 'PLAY' | 'REC'>('PLAY');
  const [eqBands, setEqBands] = useState<number[]>([70, 55, 82, 64, 78]);

  const knobAngles = [-120, -60, 0, 60, 120];

  if (exampleId === 'landing') {
    return (
      <div className="bg-[#3D261C] p-3.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] border-2 border-[#24150E]">
        {/* Brushed Aluminum Front Faceplate */}
        <div className="relative bg-[linear-gradient(180deg,#eceef2_0%,#cfd3dc_46%,#b8bec9_50%,#dcdfe6_100%)] border-2 border-[#7c828e] rounded-xl p-6 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.25)] space-y-6">
          {/* 4 Realistic Corner Rack Screws */}
          <div className="flex items-center justify-between border-b border-neutral-400/80 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[radial-gradient(circle,#f1f5f9_0%,#64748b_100%)] border border-neutral-600 shadow-[inset_0_1px_1px_#fff,0_1px_1px_rgba(255,255,255,0.8)] inline-block" />
              <div>
                <div className="font-sans text-xs font-extrabold tracking-widest uppercase text-neutral-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.85)]">
                  TELEFUNKEN // LA-2A VACUUM TUBE MASTERING LIMITER
                </div>
                <div className="font-mono text-[10px] text-neutral-600 drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]">
                  HAND-WIRED ANALOG OPTICAL COMPRESSOR · SERIAL NO. 08421
                </div>
              </div>
            </div>

            {/* Glowing Ruby LED + 3D Metallic Toggle Switch */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full border transition-all ${
                    powerOn
                      ? 'bg-red-500 border-red-800 shadow-[0_0_12px_#ef4444,inset_0_1px_2px_#ffffff]'
                      : 'bg-red-950 border-neutral-700 shadow-inner'
                  }`}
                />
                <span className="font-mono text-[10px] font-bold text-neutral-700 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
                  {powerOn ? 'TUBE WARM (ON)' : 'BYPASS (OFF)'}
                </span>
              </div>
              <button
                onClick={() => setPowerOn(!powerOn)}
                className="px-3.5 py-1.5 rounded-lg bg-[linear-gradient(180deg,#f8fafc_0%,#cbd5e1_50%,#94a3b8_100%)] border border-neutral-600 font-sans text-xs font-bold text-neutral-800 shadow-[0_3px_6px_rgba(0,0,0,0.3),inset_0_1px_0_#ffffff] active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                POWER
              </button>
            </div>
          </div>

          {/* Recessed Curved Glass Dual VU Display with Specular Reflection */}
          <div className="relative overflow-hidden bg-[#0c120e] border-2 border-[#2a3038] rounded-xl p-6 text-white font-mono shadow-[inset_0_6px_16px_rgba(0,0,0,0.95),0_1px_0_rgba(255,255,255,0.75)] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Glossy Curved Glass Reflection Overlay */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/22 via-white/5 to-transparent pointer-events-none" />

            <div className="md:col-span-7 space-y-2 relative z-10">
              <div className="text-[11px] text-amber-400 font-bold tracking-wider">
                OPTICAL ATTENUATOR // {powerOn ? 'ACTIVE VACUUM STAGE' : 'TRUE HARDWARE BYPASS'}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-amber-50 drop-shadow-[0_0_10px_rgba(245,158,11,0.35)]">
                Authentic Brushed Metal & Glass Skeuomorphism.
              </h1>
              <p className="text-xs text-emerald-300/80 leading-relaxed">
                Click the 3D brushed rotary knobs below to adjust input gain, harmonic tube saturation, and output ceiling with realistic specular reflections.
              </p>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-3 border-l border-neutral-800 pl-6 relative z-10">
              <div className="bg-[#141d17] border border-amber-500/30 rounded-lg p-3 shadow-inner">
                <div className="text-[10px] text-amber-300/70">VU GAIN REDUCTION</div>
                <div className="text-2xl font-bold text-amber-400 tabular-nums mt-1">
                  -{powerOn ? (inputGain * 1.4 + tubeDrive * 0.8).toFixed(1) : '0.0'} dB
                </div>
                <div className="mt-2 h-2 rounded-full bg-black overflow-hidden border border-neutral-700">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500 transition-all"
                    style={{ width: `${powerOn ? Math.min(100, (inputGain + tubeDrive) * 14) : 5}%` }}
                  />
                </div>
              </div>
              <div className="bg-[#141d17] border border-emerald-500/30 rounded-lg p-3 shadow-inner">
                <div className="text-[10px] text-emerald-300/70">TUBE HARMONICS</div>
                <div className="text-2xl font-bold text-emerald-400 tabular-nums mt-1">
                  {powerOn ? (tubeDrive * 2.2 + 1.2).toFixed(1) : '0.0'}% THD
                </div>
                <div className="text-[10px] text-neutral-400 mt-2">12AX7 + EL84 STAGE</div>
              </div>
            </div>
          </div>

          {/* 3 Realistic 3D Conic-Gradient Metallic Rotary Knobs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            {[
              {
                label: 'INPUT GAIN (STEPPED)',
                val: inputGain,
                setVal: setInputGain,
                display: `+${inputGain * 3} dB`,
              },
              {
                label: 'TUBE DRIVE SATURATION',
                val: tubeDrive,
                setVal: setTubeDrive,
                display: `${tubeDrive * 25}%`,
              },
              {
                label: 'OUTPUT CEILING',
                val: outputCeiling,
                setVal: setOutputCeiling,
                display: `-${(4 - outputCeiling) * 0.5} dBFS`,
              },
            ].map((knob) => (
              <div
                key={knob.label}
                className="bg-[linear-gradient(180deg,#dcdfe6_0%,#c2c7d2_100%)] border border-neutral-400 rounded-xl p-4 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.12)]"
              >
                <div>
                  <div className="font-sans text-[11px] font-extrabold text-neutral-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.85)]">
                    {knob.label}
                  </div>
                  <div className="font-mono text-sm font-bold text-neutral-900 mt-1 tabular-nums">
                    {knob.display}
                  </div>
                  <div className="text-[10px] text-neutral-600 mt-1">Click dial to rotate</div>
                </div>

                {/* 3D Conic Metallic Rotary Knob */}
                <button
                  onClick={() => knob.setVal((knob.val + 1) % 5)}
                  title="Click to rotate metallic knob"
                  className="relative w-16 h-16 rounded-full bg-[conic-gradient(#e2e8f0_0deg,#64748b_60deg,#f8fafc_140deg,#475569_220deg,#f1f5f9_300deg,#e2e8f0_360deg)] border-2 border-neutral-700 shadow-[0_8px_14px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.9)] flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
                >
                  <div
                    className="w-11 h-11 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f8fafc,#94a3b8_70%,#475569_100%)] border border-neutral-500 shadow-inner relative transition-transform duration-200"
                    style={{ transform: `rotate(${knobAngles[knob.val]}deg)` }}
                  >
                    <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-3.5 rounded-full bg-[#FF5500] shadow-[0_0_4px_#FF5500]" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className="bg-[linear-gradient(180deg,#e6e8ec_0%,#c8ccd4_48%,#b4b9c4_50%,#dcdfe6_100%)] border-2 border-[#7c828e] rounded-2xl p-6 text-neutral-900 space-y-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_28px_rgba(0,0,0,0.3)]">
        {/* Classic iOS 6 Stitched Leather Header Bar */}
        <div className="bg-[linear-gradient(180deg,#523628_0%,#382319_100%)] rounded-xl p-4 border-2 border-[#24150e] shadow-[0_4px_10px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] flex flex-wrap items-center justify-between gap-4">
          <div className="border-y border-dashed border-amber-200/40 py-1 px-2">
            <span className="font-sans text-xs font-bold tracking-wider text-amber-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              AQUA CHRONOGRAPH & BAROMETRIC STATION
            </span>
          </div>

          {/* Classic Mac OS X Aqua Glossy Pill Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setBarometerHpa((b) => b - 3)}
              className="px-4 py-1.5 rounded-full bg-[linear-gradient(180deg,#f8fafc_0%,#cbd5e1_50%,#94a3b8_51%,#e2e8f0_100%)] border border-slate-600 text-xs font-bold text-slate-900 shadow-[0_2px_5px_rgba(0,0,0,0.35),inset_0_1px_1px_#ffffff] active:shadow-inner cursor-pointer"
            >
              - Pressure
            </button>
            <button
              onClick={() => setBarometerHpa((b) => b + 3)}
              className="px-4 py-1.5 rounded-full bg-[linear-gradient(180deg,#93c5fd_0%,#3b82f6_48%,#1d4ed8_52%,#60a5fa_100%)] border border-blue-900 text-xs font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.85)] active:shadow-inner cursor-pointer"
            >
              + Calibrate ({barometerHpa} hPa)
            </button>
          </div>
        </div>

        {/* 3 Glossy Glass Instrument Gauges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'BAROMETRIC PRESSURE',
              value: `${barometerHpa}.2`,
              unit: 'hPa // SEA LEVEL',
              color: 'text-emerald-400',
              led: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
            },
            {
              title: 'VACUUM TUBE BIAS',
              value: '248.5',
              unit: 'VOLTS DC PLATE',
              color: 'text-amber-400',
              led: 'bg-amber-400 shadow-[0_0_8px_#f59e0b]',
            },
            {
              title: 'ACOUSTIC FLOOR',
              value: '-94.8',
              unit: 'dBA SHIELDED',
              color: 'text-sky-400',
              led: 'bg-sky-400 shadow-[0_0_8px_#38bdf8]',
            },
          ].map((gauge) => (
            <div
              key={gauge.title}
              className="relative overflow-hidden bg-[#0c120e] border-2 border-[#2a3038] rounded-xl p-5 font-mono text-white shadow-[inset_0_5px_14px_rgba(0,0,0,0.95),0_1px_0_rgba(255,255,255,0.8)] space-y-2"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] text-neutral-400 font-bold">{gauge.title}</span>
                <span className={`w-2.5 h-2.5 rounded-full ${gauge.led}`} />
              </div>
              <div className={`text-3xl font-bold tabular-nums relative z-10 ${gauge.color}`}>
                {gauge.value}
              </div>
              <div className="text-[10px] text-neutral-400 relative z-10">{gauge.unit}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Interactive Reel-to-Reel Tape Transport & 5-Band Metallic Graphic EQ
  return (
    <div className="bg-[linear-gradient(180deg,#e6e8ec_0%,#c8ccd4_48%,#b4b9c4_50%,#dcdfe6_100%)] border-2 border-[#7c828e] rounded-2xl p-6 text-neutral-900 grid grid-cols-1 md:grid-cols-12 gap-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_24px_rgba(0,0,0,0.3)]">
      <div className="md:col-span-7 space-y-4">
        <div className="font-sans text-xs font-extrabold uppercase tracking-wider text-neutral-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.85)]">
          5-BAND ANALOG GRAPHIC EQUALIZER (CLICK FADERS)
        </div>
        <div className="grid grid-cols-5 gap-3 bg-[#1c2026] p-4 rounded-xl border-2 border-neutral-600 shadow-inner">
          {['60Hz', '250Hz', '1kHz', '4kHz', '12kHz'].map((band, idx) => (
            <button
              key={band}
              onClick={() => {
                const next = [...eqBands];
                next[idx] = next[idx] >= 85 ? 30 : next[idx] + 20;
                setEqBands(next);
              }}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="h-28 w-3 bg-black rounded-full border border-neutral-700 relative flex items-end p-0.5">
                <div
                  className="w-full bg-gradient-to-t from-emerald-500 to-amber-400 rounded-full transition-all"
                  style={{ height: `${eqBands[idx]}%` }}
                />
                {/* Metallic Fader Cap */}
                <span
                  className="absolute left-1/2 -translate-x-1/2 w-7 h-4 rounded bg-[linear-gradient(180deg,#f8fafc_0%,#94a3b8_50%,#cbd5e1_100%)] border border-black shadow-md transition-all"
                  style={{ bottom: `calc(${eqBands[idx]}% - 8px)` }}
                />
              </div>
              <span className="font-mono text-[10px] text-neutral-300">{band}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chrome Transport Piano Keys & Recessed Tape Counter */}
      <div className="md:col-span-5 flex flex-col justify-between bg-[linear-gradient(180deg,#cfd4de_0%,#aeb5c2_100%)] border border-neutral-500 rounded-xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs font-extrabold text-neutral-800 drop-shadow-[0_1px_0_#fff]">
              REEL TRANSPORT DECK
            </span>
            <span
              className={`w-3 h-3 rounded-full ${
                tapeState === 'REC'
                  ? 'bg-red-500 shadow-[0_0_10px_#ef4444]'
                  : tapeState === 'PLAY'
                  ? 'bg-emerald-400 shadow-[0_0_10px_#10b981]'
                  : 'bg-neutral-600'
              }`}
            />
          </div>

          {/* Glossy Recessed Mechanical Counter */}
          <div className="relative overflow-hidden bg-[#0c120e] border-2 border-neutral-700 rounded-lg p-3.5 font-mono text-center shadow-inner">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <div className="text-[10px] text-neutral-400">TAPE COUNTER (15 IPS)</div>
            <div className="text-2xl font-bold text-amber-400 tracking-widest tabular-nums mt-0.5">
              01 : 48 : 29
            </div>
            <div className="text-[10px] text-emerald-400 mt-1">STATE: {tapeState}ING</div>
          </div>
        </div>

        {/* 3D Chrome Beveled Transport Buttons */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {(['PLAY', 'REC', 'STOP'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setTapeState(mode)}
              className={`py-2.5 rounded-lg font-sans text-xs font-extrabold border transition-all cursor-pointer ${
                tapeState === mode
                  ? 'bg-[linear-gradient(180deg,#94a3b8_0%,#cbd5e1_100%)] border-neutral-700 text-neutral-950 shadow-[inset_0_3px_6px_rgba(0,0,0,0.45)] translate-y-[1px]'
                  : 'bg-[linear-gradient(180deg,#ffffff_0%,#cbd5e1_100%)] border-neutral-500 text-neutral-800 shadow-[0_3px_5px_rgba(0,0,0,0.25),inset_0_1px_0_#ffffff]'
              }`}
            >
              {mode === 'REC' ? '● REC' : mode}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 10. RETRO CLI / TUI TERMINAL EXAMPLES (3 Full Pages)
// ============================================================================
export const RetroTerminalExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [copiedCmd, setCopiedCmd] = useState<boolean>(false);
  const [ports, setPorts] = useState<{ [key: string]: boolean }>({
    '443/TLS': true,
    '22/SSH': true,
    '8080/HTTP': false,
    '5432/PG': false,
  });

  if (exampleId === 'landing') {
    return (
      <div className="bg-[#060B08] text-emerald-400 font-mono p-6 border border-emerald-500/40 space-y-6">
        <header className="flex flex-wrap items-center justify-between border-b border-emerald-500/40 pb-4 gap-4">
          <div className="bg-emerald-400 text-[#060B08] px-2.5 py-1 text-xs font-bold">
            VORTEX-KERNEL v3.8.0 [x86_64-linux-musl]
          </div>
          <div className="flex gap-4 text-xs">
            <a href="#man" onClick={(e) => e.preventDefault()} className="hover:bg-emerald-400 hover:text-[#060B08] px-1.5">[ MAN_PAGE ]</a>
            <a href="#bench" onClick={(e) => e.preventDefault()} className="hover:bg-emerald-400 hover:text-[#060B08] px-1.5">[ BENCHMARKS ]</a>
            <a href="#src" onClick={(e) => e.preventDefault()} className="hover:bg-emerald-400 hover:text-[#060B08] px-1.5">[ GIT_TREE ]</a>
          </div>
        </header>

        <div className="space-y-3">
          <div className="text-xs text-amber-400">SYSTEM DESCRIPTION:</div>
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-300 leading-snug">
            Zero-dependency container supervisor written in pure Rust & eBPF.
          </h1>
          <p className="text-xs text-emerald-400/75 max-w-2xl leading-relaxed">
            No daemon bloat. Single 2.4MB static binary with sub-millisecond cgroup v2 isolation and native WireGuard mesh peering.
          </p>
        </div>

        {/* One-Click Shell Install Box */}
        <div className="bg-[#0B140E] border border-emerald-500/50 p-4 flex items-center justify-between text-xs">
          <span className="text-emerald-300">$ curl -sSfL https://get.vortex-kernel.org | sudo sh -s -- --enable-ebpf</span>
          <button
            onClick={() => setCopiedCmd(true)}
            className="px-3 py-1 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#060B08] font-bold transition-colors cursor-pointer"
          >
            {copiedCmd ? '[ COPIED_OK ]' : '[ COPY_SH ]'}
          </button>
        </div>

        {/* ASCII Benchmark Comparison */}
        <div className="border border-emerald-500/40 p-4 space-y-2 text-xs">
          <div className="text-amber-400 font-bold mb-2">COLD START OVERHEAD BENCHMARK (LOWER IS BETTER)</div>
          <div className="flex justify-between">
            <span className="w-36">vortex-kernel</span>
            <span className="flex-1 text-emerald-400">██░░░░░░░░░░░░░░░░░░</span>
            <span className="tabular-nums font-bold">1.8 ms</span>
          </div>
          <div className="flex justify-between text-emerald-400/60">
            <span className="w-36">containerd-runc</span>
            <span className="flex-1">████████████░░░░░░░░</span>
            <span className="tabular-nums">48.2 ms</span>
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className="bg-[#060B08] text-emerald-400 font-mono p-5 border border-emerald-500/40 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="bg-[#0B140E] border border-emerald-500/40 p-4 space-y-3">
          <div className="bg-emerald-400 text-[#060B08] px-2 py-0.5 font-bold inline-block">
            CPU CORE UTILIZATION [8 THREADS]
          </div>
          {[
            { core: 'CPU_00', bar: '████████████░░░░', pct: '76%' },
            { core: 'CPU_01', bar: '██████████░░░░░░', pct: '62%' },
            { core: 'CPU_02', bar: '██████████████░░', pct: '89%' },
            { core: 'CPU_03', bar: '██████░░░░░░░░░░', pct: '38%' },
          ].map((c) => (
            <div key={c.core} className="flex justify-between items-center">
              <span>{c.core}</span>
              <span className="tracking-widest">{c.bar}</span>
              <span className="tabular-nums font-bold">{c.pct}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#0B140E] border border-emerald-500/40 p-4 space-y-3">
          <div className="bg-amber-400 text-[#060B08] px-2 py-0.5 font-bold inline-block">
            ACTIVE SOCKET AUDIT STREAM
          </div>
          <div className="space-y-2 text-[11px]">
            <div className="flex justify-between border-b border-emerald-500/20 pb-1">
              <span>10.240.0.12:443</span>
              <span>TLS_AES_256_GCM</span>
              <span className="text-emerald-300">ESTABLISHED</span>
            </div>
            <div className="flex justify-between border-b border-emerald-500/20 pb-1">
              <span>10.240.0.88:22</span>
              <span>ED25519_PUBKEY</span>
              <span className="text-emerald-300">ESTABLISHED</span>
            </div>
            <div className="flex justify-between text-amber-400">
              <span>192.0.2.199:8080</span>
              <span>SYN_RECV_DROP</span>
              <span>BLOCKED_BPF</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Interactive CLI Firewall Policy Builder
  return (
    <div className="bg-[#060B08] text-emerald-400 font-mono p-6 border border-emerald-500/40 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
      <div className="space-y-3">
        <div className="text-amber-400 font-bold">SELECT INBOUND PORTS TO PERMIT (CLICK TO TOGGLE):</div>
        <div className="space-y-2">
          {Object.entries(ports).map(([port, enabled]) => (
            <button
              key={port}
              onClick={() => setPorts({ ...ports, [port]: !enabled })}
              className="w-full p-3 border border-emerald-500/40 bg-[#0B140E] hover:bg-emerald-400 hover:text-[#060B08] flex justify-between font-bold transition-colors cursor-pointer"
            >
              <span>{enabled ? '[X]' : '[ ]'} PORT {port}</span>
              <span>{enabled ? 'ACCEPT' : 'DROP'}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#0B140E] border border-emerald-500/40 p-4 flex flex-col justify-between">
        <div>
          <div className="text-emerald-300 font-bold border-b border-emerald-500/30 pb-2 mb-3">
            GENERATED NFTABLES RULE SET:
          </div>
          <pre className="text-[11px] leading-relaxed text-emerald-400/90 whitespace-pre-wrap">
{`table inet vortex_filter {
  chain input {
    type filter hook input priority 0; policy drop;
${Object.entries(ports)
  .filter(([, v]) => v)
  .map(([k]) => `    tcp dport ${k.split('/')[0]} accept # ${k}`)
  .join('\n')}
  }
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 15. CLASSIC DESKTOP OS / WIN95 EXAMPLES (3 Full Pages)
// ============================================================================
export const Win95RetroExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [activeTrack, setActiveTrack] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedFolder, setSelectedFolder] = useState<string>('Poolsuite_Mixes');
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [installComponents, setInstallComponents] = useState<{ [k: string]: boolean }>({
    'Poolside FM Audio Driver (1.4 MB)': true,
    'After Dark Flying Toasters Saver (2.1 MB)': true,
    'Dial-Up TCP/IP Stack (0.8 MB)': false,
  });

  const tracks = [
    { title: '01. Pacific Coast Highway_1997.wav', bpm: '116 BPM', length: '03:42' },
    { title: '02. Monte Carlo Sunset_FM.mid', bpm: '120 BPM', length: '04:15' },
    { title: '03. Palm Springs Cabana_Lounge.mp3', bpm: '108 BPM', length: '02:58' },
  ];

  if (exampleId === 'landing') {
    return (
      <div className="bg-[#008080] p-5 text-black font-sans space-y-5 border-2 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Main Welcome Window */}
          <div className="lg:col-span-7 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-1 shadow-[3px_3px_0_rgba(0,0,0,0.45)]">
            {/* Classic Navy Gradient Title Bar */}
            <div className="bg-[linear-gradient(90deg,#000080_0%,#1084d0_100%)] text-white px-2 py-1 flex items-center justify-between text-xs font-bold">
              <span>Welcome_to_Poolsuite_OS_95.exe</span>
              <div className="flex gap-1">
                {['_', '□', 'X'].map((btn) => (
                  <button
                    key={btn}
                    className="w-4 h-4 bg-[#C0C0C0] text-black border border-t-white border-l-white border-r-[#404040] border-b-[#404040] text-[10px] leading-none font-bold flex items-center justify-center"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Bar */}
            <div className="flex gap-4 px-2 py-1 text-xs border-b border-[#808080]">
              <span><u>F</u>ile</span>
              <span><u>E</u>dit</span>
              <span><u>V</u>iew</span>
              <span><u>H</u>elp</span>
            </div>

            {/* Sunken White Content Area */}
            <div className="p-4 space-y-4">
              <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-4 space-y-2">
                <div className="font-mono text-[11px] text-[#000080] font-bold">
                  EST. SUMMER 1995 // ULTRA-LUXURY INTERNET LEISURE UTILITY
                </div>
                <h1 className="text-2xl font-extrabold tracking-tight text-black">
                  Sun-drenched sounds from a simpler digital era.
                </h1>
                <p className="text-xs text-neutral-800 leading-relaxed">
                  Constructed with authentic 3D beveled borders (white top-left highlight, dark charcoal bottom-right shadow) on a classic #008080 teal desktop.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-end">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-1.5 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] text-xs font-bold active:border-t-[#404040] active:border-l-[#404040] active:border-r-white active:border-b-white cursor-pointer"
                >
                  {isPlaying ? '❚❚ Pause Broadcast' : '▶ Tune In Radio'}
                </button>
                <button className="px-4 py-1.5 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] text-xs font-bold active:border-t-[#404040] active:border-l-[#404040] active:border-r-white active:border-b-white cursor-pointer">
                  Sign Guestbook...
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Media Player Window */}
          <div className="lg:col-span-5 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-1 shadow-[3px_3px_0_rgba(0,0,0,0.45)]">
            <div className="bg-[linear-gradient(90deg,#000080_0%,#1084d0_100%)] text-white px-2 py-1 flex items-center justify-between text-xs font-bold">
              <span>CD_Player_Deluxe.exe</span>
              <span>[X]</span>
            </div>
            <div className="p-3 space-y-3">
              {/* Sunken Digital Readout */}
              <div className="bg-black text-[#00FF66] font-mono p-3 border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white text-xs">
                <div className="flex justify-between text-[10px] text-[#00FF66]/70">
                  <span>{isPlaying ? 'PLAYING STEREO' : 'PAUSED'}</span>
                  <span>{tracks[activeTrack].bpm}</span>
                </div>
                <div className="font-bold truncate mt-1">{tracks[activeTrack].title}</div>
              </div>

              {/* Sunken Tracklist */}
              <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-1 space-y-0.5">
                {tracks.map((t, i) => (
                  <button
                    key={t.title}
                    onClick={() => setActiveTrack(i)}
                    className={`w-full text-left px-2 py-1 text-xs font-mono flex justify-between cursor-pointer ${
                      activeTrack === i ? 'bg-[#000080] text-white font-bold' : 'text-black hover:bg-neutral-200'
                    }`}
                  >
                    <span className="truncate">{t.title}</span>
                    <span>{t.length}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Classic Win95 Bottom Taskbar */}
        <div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] px-2 py-1 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] font-extrabold">
              ⊞ Start
            </button>
            <div className="px-3 py-1 bg-[#DFDFDF] border-2 border-t-[#404040] border-l-[#404040] border-r-white border-b-white font-bold">
              Poolsuite_OS_95.exe
            </div>
          </div>
          <div className="px-3 py-1 border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white font-mono text-[11px]">
            🔊 04:20 PM
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className="bg-[#008080] p-5 text-black font-sans">
        <div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-1 shadow-[3px_3px_0_rgba(0,0,0,0.45)] space-y-2">
          <div className="bg-[linear-gradient(90deg,#000080_0%,#1084d0_100%)] text-white px-2 py-1 flex items-center justify-between text-xs font-bold">
            <span>Exploring - C:\USERS\ARCHIVE\{selectedFolder.toUpperCase()}</span>
            <span>[ _ ] [ □ ] [ X ]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 p-2">
            {/* Sunken Left Directory Tree */}
            <div className="md:col-span-4 bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-2 space-y-1 text-xs">
              <div className="font-bold text-neutral-600 pb-1">Folders</div>
              {['Poolsuite_Mixes', 'System32_Drivers', 'Bitmap_Icons', 'Readme_Docs'].map((folder) => (
                <button
                  key={folder}
                  onClick={() => setSelectedFolder(folder)}
                  className={`w-full text-left px-2 py-1.5 font-mono cursor-pointer flex items-center gap-2 ${
                    selectedFolder === folder ? 'bg-[#000080] text-white font-bold' : 'text-black hover:bg-neutral-100'
                  }`}
                >
                  <span>📁</span>
                  <span>{folder}</span>
                </button>
              ))}
            </div>

            {/* Sunken Right File Grid & Disk Defrag Cluster Map */}
            <div className="md:col-span-8 bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-3 space-y-4 text-xs">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'AUTOEXEC.BAT', size: '2 KB', type: 'MS-DOS Batch' },
                  { name: 'SYNTH_WAVE.WAV', size: '14,280 KB', type: 'PCM Audio' },
                  { name: 'THEME_95.INI', size: '8 KB', type: 'Config Settings' },
                ].map((file) => (
                  <div key={file.name} className="border border-dotted border-neutral-400 p-2">
                    <div className="font-mono font-bold text-[#000080]">📄 {file.name}</div>
                    <div className="text-[11px] text-neutral-600 mt-0.5">{file.size} · {file.type}</div>
                  </div>
                ))}
              </div>

              <div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-2.5 space-y-1.5">
                <div className="flex justify-between font-bold text-[11px]">
                  <span>FAT32 CLUSTER DEFRAGMENTATION STATUS:</span>
                  <span>88% CONTIGUOUS</span>
                </div>
                <div className="grid grid-cols-16 gap-1 bg-black p-1.5 border border-[#808080]">
                  {Array.from({ length: 16 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-3 block ${
                        idx < 11 ? 'bg-[#00FFFF]' : idx < 14 ? 'bg-[#FFFF00]' : 'bg-[#000080]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sunken Status Bar */}
          <div className="grid grid-cols-2 gap-1 px-2 pb-1 text-[11px]">
            <div className="border border-t-[#808080] border-l-[#808080] border-r-white border-b-white px-2 py-0.5">
              3 object(s) selected in {selectedFolder}
            </div>
            <div className="border border-t-[#808080] border-l-[#808080] border-r-white border-b-white px-2 py-0.5 text-right font-mono">
              1.44 GB Free Disk Space
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Interactive Setup Wizard Dialog
  return (
    <div className="bg-[#008080] p-5 text-black font-sans">
      <div className="max-w-2xl mx-auto bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-1 shadow-[4px_4px_0_rgba(0,0,0,0.45)]">
        <div className="bg-[linear-gradient(90deg,#000080_0%,#1084d0_100%)] text-white px-2 py-1 flex items-center justify-between text-xs font-bold">
          <span>InstallShield_Wizard - Step {wizardStep} of 2</span>
          <span>[X]</span>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Retro Banner Column */}
          <div className="md:col-span-4 bg-[#000080] text-white p-4 border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white flex flex-col justify-between">
            <div className="font-mono text-xs font-bold text-cyan-300">SETUP // 95</div>
            <div className="text-lg font-extrabold leading-tight my-4">
              Retro GUI Component Pack
            </div>
            <div className="font-mono text-[10px] text-cyan-200">v4.00.950 B</div>
          </div>

          {/* Right Wizard Controls */}
          <div className="md:col-span-8 space-y-3 text-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="font-bold text-sm">
                {wizardStep === 1 ? 'Select Optional System Components:' : 'Ready to Copy System Files'}
              </div>
              <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-2.5 space-y-2">
                {Object.entries(installComponents).map(([comp, checked]) => (
                  <label key={comp} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() =>
                        setInstallComponents({ ...installComponents, [comp]: !checked })
                      }
                    />
                    <span className="font-mono text-[11px]">{comp}</span>
                  </label>
                ))}
              </div>

              {/* Segmented Blue Block Progress Bar */}
              <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-1 flex gap-1">
                {Array.from({ length: wizardStep === 1 ? 6 : 12 }).map((_, i) => (
                  <span key={i} className="h-3 w-4 bg-[#000080] block" />
                ))}
              </div>
            </div>

            <div className="border-t border-[#808080] pt-3 flex justify-end gap-2">
              <button
                onClick={() => setWizardStep(1)}
                className="px-4 py-1 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] font-bold cursor-pointer"
              >
                &lt; Back
              </button>
              <button
                onClick={() => setWizardStep(wizardStep === 1 ? 2 : 1)}
                className="px-4 py-1 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] font-bold cursor-pointer"
              >
                {wizardStep === 1 ? 'Next >' : 'Finish'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 16. CYBERPUNK / SCI-FI HUD EXAMPLES (3 Full Pages)
// ============================================================================
export const CyberpunkHudExamples: React.FC<ExampleProps> = ({ exampleId }) => {
  const [combatMode, setCombatMode] = useState<'STEALTH' | 'ASSAULT' | 'OVERCLOCK'>('ASSAULT');
  const [overclocked, setOverclocked] = useState<boolean>(false);
  const [equippedMods, setEquippedMods] = useState<string[]>(['KIROSHI_OPTICS', 'SANDEVISTAN_MK5']);

  const toggleMod = (id: string) => {
    setEquippedMods((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (exampleId === 'landing') {
    return (
      <div className="bg-[#07090E] text-white p-6 border border-[#00F0FF]/40 space-y-6 relative overflow-hidden">
        {/* Hazard Stripe Top Bar */}
        <div className="h-2 w-full bg-[repeating-linear-gradient(-45deg,#FCEE0A,#FCEE0A_10px,#07090E_10px,#07090E_20px)]" />

        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#00F0FF]/30 pb-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="bg-[#FCEE0A] text-black px-2 py-0.5 font-extrabold">
              ARASAKA // MILITECH HUD
            </span>
            <span className="text-[#00F0FF]">SYS.VER 2077.4 // NIGHT_CITY_NET</span>
          </div>
          <div className="flex gap-2">
            {(['STEALTH', 'ASSAULT', 'OVERCLOCK'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setCombatMode(mode)}
                className={`px-3 py-1 font-mono text-xs font-extrabold uppercase tracking-wider cursor-pointer transition-colors [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] ${
                  combatMode === mode
                    ? 'bg-[#00F0FF] text-black'
                    : 'bg-[#0E131F] text-[#00F0FF] border border-[#00F0FF]/40'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </header>

        {/* 45-Degree Chamfered Hero Armor Card */}
        <div className="bg-[#0E131F] border border-[#00F0FF]/50 p-7 [clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,22px_100%,0_calc(100%-22px))] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-[0_0_25px_rgba(0,240,255,0.12)]">
          <div className="lg:col-span-7 space-y-3">
            <div className="font-mono text-xs text-[#FCEE0A] font-bold tracking-widest">
              NEURAL INTERFACE // MODE: {combatMode}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
              Chamfered Tactical Cyberware Architecture.
            </h1>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engineered with 45-degree polygon clip-path containers, high-contrast #FCEE0A cyber yellow action triggers, and #00F0FF holographic telemetry readouts.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-[#FCEE0A] hover:bg-[#00F0FF] text-black font-mono text-xs font-extrabold uppercase tracking-widest [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)] transition-colors cursor-pointer">
                JACK IN NEURAL LINK //
              </button>
              <button className="px-5 py-3 bg-transparent border border-[#FF0055] text-[#FF0055] hover:bg-[#FF0055] hover:text-white font-mono text-xs font-extrabold uppercase tracking-wider [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] transition-colors cursor-pointer">
                ICEBREAKER PROTOCOL
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#07090E] border border-[#00F0FF]/40 p-5 font-mono space-y-3">
            <div className="flex justify-between text-[11px] text-[#00F0FF]">
              <span>OPTICAL SCANNER</span>
              <span>TARGET LOCKED</span>
            </div>
            <div className="text-3xl font-extrabold text-[#FCEE0A] tabular-nums">
              {combatMode === 'OVERCLOCK' ? '148.6 TFLOPS' : combatMode === 'ASSAULT' ? '94.2 TFLOPS' : '42.0 TFLOPS'}
            </div>
            <div className="text-[11px] text-slate-400">
              SYNAPTIC LATENCY: <span className="text-[#00F0FF] font-bold">0.14 ms</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (exampleId === 'dashboard') {
    return (
      <div className="bg-[#07090E] text-white p-6 border border-[#00F0FF]/40 font-mono space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-[#00F0FF] tracking-widest">ORBITAL MECHA TELEMETRY // UNIT-02</div>
            <h3 className="font-display text-xl font-extrabold uppercase text-white">
              Tactical Reactor & Neural Load HUD
            </h3>
          </div>
          <button
            onClick={() => setOverclocked(!overclocked)}
            className={`px-4 py-2 text-xs font-extrabold uppercase cursor-pointer [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] ${
              overclocked ? 'bg-[#FF0055] text-white' : 'bg-[#FCEE0A] text-black'
            }`}
          >
            {overclocked ? '⚠ OVERCLOCK ACTIVE (135%)' : 'ENGAGE REACTOR OVERCLOCK'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              label: 'NEURAL SYNC RATIO',
              val: overclocked ? '104.8%' : '96.4%',
              status: 'OPTIMAL LINK',
              accent: 'border-[#00F0FF]/50 text-[#00F0FF]',
            },
            {
              label: 'CORE THERMAL FLUX',
              val: overclocked ? '892 °K' : '540 °K',
              status: overclocked ? 'CRITICAL HEAT' : 'STABLE',
              accent: overclocked ? 'border-[#FF0055] text-[#FF0055]' : 'border-[#FCEE0A]/60 text-[#FCEE0A]',
            },
            {
              label: 'ACTIVE ICE SHIELD',
              val: '4,096 BIT',
              status: 'BLACKWALL ARMED',
              accent: 'border-[#00F0FF]/50 text-[#00F0FF]',
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`bg-[#0E131F] border p-5 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))] ${item.accent}`}
            >
              <div className="text-[10px] tracking-widest opacity-80">{item.label}</div>
              <div className="text-3xl font-extrabold tabular-nums mt-2">{item.val}</div>
              <div className="text-[10px] mt-2 text-white">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Interactive Cyberware Loadout Configurator
  const mods = [
    { id: 'KIROSHI_OPTICS', name: 'Kiroshi Mk.V Threat Scanner', cost: 18 },
    { id: 'SANDEVISTAN_MK5', name: 'QianT Sandevistan Time-Dilation', cost: 28 },
    { id: 'SUBDERMAL_ARMOR', name: 'Militech Chitin Subdermal Plating', cost: 14 },
  ];
  const totalCost = mods
    .filter((m) => equippedMods.includes(m.id))
    .reduce((acc, m) => acc + m.cost, 0);

  return (
    <div className="bg-[#07090E] text-white p-6 border border-[#00F0FF]/40 font-mono grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-7 space-y-3">
        <div className="text-xs text-[#FCEE0A] font-bold">
          CLICK CHASSIS SLOTS TO MOUNT / UNMOUNT CYBERWARE:
        </div>
        {mods.map((mod) => {
          const active = equippedMods.includes(mod.id);
          return (
            <button
              key={mod.id}
              onClick={() => toggleMod(mod.id)}
              className={`w-full p-4 text-left border flex items-center justify-between cursor-pointer transition-all [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] ${
                active
                  ? 'bg-[#0E131F] border-[#00F0FF] text-[#00F0FF]'
                  : 'bg-[#090C14] border-slate-800 text-slate-400'
              }`}
            >
              <div>
                <div className="text-xs font-extrabold">{mod.name}</div>
                <div className="text-[10px] opacity-75">SLOT ID // {mod.id}</div>
              </div>
              <span className="px-2.5 py-1 bg-[#FCEE0A] text-black text-xs font-extrabold">
                {active ? 'MOUNTED' : `+${mod.cost} CAP`}
              </span>
            </button>
          );
        })}
      </div>

      <div className="md:col-span-5 bg-[#0E131F] border border-[#00F0FF]/50 p-5 flex flex-col justify-between [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,16px_100%,0_calc(100%-16px))]">
        <div className="space-y-3">
          <div className="text-xs text-[#00F0FF] font-bold">NEURAL CAPACITY GAUGE</div>
          <div className="text-3xl font-extrabold text-[#FCEE0A] tabular-nums">
            {totalCost} / 60 <span className="text-xs text-white">UNITS</span>
          </div>
          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className={`h-3 block ${
                  i < Math.round(totalCost / 6) ? 'bg-[#00F0FF]' : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="text-[11px] text-emerald-400 mt-4">
          CYBERPSYCHOSIS RISK: LOW (STABLE)
        </div>
      </div>
    </div>
  );
};
