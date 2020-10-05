import React from "react";
import MenuList from "../MenuList/MenuList";
import "./styles.scss";
import Socials from "../Socials/Socials";

const HamburgerMenu = (props) => {
  return (
    <div className="hamburgermenu">
      <div>
        <div className="hamburgermenu-title">
          <a href="#top">
            <p>MAISIEMBLETON</p>
          </a>
        </div>
        <MenuList />
      </div>
      <div className="hamburgermenu-socials">
        <Socials isLightBackground />
      </div>
      {/* put in cta button - let's talk -- maybe at the bottom */}
    </div>
  );
};

export default HamburgerMenu;
