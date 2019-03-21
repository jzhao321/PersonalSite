import React ,{ Component } from "react";

export default class ErrorPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div
                    className = "ErrorMessage noJumbo"
                >
                    The page you are looking for does not exist
                </div>
            </>
        )
    }
}