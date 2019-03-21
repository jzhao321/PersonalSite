import Root from "../react/Root.jsx"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById("root");
console.log("React has hydrated");

ReactDOM.hydrate(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
, root);
