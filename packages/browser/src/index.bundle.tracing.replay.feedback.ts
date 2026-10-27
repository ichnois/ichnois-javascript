import { registerSpanErrorInstrumentation } from '@ichnois/core';
import {
  consoleLoggingIntegrationShim,
  elementTimingIntegrationShim,
  loggerShim,
  metricsShim,
} from '@sentry-internal/integration-shims';
import { feedbackAsyncIntegration } from './feedbackAsync';

registerSpanErrorInstrumentation();

export * from './index.bundle.base';

export { consoleLoggingIntegrationShim as consoleLoggingIntegration, loggerShim as logger, metricsShim as metrics };

export {
  getActiveSpan,
  getRootSpan,
  startNewTrace,
  withActiveSpan,
  getSpanDescendants,
  setMeasurement,
  spanStreamingIntegration,
} from '@ichnois/core';
export { startSpan, startInactiveSpan, startSpanManual } from '@ichnois/core/browser';

export {
  browserTracingIntegration,
  startBrowserTracingNavigationSpan,
  startBrowserTracingPageLoadSpan,
} from './tracing/browserTracingIntegration';
export { isBotUserAgent } from '@ichnois/browser-utils';
export { elementTimingIntegrationShim as elementTimingIntegration };
export { setActiveSpanInBrowser } from './tracing/setActiveSpan';

export { reportPageLoaded } from './tracing/reportPageLoaded';

export { fetchStreamPerformanceIntegration } from './integrations/fetchStreamPerformance';
export { webVitalsIntegration } from './integrations/webVitals';

export { getFeedback, sendFeedback } from '@ichnois/feedback';

export { feedbackAsyncIntegration as feedbackAsyncIntegration, feedbackAsyncIntegration as feedbackIntegration };

export { replayIntegration, getReplay } from '@ichnois/replay';
