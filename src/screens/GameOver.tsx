// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GameOverProps {}

export function GameOver(props: GameOverProps) {
  return (
    <>
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      {/* Radial gradient for center focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f1418_70%)] pointer-events-none"></div>
      <main className="relative z-10 w-full max-w-2xl flex flex-col items-center">
      {/* Header */}
      <div className="mb-xl text-center">
      <h1 className="font-display-score text-display-score text-error uppercase tracking-widest neon-glow-error mb-sm">
                      Game Over
                  </h1>
      <p className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Grid sequence terminated
                  </p>
      </div>
      {/* Stats Bento Grid */}
      <div className="grid grid-cols-2 gap-md w-full mb-xl">
      {/* Final Score Main Card */}
      <div className="col-span-2 bg-surface-container border border-outline-variant p-xl flex flex-col items-center justify-center relative group">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary opacity-50 shadow-[0_0_8px_rgba(137,206,255,0.8)]"></div>
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-[0.2em] mb-sm">Final Score</span>
      <span className="font-display-score text-[64px] leading-none text-primary tracking-tighter">
                          284,500
                      </span>
      </div>
      {/* Max Level Card */}
      <div className="bg-surface-container border border-outline-variant p-lg flex flex-col items-center justify-center group hover:bg-surface-bright transition-colors duration-300">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-sm">Max Level</span>
      <div className="flex items-baseline gap-xs">
      <span className="font-headline-lg text-headline-lg text-on-surface">18</span>
      </div>
      </div>
      {/* Lines Cleared Card */}
      <div className="bg-surface-container border border-outline-variant p-lg flex flex-col items-center justify-center group hover:bg-surface-bright transition-colors duration-300">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-sm">Lines Cleared</span>
      <div className="flex items-baseline gap-xs">
      <span className="font-headline-lg text-headline-lg text-on-surface">142</span>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-md w-full">
      <button className="flex-1 bg-primary/10 border border-primary text-primary px-lg py-md font-label-mono text-label-mono uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-sm group relative overflow-hidden">
      <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
      <span className="material-symbols-outlined text-[20px] relative z-10 group-hover:rotate-180 transition-transform duration-500">replay</span>
      <span className="relative z-10">Play Again</span>
      </button>
      <div className="flex gap-md flex-1">
      <button className="flex-1 bg-surface border border-outline-variant text-on-surface px-sm py-md font-label-mono text-label-mono uppercase tracking-wider hover:bg-surface-bright hover:border-outline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-outline focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">share</span>
      <span className="hidden sm:inline">Share</span>
      </button>
      <button className="flex-1 bg-surface border border-outline-variant text-on-surface px-sm py-md font-label-mono text-label-mono uppercase tracking-wider hover:bg-surface-bright hover:border-outline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-outline focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">menu</span>
      <span className="hidden sm:inline">Menu</span>
      </button>
      </div>
      </div>
      </main>
    </>
  );
}
