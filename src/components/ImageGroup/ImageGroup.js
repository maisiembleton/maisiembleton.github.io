import React from "react";
import "./styles.scss";
import HoverableImage from "../HoverableImage/HoverableImage";

const ImageGroup = ({ images }) => {
  return (
    <div className="imagegroup">
      {images.map(
        ({ src, alt, link, overlayContent, classNames, overlayButton }, i) => (
          <HoverableImage
            src={src}
            alt={alt}
            link={link}
            overlayContent={overlayContent}
            overlayButton={overlayButton}
            key={i}
            classNames={classNames}
          ></HoverableImage>
        )
      )}
    </div>
  );
};

export default ImageGroup;
