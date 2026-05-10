// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ControlsHelpProps {}

export function ControlsHelp(props: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-background dark:bg-background text-primary dark:text-primary font-headline-md text-headline-md docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-lg py-md z-50">
      <div className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary tracking-tighter">TETRA STRIKE</div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-100 flex items-center justify-center w-touch-target-min h-touch-target-min">
      <span className="material-symbols-outlined">settings</span>
      </button>
      <button className="text-primary hover:text-primary transition-colors active:scale-95 duration-100 flex items-center justify-center w-touch-target-min h-touch-target-min">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>help</span>
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden relative">
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary font-label-mono text-label-mono docked left-0 h-full w-64 border-r border-outline-variant flat no shadows hidden lg:flex flex-col h-full py-lg z-40">
      <div className="px-lg mb-xl flex items-center gap-md">
      <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface-variant">person</span>
      </div>
      <div>
      <div className="font-headline-md text-headline-md text-primary">OPERATOR</div>
      <div className="text-on-surface-variant">LVL 42</div>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-sm">
      <a className="text-on-surface-variant pl-4 hover:bg-surface-bright transition-all active:translate-x-1 duration-200 py-md flex items-center gap-md" href="#">
      <span className="material-symbols-outlined">sports_esports</span>
      <span>Battle</span>
      </a>
      <a className="text-on-surface-variant pl-4 hover:bg-surface-bright transition-all active:translate-x-1 duration-200 py-md flex items-center gap-md" href="#">
      <span className="material-symbols-outlined">timer</span>
      <span>Sprint</span>
      </a>
      <a className="text-on-surface-variant pl-4 hover:bg-surface-bright transition-all active:translate-x-1 duration-200 py-md flex items-center gap-md" href="#">
      <span className="material-symbols-outlined">trending_up</span>
      <span>Marathon</span>
      </a>
      <a className="text-on-surface-variant pl-4 hover:bg-surface-bright transition-all active:translate-x-1 duration-200 py-md flex items-center gap-md" href="#">
      <span className="material-symbols-outlined">workspace_premium</span>
      <span>Leaderboard</span>
      </a>
      </div>
      <div className="px-lg mt-auto flex flex-col gap-md">
      <button className="bg-primary-container text-on-primary-container font-label-mono text-label-mono py-md rounded-DEFAULT hover:bg-primary transition-colors active:scale-95 w-full text-center border border-primary">UPGRADE PASS</button>
      <a className="text-on-surface-variant pl-4 hover:bg-surface-bright transition-all active:translate-x-1 duration-200 py-md flex items-center gap-md" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span>Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-md lg:p-xl pb-[100px] lg:pb-xl flex flex-col gap-xl items-center">
      {/* Header Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center gap-sm">
      <h1 className="font-headline-lg text-headline-lg text-primary">Controls &amp; Rules</h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Master the mechanics to dominate the playfield. Quick reactions and strategic drops are your key to victory.</p>
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-md lg:gap-xl">
      {/* Keyboard Mappings (Bento Box 1) */}
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-lg flex flex-col gap-md relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="flex items-center gap-sm text-primary mb-sm">
      <span className="material-symbols-outlined">keyboard</span>
      <h2 className="font-headline-md text-headline-md">Keyboard Controls</h2>
      </div>
      <div className="grid grid-cols-2 gap-sm">
      {/* Key Bindings */}
      <div className="flex flex-col gap-xs bg-surface border border-outline-variant p-sm rounded-DEFAULT items-center text-center">
      <div className="flex gap-xs">
      <kbd className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-sm py-xs rounded-sm border border-outline">←</kbd>
      <kbd className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-sm py-xs rounded-sm border border-outline">→</kbd>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Move Left / Right</span>
      </div>
      <div className="flex flex-col gap-xs bg-surface border border-outline-variant p-sm rounded-DEFAULT items-center text-center">
      <kbd className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-sm py-xs rounded-sm border border-outline">↑</kbd>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Rotate Piece</span>
      </div>
      <div className="flex flex-col gap-xs bg-surface border border-outline-variant p-sm rounded-DEFAULT items-center text-center">
      <kbd className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-sm py-xs rounded-sm border border-outline">↓</kbd>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Soft Drop</span>
      </div>
      <div className="flex flex-col gap-xs bg-surface border border-outline-variant p-sm rounded-DEFAULT items-center text-center">
      <kbd className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-md py-xs rounded-sm border border-outline">Space</kbd>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Hard Drop</span>
      </div>
      <div className="flex flex-col gap-xs bg-surface border border-outline-variant p-sm rounded-DEFAULT items-center text-center">
      <kbd className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-sm py-xs rounded-sm border border-outline">C</kbd>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Hold Piece</span>
      </div>
      <div className="flex flex-col gap-xs bg-surface border border-outline-variant p-sm rounded-DEFAULT items-center text-center">
      <kbd className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-sm py-xs rounded-sm border border-outline">P</kbd>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Pause Game</span>
      </div>
      </div>
      </div>
      {/* Mobile Touch Areas (Bento Box 2) */}
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-lg flex flex-col gap-md relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-bl from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="flex items-center gap-sm text-tertiary mb-sm">
      <span className="material-symbols-outlined">touch_app</span>
      <h2 className="font-headline-md text-headline-md">Touch Controls</h2>
      </div>
      <div className="flex-1 bg-surface border border-outline-variant rounded-DEFAULT relative overflow-hidden flex items-center justify-center min-h-[200px]">
      {/* Abstract Phone Screen Representation */}
      <div className="absolute inset-md border-2 border-outline-variant rounded-lg border-dashed opacity-50 flex flex-col">
      {/* Upper Playfield Area */}
      <div className="flex-1 bg-surface-variant/20 flex items-center justify-center border-b border-outline-variant border-dashed">
      <span className="font-label-mono text-label-mono text-on-surface-variant opacity-50">TAP = ROTATE</span>
      </div>
      {/* Lower Control Area */}
      <div className="h-1/3 flex">
      <div className="flex-1 border-r border-outline-variant border-dashed flex items-center justify-center bg-primary/10">
      <span className="material-symbols-outlined text-primary">swipe_left</span>
      </div>
      <div className="flex-1 flex items-center justify-center bg-tertiary/10">
      <span className="material-symbols-outlined text-tertiary">swipe_down</span>
      </div>
      <div className="flex-1 border-l border-outline-variant border-dashed flex items-center justify-center bg-primary/10">
      <span className="material-symbols-outlined text-primary">swipe_right</span>
      </div>
      </div>
      </div>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant text-center mt-sm">Swipe down quickly for Hard Drop. Swipe up for Hold.</p>
      </div>
      {/* Rules Section (Bento Box 3 - Spans full width on md) */}
      <div className="md:col-span-2 bg-surface-container-low border border-outline-variant rounded-lg p-lg flex flex-col gap-md relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="flex items-center gap-sm text-secondary mb-sm">
      <span className="material-symbols-outlined">gavel</span>
      <h2 className="font-headline-md text-headline-md">Core Rules</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      <div className="bg-surface border border-outline-variant p-md rounded-DEFAULT flex flex-col gap-sm items-start">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-sm">
      <span className="material-symbols-outlined">horizontal_rule</span>
      </div>
      <h3 className="font-label-mono text-label-mono text-on-surface">Clear Lines to Score</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Fill a horizontal row completely to clear it. Clearing multiple lines simultaneously yields massive bonus multipliers.</p>
      </div>
      <div className="bg-surface border border-outline-variant p-md rounded-DEFAULT flex flex-col gap-sm items-start">
      <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary mb-sm">
      <span className="material-symbols-outlined">speed</span>
      </div>
      <h3 className="font-label-mono text-label-mono text-on-surface">Level Up for Speed</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Every 10 lines cleared advances your level. Gravity increases, reducing your reaction time. Stay focused to survive.</p>
      </div>
      <div className="bg-surface border border-outline-variant p-md rounded-DEFAULT flex flex-col gap-sm items-start">
      <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error mb-sm">
      <span className="material-symbols-outlined">warning</span>
      </div>
      <h3 className="font-label-mono text-label-mono text-on-surface">Avoid Topping Out</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">If the stack of blocks reaches the top of the playfield grid, the system locks and the session is terminated.</p>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* BottomNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-label-sm text-label-sm text-primary fixed bottom-0 w-full z-50 border-t border-outline-variant shadow-lg lg:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-md pb-safe h-touch-target-min">
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary active:scale-90 transition-transform w-touch-target-min h-touch-target-min" href="#">
      <span className="material-symbols-outlined">videogame_asset</span>
      <span>Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary active:scale-90 transition-transform w-touch-target-min h-touch-target-min" href="#">
      <span className="material-symbols-outlined">group</span>
      <span>Social</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary active:scale-90 transition-transform w-touch-target-min h-touch-target-min" href="#">
      <span className="material-symbols-outlined">shopping_cart</span>
      <span>Store</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary active:scale-90 transition-transform w-touch-target-min h-touch-target-min" href="#">
      <span className="material-symbols-outlined">person</span>
      <span>Profile</span>
      </a>
      </nav>
    </>
  );
}
