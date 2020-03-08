const postCSSPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postCSSPresetEnv({
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
        'logical-properties-and-values': {
          dir: 'ltr',
        },
        'nesting-rules': true,
      },
    }),
    cssnano(),
  ],
};
