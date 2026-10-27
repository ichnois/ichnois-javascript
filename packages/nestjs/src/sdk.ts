import type { Integration } from '@ichnois/core';
import { applySdkMetadata } from '@ichnois/core';
import type { NodeClient, NodeOptions } from '@ichnois/node';
import { getDefaultIntegrations as getDefaultNodeIntegrations, init as nodeInit } from '@ichnois/node';
import { nestIntegration } from './integrations/nest';

/**
 * Initializes the NestJS SDK
 */
export function init(options: NodeOptions | undefined = {}): NodeClient | undefined {
  const opts: NodeOptions = {
    defaultIntegrations: getDefaultIntegrations(options),
    ...options,
  };

  applySdkMetadata(opts, 'nestjs', ['nestjs', 'node']);

  return nodeInit(opts);
}

/** Get the default integrations for the NestJS SDK. */
export function getDefaultIntegrations(options: NodeOptions): Integration[] | undefined {
  return [nestIntegration(), ...getDefaultNodeIntegrations(options)];
}
