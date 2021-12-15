import { Input } from "../components/Input.js";
import { Card } from "../components/Card.js";
import { Icon} from "../components/icon.js";

export const ComponentScreen = () => {
    const screen = document.createElement('div');

    const inputFull = Input({lineStyle: 'full', placeholder: 'sebas'});
    const inputEmpty = Input({lineStyle: 'empty', placeholder: 'juanda'});

    const icon = Icon({name: "fa-car"});

    const card = Card({
        children: [inputFull, inputEmpty, icon]
    });

    screen.append(card);

    return screen;
};