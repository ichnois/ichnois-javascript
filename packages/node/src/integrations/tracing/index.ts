import type { Integration } from '@ichnois/core';
import { getTracingIntegrations } from '@ichnois/server-utils';

export function getAutoPerformanceIntegrations(): Integration[] {
  return getTracingIntegrations();
}
