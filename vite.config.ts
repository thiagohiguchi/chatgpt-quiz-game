/* eslint-disable no-undef */

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: "/chatgpt-quiz-game",
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        app: resolve(__dirname, 'src', 'app'),
        components: resolve(__dirname, 'src', 'components'),
        hooks: resolve(__dirname, 'src', 'hooks'),
        contexts: resolve(__dirname, 'src', 'contexts'),
        lib: resolve(__dirname, 'src', 'lib'),
      },
    },
  };
});
