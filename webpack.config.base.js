const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.tsx', '.ts', '.js'],
        mainFields: ['jsnext:main', 'browser', 'main'],
        alias: {
            "@store": path.resolve(__dirname, 'src/store')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [tsImportPluginFactory({ libraryName: 'antd', style: 'css' })]
                    }),
                    compilerOptions: {
                        module: 'esnext'
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.ejs'),
            chunksSortMode: 'dependency'
        }),
        new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV !== 'production'
        })
    ]
}
