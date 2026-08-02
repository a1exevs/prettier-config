# TS Guards

# Description
Shared Prettier configuration used across multiple projects.

## Yarn version
v4.18.0
```bash
npm install -g corepack@0.31.0
corepack enable
yarn install
```

## Node version
v22.23.2. Use NVM:
1. nvm current - check current version of Node
2. nvm list - show list of available Node versions
3. nvm install <version> - to install and use Node version.
4. nvm use <version> - set version of Node as current version

## Available Scripts
In the project directory, you can run:

### `yarn version:major`
Increments the major version in `package.json`.  
For example, changes `"version": "1.2.3"` to `"version": "2.0.0"`.

### `yarn version:minor`
Increments the minor version in `package.json`.  
For example, changes `"version": "1.2.3"` to `"version": "1.3.0"`.

### `yarn version:patch`
Increments the patch version in `package.json`.  
For example, changes `"version": "1.2.3"` to `"version": "1.2.4"`.

### `yarn update-version:major`
Automates the process of merging branches, increasing the major-version in the package.json file, and committing the changes to the designated branch. This ensures the version is updated consistently and the changes are easily trackable in the repository.

### `yarn update-version:minor`
Automates the process of merging branches, increasing the minor-version in the package.json file, and committing the changes to the designated branch. This ensures the version is updated consistently and the changes are easily trackable in the repository.

### `yarn update-version:patch`
Automates the process of merging branches, increasing the patch-version in the package.json file, and committing the changes to the designated branch. This ensures the version is updated consistently and the changes are easily trackable in the repository.

### `yarn build`
First removes the `dist` directory using `rimraf` to ensure a clean build environment and then compiles the TypeScript files using `tsc`.

### `yarn publish-package`
Publishes the package with public access.

### `yarn format`
Formats all TypeScript files using Prettier.

### `yarn lint`
Runs ESLint for static code analysis on TypeScript files.

### `yarn lint:fix`
Fixes errors found by ESLint in TypeScript files.

### `yarn docs`
Generates comprehensive documentation using TypeDoc.

## 📦 How to set up automatic publishing to npm
Publishing uses [Trusted Publishing](https://docs.npmjs.com/trusted-publishers/) (OIDC). No npm token is stored in GitHub Secrets.

### 1. 🔐 Configure Trusted Publisher on npm
1. Open the package on https://npmjs.com → **Package Settings** → **Trusted Publisher**.
2. Choose **GitHub Actions** and fill in:
   - **Organization or user:** `a1exevs`
   - **Repository:** `prettier-config`
   - **Workflow filename:** `project-publish.yml`
   - **Environment name:** `npm`
   - **Allowed actions:** `npm publish` only (do not enable `npm stage publish` unless you switch the workflow to staged publishing)
3. Save.

📘 See [npm Trusted Publishers docs](https://docs.npmjs.com/trusted-publishers/).

### 2. 🔑 Create the GitHub Actions environment
1. Open the GitHub repository → **Settings → Environments**.
2. Create an environment named `npm`.
3. Under **Deployment branches and tags**, allow only the `main` branch.

The publish job in `.github/workflows/project-publish.yml` must use the same name (`environment: npm`) and include `permissions: id-token: write`.

### 3. ✅ That’s it!
When a version bump is pushed to `main`, the workflow authenticates to npm via OIDC and runs `yarn publish-package`. No `NPM_TOKEN` secret is required — you can remove it if it still exists.
> ⚠️ Make sure to bump the version in `package.json` before pushing — otherwise, the workflow will fail due to version conflict.
---


## Release steps
1) run yarn update-version:patch (or :minor, :major)
2) create PR with message "[Common] Version increase vX.X.X" from "common/version-increase" into "develop"
3) create PR with message "Release vX.X.X" from "develop" into "main"
4) go to Github Repo Home page -> Tags -> Releases -> Draft a new release.

   a) create a new tag via "Choose a tag" autocomplete

   b) select "develop" branch as a target

   c) click the "Generate release notes" button, remove unnecessary notes if necessary, check PR messages and correct the messages if necessary (via PR editing)

   d) select "main" branch as a target

   e) click the "Publish release"
5) check 'project-publish.yml' job result (Github Actions)
6) update RELEASE-NOTES.md with using generated notes in step 4, create PR with from "common/release-notes-update-vX.X.X" to "develop" message "[Common] RELEASE-NOTES.md update vX.X.X"

## Repository
Link to repository https://github.com/a1exevs/prettier-config.
