import React, { Component } from "react";
import Body from "./Body.jsx";
import { Jumbotron } from "../../components";



class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Jumbotron
                    className = "JumboCube"
                    cube = {true}
                    cubeImages = {[
                        "images/Jumbotron.jpg",
                        "images/Jumbotron.jpg",
                        "images/Jumbotron.jpg",
                        "images/Jumbotron.jpg"
                    ]}
                    cubeText ={[
                        "San Jose State University’s Startup Incubator and Accelerator",
                        "San Jose State University’s Startup Incubator and Accelerator",
                        "San Jose State University’s Startup Incubator and Accelerator",
                        "San Jose State University’s Startup Incubator and Accelerator",
                    ]}
                />
                <Body></Body>
            </>
        )
    }

}

export default Home;