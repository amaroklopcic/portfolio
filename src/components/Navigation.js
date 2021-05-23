import React from "react";

const navigationStyle = {
  display: "flex",
  justifyContent: "flex-end",
  alignContent: "center",
  position: "sticky",
  top: "0",
  height: "4rem",
  backgroundColor: "black",
};
const navItemStyle = {
  cursor: "pointer",
  margin: "auto 2rem",
  padding: "0",
  fontSize: "1rem",
  textTransform: "uppercase",
  letterSpacing: "2.5px",
  color: "white",
};

function Navigation() {
  return (
    <div className="page-section" style={navigationStyle}>
      <span style={navItemStyle}>
        <a href="#about">About</a>
      </span>
      <span style={navItemStyle}>
        <a href="#previous-works">Previous Work</a>
      </span>
      <span style={navItemStyle}>
        <a href="#contact">Contact</a>
      </span>
    </div>
  );
}

export default Navigation;
