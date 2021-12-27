import { Column } from './Column.js';
import { Div } from './Div.js';
import {Label} from './Label.js';


export const ImageInfoCard = () => {

    const divImage = Div();
    divImage.classList.add('divImage');
    divImage.style.backgroundImage = 'url(../icons/BlockImage.svg)';

    const divInfo = Div();
    divInfo.classList.add('divInfo');
    const price = Label({ text: 'Price'});
    const priceValue = Label({ text: '$$$$$$'});

    divInfo.append(price);
    divInfo.append(priceValue);
    
    const imageInfoCard = Column({
        className: 'imageInfoCard',
        children: [
            divImage,
            Label({text: 'Name'}),
            divInfo
        ]

    })
    return imageInfoCard;

    
}