module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/react',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.["error", {"singleQuote": true, "parser": "flow"}]
  ],
  parserOptions: {
    ecmaVersion: 2015, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jquery: true,
  },
  rules: {
    'no-console': 'warn',
  },
};
