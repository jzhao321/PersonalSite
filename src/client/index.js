import Root from "../react/Root.jsx"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import { AppContainer } from "react-hot-loader"

import "../styles/sheet.scss";

const root = document.getElementById("root");


const development = module.hot && process.env.NODE_ENV === "development"
const render = development ? ReactDOM.render : ReactDOM.hydrate;

console.log(development);

render(
    <AppContainer>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </AppContainer>
, root);

if (development) {
    module.hot.accept("../react/Root.jsx", () => {
        const NextRoot = require("../react/Root.jsx").default;
        render(
            <AppContainer>
                <BrowserRouter>
                    <Root />
                </BrowserRouter>
            </AppContainer>
        , root);
    });
}