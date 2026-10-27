import { applySdkMetadata } from '@ichnois/core';
import type { NodeClient, NodeOptions } from '@ichnois/node';
import { init as initNodeSdk } from '@ichnois/node';
import { filterLowQualityTransactions } from './utils';

/**
 * Initializes the server side of the Solid Start SDK
 */
export function init(options: NodeOptions): NodeClient | undefined {
  const opts = {
    ...options,
  };

  applySdkMetadata(opts, 'solidstart', ['solidstart', 'node']);
  filterLowQualityTransactions(opts);

  return initNodeSdk(opts);
}
