import { defineConfig } from 'tsup';

export function createTsupConfig() {
  return defineConfig({
    clean: true,
    dts: true,
    entry: ['src/**/*.ts', '!**/__tests__/*'],
    format: ['esm', 'cjs'],
    minify: true,
    splitting: false,
    target: 'node16',
    treeshake: true,
  });
}
