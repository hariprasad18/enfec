import React from "react";
import "./header.css";

const NavLink = ({ title, dropdownItems }) => {
  return (
    <li className="nav-link">
      <span>{title}</span>
      {dropdownItems && (
        <ul className="dropdown">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <span className="dropDownItems">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
