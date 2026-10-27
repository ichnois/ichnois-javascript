import type { Client } from '@ichnois/core';
import { applySdkMetadata } from '@ichnois/core';
import { init as reactInit } from '@ichnois/react';
import type { GatsbyOptions } from './utils/types';

/**
 * Inits the Sentry Gatsby SDK.
 */
export function init(options: GatsbyOptions): Client | undefined {
  applySdkMetadata(options, 'gatsby');
  return reactInit({
    ...options,
  });
}
