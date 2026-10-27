// import/export got a false positive, and affects most of our index barrel files
// can be removed once following issue is fixed: https://github.com/import-js/eslint-plugin-import/issues/703
/* eslint-disable import/export */
export * from '@ichnois/browser';

export { init } from './sdk';
export {
  reactRouterTracingIntegration,
  type ReactRouterTracingIntegration,
  type ReactRouterTracingIntegrationOptions,
} from './tracingIntegration';

export { captureReactException, reactErrorHandler, Profiler, withProfiler, useProfiler } from '@ichnois/react';

/**
 * @deprecated ErrorBoundary is deprecated, use React Router's error boundary instead.
 * See https://docs.sentry.io/platforms/javascript/guides/react-router/#report-errors-from-error-boundaries
 */
export { ErrorBoundary, withErrorBoundary } from '@ichnois/react';

/**
 * @deprecated ErrorBoundaryProps and FallbackRender are deprecated, use React Router's error boundary instead.
 * See https://docs.sentry.io/platforms/javascript/guides/react-router/#report-errors-from-error-boundaries
 */
export type { ErrorBoundaryProps, FallbackRender } from '@ichnois/react';

// React Router instrumentation API for use with HydratedRouter's `instrumentations` prop
export {
  createSentryClientInstrumentation,
  isClientInstrumentationApiUsed,
  isNavigateHookInvoked,
  type CreateSentryClientInstrumentationOptions,
} from './createClientInstrumentation';

export { sentryOnError } from './sentryOnError';
