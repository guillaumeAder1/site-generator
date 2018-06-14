const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    index: path.resolve(__dirname, './src/index')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    //
    publicPath: '/',
  },
  devServer: {
    // need to be defined to refresh browser
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: 'style.css' }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })

  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
      }
    }
  },
}
