const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports =(env) => {
 return require(`./webpack.${env}.js`)
}
