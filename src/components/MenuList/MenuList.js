import React from "react";
import "./styles.scss";

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
            <a href={link}>
              <li key={i}>{name}</li>
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
