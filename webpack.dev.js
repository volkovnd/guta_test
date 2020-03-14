var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var commonConfig = require("./webpack.common");

/** @returns {import("webpack").Configuration} */
var devConfig = () => ({
  mode: "development",
  output: {
    filename: "js/[name].js",
    chunkFilename: "js/[id].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: false
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new HtmlWebpackPlugin({
      title: "Home page",
      minify: false,
      template: path.resolve(__dirname, "src/pages/home.html"),
      publicPath: "/"
    })
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public")
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    nodeEnv: "development"
  }
});

module.exports = merge([commonConfig(), devConfig()]);
