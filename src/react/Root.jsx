// React HOT reloading
import { hot } from "react-hot-loader/root";

// React base dependencies
import React, { Component } from "react";

// Local modules
import NavBar from "./NavBar";



class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scroll: 0
		}
	}

	componentDidMount = () => {
		window.addEventListener("scroll", () => {
			this.setState({
				scroll: window.scrollY
			})
		})
	}

	getFixedSize = () => {
		return (this.state.scroll < 200) ? this.state.scroll / 10 : 20;
	}

	getFixedPosition = () => {
		return (this.state.scroll < 500) ? "fixed" : "absolute";
	}

	getFixedTop = () => {
		return (this.state.scroll < 500) ? "50%" : 500 + window.innerHeight / 2;
	}

	render = () => {
		return (
			<>
				<NavBar />
				<div
					className="body"
				>
					okay time to make personal websited + {this.state.scroll}
				</div>
				<div
					className="fixed"
					style={{
						height: `${this.getFixedSize()}em`,
						width: `${this.getFixedSize()}em`,
						position: this.getFixedPosition(),
						top: this.getFixedTop(),
					}}
				>
					
				</div>

			</>
		);
	}
}

export default hot(Root);
