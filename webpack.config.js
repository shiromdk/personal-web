const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyle = new ExtractTextPlugin({
  filename: 'style.css'
});
const extractAdminStyle = new ExtractTextPlugin({
  filename:'admin_style.css'
});

module.exports = {
  entry: {
    bundle: './client/src/index.js',
  },
  output: {
    path: path.join(__dirname, 'client/dist/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: extractStyle.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        exclude:/\.admin.less$/,
        use: extractStyle.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader'
            }
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'server/public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    }),
    extractStyle,
    new webpack.optimize.UglifyJsPlugin()

  ]
};
