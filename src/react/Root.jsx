import { hot } from "react-hot-loader/root";
import React, { Component } from "react";

class Root extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div
					className = "test"
				>
					okay time to make personal website
				</div>
			</>
		);
	}
}

export default hot(Root);
