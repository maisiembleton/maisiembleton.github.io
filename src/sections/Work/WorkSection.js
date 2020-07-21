import React from "react";
import "./styles.scss";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import strings from "../../en-NZ";
import vuwwit from "../../images/work/vuwwit.png";
import tpf from "../../images/work/TPF.png";
import cn from "classnames";
import ImageGroup from "../../components/ImageGroup/ImageGroup";
import futureYou from "../../images/work/future-you.jpg";

const buttonNames = [
  { name: "All", id: "all" },
  { name: "Design", id: "design" },
  { name: "Development", id: "development" },
  { name: "Projects", id: "projects" },
];

const workImages = [
  {
    src: vuwwit,
    alt: "victoria-university-of-wellington-women-in-tech",
    link: "https://womenintech.nz/",
    overlayContent: "Victoria University of Wellington Women in Tech",
    classNames: cn("all", "design", "development"),
  },
  {
    src: tpf,
    alt: "the-tiny-plastic-factory",
    link: "https://thetinyplasticfactory.co.nz/",
    overlayContent: "The Tiny Plastic Factory",
    classNames: cn("all", "development"),
  },
  {
    src: futureYou,
    alt: "future-you-retirement-tool",
    link: "https://futureyou.kiwiwealth.co.nz/#/",
    overlayContent: "Kiwi Wealth - Future You Retirement Tool",
    classNames: cn("all", "development"),
  },
];

const WorkSection = () => {
  return (
    <div className="work" id="work">
      <ContentBlock title={strings.work.title} />
      {/* <ButtonGroup names={buttonNames} /> */}
      <ImageGroup images={workImages} />
      {/* <FilterableImageGroup buttonNames={buttonNames} images={workImages} /> */}
    </div>
  );
};

export default WorkSection;
