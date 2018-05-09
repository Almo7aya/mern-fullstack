const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {compact: false}
    },
    ]
  }
};
