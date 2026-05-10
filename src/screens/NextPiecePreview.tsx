// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Next Piece Preview
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface NextPiecePreviewProps {}

export function NextPiecePreview(props: NextPiecePreviewProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-background dark:bg-background border-b border-outline-variant full-width top-0 z-40">
      <div className="flex justify-between items-center w-full px-lg py-md">
      <div className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary tracking-tighter">
                      TETRA STRIKE
                  </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-100 flex items-center justify-center w-touch-target-min h-touch-target-min focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-offset-2 focus:ring-offset-background rounded">
      <span className="material-symbols-outlined">settings</span>
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-100 flex items-center justify-center w-touch-target-min h-touch-target-min focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-offset-2 focus:ring-offset-background rounded">
      <span className="material-symbols-outlined">help</span>
      </button>
      </div>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container border-r border-outline-variant docked left-0 h-full w-64 hidden lg:flex flex-col h-full py-lg z-30">
      <div className="px-md mb-lg flex items-center gap-sm">
      <div className="w-12 h-12 bg-surface-variant rounded-full overflow-hidden border border-outline-variant flex-shrink-0">
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A stylized, high-contrast avatar image suitable for a cyberpunk gaming profile. The image features neon lighting accents against a dark background. The mood is intense and futuristic. Professional studio lighting highlights the sharp features." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiFpqZu6qtMeazHrhXmNGDl-du1XsuJkiZS0cxfiMIOaSGBdYgPsmj4S4zGGq7f0n3UYZ_sogJmOMUAIrzPt4c71oIie-Q8UmmteQ9yW2KDki0pwDpUMAnf9JlVGMKXHnnB-GKXEjYb3JVz006px7xq1beRWTaHpOAlSQ5xT5mpzPyCHBzOv4338bBbaUlPPkO2RsCqb3gD5zYWJRxpJ_SHfeodpWlnFp5aBXtiS_UNVIrhXyt7dVLgv6dYz_2fFUxQQ-dMEwS2xH4" />
      </div>
      <div>
      <div className="font-headline-md text-headline-md text-primary truncate">OPERATOR</div>
      <div className="font-label-mono text-label-mono text-on-surface-variant">LVL 42</div>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-unit">
      <a className="text-primary font-bold border-l-4 border-primary pl-4 py-sm flex items-center gap-sm font-label-mono text-label-mono hover:bg-surface-bright transition-all active:translate-x-1 duration-200 focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:-outline-offset-2" href="#">
      <span className="material-symbols-outlined">sports_esports</span>
                          Battle
                      </a>
      <a className="text-on-surface-variant pl-4 py-sm flex items-center gap-sm font-label-mono text-label-mono hover:bg-surface-bright transition-all active:translate-x-1 duration-200 focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:-outline-offset-2 border-l-4 border-transparent" href="#">
      <span className="material-symbols-outlined">timer</span>
                          Sprint
                      </a>
      <a className="text-on-surface-variant pl-4 py-sm flex items-center gap-sm font-label-mono text-label-mono hover:bg-surface-bright transition-all active:translate-x-1 duration-200 focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:-outline-offset-2 border-l-4 border-transparent" href="#">
      <span className="material-symbols-outlined">trending_up</span>
                          Marathon
                      </a>
      <a className="text-on-surface-variant pl-4 py-sm flex items-center gap-sm font-label-mono text-label-mono hover:bg-surface-bright transition-all active:translate-x-1 duration-200 focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:-outline-offset-2 border-l-4 border-transparent" href="#">
      <span className="material-symbols-outlined">workspace_premium</span>
                          Leaderboard
                      </a>
      </div>
      <div className="px-md mt-auto space-y-md">
      <button className="w-full bg-transparent border border-outline-variant text-[#F8FAFC] hover:bg-[#F8FAFC] hover:text-[#0F172A] py-sm px-md rounded font-label-mono text-label-mono uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-offset-2 focus:ring-offset-surface-container">
                          UPGRADE PASS
                      </button>
      <a className="text-on-surface-variant pl-4 py-sm flex items-center gap-sm font-label-mono text-label-mono hover:bg-surface-bright transition-all active:translate-x-1 duration-200 focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:-outline-offset-2 border-l-4 border-transparent" href="#">
      <span className="material-symbols-outlined">settings</span>
                          Settings
                      </a>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-1 p-md lg:p-lg flex items-start justify-center lg:justify-start">
      {/* Next Queue Sidebar Panel */}
      <aside className="w-full max-w-[200px] bg-[#111827] border border-[#334155] rounded-DEFAULT p-md flex flex-col gap-md">
      <h2 className="font-label-mono text-label-mono text-on-surface uppercase tracking-wider text-center border-b border-[#334155] pb-sm">Next Queue</h2>
      <div className="flex flex-col items-center gap-lg pt-sm">
      {/* Immediate Next Piece (100% Opacity) */}
      <div className="flex justify-center items-center w-24 h-24">
      {/* 'T' Tetromino */}
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px]">
      <div className="tetromino-cell col-start-2 row-start-1 bg-tetromino-t neon-glow-t"></div>
      <div className="tetromino-cell col-start-1 row-start-2 bg-tetromino-t neon-glow-t"></div>
      <div className="tetromino-cell col-start-2 row-start-2 bg-tetromino-t neon-glow-t"></div>
      <div className="tetromino-cell col-start-3 row-start-2 bg-tetromino-t neon-glow-t"></div>
      </div>
      </div>
      {/* 2nd Piece in Queue (50% Opacity) */}
      <div className="flex justify-center items-center w-20 h-20 opacity-50">
      {/* 'L' Tetromino */}
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px]">
      <div className="tetromino-cell col-start-3 row-start-1 bg-tetromino-l"></div>
      <div className="tetromino-cell col-start-1 row-start-2 bg-tetromino-l"></div>
      <div className="tetromino-cell col-start-2 row-start-2 bg-tetromino-l"></div>
      <div className="tetromino-cell col-start-3 row-start-2 bg-tetromino-l"></div>
      </div>
      </div>
      {/* 3rd Piece in Queue (50% Opacity) */}
      <div className="flex justify-center items-center w-20 h-20 opacity-50">
      {/* 'I' Tetromino */}
      <div className="grid grid-cols-4 grid-rows-1 gap-[1px]">
      <div className="tetromino-cell bg-tetromino-i"></div>
      <div className="tetromino-cell bg-tetromino-i"></div>
      <div className="tetromino-cell bg-tetromino-i"></div>
      <div className="tetromino-cell bg-tetromino-i"></div>
      </div>
      </div>
      {/* 4th Piece in Queue (50% Opacity) */}
      <div className="flex justify-center items-center w-20 h-20 opacity-50">
      {/* 'O' Tetromino */}
      <div className="grid grid-cols-2 grid-rows-2 gap-[1px]">
      <div className="tetromino-cell bg-tetromino-o"></div>
      <div className="tetromino-cell bg-tetromino-o"></div>
      <div className="tetromino-cell bg-tetromino-o"></div>
      <div className="tetromino-cell bg-tetromino-o"></div>
      </div>
      </div>
      </div>
      </aside>
      {/* Placeholder for Playfield to give context */}
      <div className="hidden md:flex ml-lg flex-1 max-w-2xl h-[800px] bg-[#111827] border border-[#334155] rounded-DEFAULT items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-20"></div>
      <p className="font-label-mono text-label-mono text-on-surface-variant z-10 uppercase">Playfield Canvas Context</p>
      </div>
      </main>
      </div>
      {/* BottomNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low border-t border-outline-variant shadow-lg fixed bottom-0 w-full z-50 lg:hidden flex justify-around items-center px-md pb-safe h-touch-target-min">
      <a className="flex flex-col items-center justify-center text-primary hover:text-secondary active:scale-90 transition-transform flex-1 h-full focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-inset" href="#">
      <span className="material-symbols-outlined mb-1">videogame_asset</span>
      <span className="font-label-sm text-label-sm">Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary active:scale-90 transition-transform flex-1 h-full focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-inset" href="#">
      <span className="material-symbols-outlined mb-1">group</span>
      <span className="font-label-sm text-label-sm">Social</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary active:scale-90 transition-transform flex-1 h-full focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-inset" href="#">
      <span className="material-symbols-outlined mb-1">shopping_cart</span>
      <span className="font-label-sm text-label-sm">Store</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary active:scale-90 transition-transform flex-1 h-full focus:outline-none focus:ring-2 focus:ring-[#F8FAFC] focus:ring-inset" href="#">
      <span className="material-symbols-outlined mb-1">person</span>
      <span className="font-label-sm text-label-sm">Profile</span>
      </a>
      </nav>
    </>
  );
}
