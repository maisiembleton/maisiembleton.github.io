import React from "react";
import strings from "./en-NZ";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import SkillsGraph from "../../components/SkillsGraph/SkillsGraph";

import { Wrapper } from "./AboutSection.jsx";

const content = [strings.self, strings.iam, strings.recent];

const bottomContent = [strings.ilove, strings.thisHas, strings.check];

const AboutSection = () => {
  return (
    <Wrapper id="about">
      <ContentBlock id="about-content" title="About" content={content} />
      <SkillsGraph />
      <ContentBlock content={bottomContent} />
    </Wrapper>
  );
};

export default AboutSection;
