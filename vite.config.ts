import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      atoms: path.resolve(__dirname, './src/components/atoms'),
      molecules: path.resolve(__dirname, './src/components/molecules'),
      organisms: path.resolve(__dirname, './src/components/organisms'),
      templates: path.resolve(__dirname, './src/components/templates'),
    },
  },
});
