import React from "react";

const nameStyle = {
  fontSize: "3rem",
  fontWeight: "300",
  lineHeight: "1.2",
  marginTop: "0",
  marginBottom: "0.5rem",
  margin: "0",
  color: "white",
  textTransform: "uppercase",
  letterSpacing: "5.5px",
};

export default function Name(props) {
  return <h1 style={nameStyle}>{props.children}</h1>;
}
