import React from "react";

const wrapperStyle = {
  width: "500px",
  // overflowX: "hidden",
  margin: "2rem",
  marginTop: "0",
  borderBottom: "1px solid purple",
};
const titleStyle = {
  fontWeight: "500",
  lineHeight: "1.5",
  lineSpacing: "3.5px",
};
const descriptionStyle = {};
const displayStyle = {};
const techUsedStyle = {
  margin: "1rem",
};

function Title(props) {
  return <h2 style={titleStyle}>{props.children}</h2>;
}

function Description(props) {
  return <p style={descriptionStyle}>{props.children}</p>;
}

function Display(props) {
  return (
    <div style={displayStyle}>
      <img src={props.src} alt={props.alt} width="100%" />
    </div>
  );
}

function TechUsed(props) {
  return (
    <div style={techUsedStyle}>
      {(props.tech || []).map((tech, index) => {
        return (
          <span key={index} style={{ marginRight: "1rem" }}>
            {tech}
          </span>
        );
      })}
    </div>
  );
}

// wrapper component that will hold Title, Description, Display, TechUsed components
function Wrapper(props) {
  return <div style={wrapperStyle}>{props.children}</div>;
}

export default {
  Wrapper: Wrapper,
  Title: Title,
  Description: Description,
  Display: Display,
  TechUsed: TechUsed,
};
