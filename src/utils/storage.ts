export interface HighScore {
  score: number;
  level: number;
  lines: number;
  date: string;
}

const STORAGE_KEY = 'tetris_high_scores';

export function loadHighScores(): HighScore[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((h) => h && typeof h.score === 'number');
  } catch {
    return [];
  }
}

export function saveHighScore(entry: HighScore): void {
  const scores = loadHighScores();
  scores.push(entry);
  scores.sort((a, b) => b.score - a.score);
  const top = scores.slice(0, 10);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(top));
}

export function getBestScore(): number {
  const scores = loadHighScores();
  return scores.length > 0 ? scores[0].score : 0;
}
