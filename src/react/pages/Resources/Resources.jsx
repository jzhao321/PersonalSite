import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import HaveIdea from "./HaveIdea/HaveIdea.jsx";
import Login from "./Login/Login.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";

class Resources extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path={`${this.props.match.url}/`}
					render={() => {
						return (
							<Redirect to={`${this.props.match.url}/haveidea`} />
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
				<Route component={ErrorPage}/>
			</Switch>
		);
	}
}

export default Resources;
