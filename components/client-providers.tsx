'use client';

import type { ReactNode } from 'react';
import { StoreProvider } from './store-provider';

export function ClientProviders({ children }: { children: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
