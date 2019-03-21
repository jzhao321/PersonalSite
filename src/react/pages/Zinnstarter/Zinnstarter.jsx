import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import ZinnstarterAbout from "./About/ZinnAbout.jsx";
import ZinnBatch1 from "./Batch1/ZinnBatch1.jsx";
import ZinnBatch2 from "./Batch2/ZinnBatch2.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";

class Zinnstarter extends Component {
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
							<Redirect to={`${this.props.match.url}/about`} />
						);
					}}
				/>
				<Route
					path={`${this.props.match.url}/about`}
					component={ZinnstarterAbout}
				/>
				<Route
					path={`${this.props.match.url}/batch1`}
					component={ZinnBatch1}
				/>
				<Route
					path={`${this.props.match.url}/batch2`}
					component={ZinnBatch2}
				/>
				<Route component={ErrorPage}/>
			</Switch>
		);
	}
}

export default Zinnstarter;
