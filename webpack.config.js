const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'preload.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'prefetch.html'
    }),
    new PreloadWebpackPlugin({
      excludeHtmlNames: ['prefetch.html']
    }),
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      excludeHtmlNames: ['preload.html']
    })
  ]
}