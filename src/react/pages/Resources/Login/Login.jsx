import React, { Component } from "react";
import { Jumbotron } from "../../../components";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ID: ""
		};
		
	}
	render() {
		return (
			<>
				<Jumbotron />
				<main className="Body col-sm-12">
					<div className="Content col-sm-6">
						<input
							ref={instance => {
								this.IDinput = instance;
							}}
							onKeyPress={e => {
								if (e.key === "Enter") {
									console.log(this.state.ID);
									this.IDinput.value = "";
								}
							}}
							onChange={event => {
								this.setState({
									ID: event.target.value
								});
							}}
						/>
						<button
						>asdf</button>
					</div>
				</main>
			</>
		);
	}
}

export default Login;
