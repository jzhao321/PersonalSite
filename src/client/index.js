import Root from "../react/Root.jsx"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById("root");


const development = module.hot && process.env.NODE_ENV === "development"
const render = development ? ReactDOM.render : ReactDOM.hydrate;

console.log(development);

render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
, root);

if(development){
    module.hot.accept();
}