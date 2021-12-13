import { Input } from "../components/Input.js";
import { Card } from "../components/Card.js";

export const ComponentScreen = () => {
    const screen = document.createElement('div');

    const inputFull = Input({lineStyle: 'full', placeholder: 'sebas'});
    const inputEmpty = Input({lineStyle: 'empty', placeholder: 'juanda'});

    const card = Card({
        children: [inputFull, inputEmpty]
    });

    screen.append(card);

    return screen;
};