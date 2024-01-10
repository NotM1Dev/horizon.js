import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  skipNodeModulesBundle: true,
  minifyIdentifiers: false,
  minifySyntax: true,
  minifyWhitespace: true,
  keepNames: true,
  target: 'esnext',
  outDir: './dist',
  clean: true,
  shims: true,
  dts: true
});
