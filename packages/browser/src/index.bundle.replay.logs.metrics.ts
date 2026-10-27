import {
  browserTracingIntegrationShim,
  feedbackIntegrationShim,
  spanStreamingIntegrationShim,
  fetchStreamPerformanceIntegrationShim,
} from '@sentry-internal/integration-shims';

export * from './index.bundle.base';

export { logger, consoleLoggingIntegration, metrics } from '@ichnois/core';

export { replayIntegration, getReplay } from '@ichnois/replay';

export { elementTimingIntegration } from '@ichnois/browser-utils';

export {
  browserTracingIntegrationShim as browserTracingIntegration,
  feedbackIntegrationShim as feedbackAsyncIntegration,
  feedbackIntegrationShim as feedbackIntegration,
  spanStreamingIntegrationShim as spanStreamingIntegration,
  fetchStreamPerformanceIntegrationShim as fetchStreamPerformanceIntegration,
};
