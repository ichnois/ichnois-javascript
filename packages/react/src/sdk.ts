import type { BrowserOptions } from '@ichnois/browser';
import {
  init as browserInit,
  normalizeStringifyValue as browserNormalizeStringifyValue,
  setContext,
} from '@ichnois/browser';
import type { Client } from '@ichnois/core';
import { applySdkMetadata, setNormalizeStringifier } from '@ichnois/core';
import { version } from 'react';
import { isSyntheticEvent } from './isSyntheticEvent';

/**
 * Inits the React SDK
 */
export function init(options: BrowserOptions): Client | undefined {
  const opts = {
    ...options,
  };

  applySdkMetadata(opts, 'react');
  setContext('react', { version });
  const client = browserInit(opts);

  // Add react-specific stringification
  setNormalizeStringifier(normalizeStringifyValue);

  return client;
}

function normalizeStringifyValue(value: Exclude<unknown, string | number | boolean | null>): string | undefined {
  if (isSyntheticEvent(value)) {
    return '[SyntheticEvent]';
  }
  return browserNormalizeStringifyValue(value);
}
