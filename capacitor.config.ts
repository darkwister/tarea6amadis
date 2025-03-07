import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.cotueaoapp',
  appName: 'cotueaoapp',
  webDir: 'www',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    CapacitorCookies:{
      enabled: true,
    }
  },
};

export default config;
