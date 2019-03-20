import React , { Component } from "react";
import { Jumbotron } from "../../../components";
import ZinnBatch1Body from "./ZinnBatch1Body.jsx"

class ZinnstarterBatch1 extends Component{
    constructor(props){
        super(props);
        console.log("Batch 1");
    }
    render(){
        return(
            <>  
                <Jumbotron
                    className = "ZinnBatch1Jumbo Jumbotron"
                    backgroundImage = {"/images/ZinnBatch1Banner.jpg"}
                    jumboText = "Funding and Mentorship for Student Startups"
                />
                <ZinnBatch1Body/>
            </>
        )
    }
}

export default ZinnstarterBatch1;