import React, { Component } from "react";

class FolderNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: (this.props.label) ? this.props.label : null,
            options: (this.props.options) ? this.props.options : null
        }
    }

    generateLabel() {
        return (this.state.label) ? (
            <li
                className="FolderNavLabel"
            >
                {this.state.label}
            </li>
        ) : null;
    }

    generateOptions() {
        return (this.state.options) ? this.state.options.map((value) => {
            return (
                <li
                    key={value}
                    className="FolderNavOption"
                >
                    <a
                        href = "#"
                    >
                        {value}
                    </a>
                </li>
            );
        }) : null;
    }

    render() {
        return (
            <ul>
                {this.generateLabel()}
                {this.generateOptions()}
            </ul>
        )
    }
}

export default FolderNavigation;