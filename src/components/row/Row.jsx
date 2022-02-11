import React from "react";
import "./Row.css";

export const Row = ({ className, children, style }) => {
  const defaultClass = `row ${className}`;

  return (
    <div className={defaultClass} style={style}>
      {children}
    </div>
  );
};
