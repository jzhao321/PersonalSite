import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: (this.props.title) ? this.props.title : null,
            sectionLabel: (this.props.sectionLabel) ? this.props.sectionLabel : null,
            text: (this.props.text) ? this.props.text : null,
            images: (this.props.images) ? this.props.images : null,
            divider: (this.props.divider) ? this.props.divider : false,
            spacer: (this.props.spacer) ? this.props.spacer : false,
            className: (this.props.className) ? this.props.className : "",
        }
    }

    generateTitle() {
        return (this.state.title) ? (
            <h3
                className="ContentTitle"
                style={{
                    display: "flex"
                }}
            >
                <strong>{this.state.title}</strong>
            </h3>
        ) : null;
    }

    generateSectionLabel() {
        return (this.state.sectionLabel) ? (
            <p
                className="ContentSectionLabel"
                style={{
                    display: "flex"
                }}
            >
                <strong>{this.state.sectionLabel}</strong>
            </p>
        ) : null;
    }

    generateText() {
        return (this.state.text) ? this.state.text.map((value, index) => {
            return (
                <p
                    className="ContentText"
                    style={{
                        display: "flex"
                    }}
                >
                    {value}
                </p>
            )
        }) : null;
    }




    generateImages() {
        return (this.state.images) ? this.state.images.map((value) => {
            return (
                <img
                    className="ContentImage"
                    src={value}
                    style={{
                        display: "flex",
                        maxWidth: "100%"
                    }}
                />
            )
        }) : null;
    }

    generateHorizontalDivider() {
        return (this.state.divider) ? (
            <hr
                className="ContentDivider"
                style={{
                    display: "flex"
                }}
            />
        ) : null;
    }

    generateSpacer() {
        return (this.state.spacer) ? (
            <div
                className="ContentSpacer"
                style={{
                    display: "flex"
                }}
            >
            </div>
        ) : null;
    }

    render() {
        return (this.state.className) ? (
            <div
                className = {this.state.className}
            >
                {console.log(this.state.style)}
                {this.generateTitle()}
                {this.generateSectionLabel()}
                {this.generateText()}
                {this.generateImages()}
                {this.generateSpacer()}
                {this.generateHorizontalDivider()}

            </div>
        ) : (
            <>
                {this.generateTitle()}
                {this.generateSectionLabel()}
                {this.generateText()}
                {this.generateImages()}
                {this.generateSpacer()}
                {this.generateHorizontalDivider()}

            </>
        )
    }
}

export default Content;