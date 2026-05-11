export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export type GameMode = 'menu' | 'playing' | 'paused' | 'gameover';

export interface Position {
  x: number;
  y: number;
}

export interface Tetromino {
  type: TetrominoType;
  shape: number[][]; // 1 = filled, 0 = empty
  color: string;
  borderColor: string;
}

export const TETROMINO_COLORS: Record<TetrominoType, { color: string; borderColor: string }> = {
  I: { color: '#06b6d4', borderColor: '#0891b2' },
  O: { color: '#eab308', borderColor: '#ca8a04' },
  T: { color: '#a855f7', borderColor: '#9333ea' },
  S: { color: '#22c55e', borderColor: '#16a34a' },
  Z: { color: '#ef4444', borderColor: '#dc2626' },
  J: { color: '#3b82f6', borderColor: '#2563eb' },
  L: { color: '#f97316', borderColor: '#ea580c' },
};

export const TETROMINO_SHAPES: Record<TetrominoType, number[][][]> = {
  I: [
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
    [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
  ],
  O: [
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
  ],
  T: [
    [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
    [[0, 1, 0], [1, 1, 0], [0, 1, 0]],
  ],
  S: [
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 1], [0, 0, 1]],
    [[0, 0, 0], [0, 1, 1], [1, 1, 0]],
    [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
  ],
  Z: [
    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 0], [0, 1, 1]],
    [[0, 1, 0], [1, 1, 0], [1, 0, 0]],
  ],
  J: [
    [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
    [[0, 1, 0], [0, 1, 0], [1, 1, 0]],
  ],
  L: [
    [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 0], [0, 1, 1]],
    [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
    [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
  ],
};

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const VISIBLE_HEIGHT = 20;

export interface ActivePiece {
  type: TetrominoType;
  x: number;
  y: number;
  rotation: number;
}

export interface GameState {
  board: (TetrominoType | null)[][];
  activePiece: ActivePiece | null;
  heldPiece: TetrominoType | null;
  canHold: boolean;
  nextQueue: TetrominoType[];
  score: number;
  level: number;
  lines: number;
  mode: GameMode;
  gameOver: boolean;
}

export interface GameOptions {
  startLevel: number;
  das: number;
  arr: number;
}

export const DEFAULT_OPTIONS: GameOptions = {
  startLevel: 1,
  das: 120,
  arr: 0,
};

export const SCORE_TABLE: Record<number, number> = {
  1: 100,
  2: 300,
  3: 500,
  4: 800,
};

export function createEmptyBoard(): (TetrominoType | null)[][] {
  return Array.from({ length: BOARD_HEIGHT }, () => Array.from({ length: BOARD_WIDTH }, () => null));
}

export function getPieceShape(type: TetrominoType, rotation: number): number[][] {
  return TETROMINO_SHAPES[type][rotation % TETROMINO_SHAPES[type].length];
}

export function isValidPosition(
  board: (TetrominoType | null)[][],
  type: TetrominoType,
  x: number,
  y: number,
  rotation: number,
): boolean {
  const shape = getPieceShape(type, rotation);
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] === 0) continue;
      const boardX = x + col;
      const boardY = y + row;
      if (boardX < 0 || boardX >= BOARD_WIDTH || boardY >= BOARD_HEIGHT) return false;
      if (boardY >= 0 && board[boardY][boardX] !== null) return false;
    }
  }
  return true;
}

export function placePiece(
  board: (TetrominoType | null)[][],
  piece: ActivePiece,
): (TetrominoType | null)[][] {
  const newBoard = board.map((row) => [...row]);
  const shape = getPieceShape(piece.type, piece.rotation);
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] === 0) continue;
      const boardX = piece.x + col;
      const boardY = piece.y + row;
      if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
        newBoard[boardY][boardX] = piece.type;
      }
    }
  }
  return newBoard;
}

export function clearLines(board: (TetrominoType | null)[][]): {
  newBoard: (TetrominoType | null)[][];
  linesCleared: number;
} {
  const newBoard: (TetrominoType | null)[][] = [];
  let linesCleared = 0;
  for (let row = 0; row < BOARD_HEIGHT; row++) {
    if (board[row].every((cell) => cell !== null)) {
      linesCleared++;
    } else {
      newBoard.push([...board[row]]);
    }
  }
  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array.from({ length: BOARD_WIDTH }, () => null));
  }
  return { newBoard, linesCleared };
}

