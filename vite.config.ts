import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const isBuild = command === 'build';

  return {
    base: '/',
    server: {
      host: true,
      port: 8080
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    define: isBuild
      ? {
          __DEFINES__: JSON.stringify(JSON.parse(env.VITE_DEFINES || '{}')),
          __HMR_CONFIG_NAME__: JSON.stringify(env.VITE_HMR_CONFIG_NAME || ''),
          __BASE__: JSON.stringify(env.VITE_HMR_BASE || ''),
          __SERVER_HOST__: JSON.stringify(env.VITE_SERVER_HOST || ''),
          __HMR_PROTOCOL__: JSON.stringify(env.VITE_HMR_PROTOCOL || ''),
          __HMR_PORT__: JSON.stringify(env.VITE_HMR_PORT || ''),
          __HMR_HOSTNAME__: JSON.stringify(env.VITE_HMR_HOSTNAME || ''),
          __HMR_BASE__: JSON.stringify(env.VITE_HMR_BASE || ''),
          __HMR_DIRECT_TARGET__: JSON.stringify(env.VITE_HMR_DIRECT_TARGET || ''),
          __WS_TOKEN__: JSON.stringify(env.VITE_WS_TOKEN || ''),
          __HMR_ENABLE_OVERLAY__: JSON.stringify(env.VITE_HMR_ENABLE_OVERLAY || '')
        }
      : {} // ⛔ Ne pas polluer dev avec ça
  };
});
