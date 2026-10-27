import { createTransport, resolvedSyncPromise } from '@ichnois/core';

export function makeSimpleTransport() {
  return createTransport({ recordDroppedEvent: () => undefined }, () => resolvedSyncPromise({}));
}
