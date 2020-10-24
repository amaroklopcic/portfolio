import React from "react";

const aboutStyle = {
  textAlign: "center",
  backgroundColor: "white",
};
const contentStyle = {
  marginTop: "50vh",
};

function AboutSection() {
  return (
    <div id="about" className="page-section" style={aboutStyle}>
      <div style={contentStyle}>
        <span>About Page</span>
      </div>
    </div>
  );
}

export default AboutSection;
