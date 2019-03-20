import React, { Component } from "react";

const BACK_OPACITY = 0.25

class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLabels: ["front", "top", "back", "bottom"],
            images: this.props.cubeImages,
            text: this.props.cubeText,
        }
        this.generateAnimatedCube = this.generateAnimatedCube.bind(this);
        this.generateImage = this.generateImage.bind(this);
    }

    generateAnimatedCube(){
        return (
            <div
                className = "rotationContainer Jumbotron"
            >
                {
                    this.state.imageLabels.map((label, index) => {
                        return this.generateImage(this.state.text[index], this.state.images[index], label);
                    })
                }
            </div>
        )
    }

    generateImage(text, image, className){
        return(
            <div
                className = {`${this.props.className} ${className}`}
                style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, ${BACK_OPACITY}), rgba(0, 0, 0, ${BACK_OPACITY})), `+ `url(${image})`
                }}
            >
                <p
                    className = "col-sm-10"
                >
                    {text}
                </p>
            </div>
        );
    }

    render() {
        return (this.props.cube) ? this.generateAnimatedCube() : this.generateImage(this.props.jumboText, this.props.backgroundImage, "Jumbotron");
    }
}

export default Jumbotron;