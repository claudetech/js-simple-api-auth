var path    = require('path');
var webpack = require('webpack');

var root = path.dirname(__dirname);

module.exports = {
  entry: path.join(root, 'src', 'entry.js'),
  output: {
    path: path.join(root, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      CryptoJS: path.join(root, 'shims', 'crypto-js'),
      crypto: path.join(root, 'shims', 'crypto'),
      lodash: path.join(root, 'components/lodash/dist/lodash'),
      moment: path.join(root, 'components/moment/moment.js')
    }
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: []
};
