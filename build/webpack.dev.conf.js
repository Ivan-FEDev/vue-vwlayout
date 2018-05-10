var path = require("path");
var webpack = require("webpack");
var baseConfig = require("./webpack.base.conf");
var merge = require("webpack-merge");

var HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve (dir) {
    return path.join(__dirname, "..", dir);
}

const devConfig = {
    devServer: {
        contentBase: resolve("dist"),
        port: 9000,
        host: "localhost",
        publicPath: "/",
        compress: true,
        // open: true,
        hot: true,
        inline: true,
        overlay: true
    },

    devtool: "cheap-eval-source-map",

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, "../static/dll/manifest.json")
        // }),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "../src/index.html"),
            inject: true,
            hash: true
        })
    ]
};

module.exports = merge(baseConfig, devConfig);
