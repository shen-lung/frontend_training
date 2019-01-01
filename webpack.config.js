const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            REACT_APP_TARGET: 'web',
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true
    }
};
