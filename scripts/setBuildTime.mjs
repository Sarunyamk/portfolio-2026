// scripts/setBuildTime.mjs
import { execSync } from 'node:child_process';
import fs from 'node:fs';

let buildTime;

try {
  buildTime = execSync('git log -1 --format=%cI', {
    encoding: 'utf-8',
  }).trim();
} catch {
  buildTime = new Date().toISOString();
}

// overwrite ทุกครั้ง
fs.writeFileSync(
  '.env.local',
  `NEXT_PUBLIC_BUILD_TIME=${buildTime}\n`
);
