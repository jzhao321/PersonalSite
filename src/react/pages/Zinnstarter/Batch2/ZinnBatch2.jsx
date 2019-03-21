import React , { Component } from "react";
import { Jumbotron } from "../../../components/"
import ZinnBatch2Body from "./ZinnBatch2Body.jsx";


class ZinnstarterAbout extends Component{
    constructor(props){
        super(props);
        console.log("About");
    }
    render(){
        return(
            <>
                <Jumbotron
                    className="ZinnBatch2Jumbo Jumbotron"
                    backgroundImage = {"/images/ZinnBatch2.jpg"}
                    jumboText = {"Funding and Mentorship for Student Startups"}
                />
                <ZinnBatch2Body/>
            </>
        )
    }
}

export default ZinnstarterAbout;