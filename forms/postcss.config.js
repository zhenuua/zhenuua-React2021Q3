module.exports = ({ file, options, env }) => ({
  parser: false,
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    'postcss-preset-env': {},
    cssnano: env === 'production' ? {} : false,
  },
});
