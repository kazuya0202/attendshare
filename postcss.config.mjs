/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    "postcss-preset-env": {
      features: {
        "nesting-rules": true,
        "custom-properties": true,
        "custom-media-queries": true,
        "custom-selectors": true,
        "gap-properties": true,
        "media-query-ranges": true,
      },
    },
  },
}

export default config
