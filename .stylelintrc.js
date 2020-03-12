module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true, // enforce alphabetical ordering
  },
  syntax: 'postcss',
};
