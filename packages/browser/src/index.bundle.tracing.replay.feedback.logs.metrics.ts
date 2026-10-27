import { registerSpanErrorInstrumentation } from '@ichnois/core';
import { feedbackAsyncIntegration } from './feedbackAsync';

registerSpanErrorInstrumentation();

export * from './index.bundle.base';

export {
  getActiveSpan,
  getRootSpan,
  getSpanDescendants,
  setMeasurement,
  startNewTrace,
  withActiveSpan,
  logger,
  consoleLoggingIntegration,
  metrics,
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

export { getFeedback, sendFeedback } from '@ichnois/feedback';

export { feedbackAsyncIntegration as feedbackAsyncIntegration, feedbackAsyncIntegration as feedbackIntegration };

export { replayIntegration, getReplay } from '@ichnois/replay';
