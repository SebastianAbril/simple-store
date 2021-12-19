 /*
 props = {
     style: {
         width: 100px,
         background: red
     }
 }
 */

export const ImageButtonCard = (props) => {
    const imageButtonCard = document.createElement('div');

    imageButtonCard.classList.add('imageButtonCard');
    imageButtonCard.style.backgroundImage= 'url(../icons/Block.svg)'

    Object.keys(props.style).forEach((atttributeName) => {
        imageButtonCard.style[atttributeName] = props.style[atttributeName];
    });

    return imageButtonCard;
};

