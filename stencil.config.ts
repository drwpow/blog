import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import postCSSPresetEnv from 'postcss-preset-env';

// https://stenciljs.com/docs/config

export const config: Config = {
  devServer: {
    openBrowser: false,
    port: 3333,
  },
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      baseUrl: 'https://blog.pow.rs/',
      // serviceWorker: null,
      type: 'www',
    },
  ],
  plugins: [
    postcss({
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
      ],
    }),
  ],
};
