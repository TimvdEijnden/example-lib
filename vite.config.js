import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  outDir: './dist',
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/main.mjs',
      formats: ['esm'],
    },
    rollupOptions: {
      external: ['vue', 'vue-demi'],
      output: {
        format: 'esm',
        compact: true,
        exports: 'named',
        preserveModules: true,
        entryFileNames: '[name].mjs',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
