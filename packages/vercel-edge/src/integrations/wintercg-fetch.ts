import { createFetchIntegration } from '@ichnois/core';

/**
 * Creates spans and attaches tracing headers to fetch requests on WinterCG runtimes.
 */
export const winterCGFetchIntegration = createFetchIntegration({
  name: 'WinterCGFetch',
  spanOrigin: 'auto.http.fetch',
});
