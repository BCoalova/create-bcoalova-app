const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const config = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
        clean: true,
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jpg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, 'build'),
        compress: true,
        port: 5000,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
        new Dotenv(),
    ],
}

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development'

    if (isDevelopment) {
        config.performance = { hints: 'warning' }
        config.devtool = 'source-map'
    }
    if (isDevelopment && argv.open) {
        config.performance = { hints: false }
        return config
    }
    config.performance = { hints: false }
    config.devtool = false
    return config
}
