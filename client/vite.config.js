import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'), // твоя папка с html и js
  build: {
    outDir: resolve(__dirname, 'dist'), // куда собрать
    emptyOutDir: true, // разрешаем очистку dist
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        profile: resolve(__dirname, 'src/pages/profile.html'),
        settings: resolve(__dirname, 'src/pages/settings.html'),
        saved: resolve(__dirname, 'src/pages/saved.html')
      },
    },
  },
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
});
