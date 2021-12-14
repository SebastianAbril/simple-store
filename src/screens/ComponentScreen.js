import { Input } from "../components/Input.js";
import { Card } from "../components/Card.js";
import { Button} from "../components/Button.js"

export const ComponentScreen = () => {
    const screen = document.createElement('div');

    const inputFull = Input({lineStyle: 'full', placeholder: 'sebas'});
    const inputEmpty = Input({lineStyle: 'empty', placeholder: 'juanda'});


    const inputCard = Card({
        children: [inputFull, inputEmpty]
    });
    screen.append(inputCard);

    const buttonFillSmallNormal = Button({type: 'fill', size: 'small', text: 'Login'});
    const buttonFillBigNormal = Button({type: 'fill', size: 'large', text: 'Exit'})
    
    const buttonCard = Card({
        children: [buttonFillSmallNormal, buttonFillBigNormal]
    });

    screen.append(buttonCard);

    

    return screen;
};