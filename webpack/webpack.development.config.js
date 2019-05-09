const path = require("path");
const webpack = require("webpack");

console.log(path.join(__dirname, "static"));

module.exports = {
    mode: "development",
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
    entry: [
        "webpack-hot-middleware/client",
        "react-hot-loader/patch",
        "./src/client/index.js"
    ],
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
        },{
            test: /\.scss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader"
                },{
                    loader: "sass-loader",
                    options: {
                        implementation: require("dart-sass")
                    }
                }
            ]
        }],
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    }
};