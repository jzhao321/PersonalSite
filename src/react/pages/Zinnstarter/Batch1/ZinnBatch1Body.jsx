import React, { Component } from "react";
import { Content, ContentWrapper } from "../../../components";

class ZinnBatch1Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="Body col-sm-12" id="ZinnBatch1Body">
                <div className="Content col-sm-6">
                    <Content
                        title="ZinnStarter Batch 1"
                        className="ZinnBatch1Title"
                    />
                    <Content
                        sectionLabel="2017 - 2018"
                        className="ZinnstarterTimePeriod"
                    />
                    <Content images={["images/ZinnBatch1Teams.jpg"]} spacer={true} />
                    <Content
                        text={[
                            "In Fall 2017, over 20 student-led projects applied to become a ZinnStarter Fellow for Spring 2018. We required at least an MVP.",
                            "After rigorous interviews and curating, six were selected.",
                            "Teams were given a mentor and received a total of $10,000 in funding.",
                            "Thanks to a  generous donation and tough mentorship from Ray Zinn, founder of Micrel, these award-winning teams refined their businesses and won another $15,000 in funding."
                        ]}
                        spacer={true}
                    />
                    <ContentWrapper columns={2} contentDirection="row">
                        <Content images={["images/Ambii.jpg"]} />
                        <Content
                            title="ambii"
                            text={[
                                "Ambii is a digital jukebox for your devices. Real-time music collaborative streaming platform that allows users to come together for a more “fair” listening experience. Winners of the SVBPC 2018."
                            ]}
                            className="ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content spacer={true} divider={true} />
                    <ContentWrapper columns={2} contentDirection="row">
                        <Content images={["images/Vessel.jpg"]} />
                        <Content
                            title="Vessel Athletics"
                            text={[
                                "Vessel is an innovative athletic top-wear brand that has implemented a water bladder inside of athletic wear tops for the purpose of solving a common problem that runners, bikers, hikers and many face."
                            ]}
                            className="ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content spacer={true} divider={true} />
                    <ContentWrapper columns={2} contentDirection="row">
                        <Content images={["images/Spotme.jpg"]} />
                        <Content
                            title="Spot Me"
                            text={[
                                "Tired of driving around looking for parking? SpotMe is your solution. App users will have live data of the availability of parking at SJSU’s three parking garages. We help individuals find parking not look for it."
                            ]}
                            className="ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content spacer={true} divider={true} />
                    <ContentWrapper columns={2} contentDirection="row">
                        <Content images={["images/Gratis.jpg"]} />
                        <Content
                            title="Gratis"
                            text={[
                                "Gratis is tackling food waste by solving hunger amongst students by creating a fast, inter-linked network between food vendors with excess food, and hungry students looking for free food."
                            ]}
                            className="ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content spacer={true} divider={true} />
                    <ContentWrapper columns={2} contentDirection="row">
                        <Content images={["images/Parkstash.jpg"]} />
                        <Content
                            title="Park Stash"
                            text={[
                                "Stuck in an endless pursuit to find a suitable parking spot? Have a parking spot that you want to rent and make the extra money? ParkStash is the answer to all your parking problems. Share a spot, book a spot and earn a spot. 2nd prize winner in the SVBPC 2018."
                            ]}
                            className="ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content spacer={true} divider={true} />
                    <ContentWrapper columns={2} contentDirection="row">
                        <Content images={["images/Deltaglass.jpg"]} />
                        <Content
                            title="Delta Glass"
                            text={[
                                "Delta Glass is a productivity timer that utilizes the pomodoro technique to reduce procrastination. It functions like an hourglass and has lights and sensors that make doing work easy and simple."
                            ]}
                            className="ZinnstarterText"
                        />
                    </ContentWrapper>
                </div>
            </main>
        );
    }
}

export default ZinnBatch1Body;
