const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {

  console.info("MODE :: " + env.NODE_ENV)

  return {
    devtool: 'source-map',
    entry: {
      index: path.resolve(__dirname, './src/index')
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].js',
      filename: '[name].js',
      //
      //publicPath: '/',
    },
    devServer: {
      // need to be defined to refresh browser
      historyApiFallback: true,
      hot: true
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
      new CleanWebpackPlugin(['dist']),
      new ExtractTextPlugin({ filename: 'style.css' }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "index.html"
      }),
      new HtmlWebPackPlugin({
        inject: false,
        template: "./src/404.html",
        filename: "404.html"
      }),
      new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' },
        { from: 'src/config', to: 'config' }
      ]),
      new webpack.NamedChunksPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
        }
      }
    },
  }
}
