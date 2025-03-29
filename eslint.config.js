import { defineConfig } from "eslint/config";
// import globals from "globals";
import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
  // ...tseslint.configs.recommendedTypeChecked,
  // ...tseslint.configs.stylisticTypeChecked,
  { files: ['**/*.{js,ts}'] },
  { ignores: ['dist/']},
  // {languageOptions: {
  //   globals: globals.node,
  //   parserOptions: {
  //     projectService: true,
  //     tsconfigRootDir: import.meta.dirname,
  //   }
  // }}
]);