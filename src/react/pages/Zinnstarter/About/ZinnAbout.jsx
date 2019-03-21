import React , { Component } from "react";
import { Jumbotron } from "../../../components"
import ZinnAboutBody from "./ZinnAboutBody.jsx";


class ZinnstarterAbout extends Component{
    constructor(props){
        super(props);
        console.log("About");
    }
    render(){
        return(
            <>
                <Jumbotron
                    className="Zinnstarter-About-Jumbotron Jumbotron"
                    backgroundImage = {"/images/ZinnStarter.jpg"}
                    jumboText = {"Funding and Mentorship for Student Startups"}
                />
                <ZinnAboutBody/>
            </>
        )
    }
}

export default ZinnstarterAbout;