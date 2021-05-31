import React from "react";

const occupationStyle = {
  fontSize: "1.5rem",
  color: "white",
  fontWeight: "500",
  lineHeight: "1.5",
  lineSpacing: "3.5px",
  opacity: "0.6",
  margin: "0",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
};

export default function Occupation(props) {
  return <h2 style={occupationStyle}>{props.children}</h2>;
}
