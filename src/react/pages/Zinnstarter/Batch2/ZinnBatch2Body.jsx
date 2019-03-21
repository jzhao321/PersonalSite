import React, { Component } from "react";
import { Content, ContentWrapper } from "../../../components"

class ZinnstarterBatch2Body extends Component {
    constructor(props) {
        super(props);
        console.log("Batch 2");
    }
    render() {
        return (
            <main
                className="Body col-sm-12"
                id="ZinnBatch2Body"
            >
                <div
                    className="Content col-sm-6"
                >
                    <Content
                        title = "ZinnStarter Batch 2"
                        className = "ZinnstarterTitle"
                    />
                    <Content
                        sectionLabel = "2018 - 2019"
                        className = "ZinnstarterTimePeriod"
                    />
                    <ContentWrapper
                        columns={2}
                        contentDirection = "row"
                    >
                        <Content
                            images = {[
                                "/images/Medixflow.png"
                            ]}
                        />
                        <Content
                            title="MEDIXFLOW"
                            text={[
                                "Medixflow is a digital voice assistant for senior care documentation that allows caregivers to finish the documentation process while they are working with their residents using simple voice commands."
                            ]}
                            className = "ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content
                        spacer = {true}
                        divider = {true}
                    />
                    <ContentWrapper
                        columns={2}
                        contentDirection = "row"
                    >
                        <Content
                            images = {[
                                "/images/2x.png"
                            ]}
                        />
                        <Content
                            title="Twice a Day"
                            text={[
                                "Twice a day is dedicated to improving oral healthcare by creating sustainable habits and reducing insurance premiums."
                            ]}
                            className = "ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content
                        spacer = {true}
                        divider = {true}
                    />
                    <ContentWrapper
                        columns={2}
                        contentDirection = "row"
                    >
                        <Content
                            images = {[
                                "/images/Neoplank.jpg"
                            ]}
                        />
                        <Content
                            title="NeoPlank"
                            text={[
                                "A way to address low visibility and stability during an arterial/venous cannulation procedure in neonates to increase first-attempt success rate and reduce procedure time."
                            ]}
                            className = "ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content
                        spacer = {true}
                        divider = {true}
                    />
                    <ContentWrapper
                        columns={2}
                        contentDirection = "row"
                    >
                        <Content
                            images = {[
                                "/images/Surplus.png"
                            ]}
                        />
                        <Content
                            title="Surplus"
                            className = "ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content
                        spacer = {true}
                        divider = {true}
                    />
                    <ContentWrapper
                        columns={2}
                        contentDirection = "row"
                    >
                        <Content
                            images = {[
                                "/images/Roam.png"
                            ]}
                        />
                        <Content
                            title="Roam"
                            text = {[
                                "Roam is a fashionable travel hip bag that bridges the gap between style and structure. We are a making travel bags that have intentional functionality, have a role in sustainability, and provide a platform for styling."
                            ]}
                            className = "ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content
                        spacer = {true}
                        divider = {true}
                    />
                    <ContentWrapper
                        columns={2}
                        contentDirection = "row"
                    >
                        <Content
                            images = {[
                                "/images/Newsbee.png"
                            ]}
                        />
                        <Content
                            title="Newsbee"
                            text = {[
                                "NewsBee is a news aggregator that geo-tags news stories to a map based application to show readers the exact location that news is happening. By showing news consumers that news is happening local to them, they will feel more inclined to read stories that may impact their lives."    
                            ]}
                            className = "ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content
                        spacer = {true}
                        divider = {true}
                    />
                    <ContentWrapper
                        columns={2}
                        contentDirection = "row"
                    >
                        <Content
                            images = {[
                                "/images/Turon.png"
                            ]}
                        />
                        <Content
                            title="Turon"
                            text = {[
                                "Turon is a peer to peer private tutoring platform for college students. By pairing students with the most affordable, knowledgeable and relevant tutors for their classes, Turon supplements in class learning with private tutoring options for university attendants."    
                            ]}
                            className = "ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content
                        spacer = {true}
                        divider = {true}
                    />
                    <ContentWrapper
                        columns={2}
                        contentDirection = "row"
                    >
                        <Content
                            images = {[
                                "/images/AlgaWater.png"
                            ]}
                        />
                        <Content
                            title="ALGA WTR"
                            text = {[
                                "ALGA WTR is a functional water beverage enhanced with marine ingredients in order to hydrate you faster and keep you hydrated longer."    
                            ]}
                            className = "ZinnstarterText"
                        />
                    </ContentWrapper>
                    <Content
                        spacer = {true}
                        divider = {true}
                    />
                    <ContentWrapper
                        columns={2}
                        contentDirection = "row"
                    >
                        <Content
                            images = {[
                                "/images/Contct.png"
                            ]}
                        />
                        <Content
                            title="Contct"
                            text = {[
                                "A new and innovative contacts app."    
                            ]}
                            className = "ZinnstarterText"
                        />
                    </ContentWrapper>
                </div>
            </main>
        )
    }
}

export default ZinnstarterBatch2Body;