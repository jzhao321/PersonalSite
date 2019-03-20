import React, { Component } from "react";
import { Content, ContentWrapper, Jumbotron } from "../../../components";

class HaveIdea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Jumbotron
                    className="HaveIdeaJumbo Jumbotron"
                    backgroundImage={"/images/HaveIdea.jpg"}
                    jumboText="Have An Idea? Let Us Know."
                />
                <main
                    className="Body col-sm-12"
                    id="HaveIdeaBody"
                >
                    <div
                        className="Content col-sm-6"
                    >

                        <Content
                            title="New Idea Form"
                            text={[
                                "If you have a business or idea you would like help with, please fill out the form below. We'll do our best to find you a good fit.",
                                "We accept projects from IDEAS members, alumni, and faculty."
                            ]}
                        />

                        <Content
                            sectionLabel="Name:"
                        />
                        <ContentWrapper
                            columns={2}
                            contentDirection="row"
                        >
                            <input
                                className="fNameInput Input"
                            />
                            <input
                                className="lNameInput Input"
                            />
                            <p
                                className="fNameInputText InputText"
                            >
                                First Name
                        </p>
                            <p
                                className="lNameInputText InputText"
                            >
                                Last Name
                        </p>
                        </ContentWrapper>
                        <Content
                            spacer={true}
                        />
                        <ContentWrapper>
                            <Content
                                sectionLabel="Email:"
                            />
                            <input
                                className="EmailInput Input"
                            />
                            <Content
                                spacer={true}
                            />
                            <Content
                                sectionLabel="Company or Project Name:"
                            />
                            <input
                                className="ProjectInput Input"
                            />
                            <Content
                                spacer={true}
                            />
                            <Content
                                sectionLabel="Brief description of project or business:"
                            />
                            <input
                                className="DescInput Input"
                            />
                            <Content
                                spacer={true}
                            />
                            <Content
                                sectionLabel="I am a..."
                            />
                            <select>
                                <option value="student">Student</option>
                                <option value="alumni">Alumni</option>
                                <option value="professor">Professor</option>
                                <option value="other">Other</option>
                            </select>
                            <Content
                                spacer={true}
                            />
                            <Content
                                sectionLabel="Which milestones have you reached?"
                            />
                            <form>
                                <input type="checkbox" value="justIdea" />Just an idea<br />
                                <input type="checkbox" value="conceptSolid" />Concept solidified<br />
                                <input type="checkbox" value="mvp" />Created an MVP<br />
                                <input type="checkbox" value="incorporated" />Incorporated<br />
                                <input type="checkbox" value="genRevenue" />Generated revenue<br />
                                <input type="checkbox" value="raisedFunding" />Raised funding<br />
                            </form>
                            <Content
                                spacer={true}
                            />
                            <Content
                                sectionLabel="Are you looking for team members? If yes, what skills are you looking for?"
                            />
                            <input
                                className="TeamInput Input"
                            />

                            <Content
                                spacer={true}
                            />

                            <div>
                                <button
                                    className="Button1 Button"
                                >
                                    Submit
                            </button>
                            </div>
                        </ContentWrapper>



                    </div>

                </main>
            </>
        )
    }
}

export default HaveIdea;