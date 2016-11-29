var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: 'mocha!./tests/index.js',
    output: {
        filename: '[name].js',
        path: 'tests-results/',
        publicPath: 'http://' + 'localhost' + ':' + '3001' + '/tests-results'
    },
    module: {
        loaders: [{ test: /\.js$/, loaders: ['babel-loader'] }]
    },
    devServer: {
        host: 'localhost',
        port: '3001'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};