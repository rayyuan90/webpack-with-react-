const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const common = require('./webpack.common.js');
module.exports = merge(common,{
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./dev_index.html"
    })
  ]
})
