import React from "react";
import "./styles.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import GitHubIcon from "@material-ui/icons/GitHub";

//TODO

// replace with icons and real links
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

const Socials = () => {
  return (
    <div className="socials">
      {socials.map(({ name, link, icon }, i) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="socials-item"
          key={i}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
