const resolve = require('rollup-plugin-node-resolve');

const config = {
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/index.js',
  },
  plugins: [resolve()],
};

module.exports = config;