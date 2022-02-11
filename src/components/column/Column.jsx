import React from "react";
import "./Column.css";

export const Column = ({ className, children, style = {} }) => {
  const defaultClass = `column ${className}`;
  return (
    <div className={defaultClass} style={style}>
      {children}
    </div>
  );
};
