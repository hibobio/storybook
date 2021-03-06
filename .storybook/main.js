const DisableWarnings = require('./disable-warnings.js');

module.exports = {
  stories: ['../projects/ui-framework/**/*.stories.ts'],
  addons: [
    `@storybook/addon-knobs`,
    '@storybook/addon-notes',
    '@storybook/addon-essentials',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.devServer = { stats: 'errors-only' };
    config.plugins.push(new DisableWarnings());

    // Return the altered config
    return config;
  },
};

