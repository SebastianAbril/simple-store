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
  text = "Default Text",
  description = "Default descriptiuon",
}) => {
  const imageButtonCard = Column({
    className: "imageButtonCard",
    style,
    children: [
      Label({ text }),
      Label({ text: description }),
      Button({ text: "Button", type: buttonType, icon: buttonIcon }),
    ],
  });

  return imageButtonCard;
};
