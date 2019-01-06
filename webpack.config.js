const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html',
    }),
  ],
};
