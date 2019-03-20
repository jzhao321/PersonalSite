import { Link, Switch, Route, StaticRouter } from "react-router-dom";
import React from "react";
import Image from "./Fb.jpg";

export default class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "This Title"
        }
    }
    render() {
        return (
            <>
                <img src={Image}/>
                <h1>
                    {this.state.title}
                </h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>
                    THIS IS HOME
                </h1>
            </>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <>
                <h1>
                    THIS IS ABOUT
                </h1>
                <button
                    onClick={() => {
                        console.log("asdf")
                    }}
                >
                    asdf
                </button>
            </>
        )
    }
}