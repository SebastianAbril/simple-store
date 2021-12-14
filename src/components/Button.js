/*props = {
    lineStyle: fill o outline
    Size: big or small
    Text: normal or arrow
    Shape: rectangular or circular
}
*/

export const Button = (props) => {
    const button = document.createElement('button');

if(props.lineStyle === 'fill' && props.size === 'small' && props.text == 'normal'){
    button.classList.add('fill-button-small-normal');
    console.log("Esta funcionando");
} else if(props.lineStyle === 'fill' && props.size === 'big' && props.text == 'normal') {
    button.classList.add('fill-button-big-normal');
}

    return button;
   
};