// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GameOptionsProps {}

export function GameOptions(props: GameOptionsProps) {
  return (
    <>
      {/* Sub-page Header (Navigation Suppressed as per Task-Focused rule) */}
      <header className="w-full flex items-center px-lg py-md border-b border-outline-variant bg-surface-container-low/80 backdrop-blur-md sticky top-0 z-10">
      <button aria-label="Back" className="flex items-center justify-center w-10 h-10 rounded hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-background group">
      <span className="material-symbols-outlined text-primary group-hover:-translate-x-1 transition-transform">arrow_back</span>
      </button>
      <h1 className="ml-sm font-headline-md text-headline-md text-primary tracking-tighter uppercase">Configuration</h1>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-md md:px-lg py-xl flex flex-col gap-lg">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-lg">
      {/* Panel 1: AUDIO (Col span 4) */}
      <section className="md:col-span-4 bg-surface-container border border-outline-variant rounded p-lg flex flex-col gap-lg shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-sm pb-sm border-b border-surface-variant">
      <span className="material-symbols-outlined text-primary">graphic_eq</span>
      <h2 className="font-label-mono text-label-mono text-on-surface uppercase">Audio Telemetry</h2>
      </div>
      {/* Master Volume Slider */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase" htmlFor="master-vol">Master Output</label>
      <span className="font-label-mono text-label-mono text-primary">85%</span>
      </div>
      <input className="w-full" id="master-vol" max="100" min="0" type="range" value="85" />
      </div>
      {/* SFX Toggle */}
      <div className="flex justify-between items-center p-sm rounded hover:bg-surface-variant transition-colors group cursor-pointer">
      <div className="flex flex-col">
      <span className="font-label-mono text-label-mono text-on-surface">SFX Modules</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Feedback sounds</span>
      </div>
      {/* Active Toggle */}
      <button aria-checked={true} className="w-12 h-6 rounded-full bg-primary relative flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-surface-container shadow-[0_0_10px_rgba(137,206,255,0.2)]" role="switch">
      <div className="w-4 h-4 rounded-full bg-on-primary absolute right-1 transform transition-transform"></div>
      </button>
      </div>
      {/* Music Toggle */}
      <div className="flex justify-between items-center p-sm rounded hover:bg-surface-variant transition-colors group cursor-pointer">
      <div className="flex flex-col">
      <span className="font-label-mono text-label-mono text-on-surface">BGM Stream</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Synthwave tracks</span>
      </div>
      {/* Inactive Toggle */}
      <button aria-checked={false} className="w-12 h-6 rounded-full bg-surface-variant border border-outline-variant relative flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-surface-container" role="switch">
      <div className="w-4 h-4 rounded-full bg-on-surface absolute left-1 transform transition-transform"></div>
      </button>
      </div>
      </section>
      {/* Panel 2: GAMEPLAY (Col span 8) */}
      <section className="md:col-span-8 bg-surface-container border border-outline-variant rounded p-lg flex flex-col gap-lg shadow-[0_4px_24px_rgba(0,0,0,0.2)] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
      <span className="material-symbols-outlined text-[200px]" style={{fontVariationSettings: "'FILL' 1"}}>speed</span>
      </div>
      <div className="flex items-center gap-sm pb-sm border-b border-surface-variant relative z-10">
      <span className="material-symbols-outlined text-primary">speed</span>
      <h2 className="font-label-mono text-label-mono text-on-surface uppercase">Simulation Parameters</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-xl items-center relative z-10 flex-1 justify-center">
      {/* Level Display */}
      <div className="flex flex-col items-center gap-xs">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Entry Level</span>
      <div className="font-display-score text-display-score text-primary tabular-nums tracking-tighter shadow-primary/20 drop-shadow-[0_0_15px_rgba(137,206,255,0.5)]">
                                  09
                              </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Speed Multiplier: 1.8x</span>
      </div>
      {/* Segmented Selector */}
      <div className="flex flex-col gap-sm flex-1 w-full max-w-sm">
      <div className="flex justify-between items-end mb-xs">
      <span className="font-label-mono text-label-mono text-on-surface-variant">LVL 1</span>
      <span className="font-label-mono text-label-mono text-on-surface-variant">LVL 15</span>
      </div>
      <div className="flex gap-unit h-8">
      {/* Inactive Segments */}
      <button aria-label="Level 1" className="flex-1 bg-surface-variant border border-outline-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 2" className="flex-1 bg-surface-variant border border-outline-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 3" className="flex-1 bg-surface-variant border border-outline-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 4" className="flex-1 bg-surface-variant border border-outline-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 5" className="flex-1 bg-surface-variant border border-outline-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 6" className="flex-1 bg-surface-variant border border-outline-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 7" className="flex-1 bg-surface-variant border border-outline-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 8" className="flex-1 bg-surface-variant border border-outline-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      {/* Active Segment */}
      <button aria-label="Level 9 (Selected)" className="flex-1 bg-primary rounded-sm shadow-[0_0_10px_rgba(137,206,255,0.6)] focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-surface-container"></button>
      {/* Remaining Inactive */}
      <button aria-label="Level 10" className="flex-1 bg-surface-container-highest border border-surface-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 11" className="flex-1 bg-surface-container-highest border border-surface-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 12" className="flex-1 bg-surface-container-highest border border-surface-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 13" className="flex-1 bg-surface-container-highest border border-surface-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 14" className="flex-1 bg-surface-container-highest border border-surface-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      <button aria-label="Level 15" className="flex-1 bg-surface-container-highest border border-surface-variant rounded-sm hover:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-on-surface"></button>
      </div>
      </div>
      </div>
      </section>
      {/* Panel 3: CONTROLS (Col span 12) */}
      <section className="md:col-span-12 bg-surface-container border border-outline-variant rounded p-lg flex flex-col gap-md shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-sm pb-sm border-b border-surface-variant">
      <span className="material-symbols-outlined text-primary">gamepad</span>
      <h2 className="font-label-mono text-label-mono text-on-surface uppercase">Input Sensitivity (DAS/ARR)</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl pt-sm">
      {/* DAS Slider */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-end">
      <div className="flex flex-col">
      <label className="font-label-mono text-label-mono text-on-surface" htmlFor="das-slider">Delayed Auto Shift (DAS)</label>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Time before auto-repeat begins</span>
      </div>
      <span className="font-label-mono text-label-mono text-primary">120ms</span>
      </div>
      <input className="w-full mt-2" id="das-slider" max="300" min="50" step="10" type="range" value="120" />
      <div className="flex justify-between font-label-sm text-label-sm text-outline px-1">
      <span>Fast</span>
      <span>Slow</span>
      </div>
      </div>
      {/* ARR Slider */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-end">
      <div className="flex flex-col">
      <label className="font-label-mono text-label-mono text-on-surface" htmlFor="arr-slider">Auto Repeat Rate (ARR)</label>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Speed of repetition</span>
      </div>
      <span className="font-label-mono text-label-mono text-primary">0ms</span>
      </div>
      <input className="w-full mt-2" id="arr-slider" max="50" min="0" step="1" type="range" value="0" />
      <div className="flex justify-between font-label-sm text-label-sm text-outline px-1">
      <span>Instant</span>
      <span>Slow</span>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row justify-end items-center gap-md mt-md pt-lg border-t border-outline-variant">
      <button className="w-full sm:w-auto px-lg py-sm font-label-mono text-label-mono text-error border border-error/50 rounded hover:bg-error/10 hover:border-error transition-colors focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-background h-touch-target-min flex items-center justify-center uppercase">
                      Reset to Default
                  </button>
      <button className="w-full sm:w-auto px-lg py-sm font-label-mono text-label-mono bg-primary text-on-primary rounded hover:bg-primary-fixed hover:shadow-[0_0_15px_rgba(137,206,255,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-background h-touch-target-min flex items-center justify-center gap-sm uppercase shadow-[0_0_8px_rgba(137,206,255,0.2)]">
      <span className="material-symbols-outlined text-[20px]">save</span>
                      Save Changes
                  </button>
      </div>
      </main>
    </>
  );
}
