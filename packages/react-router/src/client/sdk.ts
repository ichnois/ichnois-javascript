import type { BrowserOptions } from '@ichnois/browser';
import { init as browserInit } from '@ichnois/browser';
import type { Client } from '@ichnois/core';
import { applySdkMetadata, consoleSandbox, setTag } from '@ichnois/core';

const BROWSER_TRACING_INTEGRATION_ID = 'BrowserTracing';

/**
 * Initializes the client side of the React Router SDK.
 */
export function init(options: BrowserOptions): Client | undefined {
  // If BrowserTracing integration was passed to options, emit a warning
  if (options.integrations && Array.isArray(options.integrations)) {
    const hasBrowserTracing = options.integrations.some(
      integration => integration.name === BROWSER_TRACING_INTEGRATION_ID,
    );

    if (hasBrowserTracing) {
      consoleSandbox(() => {
        // eslint-disable-next-line no-console
        console.warn(
          'browserTracingIntegration is not fully compatible with @sentry/react-router. Please use reactRouterTracingIntegration instead.',
        );
      });
    }
  }

  applySdkMetadata(options, 'react-router', ['react-router', 'browser']);

  const client = browserInit(options);

  setTag('runtime', 'browser');

  return client;
}
