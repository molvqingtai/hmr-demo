const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ChromeExtensionHmrWebpackPlugin = require('../../chrome-extension-hmr-webpack-plugin')

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    background: './src/background.js',
    content: './src/content.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'background',
      template: 'public/index.html',
      chunks: ['background']
    }),
    new ChromeExtensionHmrWebpackPlugin({
      port: 1234,
      manifest: path.resolve(__dirname, '../public/manifest.js')
    })
  ]
}
