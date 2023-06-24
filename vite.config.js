import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  define: {
    'process.env': process.env,
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  optimizeDeps: {
    exclude: ['react-photoswipe-gallery'],
    include: ['prop-types', 'react-dom'],
  },
});
