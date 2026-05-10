// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GameBoardProps {}

export function GameBoard(props: GameBoardProps) {
  return (
    <>
      {/* Top App Bar */}
      <header className="bg-background dark:bg-background border-b border-outline-variant flex justify-between items-center w-full px-lg py-md h-16 shrink-0 z-10">
      <div className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary tracking-tighter">
                  TETRA STRIKE
              </div>
      <div className="flex items-center gap-4">
      <button aria-label="Pause Game" className="text-primary hover:text-primary transition-colors active:scale-95 duration-100 flex items-center justify-center w-touch-target-min h-touch-target-min">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>pause</span>
      </button>
      <button aria-label="Settings" className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-100 flex items-center justify-center w-touch-target-min h-touch-target-min">
      <span className="material-symbols-outlined">settings</span>
      </button>
      <button aria-label="Help" className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-100 flex items-center justify-center w-touch-target-min h-touch-target-min">
      <span className="material-symbols-outlined">help</span>
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* Side Nav Bar (Hidden on Mobile) */}
      <nav className="hidden lg:flex flex-col h-full py-lg bg-surface-container dark:bg-surface-container border-r border-outline-variant w-64 shrink-0 z-10">
      <div className="px-md mb-8">
      <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden">
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A striking digital portrait avatar featuring glowing, generative geometric shapes against a minimalist background. High-key soft lighting creates a modern aesthetic. A sophisticated palette of deep blacks and pristine whites is punctuated by vibrant cyan accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkhTkBVPTxIPRxlaYjtbSyjrgfFJyEANg0EJEN_Img9DDr3s1t1fN4mIxVTkynt62Z-W7aYHkF4xmdveo0s1IpB5X5qq6kDgD0Yjva14ES2dlLV94lwQpROLuUZ8dwnw9srcOUXrJ4HArNp4eYfDhxy-rq42MEUayFrb1IvQIwdjviuMVlP6oyl2JaQrqHm8EgyMOWgX1ldHF2veXQf-Pkp9bUSzL8hDvOYCKmMfGHTChXBDV-RSDKINAKw1NOrg3ZlSqbtRCNOvOx" />
      </div>
      <div>
      <div className="font-headline-md text-headline-md text-primary">OPERATOR</div>
      <div className="font-label-mono text-label-mono text-on-surface-variant">LVL 42</div>
      </div>
      </div>
      <button className="w-full py-3 px-4 border border-outline-variant rounded text-on-surface font-label-mono text-label-mono hover:bg-surface-bright transition-all active:scale-95 text-center">
                          UPGRADE PASS
                      </button>
      </div>
      <div className="flex-1 flex flex-col gap-2">
      <a className="flex items-center gap-4 py-3 px-4 text-primary font-bold border-l-4 border-primary bg-surface-bright/20" href="#">
      <span className="material-symbols-outlined">sports_esports</span>
      <span className="font-label-mono text-label-mono">Battle</span>
      </a>
      <a className="flex items-center gap-4 py-3 px-4 text-on-surface-variant border-l-4 border-transparent pl-4 hover:bg-surface-bright transition-all active:translate-x-1 duration-200" href="#">
      <span className="material-symbols-outlined">timer</span>
      <span className="font-label-mono text-label-mono">Sprint</span>
      </a>
      <a className="flex items-center gap-4 py-3 px-4 text-on-surface-variant border-l-4 border-transparent pl-4 hover:bg-surface-bright transition-all active:translate-x-1 duration-200" href="#">
      <span className="material-symbols-outlined">trending_up</span>
      <span className="font-label-mono text-label-mono">Marathon</span>
      </a>
      <a className="flex items-center gap-4 py-3 px-4 text-on-surface-variant border-l-4 border-transparent pl-4 hover:bg-surface-bright transition-all active:translate-x-1 duration-200" href="#">
      <span className="material-symbols-outlined">workspace_premium</span>
      <span className="font-label-mono text-label-mono">Leaderboard</span>
      </a>
      </div>
      <div className="mt-auto pt-4 border-t border-outline-variant">
      <a className="flex items-center gap-4 py-3 px-4 text-on-surface-variant pl-4 hover:bg-surface-bright transition-all active:translate-x-1 duration-200" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-mono text-label-mono">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Game Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-md md:p-lg relative overflow-y-auto">
      <div className="flex flex-col md:flex-row gap-md lg:gap-xl items-start justify-center max-w-6xl w-full">
      {/* Left Panel: Hold & Next (Mobile stacks top, Desktop left) */}
      <div className="flex flex-row md:flex-col gap-md w-full md:w-auto order-2 md:order-1 justify-center">
      {/* Hold */}
      <div className="panel p-4 rounded flex flex-col items-center min-w-[120px]">
      <div className="font-label-mono text-label-mono text-on-surface-variant mb-4 tracking-widest uppercase">Hold</div>
      <div className="w-24 h-24 bg-surface-dim border border-outline-variant rounded flex items-center justify-center relative">
      {/* L Piece in Hold */}
      <div className="grid grid-cols-3 gap-1 relative z-10 w-16 h-16 p-2">
      <div className="w-full h-full bg-[#f97316] col-start-1 row-start-2"></div>
      <div className="w-full h-full bg-[#f97316] col-start-1 row-start-1"></div>
      <div className="w-full h-full bg-[#f97316] col-start-2 row-start-2"></div>
      <div className="w-full h-full bg-[#f97316] col-start-3 row-start-2"></div>
      </div>
      </div>
      </div>
      {/* Next Queue */}
      <div className="panel p-4 rounded flex flex-col items-center min-w-[120px]">
      <div className="font-label-mono text-label-mono text-on-surface-variant mb-4 tracking-widest uppercase">Next</div>
      <div className="flex flex-col gap-4">
      {/* Next 1 (100% opacity) */}
      <div className="w-24 h-24 bg-surface-dim border border-outline-variant rounded flex items-center justify-center">
      <div className="grid grid-cols-2 gap-1 w-12 h-12">
      <div className="w-full h-full bg-[#eab308]"></div>
      <div className="w-full h-full bg-[#eab308]"></div>
      <div className="w-full h-full bg-[#eab308]"></div>
      <div className="w-full h-full bg-[#eab308]"></div>
      </div>
      </div>
      {/* Next 2 (50% opacity) */}
      <div className="w-20 h-20 bg-surface-dim border border-outline-variant rounded flex items-center justify-center opacity-50 hidden md:flex">
      <div className="flex flex-col gap-1 w-4 h-16">
      <div className="w-full h-full bg-[#06b6d4]"></div>
      <div className="w-full h-full bg-[#06b6d4]"></div>
      <div className="w-full h-full bg-[#06b6d4]"></div>
      <div className="w-full h-full bg-[#06b6d4]"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Center: Playfield */}
      <div className="order-1 md:order-2 flex flex-col items-center">
      <div className="panel p-2 rounded">
      {/* Playfield Grid (10x20 cells, cell size defined in config) */}
      <div className="w-[320px] h-[640px] bg-background relative overflow-hidden grid-bg border-2 border-outline-variant">
      {/* Ghost Piece (Bottom) */}
      <div className="absolute bottom-[32px] left-[96px] w-[128px] h-[32px] ghost-piece z-0"></div>
      {/* Active Piece (I shape, Cyan) */}
      <div className="absolute top-[160px] left-[96px] flex z-10 neon-glow-cyan">
      <div className="w-playfield-cell h-playfield-cell bg-[#06b6d4] border border-[#0891b2]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#06b6d4] border border-[#0891b2]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#06b6d4] border border-[#0891b2]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#06b6d4] border border-[#0891b2]"></div>
      </div>
      {/* Stacked Pieces (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full">
      {/* Row 1 */}
      <div className="flex">
      <div className="w-playfield-cell h-playfield-cell bg-[#3b82f6] border border-[#2563eb]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#3b82f6] border border-[#2563eb]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-transparent"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#a855f7] border border-[#9333ea]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#a855f7] border border-[#9333ea]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#a855f7] border border-[#9333ea]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-transparent"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#22c55e] border border-[#16a34a]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#22c55e] border border-[#16a34a]"></div>
      <div className="w-playfield-cell h-playfield-cell bg-[#22c55e] border border-[#16a34a]"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Panel: Stats */}
      <div className="flex flex-row md:flex-col gap-md w-full md:w-auto order-3 md:order-3 justify-center">
      <div className="panel p-6 rounded flex flex-col gap-6 min-w-[200px] w-full">
      <div>
      <div className="font-label-mono text-label-mono text-on-surface-variant mb-1 tracking-widest uppercase">Score</div>
      <div className="font-display-score text-display-score text-primary tabular-nums tracking-tighter">042,910</div>
      </div>
      <div className="h-px bg-outline-variant w-full"></div>
      <div className="flex justify-between items-center">
      <div className="font-label-mono text-label-mono text-on-surface-variant uppercase">Level</div>
      <div className="font-headline-lg text-headline-lg text-secondary">12</div>
      </div>
      <div className="flex justify-between items-center">
      <div className="font-label-mono text-label-mono text-on-surface-variant uppercase">Lines</div>
      <div className="font-headline-lg text-headline-lg text-secondary">48</div>
      </div>
      <div className="flex justify-between items-center">
      <div className="font-label-mono text-label-mono text-on-surface-variant uppercase">APM</div>
      <div className="font-headline-lg text-headline-lg text-[#22c55e]">35.2</div>
      </div>
      </div>
      {/* Keyboard Controls Hint (Desktop only) */}
      <div className="hidden md:flex panel p-4 rounded flex-col gap-3 mt-auto">
      <div className="font-label-mono text-label-mono text-on-surface-variant text-center mb-2">CONTROLS</div>
      <div className="flex justify-between items-center text-sm">
      <span className="text-on-surface">Move</span>
      <span className="bg-surface-variant text-on-surface px-2 py-1 rounded border border-outline font-label-mono">← →</span>
      </div>
      <div className="flex justify-between items-center text-sm">
      <span className="text-on-surface">Rotate</span>
      <span className="bg-surface-variant text-on-surface px-2 py-1 rounded border border-outline font-label-mono">↑ / Z X</span>
      </div>
      <div className="flex justify-between items-center text-sm">
      <span className="text-on-surface">Soft Drop</span>
      <span className="bg-surface-variant text-on-surface px-2 py-1 rounded border border-outline font-label-mono">↓</span>
      </div>
      <div className="flex justify-between items-center text-sm">
      <span className="text-on-surface">Hard Drop</span>
      <span className="bg-surface-variant text-on-surface px-2 py-1 rounded border border-outline font-label-mono">SPACE</span>
      </div>
      <div className="flex justify-between items-center text-sm">
      <span className="text-on-surface">Hold</span>
      <span className="bg-surface-variant text-on-surface px-2 py-1 rounded border border-outline font-label-mono">C</span>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-md pb-safe h-touch-target-min bg-surface-container-low dark:bg-surface-container-low border-t border-outline-variant z-50">
      <a className="flex flex-col items-center justify-center text-primary w-touch-target-min h-touch-target-min hover:text-secondary active:scale-90 transition-transform" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>videogame_asset</span>
      <span className="font-label-sm text-label-sm mt-1">Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant w-touch-target-min h-touch-target-min hover:text-secondary active:scale-90 transition-transform" href="#">
      <span className="material-symbols-outlined">group</span>
      <span className="font-label-sm text-label-sm mt-1">Social</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant w-touch-target-min h-touch-target-min hover:text-secondary active:scale-90 transition-transform" href="#">
      <span className="material-symbols-outlined">shopping_cart</span>
      <span className="font-label-sm text-label-sm mt-1">Store</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant w-touch-target-min h-touch-target-min hover:text-secondary active:scale-90 transition-transform" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-label-sm text-label-sm mt-1">Profile</span>
      </a>
      </nav>
      {/* Mobile Touch Overlays (Placeholder for actual touch zones) */}
      <div className="md:hidden fixed bottom-16 left-0 w-full h-32 flex pointer-events-none z-40">
      <div className="w-1/2 h-full flex items-end justify-start p-4">
      {/* D-Pad Placeholder Area */}
      </div>
      <div className="w-1/2 h-full flex items-end justify-end p-4">
      {/* Action Buttons Placeholder Area */}
      </div>
      </div>
    </>
  );
}
