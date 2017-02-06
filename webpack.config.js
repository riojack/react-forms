let webpack = require('webpack');

module.exports = {
  entry: {
    'application': __dirname + '/app/index.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    path: __dirname + '/dist',
    pathinfo: true,
    filename: '[name].js',
    sourcePrefix: ''
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
