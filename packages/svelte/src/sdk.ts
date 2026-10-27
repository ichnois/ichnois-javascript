import type { BrowserOptions } from '@ichnois/browser';
import { init as browserInit } from '@ichnois/browser';
import type { Client } from '@ichnois/core';
import { applySdkMetadata } from '@ichnois/core';
/**
 * Inits the Svelte SDK
 */
export function init(options: BrowserOptions): Client | undefined {
  const opts = {
    ...options,
  };

  applySdkMetadata(opts, 'svelte');

  return browserInit(opts);
}
