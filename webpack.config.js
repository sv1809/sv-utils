const webpack = require("webpack");
const path = require("path");

const sourcePath = path.join(__dirname, "./src");
const distPath = path.join(__dirname, "./dist");

const plugins = [
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new webpack.optimize.UglifyJsPlugin()
];

const jsEntry = [
    "index"
];

module.exports = {
    context: sourcePath,
    entry: {
        js: jsEntry,
    },
    output: {
        path: distPath,
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                enforce: "pre",
                use: [{
                    loader: "eslint-loader"
                }],
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    query: {
                        cacheDirectory: true
                    }
                }]
            }
        ],
    },
    resolve: {
        extensions: [".js"],
        modules: [
            sourcePath,
            "node_modules"
        ]
    },
    plugins: plugins
};
