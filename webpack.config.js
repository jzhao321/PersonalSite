const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

console.log(path.join(__dirname, "static"));

module.exports = {
    devServer: {
        proxy: {
            "**": {
                target: "http://localhost:3000",
                secure: false
            }
        },
        port: 3001,
        hot: true
    },
    name: "client",
    entry: "./src/client/index.js",
    output: {
        path: path.join(__dirname, "static"),
        publicPath: "http://localhost:3001/",
        filename: "bundle.js",
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
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