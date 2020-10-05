import React from "react";
import "./styles.scss";
import { StyledLink } from "./MenuList.jsx";

const menuItems = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const MenuList = (props) => {
  return (
    <div className="menulist">
      <ul>
        {menuItems.map(({ name, link }, i) => (
          <div className="menulist-item">
            <li key={i}>
              <StyledLink href={link}>{name}</StyledLink>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
