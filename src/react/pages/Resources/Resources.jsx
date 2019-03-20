import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import HaveIdea from "./HaveIdea/HaveIdea.jsx";
import Login from "./Login/Login.jsx";

class Resources extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <>
                    <Route
                        exact
                        path={`${this.props.match.url}/`}
                        render={() => {
                            return (
                                <Redirect
                                    to={`${this.props.match.url}/haveidea`}
                                />
                            );
                        }}
                    />
                    <Route
                        path={`${this.props.match.url}/haveidea`}
                        component={HaveIdea}
                    />
                    <Route
                        path={`${this.props.match.url}/login`}
                        component={Login}
                    />
                </>
            </Router>
        );
    }
}

export default Resources;
