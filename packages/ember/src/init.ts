import * as Sentry from '@ichnois/browser';
import { applySdkMetadata } from '@ichnois/core';

import type { BrowserOptions } from '@ichnois/browser';
import type { Client } from '@ichnois/core';

/**
 * Initialize the Sentry SDK for Ember.
 *
 * This should be called early in your application's startup, typically in app/app.ts
 * before your Application class is defined.
 *
 * @param config - Sentry browser options
 * @returns The Sentry client instance
 *
 * @example
 * ```typescript
 * import * as Sentry from '@ichnois/ember';
 *
 * Sentry.init({
 *   dsn: 'YOUR_DSN_HERE',
 *   tracesSampleRate: 1.0,
 * });
 * ```
 */
export function init(config?: BrowserOptions): Client | undefined {
  const initConfig = { ...config };

  applySdkMetadata(initConfig, 'ember');

  return Sentry.init(initConfig);
}
