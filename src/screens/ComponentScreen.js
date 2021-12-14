import { Input } from "../components/Input.js";
import { Card } from "../components/Card.js";
import { Button} from "../components/Button.js"

export const ComponentScreen = () => {
    const screen = document.createElement('div');

    const inputFull = Input({lineStyle: 'full', placeholder: 'sebas'});
    const inputEmpty = Input({lineStyle: 'empty', placeholder: 'juanda'});

    const buttonFill = Button({lineStyle: 'fill', size: 'small', text: 'normal'});

    const card = Card({
        children: [inputFull, inputEmpty, buttonFill]
    });

    screen.append(card);

    

    return screen;
};