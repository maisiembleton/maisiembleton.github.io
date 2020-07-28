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
          subtitle="I help students and small businesses create beautiful, functional and accessible websites. "
        />
        <Socials />
      </div>
    </div>
  );
};

export default LandingSection;
