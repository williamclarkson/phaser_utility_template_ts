const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: './src/index.ts',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Phaser Game',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/assets/", to: "assets/" }
      ],
    })
  ],
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
},
resolve: {
    extensions: [".tsx", ".ts", ".js"]
}
};