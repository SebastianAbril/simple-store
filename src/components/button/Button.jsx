import React from "react";
import "./Button.css";

export const Button = ({
  text,
  type = "fill",
  size = "normal",
  shape = "rectangular",
}) => {
  const defaultClass = `button ${type} ${size} ${shape}`;
  return <button className={defaultClass}> {text} </button>;
};
