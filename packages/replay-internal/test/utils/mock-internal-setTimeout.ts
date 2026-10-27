import { vi } from 'vitest';

vi.mock('@ichnois/browser-utils', async () => ({
  ...(await vi.importActual('@ichnois/browser-utils')),
  setTimeout: (...args: any[]) => {
    return setTimeout.call(global, ...args);
  },
}));
