import { sentryVitePlugin as sentryViteBundlerPlugin } from '@ichnois/bundler-plugins/vite';
import type { SentryVitePluginOptions as SentryVitePluginOptionsBase } from '@ichnois/bundler-plugins/vite';
import type { InstrumentationConfig } from '@ichnois/server-utils';
import { sentryOrchestrionPlugin } from '@ichnois/server-utils/orchestrion/vite';
import type { VitePlugin } from '@ichnois/server-utils/orchestrion/vite';

export type SentryVitePluginOptions = SentryVitePluginOptionsBase & {
  /**
   * @ignore This is for internal use only when this plugin is consumed by a framework SDK
   */
  instrumentations?: InstrumentationConfig[];

  /**
   * Automatic instrumentation of server-side dependencies at build time.
   *
   * Set to `false` to turn it off.
   *
   * @default true
   */
  buildTimeInstrumentation?: boolean;
};

/**
 * Vite plugin that bundles the Sentry Vite bundler plugin (source maps, release
 * injection, bundle size optimizations, …) together with the code
 * transformer (build-time `diagnostics_channel` instrumentation for Node
 * libraries).
 *
 * It is a drop-in replacement for `@sentry/bundler-plugins/vite` and accepts the
 * same options.
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import { sentryVitePlugin } from '@ichnois/node/vite';
 * export default { plugins: [sentryVitePlugin({ org: '…', project: '…' })] };
 * ```
 */
export function sentryVitePlugin(options?: SentryVitePluginOptions): VitePlugin[] {
  const bundlerPlugins = sentryViteBundlerPlugin(options);
  return [...bundlerPlugins, sentryOrchestrionPlugin(options)];
}
