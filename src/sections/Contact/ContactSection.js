import React from "react";
import "./styles.scss";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButtonLink = withStyles({
  root: {
    borderRadius: 50,
    background: "#fdd835",
    border: "3px solid #fdd835",
    color: "#262626",
    height: 48,
    padding: "0 30px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: "600",
    maxWidth: "20em",
    marginTop: "2em",
    transition: "box-shadow 0.3s ease-in-out, border 0.3s ease-in-out",

    "@media (min-width: 768px)": {
      fontSize: "18px",
    },
    "&:hover, &:focus, &:focus-within": {
      color: "#262626",
      background: "#fdd835",
      fontWeight: "600",
      opacity: "1",
      webkitBoxShadow: "0px 2px 52px -15px rgba(0, 0, 0, 0.75)",
      mozBoxShadow: "0px 2px 52px -15px rgba(0, 0, 0, 0.75)",
      boxShadow: "0px 2px 52px -15px rgba(0, 0, 0, 0.75)",
      border: "2px solid #fff",
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
