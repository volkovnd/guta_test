var merge = require("webpack-merge");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
var TerserWebpackPlugin = require("terser-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
var ImageminPlugin = require("imagemin-webpack");

var commonConfig = require("./webpack.common");

/** @returns {import("webpack").Configuration} */
var prodConfig = () => ({
    mode: "production",
    output: {
        filename: "js/[name].[hash].js",
        chunkFilename: "js/[id].[hash].js",
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "css/[id].[hash].css"
        }),
        new ImageminPlugin({
            bail: false,
            cache: true,
            imageminOptions: {
                plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    [
                        "svgo",
                        {
                            plugins: [
                                {
                                    removeViewBox: false
                                }
                            ]
                        }
                    ]
                ]
            }
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
            }),
            new OptimizeCSSAssetsWebpackPlugin({
                processor: require("cssnano"),
                canPrint: false
            })
        ]
    },
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
                            modules: false,
                            importLoaders: 1
                        },
                        ident: "css"
                    },
                    {
                        loader: "postcss-loader",
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
                            modules: false,
                            importLoaders: 2
                        },
                        ident: "css"
                    },
                    {
                        loader: "postcss-loader",
                        ident: "postcss"
                    },
                    {
                        loader: "sass-loader",
                        ident: "sass"
                    }
                ]
            }
        ]
    }
});

module.exports = merge([commonConfig(), prodConfig()]);
