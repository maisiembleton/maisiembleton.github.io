import React from "react";
import "./styles.scss";
import strings from "../../en-NZ";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import cn from "classnames";
import SkillsGraph from "../../components/SkillsGraph/SkillsGraph";

const content = [strings.about.self, strings.about.iam, strings.about.recent];

const bottomContent = [
  strings.about.ilove,
  strings.about.thisHas,
  strings.about.check,
];

const AboutSection = () => {
  return (
    <div className="about" id="about">
      <ContentBlock
        id="about-content"
        title={strings.about.title}
        content={content}
      />
      <SkillsGraph />
      <ContentBlock content={bottomContent} />
    </div>
  );
};

export default AboutSection;
