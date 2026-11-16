import { existsSync, renameSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dist = resolve('dist');
const output = resolve(dist, 'pagefind');
const runner = join(dirname(fileURLToPath(import.meta.resolve('pagefind'))), 'runner/bin.cjs');
let staging;
let result;
for (let attempt = 0; attempt < 3; attempt++) {
  staging = resolve(dist, `pagefind-staging-${process.pid}-${attempt}`);
  if (existsSync(staging)) rmSync(staging, { recursive: true, force: true });
  result = spawnSync(process.execPath, [runner, '--site', dist, '--output-path', staging], { stdio: 'inherit' });
  if (result.status === 0) break;
  if (existsSync(staging)) rmSync(staging, { recursive: true, force: true });
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
}
if (result.status !== 0) process.exit(result.status ?? 1);
if (existsSync(output)) rmSync(output, { recursive: true, force: true });
renameSync(staging, output);
