import type { Config } from "prettier";

/**
 * Shared Prettier configuration.
 *
 * @remarks
 * The configuration is exported as the package default and can be reused across
 * multiple projects to maintain a consistent code style.
 *
 * @example
 * // prettier.config.cjs
 * module.exports = require('\@alexevs/prettier-config');
 */
const config: Config = {
  /** Maximum line width before wrapping. */
  printWidth: 120,
  /** Number of spaces per indentation-level. */
  tabWidth: 2,
  /** Indent with tabs instead of spaces. */
  useTabs: false,
  /** Print semicolons at the ends of statements. */
  semi: true,
  /** Use single quotes instead of double quotes. */
  singleQuote: true,
  /** Only add quotes around object properties when required. */
  quoteProps: "as-needed",
  /** Use single quotes in JSX. */
  jsxSingleQuote: false,
  /** Print trailing commas wherever possible. */
  trailingComma: "all",
  /** Print spaces between brackets in object literals. */
  bracketSpacing: true,
  /** Put \> of multi-line JSX elements at the end of the last line. */
  bracketSameLine: false,
  /** Omit parentheses when arrow function has a single argument. */
  arrowParens: "avoid",
  /** Start formatting from a given character offset. */
  rangeStart: 0,
  /** Format only files with a pragma at the top. */
  requirePragma: false,
  /** Insert a pragma at the top of formatted files. */
  insertPragma: false,
  /** How to wrap prose. */
  proseWrap: "preserve",
  /** How to handle whitespaces in HTML. */
  htmlWhitespaceSensitivity: "css",
  /** Indent script and style tags in Vue files. */
  vueIndentScriptAndStyle: false,
  /** Line ending to use. */
  endOfLine: "lf",
  /** Format embedded code if Prettier can automatically identify it. */
  embeddedLanguageFormatting: "auto",
  /** Whether to allow only one attribute per line in HTML. */
  singleAttributePerLine: false,
};

export = config;
