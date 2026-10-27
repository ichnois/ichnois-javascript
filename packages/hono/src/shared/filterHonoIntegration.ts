import type { Integration } from '@ichnois/core';

export const filterHonoIntegration = (integration: Integration): boolean => integration.name !== 'Hono';
