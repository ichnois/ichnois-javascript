import * as bundlerPlugins from '@ichnois/bundler-plugins/rollup';
import { describe, expect, it } from 'vitest';
import * as plugin from '../src/index';

describe('@ichnois/rollup-plugin', () => {
  it('re-exports @sentry/bundler-plugins/rollup', () => {
    expect(plugin.sentryRollupPlugin).toBe(bundlerPlugins.sentryRollupPlugin);
    expect(Object.keys(plugin).sort()).toEqual(Object.keys(bundlerPlugins).sort());
  });
});
