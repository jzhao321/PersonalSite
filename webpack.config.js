var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },{
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?limit=10000"
            }
        ],
    },
};