import React from "react";
import "./styles.scss";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButtonLink = withStyles({
  root: {
    background: "#fdd835",

    borderRadius: 50,
    border: "2px solid #fdd835",
    color: "#262626",
    height: 48,
    padding: "0 30px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: "600",
    maxWidth: "20em",
    marginTop: "2em",

    "@media (min-width: 768px)": {
      fontSize: "18px",
    },
    "&:hover": {
      color: "#262626",
      background: "#ffffff",
      fontWeight: "600",
    },
  },
})(Button);

const ContactSection = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h1>Let's Talk!</h1>
        <h3>Want to work together?</h3>
        <h3> Collaborate on a project? </h3>
        <h3> Need help organising an event? </h3>
        <h3>Want to learn more about internships? Hackathons? </h3>

        <div className="contact-container-cta">
          <h3>
            Whatever it may be - I’m always open and interested in connecting!
          </h3>
          <StyledButtonLink
            variant="outlined"
            size="medium"
            href="mailto:maisiembleton@gmail.com"
          >
            Start a Conversation
          </StyledButtonLink>
        </div>

        {/* <Socials /> */}
      </div>
    </div>
  );
};

export default ContactSection;
