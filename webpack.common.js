var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
var CopyWebpackPlugin = require("copy-webpack-plugin");

/** @returns {import('webpack').Configuration} */
var commonConfig = () => ({
    entry: {
        main: "./src/index.js"
    },
    context: __dirname,
    target: "web",
    output: {
        path: path.join(__dirname, "dist"),
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
                            filename: "fonts/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg|webp)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            filename: "images/[name].[ext]"
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
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "src/images",
                to: "images"
            }
        ]),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "Home page",
            minify: false,
            template: path.resolve(__dirname, "src/pages/home.html")
        })
    ],
    resolve: {
        alias: {
            images: path.resolve(__dirname, "src/images"),
            scss: path.resolve(__dirname, "src/scss")
        },
        extensions: [".js", ".vue"]
    }
});

module.exports = commonConfig;
