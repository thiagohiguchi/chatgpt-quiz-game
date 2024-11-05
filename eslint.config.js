import reactHooks from 'eslint-plugin-react-hooks';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';


export default [
  {
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parser: typescriptEslintParser, // Use TypeScript parser
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
          // semi: "error",
          // "prefer-const": "error"
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
      // 'import/no-unused-modules': [1, { unusedExports: true }], // Warn on unused exports

      }
  }
];