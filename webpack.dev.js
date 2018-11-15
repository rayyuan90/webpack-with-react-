const HtmlWebPackPlugin = require("html-webpack-plugin");
const common = require('./webpack.common.js');
module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./dev_index.html"
    })
  ]
};
