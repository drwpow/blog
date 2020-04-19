module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
  },
  syntax: 'sass',
};
