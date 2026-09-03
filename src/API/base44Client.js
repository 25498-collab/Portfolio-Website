import { createClient } from '@base44/sdk';

export const base44 = createClient({
  appId: import.meta.env.VITE_BASE44_APP_ID || '',
  appBaseUrl: import.meta.env.VITE_BASE44_APP_BASE_URL || window.location.origin,
  functionsVersion: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION || 'v1',
  token: typeof window !== 'undefined' ? localStorage.getItem('base44_access_token') || undefined : undefined,
});

export default base44;
