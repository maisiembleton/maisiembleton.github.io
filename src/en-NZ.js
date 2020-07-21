import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ResumeButtonLink = withStyles({
  root: {
    border: "2px solid #fdd835",
    background: "#fdd835",
    color: "#262626",
    height: 30,
    padding: "0 5px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    textTransform: "lowercase",
  },
})(Button);

export default {
  about: {
    title: "About",
    iam:
      "I am a UX/UI designer, developer, hackathon-goer and general life enthusiast.",
    recent:
      "Recent graduate of Victoria University of Wellington with a Bachelor of Science majoring in Computer Science. I have worked as a Front End Developer, interned as a Product Manager, and am currently doing Freelance Design and Development.",
    self: (
      <>
        <center>
          <strong>
            <br />
            Self Starter / Creative Collaborator / Problem Solver / ENFP <br />
            <br />
          </strong>
        </center>
      </>
    ),
    // TODO put cv in
    check: (
      <>
        Check out my{" "}
        <ResumeButtonLink
          href="https://drive.google.com/file/d/1gNAEIvoDQxFlxJ8c7akVdgkvcbNlo_me/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </ResumeButtonLink>{" "}
        to find out more about my skills and experience.
      </>
    ),
  },
  work: {
    title: "Work",
    all: "All",
    design: "Design",
    development: "Development",
    community: "Community Involvement",
  },
};
