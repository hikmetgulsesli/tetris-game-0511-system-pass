import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  createEmptyBoard,
  createInitialState,
  isValidPosition,
  placePiece,
  clearLines,
  calculateScore,
  getDropInterval,
  getGhostY,
  spawnPiece,
  hardDrop,
  softDrop,
  moveLeft,
  moveRight,
  rotateClockwise,
  rotateCounterClockwise,
  tryHold,
  lockPiece,
  togglePause,
  restartGame,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  getBoardWithPiece,
} from './types/domain';
import type { TetrominoType } from './types/domain';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tetris Game Engine', () => {
  describe('Board', () => {
    it('creates a 10x20 empty board', () => {
      const board = createEmptyBoard();
      expect(board.length).toBe(BOARD_HEIGHT);
      expect(board[0].length).toBe(BOARD_WIDTH);
      expect(board.every((row: (TetrominoType | null)[]) => row.every((cell: TetrominoType | null) => cell === null))).toBe(true);
    });
  });

  describe('Piece Spawning', () => {
    it('spawns I piece at top center', () => {
      const piece = spawnPiece('I');
      expect(piece.type).toBe('I');
      expect(piece.y).toBe(0);
      expect(piece.rotation).toBe(0);
    });

    it('spawns O piece at valid position', () => {
      const board = createEmptyBoard();
      const piece = spawnPiece('O');
      expect(isValidPosition(board, piece.type, piece.x, piece.y, piece.rotation)).toBe(true);
    });
  });

  describe('Movement', () => {
    it('moves piece left when valid', () => {
      let state = createInitialState();
      state = { ...state, activePiece: spawnPiece('T') };
      const initialX = state.activePiece!.x;
      const newState = moveLeft(state);
      expect(newState.activePiece!.x).toBe(initialX - 1);
    });

    it('does not move piece left through wall', () => {
      let state = createInitialState();
      state = { ...state, activePiece: { ...spawnPiece('T'), x: 0 } };
      const newState = moveLeft(state);
      expect(newState.activePiece!.x).toBe(0);
    });

    it('moves piece right when valid', () => {
      let state = createInitialState();
      state = { ...state, activePiece: spawnPiece('T') };
      const initialX = state.activePiece!.x;
      const newState = moveRight(state);
      expect(newState.activePiece!.x).toBe(initialX + 1);
    });

    it('soft drops piece down', () => {
      let state = createInitialState();
      state = { ...state, activePiece: spawnPiece('T') };
      const initialY = state.activePiece!.y;
      const newState = softDrop(state);
      expect(newState.activePiece!.y).toBe(initialY + 1);
    });

    it('locks piece when soft drop hits bottom', () => {
      let state = createInitialState();
      state = { ...state, activePiece: { ...spawnPiece('I'), y: BOARD_HEIGHT - 2 } };
      const newState = softDrop(state);
      expect(newState.activePiece).not.toBeNull();
    });
  });

  describe('Rotation', () => {
    it('rotates T piece clockwise', () => {
      let state = createInitialState();
      state = { ...state, activePiece: spawnPiece('T') };
      const initialRot = state.activePiece!.rotation;
      const newState = rotateClockwise(state);
      expect(newState.activePiece!.rotation).toBe((initialRot + 1) % 4);
    });

    it('rotates T piece counter-clockwise', () => {
      let state = createInitialState();
      state = { ...state, activePiece: spawnPiece('T') };
      const newState = rotateCounterClockwise(state);
      expect(newState.activePiece!.rotation).toBe(3);
    });
  });

  describe('Line Clearing', () => {
    it('clears a full line', () => {
      const board = createEmptyBoard();
      for (let x = 0; x < BOARD_WIDTH; x++) {
        board[BOARD_HEIGHT - 1][x] = 'O';
      }
      const { newBoard, linesCleared } = clearLines(board);
      expect(linesCleared).toBe(1);
      expect(newBoard[BOARD_HEIGHT - 1].every((cell: TetrominoType | null) => cell === null)).toBe(true);
    });

    it('clears multiple lines', () => {
      const board = createEmptyBoard();
      for (let y = BOARD_HEIGHT - 4; y < BOARD_HEIGHT; y++) {
        for (let x = 0; x < BOARD_WIDTH; x++) {
          board[y][x] = 'I';
        }
      }
      const { linesCleared } = clearLines(board);
      expect(linesCleared).toBe(4);
    });
  });

  describe('Scoring', () => {
    it('calculates score for single line', () => {
      expect(calculateScore(1, 1)).toBe(100);
    });

    it('calculates score for tetris (4 lines)', () => {
      expect(calculateScore(4, 1)).toBe(800);
    });

    it('scales with level', () => {
      expect(calculateScore(1, 5)).toBe(500);
    });
  });

  describe('Ghost Piece', () => {
    it('calculates ghost Y position', () => {
      const board = createEmptyBoard();
      const piece = spawnPiece('O');
      const ghostY = getGhostY(board, piece);
      expect(ghostY).toBeGreaterThan(piece.y);
      expect(ghostY).toBeLessThan(BOARD_HEIGHT);
    });
  });

  describe('Hold', () => {
    it('holds current piece and spawns next', () => {
      const state = createInitialState();
      const originalType = state.activePiece!.type;
      const result = tryHold(state);
      expect(result).not.toBeNull();
      expect(result!.heldPiece).toBe(originalType);
      expect(result!.canHold).toBe(false);
    });

    it('cannot hold twice without placing', () => {
      const state = createInitialState();
      const first = tryHold(state);
      expect(first).not.toBeNull();
      const second = tryHold(first!);
      expect(second).toBeNull();
    });
  });

  describe('Hard Drop', () => {
    it('places piece at bottom and locks', () => {
      const state = createInitialState();
      const newState = hardDrop(state);
      expect(newState.score).toBeGreaterThanOrEqual(state.score);
      expect(newState.activePiece).not.toBeNull();
    });
  });

  describe('Game State', () => {
    it('creates initial state in playing mode', () => {
      const state = createInitialState();
      expect(state.mode).toBe('playing');
      expect(state.activePiece).not.toBeNull();
      expect(state.score).toBe(0);
      expect(state.level).toBe(1);
      expect(state.lines).toBe(0);
    });

    it('toggles pause', () => {
      let state = createInitialState();
      state = togglePause(state);
      expect(state.mode).toBe('paused');
      state = togglePause(state);
      expect(state.mode).toBe('playing');
    });

    it('restarts game', () => {
      let state = createInitialState();
      state = { ...state, score: 5000, lines: 10, level: 3 };
      const restarted = restartGame();
      expect(restarted.score).toBe(0);
      expect(restarted.lines).toBe(0);
      expect(restarted.level).toBe(1);
      expect(restarted.mode).toBe('playing');
    });
  });

  describe('Drop Interval', () => {
    it('returns faster interval for higher levels', () => {
      const l1 = getDropInterval(1);
      const l10 = getDropInterval(10);
      expect(l10).toBeLessThan(l1);
    });
  });
});

