import { defineIntegration } from '@ichnois/core';
import { subscribeToNestChannels } from './orchestrion-subscriber';

const INTEGRATION_NAME = 'Nest' as const;

/**
 * Integration capturing tracing data for NestJS.
 */
export const nestIntegration = defineIntegration(() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      subscribeToNestChannels();
    },
  };
});
