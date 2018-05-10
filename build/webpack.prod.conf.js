var path = require("path");
var baseConfig = require("./webpack.base.conf");
var merge = require("webpack-merge");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var CleanWebpackPlugin = require("clean-webpack-plugin");

function resolve (dir) {
    return path.join(__dirname, "..", dir);
}

const prodConfig = {
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             chunks: "initial",
    //             minChunks: 2,
    //             maxInitialRequests: 5,
    //             minSize: 0,
    //             name: "common"
    //         }
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve("src/index.html"),
            filename: "index.html",
            hash: true
            // minify: {
            //     removeAttributeQuotes: true
            // }
        }),

        new CleanWebpackPlugin(
            [ resolve("dist/*.*") ]
        )
    ]
};

module.exports = merge(baseConfig, prodConfig);
