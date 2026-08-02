import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import { importX } from "eslint-plugin-import-x";
import prettierPlugin from "eslint-plugin-prettier";
import tsDocPlugin from "eslint-plugin-tsdoc";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

const plugins = {
  "@typescript-eslint": tsEslintPlugin,
  "eslint-plugin-tsdoc": tsDocPlugin,
  prettier: prettierPlugin,
  "import-x": importX,
  "unused-imports": unusedImportsPlugin,
};

export default plugins;