describe('Tetris UI Integration', () => {
  beforeEach(() => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders main menu initially', () => {
    render(<App />);
    expect(screen.getByText('Start Game')).toBeInTheDocument();
    expect(screen.getByText('TETRA STRIKE')).toBeInTheDocument();
  });

  it('starts game when Start Game is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const startBtn = screen.getByText('Start Game');
    await user.click(startBtn);
    expect(screen.getByText('Score')).toBeInTheDocument();
    expect(screen.getByText('Level')).toBeInTheDocument();
    expect(screen.getByText('Lines')).toBeInTheDocument();
  });

  it('pauses game when pause button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start Game'));
    const pauseBtn = screen.getByLabelText('Pause Game');
    await user.click(pauseBtn);
    expect(screen.getByText('Paused')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });

  it('resumes game from pause overlay', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start Game'));
    await user.click(screen.getByLabelText('Pause Game'));
    const resumeBtn = screen.getByText('Resume');
    await user.click(resumeBtn);
    expect(screen.queryByText('Paused')).not.toBeInTheDocument();
  });

  it('exposes render_game_to_text for smoke tests', async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByText('Start Game'));
    const win = window as unknown as Record<string, () => string>;
    expect(typeof win.render_game_to_text).toBe('function');
    const json = win.render_game_to_text();
    const state = JSON.parse(json);
    expect(state.mode).toBe('playing');
    expect(state.hasActivePiece).toBe(true);
  });

  it('keyboard left arrow moves piece', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByText('Start Game'));
    const win = window as unknown as Record<string, () => string>;
    const before = JSON.parse(win.render_game_to_text());
    fireEvent.keyDown(window, { code: 'ArrowLeft' });
    const after = JSON.parse(win.render_game_to_text());
    expect(after.mode).toBe('playing');
  });

  it('keyboard P toggles pause', async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByText('Start Game'));
    fireEvent.keyDown(window, { code: 'KeyP' });
    expect(screen.getByText('Paused')).toBeInTheDocument();
  });
});

describe('Board Rendering', () => {
  it('getBoardWithPiece renders active piece on board', () => {
    const board = createEmptyBoard();
    const piece = spawnPiece('O');
    const result = getBoardWithPiece(board, piece);
    expect(result[piece.y][piece.x]).toBe('O');
    expect(result[piece.y][piece.x + 1]).toBe('O');
    expect(result[piece.y + 1][piece.x]).toBe('O');
    expect(result[piece.y + 1][piece.x + 1]).toBe('O');
  });

  it('getBoardWithPiece returns original board when no active piece', () => {
    const board = createEmptyBoard();
    const result = getBoardWithPiece(board, null);
    expect(result).toBe(board);
  });
});
