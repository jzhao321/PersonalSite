import React, {
    Component
} from "react";
import DropdownMenu from "./DropdownMenu.jsx";

import { Link } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    createOptions() {
        return this.props.options.map((value) => {
            return (
                <div
                    key={value.name}
                    className="folder"
                >
                    {(value.mainLink) ?
                        <Link
                            className = "NavOption"
                            to = {"" + value.mainLink}
                        >
                            {value.name}
                        </Link> :
                        <a className = "NavOption">
                            {value.name}
                        </a>
                    }
                    {(value.selections) ? <DropdownMenu options={value.selections} subLinks={value.subLinks} mainLink = {value.mainLink}/> : null}
                </div>
            )
        })
    }

    render() {
        return (
            <header
                className="NavBar"
            >
                <div
                    className="LogoWrapper"
                >
                    <img
                        src={"images/IdeasLogo.png"}
                    >
                    </img>
                </div>
                <div
                    className="NavOptions"
                >
                    {this.createOptions()}
                    <div
                        className="BecomeAMemberButton"
                    >
                        Become a member
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;