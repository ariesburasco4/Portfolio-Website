import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// Automatically determine base path for GitHub Pages or local environments
const getBasePath = () => {
  // 1. Explicit base path override via environment variable (e.g. BASE_PATH=/portfolio/)
  if (process.env.BASE_PATH) {
    return process.env.BASE_PATH.endsWith('/') ? process.env.BASE_PATH : `${process.env.BASE_PATH}/`;
  }
  // 2. Automatically derive base path in GitHub Actions environment
  if (process.env.GITHUB_REPOSITORY) {
    const parts = process.env.GITHUB_REPOSITORY.split('/');
    const owner = parts[0];
    const repo = parts[1];
    // If repo matches <owner>.github.io, it is served at the domain root '/'
    if (repo && owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
      return '/';
    }
    // Otherwise it is a project repository served at '/<repo>/'
    return `/${repo}/`;
  }
  // 3. Default to relative base path for local previews and standalone portability
  return './';
};

export default defineConfig(() => {
  return {
    base: getBasePath(),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
