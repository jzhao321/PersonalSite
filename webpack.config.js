const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = [
    {
        name: "client",
        entry: "./src/client/index.js",
        output: {
            path: path.join(__dirname, "static"),
            filename: "bundle.js",
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }],
        },
    },{
        name: "server",
        target: "node",
        node: {
            __dirname: false,
            __filename: false,
        },
        externals: [nodeExternals()],
        entry: "./src/server/index.js",
        output:{
            path: path.join(__dirname, "lib"),
            filename: "index.js",
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }]
        }
    }
];