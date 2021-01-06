module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 11,
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react'],
  // add your custom rules here
  rules: {
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 'off',
  },
};
