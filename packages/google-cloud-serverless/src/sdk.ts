import type { Integration, Options } from '@ichnois/core';
import { applySdkMetadata } from '@ichnois/core';
import type { NodeClient, NodeOptions } from '@ichnois/node';
import { getDefaultIntegrationsWithoutPerformance, init as initNode } from '@ichnois/node';
import { gcpContextIntegration } from './integrations/gcp-context';
import { googleCloudGrpcIntegration } from './integrations/google-cloud-grpc';
import { googleCloudHttpIntegration } from './integrations/google-cloud-http';

function getCjsOnlyIntegrations(): Integration[] {
  /*! rollup-include-cjs-only */
  return [
    googleCloudHttpIntegration({ optional: true }), // We mark this integration optional since '@google-cloud/common' module could be missing.
    googleCloudGrpcIntegration({ optional: true }), // We mark this integration optional since 'google-gax' module could be missing.
  ];
  /*! rollup-include-cjs-only-end */
  /*! rollup-include-esm-only */
  // oxlint-disable-next-line no-unreachable -- reachable only in the ESM build; rollup strips the CJS return above
  return [];
  /*! rollup-include-esm-only-end */
}

/** Get the default integrations for the GCP SDK. */
export function getDefaultIntegrations(_options: Options): Integration[] {
  return [...getDefaultIntegrationsWithoutPerformance(), gcpContextIntegration(), ...getCjsOnlyIntegrations()];
}

/**
 * @see {@link Sentry.init}
 */
export function init(options: NodeOptions = {}): NodeClient | undefined {
  const opts = {
    defaultIntegrations: getDefaultIntegrations(options),
    ...options,
  };

  applySdkMetadata(opts, 'google-cloud-serverless', ['google-cloud-serverless', 'node']);

  return initNode(opts);
}
