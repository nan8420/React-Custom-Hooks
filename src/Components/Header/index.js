import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // CSS 파일을 불러옴

const Header = ({ isMain }) => {
  return (
    // plese make header bar witdh design
    <div
      style={{
        display: "flex",
      }}
    >
      <h1 className="header">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/Main">
          Main
        </Link>
      </h1>

      <h1 className="header">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/UseInputPage"
        >
          UseInputPage
        </Link>
      </h1>
      <h1 className="header">Header1</h1>
      <h1 className="header">Header1</h1>
      <h1 className="header">Header1</h1>
    </div>
  );
};

export default Header;
