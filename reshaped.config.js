const { baseThemeDefinition } = require("reshaped/themes")

/** @type {import('reshaped').ReshapedConfig} */
const config = {
  themes: {
    website: {
      color: {
        ...baseThemeDefinition.color,
        backgroundPage: { hex: "#212121" },
        backgroundPageFaded: { hex: "#252525" },
        foregroundNeutralFaded: { hex: "#c7c7c7" },
        backgroundNeutralFaded: { hex: "#2e2e2e" },
        borderNeutralFaded: { hex: "#3e3d3d" },
        backgroundElevationOverlay: { hex: "#fff", hexDark: "#252525" },
      },
    },
  },
};

module.exports = config;
