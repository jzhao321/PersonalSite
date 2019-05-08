import express from "express";
import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter  } from "react-router-dom";
import Root from "../react/Root.jsx";

import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpack from "webpack";

import config from "../../webpack.config";

const compiler = webpack(config);
const devMiddleware = webpackDevMiddleware(compiler, {
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
});

const app = express();

app.use(devMiddleware);

app.use(webpackHotMiddleware(compiler));

app.use("/", express.static(path.join(__dirname, "../../static")));

app.get("/*", (req, res) => {
    const context = {};
    const jsx = (
        <StaticRouter context = {context} location = {req.url}>
            <Root />
        </StaticRouter>
    )
    const reactDom = renderToString(jsx);

    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end(htmlTemplate(reactDom))
})

app.listen(3000);

const htmlTemplate = (reactDom) => {
    return `
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset = "utf-8">
            <title>James Zhao</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <link rel="stylesheet" href="/sheet.css">
        </head>

        <body>
            <div id="root" class="bodyTag">${reactDom}</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `;
}