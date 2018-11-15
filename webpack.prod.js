const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const common = require('./webpack.common.js');
module.exports = merge(common,{
  devtool: 'hidden-source-map ',
  performance: {
  hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    port: 8199,
    historyApiFallback: true,
    inline: true
  }
});
