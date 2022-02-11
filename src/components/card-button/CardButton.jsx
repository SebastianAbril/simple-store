import React from "react";
import { Label } from "../label/Label";
import { Button } from "../button/Button";
import "./CardButton.css";

export const CardButton = ({
  title,
  description,
  text,
  backgroundImage,
  className = "",
}) => {
  return (
    <div
      className={"CardButton " + className}
      style={{ backgroundImage: backgroundImage }}
    >
      <Label text={title} />
      <Label text={description} />
      <Button text={text} />
    </div>
  );
};
