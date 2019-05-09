// React HOT reloading
import { hot } from "react-hot-loader/root";

// React base dependencies
import React, { Component } from "react";

// Local modules
import NavBar from "./NavBar";



class Root extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<NavBar/>
				<div
					className = ""
				>
					okay time to make personal website
				</div>
			</>
		);
	}
}

export default hot(Root);
