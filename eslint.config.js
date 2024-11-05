import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

// Define the ESLint configuration
export default [
  {
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parser: typescriptEslintParser, // Use TypeScript parser
    },
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslintPlugin, // TypeScript plugin
      import: eslintPluginImport,
      'simple-import-sort': eslintPluginSimpleImportSort,
      prettier: eslintPluginPrettier, // Add Prettier plugin
    },
    rules: {
      // Add rules from the recommended configurations
      ...js.configs.recommended.rules,
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Import sorting rules
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // Optional: Enforce grouped ordering for better readability
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['sibling', 'parent'],
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      // Optional: Additional rules
      'no-duplicate-imports': 'error',
      'import/no-unused-modules': [1, { unusedExports: true }],
    },
  },
];
