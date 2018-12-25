import webpack from 'webpack';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
    entry: {
        'gh-optimization-client': `./src/optimization-client.ts`
    },
    output: {
        path: `${__dirname}/dist/esm5`,
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        sourceMapFilename: '[name].js.map',
        library: 'GHOptimization',
        libraryTarget: 'commonjs'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.+\.(j|t)s$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: {
        hints: 'warning'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './test/index.html',
            inject: 'head'
        })
    ],
    resolve: {
        extensions: ['.wasm', '.mjs', '.ts', '.js', '.json']
      },
    stats: {
        colors: true,
        modules: true,
        reasons: true
    }
};

export default config;
