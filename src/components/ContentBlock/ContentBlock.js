import React from "react";
import "./styles.scss";

//TODO

const ContentBlock = ({ id, title, subtitle, content, children }, i) => {
  return (
    <div className="content-block" id={id} key={i}>
      <div className="content-block-title">
        <h2>{title}</h2>
      </div>

      {subtitle && (
        <div className="content-block-subtitle">
          <p>{subtitle}</p>
        </div>
      )}
      {content && (
        <div className="content-block-content">
          {content?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentBlock;
