var path = require("path");
var merge = require("webpack-merge");
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
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        })
    ],
    devServer: {
        host: "localhost",
        port: 3000,
        compress: true,
        historyApiFallback: true
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        ident: "extract"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: false,
                            sourceMap: true
                        },
                        ident: "css"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        },
                        ident: "postcss"
                    }
                ]
            },
            {
                test: /\.s[ca]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        ident: "extract"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                            modules: false
                        },
                        ident: "css"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        },
                        ident: "postcss"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        },
                        ident: "sass"
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
