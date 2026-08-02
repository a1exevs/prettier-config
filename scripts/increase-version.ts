import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { rootDir } from './common';

enum IncreaseVersionMode {
  MAJOR = 'major',
  MINOR = 'minor',
  PATCH = 'patch',
}

const PACKAGE_JSON_PATH = path.resolve(rootDir, 'package.json');

function increaseVersion(version: string, type: IncreaseVersionMode): string {
  const parts = version.split('.').map(Number);

  switch (type) {
    case IncreaseVersionMode.MAJOR:
      parts[0]++;
      parts[1] = 0;
      parts[2] = 0;
      break;
    case IncreaseVersionMode.MINOR:
      parts[1]++;
      parts[2] = 0;
      break;
    case IncreaseVersionMode.PATCH:
      parts[2]++;
      break;
    default:
      throw new Error(
        `Invalid version type: ${type}. Use "${IncreaseVersionMode.MAJOR}", "${IncreaseVersionMode.MINOR}" or "${IncreaseVersionMode.PATCH}".`,
      );
  }

  return parts.join('.');
}

function readVersion(filePath: string): string {
  const content = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(content) as { version?: string };
  if (!json.version) {
    throw new Error(`No "version" field found in ${filePath}`);
  }
  return json.version;
}

function setVersionInFile(filePath: string, newVersion: string): void {
  const content = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(content) as { version?: string };

  if (!json.version) {
    throw new Error(`No "version" field found in ${filePath}`);
  }

  const oldVersion = json.version;
  json.version = newVersion;

  fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`Updated version in ${path.relative(rootDir, filePath)}: ${oldVersion} -> ${newVersion}`);
}

function main(): void {
  const args = process.argv.slice(2);
  const type = args[0] as IncreaseVersionMode;

  if (![IncreaseVersionMode.MAJOR, IncreaseVersionMode.MINOR, IncreaseVersionMode.PATCH].includes(type)) {
    console.error('Usage: node increase-version.ts <major|minor|patch>');
    process.exit(1);
  }

  try {
    const oldVersion = readVersion(PACKAGE_JSON_PATH);
    const newVersion = increaseVersion(oldVersion, type);
    setVersionInFile(PACKAGE_JSON_PATH, newVersion);
  } catch (error: unknown) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
}

main();
