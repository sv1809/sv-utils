var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {        
        index: './src/index.js',
    },
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {test: /\.js?$/, loader: 'babel', exclude:[/\.spec\.js$/,/node_modules/]},
        ]
    }
}
