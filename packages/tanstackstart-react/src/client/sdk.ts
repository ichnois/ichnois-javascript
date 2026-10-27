import type { Client } from '@ichnois/core';
import { applySdkMetadata } from '@ichnois/core';
import type { BrowserOptions as ReactBrowserOptions } from '@ichnois/react';
import { getDefaultIntegrations as getReactDefaultIntegrations, init as initReactSDK } from '@ichnois/react';
import { applyTunnelRouteOption } from './tunnelRoute';

/**
 * Initializes the TanStack Start React SDK
 *
 * @param options Configuration options for the SDK.
 */
export function init(options: ReactBrowserOptions): Client | undefined {
  const sentryOptions: ReactBrowserOptions = {
    defaultIntegrations: [...getReactDefaultIntegrations(options)],
    ...options,
  };

  applyTunnelRouteOption(sentryOptions);
  applySdkMetadata(sentryOptions, 'tanstackstart-react', ['tanstackstart-react', 'react']);

  sentryOptions.ignoreSpans = [
    ...(sentryOptions.ignoreSpans || []),
    /\/node_modules\//,
    /\/favicon\.ico/,
    /\/@id\//,
    /\/@react-refresh/,
    /\/@tanstack-start\//,
    /\/@fs\//,
    /\/@vite\//,
  ];

  return initReactSDK(sentryOptions);
}
