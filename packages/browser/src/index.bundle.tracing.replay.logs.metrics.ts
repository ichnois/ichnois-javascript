import { registerSpanErrorInstrumentation } from '@ichnois/core';
import { feedbackIntegrationShim } from '@sentry-internal/integration-shims';

registerSpanErrorInstrumentation();

export * from './index.bundle.base';

export { logger, consoleLoggingIntegration, metrics } from '@ichnois/core';

export {
  getActiveSpan,
  getRootSpan,
  getSpanDescendants,
  setMeasurement,
  startNewTrace,
  withActiveSpan,
  spanStreamingIntegration,
} from '@ichnois/core';
export { startSpan, startInactiveSpan, startSpanManual } from '@ichnois/core/browser';

export {
  browserTracingIntegration,
  startBrowserTracingNavigationSpan,
  startBrowserTracingPageLoadSpan,
} from './tracing/browserTracingIntegration';
export { isBotUserAgent } from '@ichnois/browser-utils';
export { elementTimingIntegration } from '@ichnois/browser-utils';
export { reportPageLoaded } from './tracing/reportPageLoaded';
export { setActiveSpanInBrowser } from './tracing/setActiveSpan';

export { fetchStreamPerformanceIntegration } from './integrations/fetchStreamPerformance';
export { webVitalsIntegration } from './integrations/webVitals';

export { feedbackIntegrationShim as feedbackAsyncIntegration, feedbackIntegrationShim as feedbackIntegration };

export { replayIntegration, getReplay } from '@ichnois/replay';
