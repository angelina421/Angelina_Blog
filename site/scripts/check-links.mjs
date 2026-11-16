import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('dist');
const base = (process.env.BLOG_BASE_PATH ?? '/').replace(/\/$/, '');
const missing = [];
let checked = 0;

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith('.html')) {
      const html = readFileSync(path, 'utf8');
      for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
        const url = match[1].split(/[?#]/)[0];
        if (base && url !== base && !url.startsWith(`${base}/`)) {
          missing.push(`${path}: ${url} (outside base ${base})`);
          continue;
        }
        const relative = base ? url.slice(base.length) : url;
        const candidate = join(root, decodeURIComponent(relative).replace(/^\/+/, ''));
        const target = url.endsWith('/') ? join(candidate, 'index.html') : candidate;
        checked++;
        if (!existsSync(target)) missing.push(`${path}: ${url}`);
      }
    }
  }
}

walk(root);
if (missing.length) {
  console.error(`发现 ${missing.length} 个站内链接或资源缺失:\n${missing.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`已检查 ${checked} 个站内链接和资源引用，全部存在。`);
}
