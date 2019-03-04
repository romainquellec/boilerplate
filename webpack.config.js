const path = require('path');

const LAMBDA_FILE_LOC = path.resolve(__dirname, 'build/lambda.js');
const LAMBDA_DIR = path.resolve(__dirname, 'build');
const LAMBDA_FILE_PROD = 'lambda_prod.js'

module.exports = {
    entry: LAMBDA_FILE_LOC,
    externals: ['aws-sdk'],
    output: {
        libraryTarget: 'umd',
        filename: LAMBDA_FILE_PROD,
        path: LAMBDA_DIR
    },
    target: 'node'
};