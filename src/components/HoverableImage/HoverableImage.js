import React from "react";
import "./styles.scss";
import cn from "classnames";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// pass in classNames

const StyledButton = withStyles({
  root: {
    border: "2px solid #17bebb",
    color: "#fff",
    fontFamily: "Montserrat, sans-serif",
    opacity: "0.9",
    "&:hover, &:focus, &:focus-within": {
      border: "2px solid #17bebb",
      background: "#17bebb",
      opacity: "1",
      color: "#000",
      fontWeight: "600",
    },
  },
})(Button);

const HoverableImage = ({ src, alt, link, overlayContent, classNames }) => {
  return (
    <div className={cn("hoverableimage", classNames)}>
      <div className="container">
        <img src={src} alt={alt} className="image" />
        <div className="overlay">
          <div className="text">
            <p>{overlayContent}</p>
            <StyledButton
              size="small"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="primary"
            >
              Check it out here
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverableImage;
