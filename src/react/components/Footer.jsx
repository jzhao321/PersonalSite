import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer
                className="Footer"
            >
                <div
                    className="FooterInner"
                >
                    <div
                        className="SiteInfo"
                    >
                        I.D.E.A.S. at SJSU, One Washington Square, San Jose, CA, 94621, 95112
                    </div>
                    <div className = "SocialMedia">
                        Follow Us
                        <div
                            className="SocialMediaIconWrapper"
                        >
                            <i
                                href="#"
                                className="facebook SocialMediaIcon"
                            />
                            <i
                                href="#"
                                className="instagram SocialMediaIcon"
                            />
                            <i
                                href="#"
                                className="linkedin SocialMediaIcon"
                            />
                            <i
                                href="#"
                                className="envelope SocialMediaIcon"
                            />
                        </div>
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer;