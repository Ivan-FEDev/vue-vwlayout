var path = require("path");

// 可以使用 MiniCssExtractPlugin 代替
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

// var VueLoaderPlugin = require("vue-loader/lib/plugin");

function resolve (dir) {
    return path.join(__dirname, "..", dir);
}

const baseConfig = {

    context: resolve("/"),
    entry: resolve("src/main.js"),

    output: {
        path: resolve("dist"),
        publicPath: "/",
        filename: "bundle.js?[hash:8]"
    },

    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            // "vue$": "vue/dist/vue.esm.js",
            "@": resolve("src")
        }
    },

    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
                enforce: "pre"
            },
            // {
            //     test: /\.js?$/,
            //     loader: "babel-loader"
            // },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "vue-style-loader",
                    use: [ {
                        loader: "css-loader",
                        options: {
                            // modules: true
                        }
                    }, "postcss-loader"]
                })
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        // outputPath: path.resolve(__dirname, "../static/images"),
                        // name: "[name]-[hash:8].[ext]",
                        limit: 5 * 1024
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    // outputPath: path.resolve(__dirname, "../static/fonts"),
                    limit: 10000
                    // name: '[name].[hash:8].[ext]'
                }
            }
        ]
    },

    plugins: [
        // new VueLoaderPlugin(),

        new ExtractTextWebpackPlugin({
            filename: "css/[name].css",
            allChunks: true
        })
    ]
};

module.exports = baseConfig;
