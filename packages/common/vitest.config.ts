import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    coverage: {
      include: ['src/**'],
      exclude: ['src/types/'],
      all: true,
    },

    globals: true,
  },
});
