const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    assetModuleFilename: "assets/img/[hash][ext][query]",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)>|eot|ttf|otf|)$/,
        type: "asset/inline",
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
};
