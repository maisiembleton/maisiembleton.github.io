import React from "react";
import "./styles.scss";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import cn from "classnames";
import ImageGroup from "../../components/ImageGroup/ImageGroup";
import pando from "../../images/work/pando.png";
import coffeedoc from "../../images/work/coffeedoc.png";
import blu from "../../images/work/blu.png";
import wub from "../../images/work/wub.png";

const projectsImages = [
  {
    src: wub,
    alt: "wub",
    link:
      " https://drive.google.com/file/d/1vxGtqaOVpZgv0WT3lRFMfTxDCpxXno1e/view?usp=sharing",
    overlayContent: (
      <>
        2020 - The Wub <br /> VUWWIT Hackathon
      </>
    ),
    classNames: cn("all", "development"),
  },
  {
    src: coffeedoc,
    alt: "coffeedoc",
    link: " https://github.com/lieshoutab/coffeedoc",
    overlayContent: (
      <>
        2018
        <br />
        Coffeedoc <br /> Railsbridge Event
      </>
    ),
    classNames: cn("all", "development"),
  },
  {
    src: pando,
    alt: "pando",
    link: "https://github.com/maisiembleton/pando",
    overlayContent: (
      <>
        2017
        <br />
        Pando <br />
      </>
    ),
    classNames: cn("all", "design", "development"),
  },
  {
    src: blu,
    alt: "blu",
    link: "https://github.com/unpragmatic/BluJam-2017",
    overlayContent: (
      <>
        2017
        <br />
        Blu <br />
        BluJam Hackathon
      </>
    ),
    classNames: cn("all", "design", "development"),
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects" id="projects">
      <ContentBlock title="Projects" />
      <ImageGroup images={projectsImages} />
    </div>
  );
};

export default ProjectsSection;
