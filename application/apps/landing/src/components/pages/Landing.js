import React from "react";

import Name from "../Name";
import Occupation from "../Occupation";

const landingStyle = {
  backgroundColor: "black",
  height: "calc(100vh - 4rem)",
};
const contentStyle = {
  margin: "auto auto",
  marginTop: "calc(45vh - 4rem)",
  textAlign: "center",
};

function LandingSection() {
  return (
    <div className="page-section" style={landingStyle}>
      <div style={contentStyle}>
        <Name>Amar Oklopcic</Name>
        <Occupation>Full Stack Engineer based in Chicago, IL</Occupation>
      </div>
    </div>
  );
}

export default LandingSection;
