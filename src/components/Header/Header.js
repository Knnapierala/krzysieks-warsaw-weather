import React from "react";
import "./header.css";

const Header = ({ name, date }) => {
  return (
    <header>
      <h1 className="header-title">{name}</h1>
      <h2>Today is: {date.toString().slice(0, 15)}</h2>
    </header>
  );
};

export default Header;
