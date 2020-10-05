import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import GitHubIcon from "@material-ui/icons/GitHub";

import { Wrapper, SocialBlock, Label } from "./Socials.jsx";

const socials = [
  {
    name: "Resume",
    icon: <DescriptionRoundedIcon fontSize="large" />,
    link:
      "https://drive.google.com/file/d/1gNAEIvoDQxFlxJ8c7akVdgkvcbNlo_me/view?usp=sharing",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon fontSize="large" />,
    link: "https://www.linkedin.com/in/maisiembleton/",
  },
  {
    name: "Github",
    icon: <GitHubIcon fontSize="large" />,
    link: "https://github.com/maisiembleton",
  },
];

const Socials = (props) => {
  return (
    <Wrapper>
      {socials.map(({ name, link, icon }, i) => (
        <>
          <SocialBlock tabIndex={0}>
            <div
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="socials-item"
              key={i}
            >
              {icon}
            </div>
            <Label isLightBackground={props.isLightBackground}>{name}</Label>
          </SocialBlock>
        </>
      ))}
    </Wrapper>
  );
};

export default Socials;
