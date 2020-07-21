import React from "react";
import "./styles.scss";
import logo from "../../images/ME-LOGO.png";
import Hamburger from "../Hamburger/Hamburger";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButtonLink = withStyles({
  root: {
    borderRadius: 50,
    border: "2px solid #fdd835",
    color: "#fff",
    height: 40,
    padding: "0 20px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    "&:hover": {
      background: "#fdd835",
      color: "#262626",
      fontWeight: "600",
    },
  },
})(Button);

const NavigationBar = () => {
  return (
    <header>
      <div className="nav">
        <div>
          <a href="#top">
            <span className="yellow">M</span>AISI
            <span className="yellow">E</span>MBLETON
          </a>
        </div>
        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#projects">PROJECTS</a>

          <StyledButtonLink
            variant="outlined"
            size="medium"
            href="mailto:maisiembleton@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            SAY HI
          </StyledButtonLink>
          {/* <ButtonLink name="Say Hi!" link="mailto:maisiembleton@gmail.com" /> */}
        </div>
        <div className="nav-hamburger">
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
