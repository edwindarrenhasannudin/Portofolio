import { cpSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = process.cwd();
const output = resolve(root, 'dist');

function copyStaticSiteFiles() {
  return {
    name: 'copy-static-site-files',
    closeBundle() {
      mkdirSync(output, { recursive: true });

      for (const directory of ['assets', 'projects', 'styles']) {
        cpSync(resolve(root, directory), resolve(output, directory), {
          recursive: true,
        });
      }

      cpSync(resolve(root, 'styles', 'style.css'), resolve(output, 'style.css'));
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), copyStaticSiteFiles()],
});
