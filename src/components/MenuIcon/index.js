import React from "react";
import "./styles.css";

const MenuIcon = ({ checked, onClick }) => {
  return (
    <div className="menu-icon" onClick={onClick}>
      <div className="hamburger-lines">
        <span className={checked ? "line line1 checked" : "line line1"}></span>
        <span className={checked ? "line line2 checked" : "line line2"}></span>
        <span className={checked ? "line line3 checked" : "line line3"}></span>
      </div>
    </div>
  );
};

export default MenuIcon;
