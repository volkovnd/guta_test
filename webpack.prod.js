var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
var TerserWebpackPlugin = require("terser-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
var ImageminPlugin = require("imagemin-webpack-plugin").default;
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var cssnano = require("cssnano");
var commonConfig = require("./webpack.common");

/** @returns {import("webpack").Configuration} */
var prodConfig = () => ({
  mode: "production",
  output: {
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[id].[hash].js",
    publicPath: "/guta_test/"
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: false
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "public"),
        to: ""
      }
    ]),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css"
    }),
    new OptimizeCSSAssetsWebpackPlugin({
      processor: cssnano,
      canPrint: false
    }),
    new ImageminPlugin(),
    new HtmlWebpackPlugin({
      title: "Home page",
      minify: true,
      template: path.resolve(__dirname, "src/pages/home.html"),
      publicPath: "/docs/"
    })
  ],
  optimization: {
    nodeEnv: "production",
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
});

module.exports = merge([commonConfig(), prodConfig()]);
