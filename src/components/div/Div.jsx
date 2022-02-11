import React from "react";

export const Div = ({ className, children }) => {
  const defaultClass = `${className}`;
  return <div className={defaultClass}>{children}</div>;
};
