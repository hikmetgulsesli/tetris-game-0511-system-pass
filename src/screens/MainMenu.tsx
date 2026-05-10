// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface MainMenuProps {}

export function MainMenu(props: MainMenuProps) {
  return (
    <>
      {/* Top Navigation AppBar - Using Brand Anchor JSON */}
      <header className="bg-background dark:bg-background border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-lg py-md docked full-width top-0 z-50">
      <div className="flex items-center gap-md">
      <span className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary tracking-tighter">TETRA STRIKE</span>
      </div>
      <div className="flex items-center gap-md">
      <button aria-label="settings" className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-100 p-sm rounded-DEFAULT hover:bg-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      </button>
      <button aria-label="help" className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-100 p-sm rounded-DEFAULT hover:bg-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>help</span>
      </button>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center relative p-lg md:p-xl z-10">
      {/* Background Decor/Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)"}}></div>
      <div className="absolute inset-0 z-0 pointer-events-none border border-outline-variant/30 rounded-xl m-lg" style={{backgroundImage: "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: "0.1"}}></div>
      <div className="z-10 w-full max-w-md bg-[#111827] border border-[#334155] rounded-xl p-xl shadow-[0_0_30px_rgba(14,165,233,0.1)] flex flex-col gap-lg items-center text-center relative overflow-hidden backdrop-blur-sm">
      {/* Subtle glow behind menu */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-tertiary opacity-10 rounded-full blur-3xl"></div>
      <div className="mb-xl">
      <h1 className="font-display-score text-display-score text-primary tracking-tighter" style={{textShadow: "0 0 10px rgba(137, 206, 255, 0.5)"}}>TETRA<br />STRIKE</h1>
      <p className="font-label-mono text-label-mono text-on-surface-variant mt-sm tracking-widest uppercase">System Initialized</p>
      </div>
      <div className="flex flex-col gap-md w-full max-w-xs">
      {/* Start Game - Primary Action */}
      <button className="group relative w-full h-touch-target-min flex items-center justify-center border border-[#334155] bg-transparent text-[#F8FAFC] font-label-mono text-label-mono uppercase tracking-widest transition-all duration-200 hover:bg-[#F8FAFC] hover:text-[#0F172A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-offset-2 focus:ring-offset-[#111827] overflow-hidden">
      <span className="relative z-10 flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                              Start Game
                          </span>
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: "inset 0 0 15px rgba(137, 206, 255, 0.5)"}}></div>
      </button>
      {/* Resume Game - Disabled State */}
      <button className="w-full h-touch-target-min flex items-center justify-center border border-[#334155]/50 bg-transparent text-on-surface-variant/50 font-label-mono text-label-mono uppercase tracking-widest cursor-not-allowed opacity-50 relative" disabled={true}>
      <span className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">resume</span>
                              Resume
                          </span>
      {/* Strike through effect for disabled visual (optional, sticking to requested style) */}
      </button>
      {/* Options */}
      <button className="w-full h-touch-target-min flex items-center justify-center border border-[#334155] bg-transparent text-[#F8FAFC] font-label-mono text-label-mono uppercase tracking-widest transition-all duration-200 hover:bg-[#F8FAFC] hover:text-[#0F172A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-offset-2 focus:ring-offset-[#111827]">
      <span className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">tune</span>
                              Options
                          </span>
      </button>
      {/* Help */}
      <button className="w-full h-touch-target-min flex items-center justify-center border border-[#334155] bg-transparent text-[#F8FAFC] font-label-mono text-label-mono uppercase tracking-widest transition-all duration-200 hover:bg-[#F8FAFC] hover:text-[#0F172A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-offset-2 focus:ring-offset-[#111827]">
      <span className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">school</span>
                              Help
                          </span>
      </button>
      </div>
      <div className="mt-xl w-full max-w-xs border-t border-[#334155] pt-lg">
      {/* Exit */}
      <button className="w-full h-touch-target-min flex items-center justify-center bg-transparent text-error hover:text-error-container hover:bg-error/10 font-label-mono text-label-mono uppercase tracking-widest transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-[#111827] rounded-DEFAULT">
      <span className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">logout</span>
                              Exit
                          </span>
      </button>
      </div>
      </div>
      </main>
      {/* SideNavBar & BottomNavBar from JSON are suppressed based on Semantic Shell Mandate (Linear/Transactional/Menu Intent) */}
    </>
  );
}
