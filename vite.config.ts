import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ command }) => {
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
    define: {
      __DEFINES__: JSON.stringify({}),
      __HMR_CONFIG_NAME__: JSON.stringify(''),
      __BASE__: JSON.stringify(''),
      __SERVER_HOST__: JSON.stringify(''),
      __HMR_PROTOCOL__: JSON.stringify(''),
      __HMR_PORT__: JSON.stringify(''),
      __HMR_HOSTNAME__: JSON.stringify(''),
      __HMR_BASE__: JSON.stringify(''),
      __HMR_DIRECT_TARGET__: JSON.stringify(''),
      __WS_TOKEN__: JSON.stringify(''),
      __HMR_ENABLE_OVERLAY__: JSON.stringify('')
    }
  };
});
