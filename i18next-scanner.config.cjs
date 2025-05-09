// i18next-scanner.config.cjs

module.exports = {
  input: ['src/**/*.{js,jsx,ts,tsx}'], // adjust path if needed
  output: './public/locales/$LOCALE/translation.json',
  options: {
    debug: true,
    removeUnusedKeys: true,
    sort: true,
  },
};
