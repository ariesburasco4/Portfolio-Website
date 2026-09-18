import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found.');
  process.exit(1);
}

const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

// 1. Create dist/404.html for GitHub Pages fallback
const notFoundHtmlPath = path.join(distDir, '404.html');
fs.writeFileSync(notFoundHtmlPath, indexHtmlContent, 'utf-8');
console.log('✓ Created dist/404.html for GitHub Pages SPA routing');

// 2. Create dist/links/index.html so /links directly returns HTTP 200
const linksDir = path.join(distDir, 'links');
if (!fs.existsSync(linksDir)) {
  fs.mkdirSync(linksDir, { recursive: true });
}

// Adjust relative asset paths if the build used relative './' base
let linksHtmlContent = indexHtmlContent;
linksHtmlContent = linksHtmlContent
  .replace(/(src|href)="(\.\/assets\/)/g, '$1="../assets/')
  .replace(/(src|href)="\.\/([a-zA-Z0-9_-]+\.[a-zA-Z0-9]+)"/g, '$1="../$2');

fs.writeFileSync(path.join(linksDir, 'index.html'), linksHtmlContent, 'utf-8');
console.log('✓ Created dist/links/index.html for direct /links access');

// 3. Create .nojekyll in dist to bypass Jekyll processing on GitHub Pages
fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf-8');
console.log('✓ Created dist/.nojekyll to prevent Jekyll asset filtering');
