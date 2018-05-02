const PATH = require('path');

const DIST_DIR = PATH.resolve(__dirname, "dist");
const SRC_DIR = PATH.resolve(__dirname, "src" );

let config = {
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
};

module.exports=config;