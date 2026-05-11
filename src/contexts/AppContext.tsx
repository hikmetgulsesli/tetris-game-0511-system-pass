import React, { createContext, useContext } from 'react';
import { AppState } from '../hooks/useAppState';

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children, state }: { children: React.ReactNode; state: AppState }) {
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
