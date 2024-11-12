import { config as reshapedConfig } from "reshaped/config/postcss";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    ...reshapedConfig.plugins,
  },
};

export default config;
