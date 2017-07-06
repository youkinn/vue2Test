// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    // to edit target browsers: use "browserlist" field in package.json
    'postcss-px2rem': { remUnit: 100 },
    autoprefixer: {
      browsers: ['iOS >= 7', 'Android >= 2.3', 'IE >= 7'],
    },
  },
};
