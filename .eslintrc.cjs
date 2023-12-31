module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript",
    "plugin:vue/vue3-essential",
    "prettier",
    "plugin:prettier/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json", "tsconfig.node.json"],
    extraFileExtensions: [".vue"]
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  ignorePatterns: ["temp.js", "**/vendor/*.js", "**/*.d.ts"],
  rules: {
    "prettier/prettier": "error",
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
