/**
 * Created by sabbas on 6/3/17.
 */

import webpack from 'webpack'
import path from 'path'

const BUILD_DIR = path.resolve(__dirname, 'public')
const APP_DIR = path.resolve(__dirname, 'src')

const config = {
    entry : APP_DIR + '/index.js',
    output: {
        path    : BUILD_DIR,
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React'   : 'react',
            'ReactDOM': 'react-dom'
        })
    ],
    module : {
        loaders: [
            {
                test   : /.jsx?$/,
                include: APP_DIR,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query  : {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.css$/,
                use : [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test  : /\.json$/,
                loader: 'json-loader'
            }
        ],

    },
    devtool: 'eval-source-map'

}

module.exports = config