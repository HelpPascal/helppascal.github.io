import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss'

export default defineConfig({
  server: {
    open: '/index.html',
    port: 3116,
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
    },
  },
});
