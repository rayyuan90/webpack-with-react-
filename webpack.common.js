const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: 'eval-source-map',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }],
        include: /\.\/config/
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: 8999,
    historyApiFallback: true,
    inline: true
  }
};
