const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const MiniCSS = require("mini-css-extract-plugin");

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
        },{
            test: /\.scss$/,
            use: [
                MiniCSS.loader,
                {
                    loader: "css-loader"
                },{
                    loader: "sass-loader"
                }
            ]
        }],
    },
    
};