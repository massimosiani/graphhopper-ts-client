const merge = require('webpack-merge');
const common = require('./webpack.config');

const prod = merge(common, {
    devtool: 'source-map',
    mode: 'production',
    optimization: {
        minimize: true
    }
});

export default prod;
