var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/*
Configuración para desarrollo,
esta configuración hace uso del servidor de desarrollo
de webpack se ejecuta con npm start
*/
module.exports = {
    entry: {
        app: './src/ts/app.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:4000/',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
}