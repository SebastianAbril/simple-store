import { Input } from "../components/Input.js";
import { Card } from "../components/Card.js";
import { Button} from "../components/Button.js"
import { Icon} from "../components/Icon.js";
import { Header } from "../components/Header.js"; 
import { Section } from "../components/Section.js";

export const ComponentScreen = () => {
    const screen = document.createElement('div');
    
    const header = Header();
    screen.append(header);

    const inputFull = Input({lineStyle: 'full', placeholder: 'sebas'});
    const inputEmpty = Input({lineStyle: 'empty', placeholder: 'juanda'});

    const icon = Icon({name: "fa-car"});

    const inputCard = Card({
        children: [inputFull, inputEmpty, icon]
    });
    screen.append(inputCard);

    const section = Section();
    screen.append(section)
    const buttonFillSmallNormal = Button({type: 'fill', size: 'normal', text: 'Login'});
    const buttonOutlineBigNormal = Button({type: 'outline', size: 'large', text: 'Exit'});
    const button3= Button({type: 'link', size: 'normal',text: 'Sebas', icon: 'arrow-right'});
    const button4= Button({type: 'link', size: 'normal',text: 'Sebas', icon: 'arrow-left'});
    const button5 = Button({type: 'outline', size: 'normal',text: 'Sebas', icon: 'arrow-right' });
    const button6 = Button({type: 'fill', size: 'large',text: 'Sebas', icon: 'arrow-right'});
    const button7 = Button({type: 'fill', size: 'small', icon: 'cart' });
    const button8 = Button({type: 'outline', size: 'small', icon: 'cart', shape: 'circular'});
    
    const buttonCard = Card({
        children: [buttonFillSmallNormal, buttonOutlineBigNormal, button3, button4, button5, button6, button7, button8]
    });

    screen.append(buttonCard);

    


   
    return screen;
};