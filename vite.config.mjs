import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Keep the REACT_APP_ prefix from Create React App, so .env and any
  // Vercel environment variables keep working without renaming.
  envPrefix: 'REACT_APP_',
  // Same output folder as Create React App, so the Vercel output directory
  // setting stays valid.
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
