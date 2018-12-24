const merge = require('webpack-merge');
const common = require('./webpack.config');

const config = merge(common, {
    devServer: {
        contentBase: './dist'
    },
    devtool: 'inline-source-map',
    mode: 'development',
    watch: true
});

export default config;
