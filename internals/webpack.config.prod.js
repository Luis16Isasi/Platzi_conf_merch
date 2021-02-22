const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtratPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },

  output: {
    //a donde querememos que se vaya
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
  },

  //que archivos debe de escuchar
  resolve: {
    extensions: ['tsx', '.ts', '.js'],
  },

  //agreamos nuestros loader
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtratPlugin.loader }, 'css-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtratPlugin({
      filename: './css/style.min.css',
    }),
    new HtmlWebpackPlugin({
      //le decimos de donde tomara el index.html
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        collapseWhitespace: true,
      },
      title: '[name].min.html',
    }),
  ],
};
