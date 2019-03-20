import React, { Component } from "react";
import { Content } from "../../../components";

class ZinnstarterAboutBody extends Component {
    constructor(props) {
        super(props);
        console.log("About");
    }



    render() {
        return (
            <main
                className="Body col-sm-12"
            >
                <div
                    className = "Content col-sm-6"
                >
                    <img
                        src = {"images/ZinnstarterProgram.png"}
                    />
                    <Content
                        text={[
                            "UPDATE: Thank you Ray Zinn for donating $20,000 for student projects!",
                            "Do you have a killer idea that could make you the next Bill Gates? Apply to be a ZinnStarter Fellow and start your journey on becoming the next big Silicon Valley startup!",
                        ]}
                    />
                    <a
                        className={"Button1"}
                        href="https://goo.gl/forms/oAnE500xKNDrxJdS2"
                        target = {"_blank"}
                    >
                        APPLY FOR ZINNSTARTER
                    </a>
                    <Content
                        spacer = {true}
                    />
                    <Content
                        title = "ABOUT THE ZINNSTARTER PROGRAM"
                        text={[
                            "This year, we will select 5 to 10 student-led startups to distribute $20,000 donated by Ray Zinn, former CEO of Micrel. The ZinnStarter Fellows are selected after a series of applications, interviews and a trial period.",
                            "After becoming a ZinnStarter Fellow, each team is provided with funding (amount determined after teams are assessed), a dedicated mentor, and will be required to attend bi-weekly accelerator meetings. To receive funding, every ZinnStarter Fellow MUST participate in our bi-weekly accelerator meetings.",
                            "Students selected for the program are strongly encouraged to enter future business plan competitions to take their startup projects to the next level."
                        ]}
                        spacer = {true}
                    />
                    <Content
                        title = "PROGRAM ELIGIBILITY"
                        text = {[
                            " • Only current SJSU students may apply for ZinnStarter.",
                            " • No limit on team sizes.",
                            " • Students must be members of IDEAS.",
                            " • Projects in any stage will be accepted EXCEPT those who have received external funding over $10,000. ZinnStarter is meant to help people get their idea off the ground."
                        ]}
                        spacer = {true}
                    />
                    <Content
                        title = "IMPORTANT DEADLINES"
                        text = {[
                            "Applications Open • September 6, 2018",
                            "Priority Applications Close • September 30, 2018",
                            "ZinnStarter Fellows Announced • November 30, 2018"
                        ]}
                        divider = {true}
                        spacer = {true}
                    />
                    <Content
                        title = "FAQ"
                        sectionLabel = "Who is Ray Zinn?"
                        text = {[
                            "Ray Zinn is the longest serving CEO in Silicon Valley. He is legendary for founding a semiconductor company without venture capital.",
                            "Ray led his company, Micrel, for 37 years, 36 profitably on a GAAP basis. This track record is astounding for many reasons:",
                            " • Semiconductor business is wildly cyclical, and companies expect deep losses in down cycles.",
                            " • The only unprofitable year was in the wake of the dot-com implosion of the year 2000.",
                            " • The loss for the year was a mere $50,000.",
                            " • The ZinnStarter program would not be possible with Ray Zinn's generous donations.",
                            "You can read more about Ray Zinn at http://www.toughthingsfirst.com/"
                        ]}
                        spacer = {true}
                    />
                    <Content
                        sectonLabel = "What is the mission of ZinnStarter?"
                        text = {[
                            "ZinnStarter is one arm of Ray’s goal of exporting the positive aspects of Silicon Valley culture to the rest of America. By reaching students in university entrepreneurship programs, Ray intends to impart his experience, encouragement, mentoring and perspective, as well as putting seed money into the pockets of the next Google, Apple, Ford, Walmart or AT&T."
                        ]}
                        spacer = {true}
                    />
                    <Content
                        sectionLabel = "Who makes the decisions?"
                        text = {[
                            "IDEAS serves as the ZinnStarter Board. The ZinnStarter Board will be responsible for hosting the program, determining the selected teams, and distributing funding.",
                            "The board members for 2018 are:",
                            "Kushal Cuttari, President of IDEAS",
                            "Jasmine Sanchez, Head of Outreach at IDEAS",
                            "Sahib Grewal, Events Director at IDEAS",
                            "Alex Luong, Marketing Director at IDEAS",
                            "Dr. Anu Basu, Board Chair and Advisor at IDEAS"
                        ]}
                        spacer = {true}
                    />
                    <Content
                        sectionLabel = "What will we do during the accelerator meetings?"
                        text = {[
                            "The accelerator meetings will consist of: mock presentations, financial analysis, competition preparation, and much more. These meetings will not be easy but will help to make your business profitable and scalable.",

                        ]}
                        spacer = {true}
                    />
                    <Content
                        title = "Contact Us"
                        text = {[
                            `If you have any other questions related to this program, email us at contact@ideassjsu.org and include "ZinnStarter" in the subject line.`
                        ]}
                    />
                </div>
            </main>
        )
    }
}

export default ZinnstarterAboutBody;