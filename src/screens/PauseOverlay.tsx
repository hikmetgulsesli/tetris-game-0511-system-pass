// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface PauseOverlayProps {}

export function PauseOverlay(props: PauseOverlayProps) {
  return (
    <>
      {/* Simulated Game Background (Blurred Playfield Context) */}
      <div className="absolute inset-0 flex items-center justify-center p-md opacity-50">
      <div className="flex gap-lg">
      {/* Hold Panel Mock */}
      <div className="hidden md:flex flex-col w-32 h-32 border border-outline-variant bg-surface-dim p-sm items-center justify-center">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">Hold</span>
      <div className="w-16 h-16 bg-outline-variant/20 mt-sm"></div>
      </div>
      {/* Main Playfield Mock */}
      <div className="w-[320px] h-[640px] bg-surface-dim border border-outline-variant relative overflow-hidden" style={{backgroundImage: "linear-gradient(to right, #3e4850 1px, transparent 1px), linear-gradient(to bottom, #3e4850 1px, transparent 1px)", backgroundSize: "32px 32px", backgroundPosition: "-1px -1px"}}>
      {/* Simulated blocks */}
      <div className="absolute bottom-0 left-0 w-[64px] h-[32px] bg-primary/40 border border-primary"></div>
      <div className="absolute bottom-[32px] left-[32px] w-[96px] h-[32px] bg-tertiary/40 border border-tertiary"></div>
      <div className="absolute top-[320px] left-[128px] w-[64px] h-[64px] bg-secondary-fixed/40 border border-secondary-fixed"></div>
      </div>
      {/* Next Panel Mock */}
      <div className="hidden md:flex flex-col w-32 h-64 border border-outline-variant bg-surface-dim p-sm items-center justify-start gap-md">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">Next</span>
      <div className="w-16 h-16 bg-outline-variant/30"></div>
      <div className="w-16 h-16 bg-outline-variant/20"></div>
      <div className="w-16 h-16 bg-outline-variant/10"></div>
      </div>
      </div>
      </div>
      {/* Pause Overlay (The Active Task) */}
      <div className="absolute inset-0 z-50 bg-background/85 backdrop-blur-md flex items-center justify-center p-md">
      {/* Pause Menu Card */}
      <div className="bg-surface border border-outline-variant flex flex-col items-center justify-center p-xl w-full max-w-[360px] relative overflow-hidden">
      {/* Decorative Tech Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 m-2"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 m-2"></div>
      {/* Title */}
      <h1 className="font-headline-lg text-headline-lg text-primary tracking-widest uppercase mb-xl flex flex-col items-center gap-xs" style={{textShadow: "0 0 16px rgba(137, 206, 255, 0.4)"}}>
      <span className="material-symbols-outlined text-[48px]" style={{fontVariationSettings: "'FILL' 1"}}>pause_circle</span>
                      Paused
                  </h1>
      {/* Action Buttons Navigation Area */}
      <nav aria-label="Pause Menu" className="w-full flex flex-col gap-md">
      {/* Resume Action */}
      <button className="w-full h-touch-target-min flex items-center justify-center gap-sm border border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary transition-all duration-200 font-label-mono text-label-mono uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface">
      <span className="material-symbols-outlined">play_arrow</span>
                          Resume
                      </button>
      {/* Restart Action */}
      <button className="w-full h-touch-target-min flex items-center justify-center gap-sm border border-outline-variant bg-transparent text-on-surface hover:bg-on-surface hover:text-surface transition-all duration-200 font-label-mono text-label-mono uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-surface">
      <span className="material-symbols-outlined">replay</span>
                          Restart
                      </button>
      {/* Settings Action */}
      <button className="w-full h-touch-target-min flex items-center justify-center gap-sm border border-outline-variant bg-transparent text-on-surface hover:bg-on-surface hover:text-surface transition-all duration-200 font-label-mono text-label-mono uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-surface">
      <span className="material-symbols-outlined">settings</span>
                          Settings
                      </button>
      {/* Divider */}
      <div className="w-full h-px bg-outline-variant my-sm"></div>
      {/* Main Menu Action */}
      <button className="w-full h-touch-target-min flex items-center justify-center gap-sm border border-outline-variant bg-transparent text-on-surface-variant hover:border-error hover:text-error hover:bg-error/10 transition-all duration-200 font-label-mono text-label-mono uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface">
      <span className="material-symbols-outlined">logout</span>
                          Main Menu
                      </button>
      </nav>
      </div>
      </div>
    </>
  );
}
