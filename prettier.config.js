/**
 * Local adapter to allow Prettier to load the compiled TypeScript config.
 *
 * Prettier does not support `.ts` config files directly, and it expects
 * a CommonJS module exporting a plain object. Since our actual config is
 * written in TypeScript (`src/index.ts`) and compiled to `dist/index.js`
 * with a default export, we use this adapter to bridge the gap.
 *
 * This file is not included in the published npm package — it's only used
 * for local development and formatting this project using itself.
 */
module.exports = require('./dist/index.js').default;
