/*props = {
    type: fill o outline
    size: large or small
    text: texto del button
    shape: rectangular or circular
}
*/

export const Button = (props) => {
    const button = document.createElement('button');
    button.textContent = props.text;

    button.classList.add('button');

    if (props.type == 'fill') {
        button.classList.add('button-fill');
    } else {
        button.classList.add('button-outline');
    }

    if (props.size == 'large') {
        button.classList.add('button-large');
    }

    if (props.shape == 'circular') {
        button.classList.add('button-circular');
    } 

    return button;
};