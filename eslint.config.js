import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // Игнорируем папку сборки
  globalIgnores(["dist"]),

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    extends: [
      js.configs.recommended, // Стандартные правила JS
      reactHooks.configs.flat.recommended, // Правила для React Hooks
      reactRefresh.configs.vite, // Vite + React Refresh
      // 'plugin:prettier/recommended' <- убрано
    ],
    plugins: {
      prettier,
    },
    rules: {
      // Игнорируем переменные, начинающиеся с большой буквы (например, компоненты)
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],

      // Включаем проверку стиля по Prettier
      "prettier/prettier": [
        "error",
        {
          printWidth: 130,
          tabWidth: 2,
          // useTabs: false,
          // semi: true,
          singleQuote: false,
          // trailingComma: 'es5',
          // bracketSpacing: true,
          // arrowParens: 'always',
          // endOfLine: 'lf',
        },
      ],
    },
  },
]);
