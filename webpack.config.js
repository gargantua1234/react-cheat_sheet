const PATH = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

const DIST_DIR = PATH.resolve(__dirname, "dist");
const SRC_DIR = PATH.resolve(__dirname, "src" );

// const htmlPlugin = new HtmlWebPackPlugin({
//     template: SRC_DIR + "/index.html",
//     filename: "../index.html",
// });

module.exports = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                use: {
                    loader: "babel-loader"
                }

            }
        ]
    }
    // plugins: [htmlPlugin]
};