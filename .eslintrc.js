module.exports = {
  root: true,
  extends: ['meienberger-react-native-typescript'],
  plugins: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/comma-dangle': 0,
    'react-native/no-color-literals': 0,
  },
};
