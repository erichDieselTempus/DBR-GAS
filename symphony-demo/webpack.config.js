const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve('./src', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '_bundle.js',
        library: {
            name: 'DBR',
            type: 'var',
        },
    },
};