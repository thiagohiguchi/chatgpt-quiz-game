import js from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parser: typescriptEslintParser, // Use TypeScript parser
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly',
      },
    },
    files: ['**/*.{ts,tsx,js}'],

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslintPlugin,
      import: eslintPluginImport,
      'simple-import-sort': eslintPluginSimpleImportSort,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'no-console': 'off',
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
      // 'import/no-unused-modules': [1, { unusedExports: true }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
        }, // Ignore unused vars starting with _
      ],
    },
  },
];
