import React, {
    Component
} from "react";

import { Content } from "../../components";


class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main
                className="Body col-sm-12"
            >
                <div
                    className="Content col-sm-6"
                >
                    <Content
                        title="Mission"
                        text={[
                            "IDEAS is the premier student-led startup accelerator at San Jose State University. We connect students from all majors and help them begin their startups by providing them with the necessary resources and workshops that entrepreneurs need to succeed.",
                            "Made by entrepreneurs. Run by entrepreneurs. For entrepreneurs."
                        ]}
                        divider={true}
                    />
                    <Content
                        title="Values"
                        sectionLabel="OPPORTUNITY"
                        text={[
                            "We offer opportunities for entrepreneurs to challenge and grow their businesses with events like Pitch Tank, Silicon Valley Innovation Challenge and various business plan competitions. Members direct access to our extensive network of mentors, alumni, entrepreneurs and venture capitalists.",
                            "We have the ZinnStarter program that offers funding to student startups.",
                            "The bottom line: We believe that our startups must continuously test themselves so that they create what people want. "
                        ]}
                        spacer={true}
                    />
                    <Content
                        sectionLabel="GROWTH"
                        text={[
                            "IDEAS provides resources and programs that help students become leaders. We teach the soft and hard skills that industry professionals are demanding that make our members competitive in the Silicon Valley."
                        ]}
                        spacer={true}
                    />
                    <Content
                        sectionLabel="INNOVATION"
                        text={[
                            "Ideation workshops and prototyping resources are accessible to all our members to turn today’s ideas into tomorrow’s products. In addition to connecting startups with talent, we also have in-house testers to help teams see the effectiveness of their prototypes."
                        ]}
                        spacer={true}
                    />
                    <Content
                        sectionLabel="EXPERIENCE"
                        text={[
                            "We offer an energetic space for entrepreneurs, designers, and engineers to collaborate and innovate. Their takeaways are tangible, and are broadly applicable across the startup and established corporation landscapes. Our programs allow student entrepreneurs to experience what it's like to go through the process of starting and working for a business."
                        ]}
                        spacer={true}
                    />
                    <a
                        onClick = {() => {
                            console.log("clicked");
                        }}
                        className = {"Button1"}
                    >
                        JOIN NOW
                    </a>
                </div>
            </main>
        );
    }
}

export default Body;