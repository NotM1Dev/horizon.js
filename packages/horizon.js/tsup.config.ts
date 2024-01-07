import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  skipNodeModulesBundle: true,
  target: 'esnext',
  outDir: './dist',
  minify: true,
  clean: true,
  shims: true,
  dts: true
});
