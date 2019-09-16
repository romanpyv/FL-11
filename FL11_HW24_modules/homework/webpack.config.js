const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
var PrettierPlugin = require("prettier-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return({
        entry: './src/js/index.js',
        output: {
            path: __dirname + '/dist',
            filename: 'js/app.js'
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'less-loader',
                    ]
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['@babel/preset-env']
                    }
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    options: {
                        name: 'img/[name].[ext]'
                    },
                    loader: 'file-loader'
                }
            ]
        },
        plugins: isProduction ?
            [
                new MiniCssExtractPlugin({
                    filename: 'css/style.css'
                }),
                new HtmlWebpackPlugin({
                    template: 'src/index.html'
                }),
                new ImageminPlugin({
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    pngquant: {
                        quality: '50-70'
                    }
                }),
                new PrettierPlugin()
            ] :
            [
                new HtmlWebpackPlugin({
                    template: 'src/index.html'
                })
            ]
    });
};