import React from "react";
import "./styles.scss";
import Hamburger from "../Hamburger/Hamburger";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import {
  StyledNavigationBar,
  StyledLogo,
  YellowAccent,
  NavigationWrapper,
  NavigationLink,
} from "./NavigationBar.jsx";

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
      <StyledNavigationBar>
        <div>
          <StyledLogo href="#top">
            <YellowAccent>M</YellowAccent>AISI
            <YellowAccent>E</YellowAccent>MBLETON
          </StyledLogo>
        </div>
        <NavigationWrapper>
          <NavigationLink href="#about">ABOUT</NavigationLink>
          <NavigationLink href="#work">WORK</NavigationLink>
          <NavigationLink href="#projects">PROJECTS</NavigationLink>

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
        </NavigationWrapper>
        <div className="nav-hamburger">
          <Hamburger />
        </div>
      </StyledNavigationBar>
    </header>
  );
};

export default NavigationBar;
