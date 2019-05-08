const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

console.log(path.join(__dirname, "static"));

module.exports = {
    mode: "production",
    name: "client",
    entry: "./src/client/index.js",
    devtool: false,
    output: {
        path: path.join(__dirname, "static"),
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            }
        }],
    },
};