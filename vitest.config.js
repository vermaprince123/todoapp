import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

/**
 * Configures the Vitest testing framework for a React project.
 *
 * - Registers the `@vitejs/plugin-react` plugin to enable React support.
 * - Sets the Babel configuration for the React plugin.
 * - Sets the testing environment to JSDOM, enables global variables, and includes all test files.
 * - Configures code coverage reporting to use the V8 provider and output to the `./coverage` directory.
 */
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setupTests.js',
    include: ['**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      enabled: true,
    },
  },
});
