import tsEslintParser from "@typescript-eslint/parser";
import { Linter } from "eslint";
import globals from "globals";

const languageOptions: Linter.LanguageOptions = {
  parser: tsEslintParser,
  ecmaVersion: 2021,
  sourceType: "module",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    ...globals.browser,
    ...globals.node,
  },
};

export default languageOptions;
