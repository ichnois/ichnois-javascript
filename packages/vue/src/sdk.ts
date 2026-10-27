import { getDefaultIntegrations, init as browserInit } from '@ichnois/browser';
import type { Client } from '@ichnois/core';
import { applySdkMetadata, setNormalizeStringifier } from '@ichnois/core';

import { vueIntegration } from './integration';
import type { Options } from './types';
import { normalizeStringifyValue } from './normalizeStringifyValue';

/**
 * Inits the Vue SDK
 */
export function init(options: Partial<Omit<Options, 'tracingOptions'>> = {}): Client | undefined {
  const opts = {
    defaultIntegrations: [...getDefaultIntegrations(options), vueIntegration()],
    ...options,
  };

  applySdkMetadata(opts, 'vue');

  const client = browserInit(opts);

  // Add vue-specific stringification
  setNormalizeStringifier(normalizeStringifyValue);

  return client;
}
