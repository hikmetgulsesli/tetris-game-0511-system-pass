import { useEffect } from 'react';
import { useAppState } from './hooks/useAppState';
import { AppProvider, useApp } from './contexts/AppContext';
import { MainMenu } from './screens/MainMenu';
import { GameBoard } from './screens/GameBoard';
import { PauseOverlay } from './screens/PauseOverlay';
import { GameOver } from './screens/GameOver';
import './App.css';

function KeyboardHandler() {
  const { game, actions } = useApp();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (game.mode === 'menu') {
        if (e.code === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          actions.startGame();
        }
        return;
      }
      if (e.code === 'KeyP' || e.code === 'Escape') {
        e.preventDefault();
        actions.pauseGame();
        return;
      }
      if (game.mode !== 'playing') return;
      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          e.preventDefault();
          actions.moveLeft();
          break;
        case 'ArrowRight':
        case 'KeyD':
          e.preventDefault();
          actions.moveRight();
          break;
        case 'ArrowUp':
        case 'KeyW':
        case 'KeyX':
          e.preventDefault();
          actions.rotateCW();
          break;
        case 'KeyZ':
          e.preventDefault();
          actions.rotateCCW();
          break;
        case 'ArrowDown':
        case 'KeyS':
          e.preventDefault();
          actions.softDrop();
          break;
        case 'Space':
          e.preventDefault();
          actions.hardDrop();
          break;
        case 'KeyC':
          e.preventDefault();
          actions.holdPiece();
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [game.mode, actions]);

  return null;
}

export default function App() {
  const state = useAppState();
  const { game, actions } = state;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as unknown as Record<string, unknown>).render_game_to_text = () =>
        JSON.stringify({
          mode: game.mode,
          score: game.score,
          level: game.level,
          lines: game.lines,
          gameOver: game.gameOver,
          hasActivePiece: !!game.activePiece,
          heldPiece: game.heldPiece,
          nextQueueLength: game.nextQueue.length,
        });
    }
  }, [game]);

  return (
    <AppProvider state={state}>
      <KeyboardHandler />
      <div className="min-h-screen bg-[#0f172a] text-[#F8FAFC] flex flex-col overflow-hidden relative" data-setfarm-root="tetris">
        {game.mode === 'menu' && (
          <MainMenu onStartGame={actions.startGame} onOptions={() => {}} onHelp={() => {}} onExit={() => {}} />
        )}
        {(game.mode === 'playing' || game.mode === 'paused') && (
          <>
            <GameBoard
              game={game}
              onPause={actions.pauseGame}
              onSettings={() => {}}
              onHelp={() => {}}
            />
            {game.mode === 'paused' && (
              <PauseOverlay
                onResume={actions.resumeGame}
                onRestart={actions.restart}
                onSettings={() => {}}
                onMainMenu={() => actions.restart()}
              />
            )}
          </>
        )}
        {game.mode === 'gameover' && (
          <GameOver score={game.score} level={game.level} lines={game.lines} onPlayAgain={actions.restart} onShare={() => {}} onMenu={() => actions.restart()} />
        )}
      </div>
    </AppProvider>
  );
}
