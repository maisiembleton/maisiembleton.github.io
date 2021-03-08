import React from "react";
import "./styles.scss";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import Socials from "../../components/Socials/Socials";

const LandingSection = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        <ContentBlock
          id="landing"
          title="Hello, I'm Maisie!"
          subtitle={[
            "I am a Web Developer passionate about designing and creating beautiful, functional user experiences. Currently embarking on a journey into becoming an a11y expert!",
          ]}
        />
        <Socials isLightBackground />
      </div>
    </div>
  );
};

export default LandingSection;
