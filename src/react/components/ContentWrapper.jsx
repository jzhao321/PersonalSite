import React, { Component } from "react";

class ContentWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: (this.props.style) ? this.props.style : null,
            contentDirection: (this.props.contentDirection) ? this.props.contentDirection : "column",
            className: (this.props.className) ? this.props.className : "",
            columns: (this.props.columns) ? this.props.columns : 1,
        }
        console.log(this.props.children);
    }

    render() {
        const children = React.Children.map(this.props.children, (child, index) => {
            return (
                <div
                    style = {{
                        width: `${Math.trunc(100 / this.state.columns)}%`,
                        display: "flex",
                        alignItems: "flex-start"
                    }}
                >
                    {React.cloneElement(child, {
                        style:{
                            width: "100%"
                        }
                    })}
                </div>
            );

        });
        return (
            <div
                className={`ContentWrapper ${this.state.className}`}
                style={{
                    ...this.state.style,
                    display: "flex",
                    flexDirection: this.state.contentDirection,
                    flexWrap: "wrap"
                }}
            >
                {children}
            </div>
        )
    }
}

export default ContentWrapper;