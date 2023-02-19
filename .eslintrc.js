module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-array-index-key': 'off',
  },
  settings: {
    'import/resolver': {
      node: {},
    },
    'jsx-a11y/label-has-associated-control': [
      2,
      { labelAttributes: ['htmlFor'] },
    ],
  },
};
