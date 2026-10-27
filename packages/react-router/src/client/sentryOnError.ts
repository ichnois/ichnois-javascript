import { captureException } from '@ichnois/core';
import { captureReactException } from '@ichnois/react';

/**
 * A handler function for React Router's `onError` prop on `HydratedRouter`.
 *
 * Reports errors to Sentry.
 *
 * @example (entry.client.tsx)
 * ```tsx
 * import { sentryOnError } from '@ichnois/react-router';
 *
 * startTransition(() => {
 *   hydrateRoot(
 *     document,
 *     <HydratedRouter onError={sentryOnError} />
 *   );
 * });
 * ```
 */
export function sentryOnError(
  error: unknown,
  {
    errorInfo,
  }: {
    errorInfo?: React.ErrorInfo;
  },
): void {
  const mechanism = { handled: false, type: 'auto.function.react_router.on_error' };

  if (errorInfo) {
    captureReactException(error, errorInfo, { mechanism });
  } else {
    captureException(error, { mechanism });
  }
}