export function calculateScore(linesCleared: number, level: number): number {
  const base = SCORE_TABLE[linesCleared] || 0;
  return base * level;
}

export function getDropInterval(level: number): number {
  // Classic Tetris gravity formula (frames at 60fps), converted to ms
  const frames = Math.pow(0.8 - (level - 1) * 0.007, level - 1) * 60;
  return Math.max(frames * 16.67, 16.67);
}

export function getGhostY(
  board: (TetrominoType | null)[][],
  piece: ActivePiece,
): number {
  let ghostY = piece.y;
  while (isValidPosition(board, piece.type, piece.x, ghostY + 1, piece.rotation)) {
    ghostY++;
  }
  return ghostY;
}

export function tryRotate(
  board: (TetrominoType | null)[][],
  piece: ActivePiece,
  direction: number,
): ActivePiece | null {
  const newRotation = (piece.rotation + direction + 4) % 4;
  const kicks = getWallKicks(piece.type, piece.rotation, newRotation);
  for (const [dx, dy] of kicks) {
    if (isValidPosition(board, piece.type, piece.x + dx, piece.y + dy, newRotation)) {
      return { ...piece, rotation: newRotation, x: piece.x + dx, y: piece.y + dy };
    }
  }
  return null;
}

// SRS wall kick data (simplified)
const JLSTZ_WALL_KICKS: number[][][] = [
  [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
  [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
  [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
  [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
];

const I_WALL_KICKS: number[][][] = [
  [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
  [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
  [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
  [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
];

function getWallKicks(type: TetrominoType, fromRot: number, toRot: number): number[][] {
  if (type === 'O') return [[0, 0]];
  const offset = fromRot * 2 + (toRot > fromRot ? 0 : 1);
  const kicks = type === 'I' ? I_WALL_KICKS : JLSTZ_WALL_KICKS;
  return kicks[offset % 4] || [[0, 0]];
}

export function tryMove(
  board: (TetrominoType | null)[][],
  piece: ActivePiece,
  dx: number,
  dy: number,
): ActivePiece | null {
  if (isValidPosition(board, piece.type, piece.x + dx, piece.y + dy, piece.rotation)) {
    return { ...piece, x: piece.x + dx, y: piece.y + dy };
  }
  return null;
}

export function generateBag(): TetrominoType[] {
  const pieces: TetrominoType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
  // Fisher-Yates shuffle
  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
  }
  return pieces;
}

export function getNextPieces(queue: TetrominoType[], count: number): TetrominoType[] {
  const result: TetrominoType[] = [];
  const extended = [...queue];
  while (extended.length < count) {
    extended.push(...generateBag());
  }
  for (let i = 0; i < count; i++) {
    result.push(extended[i]);
  }
  return result;
}

export function spawnPiece(type: TetrominoType): ActivePiece {
  const shape = getPieceShape(type, 0);
  const pieceWidth = shape[0].length;
  return {
    type,
    x: Math.floor((BOARD_WIDTH - pieceWidth) / 2),
    y: 0,
    rotation: 0,
  };
}

export function createInitialState(options: GameOptions = DEFAULT_OPTIONS): GameState {
  const bag = generateBag();
  const nextQueue = bag.slice(1);
  const firstPiece = bag[0];
  const activePiece = spawnPiece(firstPiece);
  const board = createEmptyBoard();
  // Check if spawn is valid
  const valid = isValidPosition(board, activePiece.type, activePiece.x, activePiece.y, activePiece.rotation);
  return {
    board,
    activePiece: valid ? activePiece : null,
    heldPiece: null,
    canHold: true,
    nextQueue,
    score: 0,
    level: options.startLevel,
    lines: 0,
    mode: valid ? 'playing' : 'gameover',
    gameOver: !valid,
  };
}

export function createMenuState(): GameState {
  return {
    board: createEmptyBoard(),
    activePiece: null,
    heldPiece: null,
    canHold: true,
    nextQueue: [],
    score: 0,
    level: DEFAULT_OPTIONS.startLevel,
    lines: 0,
    mode: 'menu',
    gameOver: false,
  };
}

export function getBoardWithPiece(
  board: (TetrominoType | null)[][],
  piece: ActivePiece | null,
): (TetrominoType | null)[][] {
  if (!piece) return board;
  const newBoard = board.map((row) => [...row]);
  const shape = getPieceShape(piece.type, piece.rotation);
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] === 0) continue;
      const boardX = piece.x + col;
      const boardY = piece.y + row;
      if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
        newBoard[boardY][boardX] = piece.type;
      }
    }
  }
  return newBoard;
}

export function tryHold(
  state: GameState,
): GameState | null {
  if (!state.canHold || !state.activePiece) return null;
  const currentType = state.activePiece.type;
  const held = state.heldPiece;
  if (held) {
    const newPiece = spawnPiece(held);
    if (!isValidPosition(state.board, newPiece.type, newPiece.x, newPiece.y, newPiece.rotation)) {
      return null;
    }
    return {
      ...state,
      activePiece: newPiece,
      heldPiece: currentType,
      canHold: false,
    };
  }
  const nextType = state.nextQueue[0];
  const nextQueue = state.nextQueue.slice(1);
  if (nextQueue.length < 6) {
    nextQueue.push(...generateBag());
  }
  const newPiece = spawnPiece(nextType);
  if (!isValidPosition(state.board, newPiece.type, newPiece.x, newPiece.y, newPiece.rotation)) {
    return null;
  }
  return {
    ...state,
    activePiece: newPiece,
    heldPiece: currentType,
    canHold: false,
    nextQueue,
  };
}

export function lockPiece(state: GameState): GameState {
  if (!state.activePiece) return state;
  const newBoard = placePiece(state.board, state.activePiece);
  const { newBoard: clearedBoard, linesCleared } = clearLines(newBoard);
  const newLines = state.lines + linesCleared;
  const newLevel = Math.max(state.level, Math.floor(newLines / 10) + DEFAULT_OPTIONS.startLevel);
  const scoreAdded = calculateScore(linesCleared, state.level);
  const newScore = state.score + scoreAdded;

  const nextType = state.nextQueue[0];
  const nextQueue = state.nextQueue.slice(1);
  if (nextQueue.length < 6) {
    nextQueue.push(...generateBag());
  }
  const newPiece = spawnPiece(nextType);
  const valid = isValidPosition(clearedBoard, newPiece.type, newPiece.x, newPiece.y, newPiece.rotation);

  return {
    ...state,
    board: clearedBoard,
    activePiece: valid ? newPiece : null,
    canHold: true,
    nextQueue,
    score: newScore,
    level: newLevel,
    lines: newLines,
    mode: valid ? 'playing' : 'gameover',
    gameOver: !valid,
  };
}

export function hardDrop(state: GameState): GameState {
  if (!state.activePiece) return state;
  let y = state.activePiece.y;
  while (isValidPosition(state.board, state.activePiece.type, state.activePiece.x, y + 1, state.activePiece.rotation)) {
    y++;
  }
  const dropped = { ...state.activePiece, y };
  return lockPiece({ ...state, activePiece: dropped });
}

export function softDrop(state: GameState): GameState {
  if (!state.activePiece) return state;
  const moved = tryMove(state.board, state.activePiece, 0, 1);
  if (moved) {
    return { ...state, activePiece: moved, score: state.score + 1 * state.level };
  }
  return lockPiece(state);
}

export function moveLeft(state: GameState): GameState {
  if (!state.activePiece) return state;
  const moved = tryMove(state.board, state.activePiece, -1, 0);
  return moved ? { ...state, activePiece: moved } : state;
}

export function moveRight(state: GameState): GameState {
  if (!state.activePiece) return state;
  const moved = tryMove(state.board, state.activePiece, 1, 0);
  return moved ? { ...state, activePiece: moved } : state;
}

export function rotateClockwise(state: GameState): GameState {
  if (!state.activePiece) return state;
  const rotated = tryRotate(state.board, state.activePiece, 1);
  return rotated ? { ...state, activePiece: rotated } : state;
}

export function rotateCounterClockwise(state: GameState): GameState {
  if (!state.activePiece) return state;
  const rotated = tryRotate(state.board, state.activePiece, -1);
  return rotated ? { ...state, activePiece: rotated } : state;
}

export function togglePause(state: GameState): GameState {
  if (state.mode === 'playing') return { ...state, mode: 'paused' };
  if (state.mode === 'paused') return { ...state, mode: 'playing' };
  return state;
}

export function restartGame(options: GameOptions = DEFAULT_OPTIONS): GameState {
  return createInitialState(options);
}
