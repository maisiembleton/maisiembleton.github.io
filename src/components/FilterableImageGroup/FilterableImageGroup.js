import React from "react";
import "./styles.scss";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ImageGroup from "../ImageGroup/ImageGroup";

const FilterableImageGroup = ({ buttonNames, images }) => {
  return (
    <div className="filterableimagegroup">
      <ButtonGroup names={buttonNames} onClick={filterImages()} />
      <ImageGroup images={images} />
    </div>
  );
};

function filterImages() {
  var buttonItems = document.getElementsByClassName("buttongroup-item");
  console.log(buttonItems.item);
  var filterKey = "all";

  for (var i = 0; i < buttonItems.length; i++) {
    if (buttonItems[i].id == "design") {
      console.log(buttonItems[i]);
    }
  }
}
//each hoverableimage will have a classname e.g. design, dev, projects

//get all elements and apply .hide
//async
//get all elements with the specified class name and apply .show

//add active thing to button - TODO

export default FilterableImageGroup;
