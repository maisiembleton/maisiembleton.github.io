import React, { useState } from "react";
// import "./styles.scss";
import { Drawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import yellow from "@material-ui/core/colors/yellow";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Hamburger = (props) => {
  const anchor = "hamburger";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <IconButton onClick={toggleDrawer()}>
        <MenuIcon style={{ color: yellow[600] }} fontSize="large" />
      </IconButton>
      <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer()}>
        <HamburgerMenu />
      </Drawer>
    </div>
  );
};

export default Hamburger;
