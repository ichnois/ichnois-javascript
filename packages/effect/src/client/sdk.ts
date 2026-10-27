import type { BrowserOptions } from '@ichnois/browser';
import { init as initBrowser } from '@ichnois/browser';
import type { Client } from '@ichnois/core';
import { applySdkMetadata } from '@ichnois/core';

/**
 * Initializes the Sentry Effect SDK for browser clients.
 *
 * @param options - Configuration options for the SDK
 * @returns The initialized Sentry client, or undefined if initialization failed
 */
export function init(options: BrowserOptions): Client | undefined {
  const opts = {
    ...options,
  };

  applySdkMetadata(opts, 'effect', ['effect', 'browser']);

  return initBrowser(opts);
}
