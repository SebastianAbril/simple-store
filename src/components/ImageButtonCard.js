import { Column } from "./Column.js";
import { Label } from "./Label.js";
import { Button } from "./button/Button";

/*
 props = {
     style: {
         width: 100px,
         background: red
     },
     buttonType: string

     button: HTMLLEMNT
 }
 */

export const ImageButtonCard = ({
  style = {},
  buttonType = "fill",
  buttonIcon = "arrow-right",
}) => {
  const imageButtonCard = Column({
    className: "imageButtonCard",
    style,
    children: [
      Label({ text: "Title" }),
      Label({ text: "Description" }),
      Button({ text: "Button", type: buttonType, icon: buttonIcon }),
    ],
  });

  imageButtonCard.style.backgroundImage = "url(../icons/Block.svg)";

  return imageButtonCard;
};
