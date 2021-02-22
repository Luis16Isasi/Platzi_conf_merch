const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    //a donde querememos que se vaya
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
    chunkFilename: '[name].min.js',
    //le pasamos path publico que es la raiz en este caso
    publicPath: '/',
  },

  //que archivos debe de escuchar
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.css'],
  },

  //agreamos nuestros loader
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      //le decimos de donde tomara el index.html
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        collapseWhitespace: true,
      },
      title: '[name].min.html',
    }),
  ],

  //configuramos dev-server
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
};
