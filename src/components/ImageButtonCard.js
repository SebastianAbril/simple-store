import { Column } from "./Column.js";
import { Row } from "./Row.js";
import { Label } from "./Label.js";
import { Button } from "./Button.js";
/*
 props = {
     style: {
         width: 100px,
         background: red
     }
 }
 */


export const ImageButtonCard = ({ style = {}}) => {
    const imageButtonCard = Column({
        className: 'imageButtonCard',
        style,
        children: [
            Label({ text: 'Title'}),
            Label({ text: 'Description'}),
            Button({ text: 'Button'}),
        ]
    });

    imageButtonCard.style.backgroundImage= 'url(../icons/Block.svg)'

    return imageButtonCard;
};
