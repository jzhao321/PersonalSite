import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { NavBar, Footer } from "./components";
import Zinnstarter from "./pages/Zinnstarter/Zinnstarter.jsx";
import Resources from "./pages/Resources/Resources.jsx";

class Root extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<NavBar
					options={[
						{
							name: "Home",
							mainLink: "/"
						},
						{
							name: "Zinnstarter",
							mainLink: "/zinnstarter",
							selections: ["About", "Batch 2", "Batch 1"],
							subLinks: ["/about", "/batch2", "/batch1"]
						},
						{
							name: "Resources",
							mainLink: "/resources",
							selections: [
								"Have an idea?",
								"For Entrepreneurs",
								"Competitions",
								"Funding",
								"Login"
							],
							subLinks: [
								"/haveidea",
								"/forentrepreneurs",
								"/competitions",
								"/funding",
								"/login"
							]
						},
						{
							name: "Blog"
						},
						{
							name: "Gallery",
							selections: [
								"SVIC 2017",
								"Ideathon 2017",
								"Pitch Tank 2018",
								"Call for Code 2018"
							]
						},
						{
							name: "Calendar"
						},
						{
							name: "About",
							selections: [
								"About",
								"Meet the team",
								"Mentors",
								"Contact Us",
								"Donate"
							]
						}
					]}
				/>
				<Route exact path="/" component={Home} />
				<Route path="/zinnstarter" component={Zinnstarter} />
				<Route path="/resources" component={Resources} />
				<Footer />
			</>
		);
	}
}

export default Root;
