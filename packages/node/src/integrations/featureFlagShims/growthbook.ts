import { growthbookIntegration as coreGrowthbookIntegration } from '@ichnois/core';

/**
 * Re-export the core GrowthBook integration for Node.js usage.
 * The core integration is runtime-agnostic and works in both browser and Node environments.
 */
export const growthbookIntegrationShim = coreGrowthbookIntegration;
