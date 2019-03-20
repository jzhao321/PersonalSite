import React, { Component } from "react";
import { Link } from "react-router-dom";


class DropdownMenu extends Component {
    constructor(props) {
        super(props);
    }

    generateMenu() {
        return this.props.options.map((value, index) => {
            return (
                <div
                    className="DropMenuItem"
                    key={value}
                >
                    {(this.props.subLinks) ?
                    <Link
                        className = "NavOption"
                        to={ "" + this.props.mainLink + this.props.subLinks[index]}
                    >
                        {value}
                    </Link> :
                    <a className = "NavOption">
                        {value}
                    </a>
                    }
                </div>
            )
        })
    }

    render() {
        return (
            <div
                className="SubNav"
            >
                {this.generateMenu()}
            </div>
        )
    }
}

export default DropdownMenu;