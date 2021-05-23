import React from "react";

const previousWorkStyle = {
  textAlign: "center",
  backgroundColor: "black",
};
const contentStyle = {
  marginTop: "50vh",
  color: "white",
};

function PreviousWorkSection() {
  return (
    <div id="previous-works" className="page-section" style={previousWorkStyle}>
      <div style={contentStyle}>
        <span>Previous Works Page</span>
      </div>
    </div>
  );
}

export default PreviousWorkSection;
