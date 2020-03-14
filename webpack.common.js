var path = require("path");

var VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;

/** @returns {import('webpack').Configuration} */
var commonConfig = () => ({
  entry: {
    main: "./src/index.js"
  },
  context: __dirname,
  target: "web",
  output: {
    path: path.join(__dirname, "docs"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              filename: "[name].[ext]",
              outputPath: "fonts"
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|webp|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              filename: "[name].[ext]",
              outputPath: "images"
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
      {
        test: /\.json$/,
        type: "json"
      }
    ]
  },
  performance: false,
  stats: "minimal",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      images: path.resolve(__dirname, "src/images"),
      scss: path.resolve(__dirname, "src/scss"),
      components: path.resolve(__dirname, "src/components"),
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: [".js", ".json", ".vue"]
  }
});

module.exports = commonConfig;
