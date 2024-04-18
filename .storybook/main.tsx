import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["./"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  features: {},
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (!prop.parent) {
          return true;
        }
        return (
          !/node_modules/.test(prop.parent.fileName) &&
          prop.parent.name !== "DOMAttributes" &&
          prop.parent.name !== "HTMLAttributes" &&
          prop.parent.name !== "AriaAttributes"
        );
      },
    },
  },
};

export default config;
