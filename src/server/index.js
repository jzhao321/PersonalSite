import express from "express";
import React from "react";
import path from "path";
import { renderToString } from "react-dom/server"
import { StaticRouter  } from "react-router-dom";
import Root from "../react/Root.jsx";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("tested");
})

const app = express();

app.use("/api", router);

app.use("/", express.static(path.join(__dirname, "../static")));

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

app.listen(80);

const htmlTemplate = (reactDom) => {
    return `
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset = "utf-8">
            <title>React SSR</title>
            <link rel="stylesheet" href="/sheet.css">
        </head>

        <body>
            <div id="root" class="bodyTag">${reactDom}</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `;
}