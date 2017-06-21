var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app/App.jsx',
  output: { path: __dirname + '/dist/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
