var path = require("path");
var webpack = require("webpack");

function resolve (dir) {
    return path.join(__dirname, "..", dir);
}

module.exports = {
    context: path.resolve(__dirname, "../"),

    entry: {
        vendor: [
            "vue"
        ]
    },

    output: {
        path: resolve("static/dll"),
        filename: "[name]_dll.js",
        library: "_dll_[name]"
    },

    plugins: [
        new webpack.DllPlugin({
            path: resolve("static/dll/manifest.json"),
            name: "_dll_[name]"
        })
    ]
};
