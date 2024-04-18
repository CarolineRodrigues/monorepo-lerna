import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.[tj]sx"],
  staticDirs: ['./'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
  features: {},
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    disableTelemetry: true
  },
};

export default config;
