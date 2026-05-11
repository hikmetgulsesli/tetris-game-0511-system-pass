import { useState, useCallback, useRef, useEffect } from 'react';
import {
  GameState,
  GameOptions,
  DEFAULT_OPTIONS,
  createInitialState,
  createMenuState,
  hardDrop,
  softDrop,
  moveLeft,
  moveRight,
  rotateClockwise,
  rotateCounterClockwise,
  tryHold,
  togglePause,
  restartGame,
  getDropInterval,
} from '../types/domain';

export interface AppActions {
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  restart: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  rotateCW: () => void;
  rotateCCW: () => void;
  softDrop: () => void;
  hardDrop: () => void;
  holdPiece: () => void;
  setOptions: (opts: Partial<GameOptions>) => void;
}

export interface AppState {
  game: GameState;
  options: GameOptions;
  actions: AppActions;
}

export function useAppState(): AppState {
  const [options, setOptionsState] = useState<GameOptions>(DEFAULT_OPTIONS);
  const [game, setGame] = useState<GameState>(() => createMenuState());
  const gameRef = useRef(game);
  gameRef.current = game;

  const lastDropTimeRef = useRef(0);
  const dropIntervalRef = useRef(getDropInterval(game.level));
  const rafRef = useRef(0);

  useEffect(() => {
    dropIntervalRef.current = getDropInterval(game.level);
  }, [game.level]);

  const tick = useCallback((timestamp: number) => {
    const currentGame = gameRef.current;
    if (currentGame.mode !== 'playing' || currentGame.gameOver) {
      rafRef.current = requestAnimationFrame(tick);
      return;
    }
    if (!lastDropTimeRef.current) lastDropTimeRef.current = timestamp;
    const elapsed = timestamp - lastDropTimeRef.current;
    if (elapsed >= dropIntervalRef.current) {
      lastDropTimeRef.current = timestamp;
      setGame((prev) => softDrop(prev));
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const startGame = useCallback(() => {
    const newGame = restartGame(options);
    setGame(newGame);
    lastDropTimeRef.current = 0;
  }, [options]);

  const pauseGame = useCallback(() => {
    setGame((prev) => togglePause(prev));
  }, []);

  const resumeGame = useCallback(() => {
    setGame((prev) => (prev.mode === 'paused' ? { ...prev, mode: 'playing' } : prev));
  }, []);

  const restart = useCallback(() => {
    const newGame = restartGame(options);
    setGame(newGame);
    lastDropTimeRef.current = 0;
  }, [options]);

  const moveLeftAction = useCallback(() => {
    setGame((prev) => (prev.mode === 'playing' ? moveLeft(prev) : prev));
  }, []);

  const moveRightAction = useCallback(() => {
    setGame((prev) => (prev.mode === 'playing' ? moveRight(prev) : prev));
  }, []);

  const rotateCWAction = useCallback(() => {
    setGame((prev) => (prev.mode === 'playing' ? rotateClockwise(prev) : prev));
  }, []);

  const rotateCCWAction = useCallback(() => {
    setGame((prev) => (prev.mode === 'playing' ? rotateCounterClockwise(prev) : prev));
  }, []);

  const softDropAction = useCallback(() => {
    setGame((prev) => (prev.mode === 'playing' ? softDrop(prev) : prev));
  }, []);

  const hardDropAction = useCallback(() => {
    setGame((prev) => (prev.mode === 'playing' ? hardDrop(prev) : prev));
  }, []);

  const holdPieceAction = useCallback(() => {
    setGame((prev) => {
      if (prev.mode !== 'playing') return prev;
      const result = tryHold(prev);
      return result || prev;
    });
  }, []);

  const setOptions = useCallback((opts: Partial<GameOptions>) => {
    setOptionsState((prev) => ({ ...prev, ...opts }));
  }, []);

  const actions: AppActions = {
    startGame,
    pauseGame,
    resumeGame,
    restart,
    moveLeft: moveLeftAction,
    moveRight: moveRightAction,
    rotateCW: rotateCWAction,
    rotateCCW: rotateCCWAction,
    softDrop: softDropAction,
    hardDrop: hardDropAction,
    holdPiece: holdPieceAction,
    setOptions,
  };

  return { game, options, actions };
}
